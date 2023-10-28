import { PiStarThin } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { BiCalendar } from "react-icons/bi";
export const Navbar = () => {
  return (
    <nav className="h-16 bg-secondary flex justify-between items-center text-primary px-16">
      <section className=" text-xl flex items-center gap-5 cursor-pointer">
        <text>Project Management</text>
        <text>
          <PiStarThin />
        </text>
        <text>
          <SlPeople />
        </text>
      </section>
      <section className="flex items-center gap-5 cursor-pointer">
        <text>
          <BiCalendar />
        </text>
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
            <span>MX</span>
          </div>
        </div>
      </section>
    </nav>
  );
};
