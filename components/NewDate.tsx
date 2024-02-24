"use client";

import { addDay } from "@/lib/actions/user.action";
import React, { useState } from "react";

const NewDate = () => {
  const { date, setDate } = useState() as any;

  function formatDate(dateString: string) {
    // Create a new Date object using the provided date string
    let date = new Date(dateString);

    // Extract year, month, and day from the Date object
    let year = date.getUTCFullYear();
    let month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed, so add 1
    let day = date.getUTCDate().toString().padStart(2, "0");

    // Return the formatted date as 'YYYY-MM-DD'
    return `${year}-${month}-${day}`;
  }

  const handleNewDate = async (e: any) => {
    e.preventDefault();
    console.log(e.target.date.valueAsDate);
    const valueAsDate = e.target.date.valueAsDate;

    const date = formatDate(valueAsDate);

    console.log(date);

    const added = await addDay(date);
  };
  return (
    <form className="flex gap-4 justify-center" onSubmit={handleNewDate}>
      <input className="px-3 rounded-2xl" type="date" name="date" id="date" />
      <button className="btn btn-primary" type="submit">Add new date</button>
    </form>
  );
};

export default NewDate;
