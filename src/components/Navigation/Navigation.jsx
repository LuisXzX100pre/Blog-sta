// import React from "react";

// import NavigationDesktop from "./NavigationDesktop";
import HeaderBlue from "./HeaderBlue";
import NavigationDesktop from "./NavigationDesktop";

export default function Navigation({ hotelDetails = false }) {
  return (
    <div
      className={`${
        hotelDetails ? "static" : "static"
      } flex flex-col top-0 z-[9]`}
    >
      <img
        src={`https://photos.staywuw.com/assets/img/home/line-navigation.jpg`}
        alt={`line orange`}
        height={5}
        className="h-[5px] w-full aspect-[174/1]"
      />
      <div className="md:h-[130px] md:pb-2 bg-white border-b border-gry-70">
        <HeaderBlue />

        <NavigationDesktop />
      </div>
    </div>
  );
}
