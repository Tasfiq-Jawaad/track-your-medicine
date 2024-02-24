import Accordion from "@/components/Accordion";
import NewDate from "@/components/NewDate";
import { getAllDetails, markComplete } from "@/lib/actions/user.action";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const details = (await getAllDetails()) as any[];

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const userSession = await supabase.auth.getUser();
  console.log(userSession)
  if(!userSession?.data?.user)
    redirect("/signin");
  return (
    <main className="">
      <div className="flex flex-col gap-4 px-5 mt-5">
        {details?.map((row: any) => {
          return <Accordion row={row} />;
        })}
      </div>
      <div className="px-5 mt-5 mx-auto">
        <NewDate />
      </div>
    </main>
  );
}
