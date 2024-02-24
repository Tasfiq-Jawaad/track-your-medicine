import Accordion from "@/components/Accordion";
import NewDate from "@/components/NewDate";
import { getAllDetails, markComplete } from "@/lib/actions/user.action";
import Image from "next/image";

export default async function Home() {
  const details = (await getAllDetails()) as any[];
  // const marked = await markComplete();
  console.log(details);
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
