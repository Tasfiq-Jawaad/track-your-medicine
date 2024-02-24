"use client";

import { useFormStatus } from "react-dom";

const Btn = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={"w-full mt-3 btn btn-primary text-white py-2 px-4 rounded-md focus:outline-none"}
      disabled={pending}
      aria-disabled={pending}
    >
      {title}
    </button>
  );
};

export default Btn;
