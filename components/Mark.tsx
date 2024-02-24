"use client";

import { markComplete, unMarkComplete } from "@/lib/actions/user.action";

const Mark = ({check, id, col}: {check: boolean, id:number, col: string}) => {
  const handleChange = async (e: any) => {
    if(e.target.checked){
        const mark = await markComplete(id, col);
    }
    else 
      await unMarkComplete(id, col)
  };
  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer gap-2 justify-normal">
          <span className="label-text">Medicine taken?</span>
          <input
            type="checkbox"
            defaultChecked={check}
            className="checkbox checkbox-primary"
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
};

export default Mark;
