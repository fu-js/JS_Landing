import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { evenBoxVariant } from "../utils/variantAnimation";

function Timeline() {
  const [ref, inView] = useInView({
    threshold: 0.15,
  });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={evenBoxVariant}
      initial="hidden"
      animate={control}
    >
      <h2
        className="my-6 text-3xl font-semibold uppercase text-red-600 text-center"
        id="timeline"
      >
        Timeline
      </h2>
      <div className="relative container flex flex-col items-start px-6 pt- m6x-auto md:flex-row md:space-x-6">
        <div className="hidden md:block absolute top-40 left-12 w-10/12 h-1 bg-red-600"></div>
        <div className="absolute md:hidden w-1 left-1/2 h-4/5 -ml-1 bg-red-600"></div>

        <div className="relative flex flex-col p-6 space-y-4 bg-white rounded-lg md:w-1/3 text-center md:text-left">
          <h5 className=" text-xl font-medium capitalize text-red-600">
            Vòng mở đơn
          </h5>
          <small className="text-black font-semibold">
            26/12/2022 - 4/1/2023
          </small>
          <p className="text-slate-500">
            Mọi sinh viên FPT quan tâm đến JS Club sẽ điền đơn{" "}
            <a
              href="https://forms.gle/DSYf6KJC5sy5wd827"
              target="_blank"
              className="text-red-600 font-medium"
            >
              đăng ký
            </a>{" "}
            để gửi gắm nguyện vọng trở thành một phần của đại gia đình JS.
          </p>
        </div>

        <div className="relative flex flex-col mt-16 p-6 space-y-4 text-center md:text-left bg-white rounded-lg md:mt-8 md:w-1/3">
          <h5 className=" text-xl font-medium  capitalize text-red-600">
            Vòng phỏng vấn
          </h5>
          <small className="text-black font-semibold">
            6/1/2023 - 9/1/2023
          </small>
          <p className="text-slate-500">
            Các ứng viên đã qua vòng đơn sẽ được trải qua một buổi phỏng vấn để
            xem bản thân có phù hợp để tiếp tục đồng hành với JS không.
          </p>
        </div>

        <div className="relative flex flex-col mt-16 p-6 space-y-4  text-center md:text-left bg-white rounded-lg md:mt-24 md:w-1/3">
          <h5 className=" text-xl font-medium capitalize text-red-600">
            Vòng thử thách
          </h5>
          <small className="text-black font-semibold">
            11/1/2023 - 31/3/2023
          </small>
          <p className="text-slate-500">
            Là hành trình cuối cùng để các thí sinh chứng tỏ phẩm chất của mình
            trước khi chính thức trở thành JS-er
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Timeline;
