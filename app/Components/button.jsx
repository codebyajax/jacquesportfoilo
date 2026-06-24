import Link from "next/link";

const Button = ({ Text }) => {
  return (
    <Link
      href="/#">
      <div type="submit"
        className="h-13 shrink-0 border cursor-pointer rounded-[16px]  border-border p-px group  disabled:opacity-50 disabled:cursor-not-allowed  bg-white select-none min-w-0 w-fit ">
        <div className=" flex size-full gap-1 items-center justify-center rounded-[14px]   w-full h-full  bg-[#5c5c5c] text-white  text-[14.5px] group-hover:bg-[#4a4a4a]  px-10 transition duration-300 ">
          <span className="font-medium!">
           {Text}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Button;
