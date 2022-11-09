import { useEffect } from "react";
import Slider from "./Slider";
import Aos from "aos";
import what_1 from "../../assets/imgs/what_1.jpg";
import what_2 from "../../assets/imgs/what_2.jpg";
import what_3 from "../../assets/imgs/what_3.jpg";
import { NavLink } from "react-router-dom";

type dataType = {
  img: string;
  tagline: string;
};

// const data: Array<dataType> = [
//   { img: what_1, tagline: "Vehicle Acquisition" },
//   { img: what_2, tagline: "Driver Services" },
//   { img: what_3, tagline: "Vehicle Management" },
// ];

// const WhatCard = ({ img, tagline}: dataType) => {
//   return (
//     <NavLink to={"/about"}>
//       <button className="flex flex-col md:gap-4 gap-0 md:p-0 p-[2em]">
//         <div className="overflow-hidden rounded-tr-[6em] md:h-[18em] group">
//           <img className="group-hover:scale-125 transition" src={img} alt="" />
//         </div>
//         <div className="flex">
//           <span className="md:text-[20px] text-[16px] text-left text-blue-500">
//             {tagline}...
//           </span>
//         </div>
//       </button>
//     </NavLink>
//   );
// };

const What = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="lg:px-[4rem] md:p-[3rem] p-[1rem]">
      <div
        data-aos="fade-right"
        className="flex lg:flex-row flex-col items-center gap-5 text-blue-900"
      >
        <div>
          <p className="text-[19px] font-[800]">FLEET MANAGEMENT</p>

          <div className="bg-blue-900 px-6 py-[1.8em] text-blue-100 rounded-tr-[40px] rounded-bl-[40px]  rounded-br-[40px] shadow-md">
            <p className="text-[20px]">
              Fleet management can be challenging, but it doesn't have to be.
              With Square Acre's integrated approach to fleet management, your
              fleet is transformed from a necessary component of operations into
              one of your most valuable assets.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Slider />
        </div>
      </div>

      <div data-aos="fade-up" className="flex flex-col gap-[2em]">
        <div className="text-center">
          <p className="font-[700] lg:text-[3em] md:text-[2em] text-[1.6em]  w-full bg-yellow-500 rounded-full ">
            Our Fleet Management Services
          </p>
          <p className="md:text-[30px] text-[20px]">
            If your fleet is like most, you face a range of challenges, from
            staying on top of disruptive technologies, to making do with limited
            resources. Square Acre’s solution helps you ensure your fleet
            investment is working for you.
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-3 mg:grid-cols-2 grid-cols-1 gap-5">
          {data.map(item=>(
            <WhatCard img={item.img} tagline={item.tagline}/>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default What;
