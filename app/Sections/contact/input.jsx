import Button from "@/app/Components/button";

export default function input() {
  return (
      <div className="flex flex-col gap-4 p-6 bg-striped justify-center items-center padding md:h-18 h-fit">
        <form className="flex items-end max-sm:flex-col sm:items-center gap-3 w-full  mx-auto">
          <label htmlFor="emailLabel" className="sr-only">
            Email address
          </label>
          <div className="w-full border border-border h-13 rounded-2xl p-0.5 bg-white">
            <input type="email" placeholder="Enter your email" id="emailLabel" autoComplete="email" required={""} className="h-full px-4  placeholder:select-none rounded-[12px] w-full  border border-border bg-white text-foreground  focus:outline-none focus:ring-0 focus:border-ring  disabled:opacity-50 disabled:cursor-not-allowed  transition-all duration-300  placeholder:text-gray-500  placeholder:opacity-100" name="Cemail"/>
          </div>
          <Button Text={"Subscribe"} />
        </form>
      </div>
  )
}
