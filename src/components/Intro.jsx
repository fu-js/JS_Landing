import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { evenBoxVariant } from "../utils/variantAnimation";

function Intro() {
  const [ref, inView] = useInView({
    threshold: 0.1,
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
      className="space-y-4"
      ref={ref}
      variants={evenBoxVariant}
      initial="hidden"
      animate={control}
    >
      <h2
        className="mb-6 mt-20 text-3xl text-center font-semibold uppercase text-red-600"
        id="timeline"
      >
        Giới thiệU
      </h2>

      <div className="text-slate-500 mt-20 text-base lg:text-lg space-y-4 max-w-3xl mx-auto">
        <p>
          JS Club là tên viết tắt của{" "}
          <span className="text-red-600 font-semibold">
            Japanese Software Engineers Club – Câu lạc bộ Kỹ sư phần mềm Nhật
            Bản.
          </span>{" "}
          Được thành lập vào tháng 2/2014, cái tên JS được đặt theo một chuyên
          ngành hẹp của ngành Kỹ thuật phần mềm tại Đại học FPT. Từ những ngày đầu
          thành lập, JS mang sứ mệnh trở thành một cộng đồng kết nối các sinh
          viên theo chuyên ngành hẹp JS. Sau này, câu lạc bộ được mở rộng và trở
          thành nơi chia sẻ kiến thức cho các bạn sinh viên{" "}
          <span className="text-red-600 font-semibold">
            yêu thích tiếng Nhật và đam mê lập trình.
          </span>
        </p>

        <p>
          JS Club cũng là câu lạc bộ đầu tiên và duy nhất tại Đại
          học FPT Hà Nội có{" "}
          <span className="text-red-600 font-semibold">11 lần liên tiếp</span>{" "}
          được vinh danh tại Lễ tôn vinh với danh hiệu Câu lạc bộ xuất sắc trong học kỳ. Nổi
          tiếng với danh hiệu học thuật{" "}
          <span className="text-red-600 font-semibold">
            “CLB có nhiều cóc vàng nhất”
          </span>, nhưng JS Club không chỉ có mỗi học đâu nhé. Đây cũng là “nơi vui chơi có
          tổ chức” để thoả mãn nhu cầu “được chill” của các bạn trẻ đấy.
        </p>
      </div>
    </motion.section>
  );
}

export default Intro;
