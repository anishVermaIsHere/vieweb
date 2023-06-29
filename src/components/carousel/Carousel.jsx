"use client";
import { useState, useId, useRef, useEffect } from "react";
import style from "./Carousel.module.css";
import { slides as slideData } from "@/mockdata";
import Shape from "../widgets/Shape";

const Carousel = () => {
  const [slides, setSlides] = useState(slideData);
  const key = useId();
  const sliderRef=useRef(null);

  const moveLeft=()=>{
    let width=sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft=sliderRef.current.scrollLeft-width;
    console.log( sliderRef.current.scrollLeft);
  }

  const moveRight=()=>{
    let width=sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft=sliderRef.current.scrollLeft+width;
    console.log( sliderRef.current.scrollLeft);
  }

  return (
    <section className={style.carouselSection}>
        <span className="absolute top-[-35px] left-[60px]">
         <Shape />
        </span>
      <div className={style.carouselSlider} ref={sliderRef}>
      {slides.map((slide) => (
          <div className={style.slide} key={key} style={{backgroundImage:slide.color}}>
            <div className={style.slideContent}>
              <h4 className="text-white text-xl font-bold">{slide.title}</h4>
              <p className="text-white text-sm font-medium mt-1">
                {slide.description}
              </p>

              <button className="play-button mt-[11px]">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Play - CTA">
                    <circle
                      id="Oval"
                      cx="24.748"
                      cy="24.8736"
                      r="24"
                      transform="rotate(1 24.748 24.8736)"
                      fill="url(#paint0_linear_0_197)"
                    />
                    <path
                      id="Path"
                      d="M22.6345 18.9236C22.4834 18.8159 22.285 18.8008 22.1193 18.8843C21.9536 18.9679 21.8478 19.1363 21.8445 19.3219L21.6525 30.3202C21.6496 30.5059 21.7498 30.6778 21.9127 30.7668C21.9834 30.8063 22.0628 30.8276 22.1437 30.8289C22.2447 30.8306 22.3439 30.8016 22.4282 30.7458L30.5229 25.3863C30.6602 25.2954 30.7439 25.1427 30.7468 24.9781C30.7497 24.8135 30.6713 24.658 30.5373 24.5624L22.6345 18.9236Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_197"
                      x1="29.5209"
                      y1="-7.34458"
                      x2="-6.73691"
                      y2="19.4646"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.64" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        ))}        
      </div>
      <div className="flex justify-end pb-[80px] mr-[82px]">
      <div className="flex justify-center items-start gap-2">
            <button className="grid place-items-center h-[50px] w-[50px] bg-white rounded-full" onClick={moveLeft}>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#3B82F6" fill="#3B82F6"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
                </span>
            </button>
            <button className="grid place-items-center h-[50px] w-[50px] bg-white rounded-full" onClick={moveRight}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#3B82F6" fill="#3B82F6">
                    <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                </span>
            </button>
        </div>
        </div>
    </section>
  );
};

export default Carousel;
