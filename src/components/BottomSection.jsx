import style from "./Bottom.module.css";

const BottomSection = () => {
  return (
    <section className={style.bottomSection}>
      <div className={style.bottomCard}>
        <div className={style.cardCircleLg}></div>
        <div className={style.cardCircleMd}></div>

        <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className={style.cardContent}>
          <h3 className={style.cardHeading}>
            Learn how to start a business the
            <span className="text-[#3B82F6]"> right way.</span>
          </h3>
          <p className="mt-[22px] text-base font-normal text-[#94A3B8]">
            Many desktop publishing packages and web page editors now use lorem
            as their default model{" "}
          </p>
        </div>

        <button className="flex mt-4 py-[7px] px-[12px] rounded-3xl text-white bg-[#3B82F6] z-[25]">
            Subscribe - Free 
            <span className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="#fff">
                <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
            </span>
        </button>
        </div>
      
      </div>
    </section>
  );
};

export default BottomSection;
