import React, { useState } from "react";
import avatar from "../assets/images/my-avatar.png";
import drawer from "../assets/svg/7266613_arrow_down_icon.svg";
import { ProfileData } from "../assets/CommonData";

const Profile = () => {
  const [isOpend, setIsOpend] = useState(false);
  return (
    <div>
      <div className="w-full ">
        <div className="photo flex md:flex-col gap-5 items-center mb-5 ">
          <img
            src={avatar}
            className=" rounded-md w-18 md:w-32 md:h-32 h-16 bg-[#2b2b2c] "
          />
          <div className="md:flex flex-col items-center">
            <h1 className="text-2xl">Sadhasivam</h1>
            <p>
              {" "}
              <span className="bg-[#2b2b2c] text-xs text-center rounded-md px-2">
                Web developer
              </span>
            </p>
          </div>
          <div
            className="md:hidden text-2xl absolute right-0 -top-2 hover:cursor-pointer bg-black rounded-full hover:shadow hover:shadow-[#60f05e] transition-all"
            onClick={() => setIsOpend(!isOpend)}
          >
            <img src={drawer} className="w-7" />
          </div>
        </div>
        <hr />
        <div className="">
          <div className="md:block hidden ">
            <div className="flex gap-5 flex-col mt-5">
              {ProfileData.map((itm) => (
                <div className="flex items-center gap-5" key={itm.id}>
                  <img className="w-7" src={itm.img}></img>
                  <div className="">
                    <p className="text-xs">{itm.name}</p>
                    <p className="text-xs text-gray-400">{itm.mail ? (<a href={`mailto:${itm.mail}`} >{itm.mail}</a>) : itm.subname}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md-hidden">
            {isOpend && (
              <>
                <div className="flex gap-5 flex-col mt-5 md:hidden">
                  {ProfileData.map((itm) => (
                    <div className="flex items-center gap-5" key={itm.id}>
                      <img className=" w-6" src={itm.img}></img>
                      <div className="">
                        <p className="text-xs">{itm.name}</p>
                        <p className="text-xs text-gray-400">{itm.mail ? (<a href={`mailto:${itm.mail}`} >{itm.mail}</a>) : itm.subname}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
