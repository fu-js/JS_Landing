import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { evenBoxVariant } from "./variantAnimation";

function Intro() {
  const [ref, inView] = useInView();
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
        class="mb-6 mt-20 text-3xl text-center font-semibold uppercase text-red-600"
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
          ngành hẹp của ngành Kỹ thuật phần mềm tại ĐH FPT. Từ những ngày đầu
          thành lập, JS mang sứ mệnh trở thành một cộng đồng kết nối các sinh
          viên theo chuyên ngành hẹp JS. Sau này, câu lạc bộ được mở rộng, trở
          thành nơi chia sẻ kiến thức của các sinh viên{" "}
          <span className="text-red-600 font-semibold">
            yêu thích tiếng Nhật và đam mê lập trình.
          </span>
        </p>

        <p>
          Chúng mình rất tự hào về những giá trị chúng mình đem lại cho thành
          viên của mình. JS Club cũng là Câu lạc bộ đầu tiên và duy nhất tại Đại
          học FPT Hà Nội khi{" "}
          <span className="text-red-600 font-semibold">10 lần liên tiếp</span>{" "}
          được vinh danh tại Lễ tôn vinh với danh hiệu Câu lạc bộ xuất sắc. Nổi
          tiếng với danh hiệu{" "}
          <span className="text-red-600 font-semibold">
            “CLB có nhiều cóc vàng nhất”{" "}
          </span>{" "}
          , tuy nhiên không chỉ có mỗi học đâu nhé, JS cũng là “nơi vui chơi có
          tổ chức” để thoả mãn nhu cầu “được chill” của các bạn trẻ.
        </p>
      </div>
    </motion.section>
  );
}

export default Intro;
