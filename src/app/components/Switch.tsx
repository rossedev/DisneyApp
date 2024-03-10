import { ChangeEvent } from "react";

interface ISwitchProps {
  checked: boolean | undefined;
  onChange: (e: any) => void;
}
export const Switch = ({ checked, onChange }: ISwitchProps) => {
  return (
    <>
      <input
        type="checkbox"
        id="switch"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <label
        className="after:content-[' '] relative block h-6 w-10 cursor-pointer rounded-full bg-blue-900 shadow-2xl after:absolute after:left-[3px] after:top-[3px] after:h-[18px] after:w-[18px] after:rounded-[90px] after:bg-white after:duration-[300ms] active:after:w-[17px] peer-checked:bg-amber-300 peer-checked:after:left-[calc(100%-5px)] peer-checked:after:-translate-x-full"
        htmlFor="switch"
      ></label>
    </>
  );
};
