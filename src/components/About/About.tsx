import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import invest from "../../assets/imgs/Investment.svg";
import management from "../../assets/imgs/management.svg";
import management_2 from "../../assets/imgs/management_2.svg";
import Header from "../Header/Header";

type card = {
  tagline: string;
  img: string;
  tag_text: string;
  extra_tag_text: string;
  img_left: boolean;
};

const data: Array<card> = [
  {
    tagline: "Our Fleet Management Services",
    img: management,

    tag_text:
      "If your fleet is like most, you face a range of challenges, from staying on top of disruptive technologies, to making do with limited resources. Square Acre helps you ensure your fleet investment is working for you.",
    extra_tag_text: "",
    img_left: true,
  },
  {
    tagline: "Your fleet is an Investment",
    img: invest,

    tag_text:
      "Your fleet is more than just a set of transactional costs — it’s an investment. Not only does your vehicle operation play a critical role in serving your customers, but with an integrated strategy and bigpicture thinking, it can also drive growth and fuel success for your company.",
    extra_tag_text:
      "When managing your fleet is viewed as a series of costs to be maintained, it’s natural to focus on minimizing the amount of every transaction in the short-term. However, this approach often leads to hidden long-term costs and wasted time that, in the end, increases spend and decreases productivity for your company. At SquareAcre, we align your fleet with your organization’s KPIs by emphasing strategic planning throughout the entire vehicle lifecycle — buy, drive, service and sell. With the right mindset, each stage of the lifecycle offers an opportunity to create value and deliver returns to your bottom line. Our fleet management services can help you optimize your operation, reduce lifcost, and keep your business moving.",
    img_left: false,
  },
  {
    tagline: "Our Facilities Management Services",
    img: management_2,

    tag_text:
      "Our offerings are tailored to clients varying needs.Tell us the outcomes you desire and we will create the best solutions for you. As a business, we share best practice with our clients to deliver expert solutions, wherever you are.",
    extra_tag_text:
      "We can deliver a total solution - bespoke for you. We work with you to provide solutions that reflects your aspirations and protects your brand values .  Our bespoke bundle of services such as maintenance, car park management, cleaning and concierge services are delivered by one cohesive group with a single point of contact. And we have proven experience of mobilising services from multiple providers. When you work with us, you benefit from our joined-up approach to service delivery and management - which means a more efficient operation for you. Our technology enabled facilities management system provides you with a single view of all facilities and maintenance activities across your organisation/ properties.",
    img_left: true,
  },
];

const Card = ({ tagline, img, tag_text, extra_tag_text, img_left }: card) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      {img_left === false && (
        <div
          data-aos="fade-up"
          className="w-full lg:px-[4rem] md:py-[2rem]  md:px-[3rem] p-[1rem] flex md:flex-row flex-col gap-4 items-center"
        >
          <div className="md:w-[40%] w-full">
            <img src={img} alt="" />
          </div>
          <div className="flex-1">
            <p className="font-[900] md:text-[3em] text-[2em] text-blue-900">
              {tagline}
            </p>
            <p className="md:text-[1.5rem] ">{tag_text}</p>
          </div>
        </div>
      )}
      {img_left === true && (
        <div
          data-aos="fade-up"
          className="w-full lg:px-[4rem] md:py-[2rem]  md:px-[3rem] p-[1rem] flex md:flex-row flex-col gap-4 items-center"
        >
          <div className="flex-1">
            <p className="font-[900] md:text-[3em] text-[2em] text-blue-900">
              {tagline}
            </p>
            <p className="md:text-[1.5rem] ">{tag_text}</p>
          </div>
          <div className="md:w-[40%] w-full">
            <img src={img} alt="" />
          </div>
        </div>
      )}
      <div data-aos="fade-up">
        <p className="md:text-[1.5rem]">{extra_tag_text}</p>
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="lg:px-[4rem] md:p-[3rem] p-[1rem] ">
        <Header />
        <div className="md:py-[2rem] pt-[2rem] ">
          <p className="text-[2em] font-[900] text-blue-900">Our Solutions</p>
          <hr className="h-[3px]" />
          <div>
            <img src="" alt="" />
            Vehicle Acquisition & Leasing
          </div>
          <div>
            <img src="" alt="" />
            Driver Services
          </div>
          <div>
            <img src="" alt="" />
            Vehicle Management
          </div>
          <div>
            <img src="" alt="" />
            Asset disposal Technology
          </div>
          <div>
            <img src="" alt="" />
            Small Business Solutions
          </div>
        </div>
        {data.map((item) => (
          <Card
            tagline={item.tagline}
            img={item.img}
            tag_text={item.tag_text}
            extra_tag_text={item.extra_tag_text}
            img_left={item.img_left}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
