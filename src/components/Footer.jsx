import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[67px]">
      <div className="flex flex-col items-center justify-between mx-12 py-4 lg:flex-row lg:mx-[83px]">
        <div className="flex order-2 lg:order-1">
        <Link href="/">
          <span>
            <svg
              width="36"
              height="28"
              viewBox="0 0 36 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 28C13.95 28 18 23.275 18 17.5V10.5C18 4.725 13.95 0 9 0C4.05 0 0 4.725 0 10.5V17.5C0 23.275 4.05 28 9 28Z"
                fill="url(#paint0_linear_0_104)"
              />
              <path
                d="M27 28C31.95 28 36 23.275 36 17.5V10.5C36 4.725 31.95 0 27 0C22.05 0 18 4.725 18 10.5V17.5C18 23.275 22.05 28 27 28Z"
                fill="url(#paint1_linear_0_104)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_104"
                  x1="18"
                  y1="28"
                  x2="18"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BFDBFE" stop-opacity="0.01" />
                  <stop offset="1" stop-color="#3B82F6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_104"
                  x1="18"
                  y1="0"
                  x2="18"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BFDBFE" stop-opacity="0.01" />
                  <stop offset="1" stop-color="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </Link>
        <p className="ml-4 text-[#64748B] text-base font-normal">
          Copyright © vieweb.co.in All rights reserved.
        </p>

        </div>
      
        <ul className="mb-4 lg:mb-0 order-1 lg:order-2">
          <li>
            <span>
              <svg
                width="100"
                height="20"
                viewBox="0 0 100 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Social Icons">
                  <g id="1">
                    <rect
                      id="Rectangle"
                      width="20"
                      height="20"
                      rx="10"
                      fill="white"
                    />
                    <path
                      id="Path"
                      d="M18 5.5C17.4 5.8 16.8 5.9 16.1 6C16.8 5.6 17.3 5 17.5 4.2C16.9 4.6 16.2 4.8 15.4 5C14.8 4.4 13.9 4 13 4C11.3 4 9.8 5.5 9.8 7.3C9.8 7.6 9.8 7.8 9.9 8C7.2 7.9 4.7 6.6 3.1 4.6C2.8 5.1 2.7 5.6 2.7 6.3C2.7 7.4 3.3 8.4 4.2 9C3.7 9 3.2 8.8 2.7 8.6C2.7 10.2 3.8 11.5 5.3 11.8C5 11.9 4.7 11.9 4.4 11.9C4.2 11.9 4 11.9 3.8 11.8C4.2 13.1 5.4 14.1 6.9 14.1C5.8 15 4.4 15.5 2.8 15.5C2.5 15.5 2.3 15.5 2 15.5C3.5 16.4 5.2 17 7 17C13 17 16.3 12 16.3 7.7C16.3 7.6 16.3 7.4 16.3 7.3C17 6.8 17.6 6.2 18 5.5Z"
                      fill="#3B82F6"
                    />
                  </g>
                  <g id="2">
                    <rect
                      id="Rectangle_2"
                      x="40"
                      width="20"
                      height="20"
                      rx="10"
                      fill="white"
                    />
                    <g id="logo-youtube">
                      <path
                        id="Shape"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M55.6 4.4C57 4.6 57.6 5.5 57.8 6.8C58 8.1 58 10 58 10C58 10 58 11.9 57.8 13.2C57.6 14.5 57 15.3 55.6 15.6C53.4 16 50 16 50 16C50 16 46.6 16 44.4 15.6C43 15.4 42.4 14.5 42.2 13.2C42 11.9 42 10 42 10C42 10 42 8.1 42.2 6.8C42.3 5.5 43 4.6 44.4 4.4C46.6 4 50 4 50 4C50 4 53.4 4 55.6 4.4ZM53 10L48 7V13L53 10Z"
                        fill="#3B82F6"
                      />
                    </g>
                  </g>
                  <g id="3">
                    <rect
                      id="Rectangle_3"
                      x="80"
                      width="20"
                      height="20"
                      rx="10"
                      fill="white"
                    />
                    <g id="telegram">
                      <path
                        id="Path_2"
                        d="M96.9683 4.27602C96.9427 4.15577 96.8538 4.05888 96.7363 4.02302C96.526 3.98109 96.3084 3.99664 96.1063 4.06802C96.1063 4.06802 82.0873 9.10602 81.2863 9.66402C81.1143 9.78502 81.0563 9.85402 81.0273 9.93602C80.8893 10.336 81.3203 10.509 81.3203 10.509L84.9333 11.686C84.9943 11.697 85.057 11.6932 85.1163 11.675C85.9383 11.156 93.3863 6.45302 93.8163 6.29502C93.8843 6.27502 93.9343 6.29502 93.9163 6.34402C93.7443 6.94402 87.3103 12.663 87.2753 12.698C87.2406 12.727 87.2223 12.771 87.2263 12.816L86.8893 16.344C86.8893 16.344 86.7473 17.444 87.8453 16.344C88.6243 15.565 89.3723 14.919 89.7453 14.606C90.9873 15.464 92.3243 16.412 92.9013 16.906C93.0965 17.0962 93.3609 17.1984 93.6333 17.189C93.973 17.147 94.2516 16.8995 94.3333 16.567C94.3333 16.567 96.8943 6.29202 96.9793 4.90902C96.9873 4.77402 97.0003 4.69202 97.0003 4.59202C97.0039 4.48572 96.9931 4.37942 96.9683 4.27602Z"
                        fill="#3B82F6"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
