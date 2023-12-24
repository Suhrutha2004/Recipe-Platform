import React from "react";
import "./ui-style.css";

export const UILoader = () => {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-zinc-900">
      <div className="hourglass">
      <div className="hourglassBackground">
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div className="hourglassGlass"></div>
      </div>
    </div>
      </div>
    </div>
  );
};
