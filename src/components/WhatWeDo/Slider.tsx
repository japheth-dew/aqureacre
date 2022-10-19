import React, { useState } from "react";
import pic1 from "../../assets/imgs/bg_3.gif";
import pic2 from "../../assets/imgs/bg_2.jpg";
import pic3 from "../../assets/imgs/bg_4.gif";

const Slider = () => {
  const [count, setCount] = useState(1);
  const [image, setImage] = useState(pic1);

  setTimeout(() => {
    handleIncrease();
  }, 10000);

  const handleIncrease = () => {
    setCount(count + 1);
    console.log(count);

    if (count >= 3) {
      setImage(pic3);
      setCount(1);
    }
    if (count === 2) {
      setImage(pic2);
    }
    if (count === 1) {
      setImage(pic1);
    }
  };

  const handleDecrease = () => {
    setCount(count - 1);
    console.log(count);
    if (count <= 1) {
      setCount(3);
    }
    if (count === 3) {
      setImage(pic3);
    }
    if (count === 2) {
      setImage(pic2);
    }
    if (count === 1) {
      setImage(pic1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <div
   
      
        style={{
          background: `url(${image}) no-repeat  no-repeat center center/cover `,
        }}
        className="flex flex-col items-center justify-center lg:h-[40em] md:h-[30em] h-[20em] w-full "
      >
        <div className="flex w-full px-[2em] justify-between relative  ">
          <div
            onClick={handleDecrease}
            className="w-[2rem] backdrop-sepia h-[2rem] text-center rounded-full text-[20px] font-[900] hover:scale-125 cursor-pointer"
          >
            {" "}
            &lt;{" "}
          </div>
          <div
            onClick={handleIncrease}
            className="w-[2rem] backdrop-sepia h-[2rem] text-center rounded-full text-[20px] font-[900] hover:scale-125 cursor-pointer"
          >
            &gt;
          </div>
        </div>
      </div>
      {/* <div className="flex gap-4 -top-[2em] relative ">
        <div className="w-[1rem] h-[1rem] rounded-full border-[3px] border-red-500"></div>
        <div className="w-[1rem] h-[1rem] rounded-full border-[3px] border-red-500"></div>
        <div className="w-[1rem] h-[1rem] rounded-full border-[3px] border-red-500"></div>
      </div> */}
    </div>
  );
};

export default Slider;
