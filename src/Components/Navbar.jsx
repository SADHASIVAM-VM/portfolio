import React, { useState } from "react";
import { Link} from "react-router-dom";
import { NavBarData } from "../assets/CommonData";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <div className="fixed  w-full left-0 bottom-0 md:hidden z-10">
        <div className="bg-[#2b2b2c] text-[11px] ">
          <ul className="flex gap-4 p-5 justify-center ">
            {NavBarData.map((itm) => (
              <Link
                to={itm.link}
                className={` ${
                  itm.menu === active ? "active text-[#ffdb70]" : ""
                }hover:text-gray-500`}
                onClick={() => setActive(itm.menu)}
              >
                <li>{itm.menu}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden absolute top-0 right-0 md:inline-block ">
        <div className="bg-[#2b2b2c] roundRT border ">
          <ul className="flex gap-4 p-5 px-10">
            {NavBarData.map((itm) => (
              <Link
                to={itm.link}
                className={`${
                  itm.menu === active ? "active hover:text-[#ffdb70]" : ""
                }hover:text-gray-500   `}
                onClick={() => setActive(itm.menu)}
              >
                <li>{itm.menu}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
