"use client";
import Image from "next/image";
import React from "react";
import CustomeButton from "./CustomeButton";
import { checkout } from "../checkout";

const Hero = () => {
  const handelScroll = () => {
    checkout({
      lineItems: [
        {
          price: "price_1NKbvpIcCxw8JIJLe61EKA0K",
          quantity: 1,
        },
      ],
    });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,book,or rent a car -quickly and easily
        </h1>
        <p className="hero__subtitle">
          streamline tour car rental experience with our effortless booking
          process
        </p>
        <CustomeButton
          title="Buy"
          containerStyles="bg-primary-blue  text-white rounded-full mt-10"
          handelClick={handelScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
