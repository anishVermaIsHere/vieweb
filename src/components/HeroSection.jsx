import React from "react";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={style.mainSliderContainer}>
      <div className={style.mainSlide}>
        <div className={style.mainSlideContent}>
          <h3 className={style.mainSlideHeading}>
            Super Excited (aka The Saturday Edition)
          </h3>
          <p className="text-base text-white mt-[16px] mb-[32px]">
            Indie Stories · Jan 24 · Episode 234
          </p>

          <div className={style.mainSlidePlayer}>
            <button>
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Play - CTA">
                    <circle
                      id="Oval"
                      cx="20"
                      cy="20"
                      r="20"
                      fill="url(#paint0_linear_0_62)"
                    />
                    <path
                      id="Combined Shape"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8 14H17.2C17.68 14 18 14.3429 18 14.8571V25.1429C18 25.6571 17.68 26 17.2 26H14.8C14.32 26 14 25.6571 14 25.1429V14.8571C14 14.3429 14.32 14 14.8 14ZM22.8 14H25.2C25.68 14 26 14.3429 26 14.8571V25.1429C26 25.6571 25.68 26 25.2 26H22.8C22.32 26 22 25.6571 22 25.1429V14.8571C22 14.3429 22.32 14 22.8 14Z"
                      fill="#8B5CF6"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_62"
                      x1="23.9774"
                      y1="-6.84849"
                      x2="-6.23744"
                      y2="15.4925"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.64" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </button>
            <button>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="1">
                    <g id="Group">
                      <g id="invert-process">
                        <path
                          id="Path"
                          d="M2.78419 3.09723L2.25778 7.28324L6.36797 6.13799"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="square"
                        />
                        <path
                          id="Path_2"
                          d="M15.8643 15.4278C15.5608 15.8724 15.2129 16.2849 14.8259 16.659"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="square"
                        />
                        <path
                          id="Path_3"
                          d="M2.6347 6.63334C4.65306 3.50941 8.56882 2.20426 12.0578 3.49255C15.5468 4.78085 17.6747 8.3176 17.1785 12.0036"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="square"
                        />
                      </g>
                      <g id="10">
                        <path
                          id="Path_4"
                          d="M4.72938 11.9091H3.58841L2.3331 12.6896V13.7536L3.47158 13.0575H3.50141V17H4.72938V11.9091Z"
                          fill="white"
                        />
                        <path
                          id="Shape"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.0431 14.462C10.0407 16.1424 9.22285 17.1268 7.89048 17.1243C6.5581 17.1243 5.73532 16.1374 5.74029 14.462C5.74277 12.7891 6.5581 11.8395 7.89048 11.8395C9.22285 11.8395 10.0456 12.7916 10.0431 14.462ZM7.00554 14.462C7.00057 15.5856 7.36101 16.1175 7.89048 16.1175C8.42243 16.1175 8.78038 15.5856 8.77789 14.462C8.77541 13.3608 8.41994 12.8388 7.89048 12.8388C7.36349 12.8388 7.00803 13.3608 7.00554 14.462Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </button>

            <button>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="2">
                    <g id="Group">
                      <g id="invert-process">
                        <path
                          id="Path"
                          d="M16.7236 3.09723L17.25 7.28324L13.1398 6.13799"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="square"
                        />
                        <path
                          id="Path_2"
                          d="M3.64348 15.4278C3.94693 15.8724 4.29485 16.2849 4.68185 16.659"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="square"
                        />
                        <path
                          id="Path_3"
                          d="M16.873 6.63334C14.8547 3.50941 10.9389 2.20426 7.44995 3.49255C3.96098 4.78085 1.83307 8.3176 2.32926 12.0036"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="square"
                        />
                      </g>
                      <g id="10">
                        <path
                          id="Path_4"
                          d="M10.7294 11.9091H9.58841L8.3331 12.6896V13.7536L9.47158 13.0575H9.50141V17H10.7294V11.9091Z"
                          fill="white"
                        />
                        <path
                          id="Shape"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.0431 14.462C16.0407 16.1424 15.2228 17.1268 13.8905 17.1243C12.5581 17.1243 11.7353 16.1374 11.7403 14.462C11.7428 12.7891 12.5581 11.8395 13.8905 11.8395C15.2228 11.8395 16.0456 12.7916 16.0431 14.462ZM13.0055 14.462C13.0006 15.5856 13.361 16.1175 13.8905 16.1175C14.4224 16.1175 14.7804 15.5856 14.7779 14.462C14.7754 13.3608 14.4199 12.8388 13.8905 12.8388C13.3635 12.8388 13.008 13.3608 13.0055 14.462Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </button>

            <select className={style.speed}>
                <option>1x</option>
                <option>2x</option>
                <option>3x</option>
                <option>4x</option>
                <option>5x</option>
            </select>
            <div className={style.progressBar}>
                <div className={style.progress}></div>
            </div>
            <div className="player-time text-white text-xs">
                <span className="px-2 border-r-2 border-white">04:34</span>
                <span className="px-2">44:05</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
