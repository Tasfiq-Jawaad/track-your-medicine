"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export const getAllDetails = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const userSession = await supabase.auth.getUser();
  const userId = (userSession?.data?.user?.id as string) || null;

  // const cartName = `cart_${userId}`;

  const { data: details, error } = await supabase
    .from("medicine_details")
    .select("*")
    .order("created_at");

  return details ? details : [];
};

export const markComplete = async (id: number, col: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const userSession = await supabase.auth.getUser();
  const userId = (userSession?.data?.user?.id as string) || null;

  let currentDate = new Date();

  let time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();


  const medicine = col as string;
  const medicine_time = medicine + "_time";


  const { data: dataForExistingProduct, error: errorForExistingProduct } =
    await supabase
      .from("medicine_details")
      .update({ [medicine]: true, [medicine_time]: time })
      .eq("id", id);


  revalidatePath("/");
};

export const unMarkComplete = async (id: number, col: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const userSession = await supabase.auth.getUser();
  const userId = (userSession?.data?.user?.id as string) || null;

  const medicine = col as string;
  const medicine_time = medicine + "_time";


  const { data: dataForExistingProduct, error: errorForExistingProduct } =
    await supabase
      .from("medicine_details")
      .update({ [medicine]: false, [medicine_time]: null })
      .eq("id", id);
  revalidatePath("/");
};

export const addDay = async (date: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const userSession = await supabase.auth.getUser();

  const userId = (userSession?.data?.user?.id as string) || null;

  const { data, error } = await supabase
    .from("medicine_details")
    .insert([{ date: date }])
    .select();

  revalidatePath("/");
};
