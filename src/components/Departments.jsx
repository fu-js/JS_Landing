import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { oddBoxVariant } from "../utils/variantAnimation";

const departments = [
  {
    name: "ban nội dung",
    image: "/assets/departments/content.jpg.webp",
    description:
      "Ban Nội Dung chính là một phần cấu tạo nên JS với nhiệm vụ lên nội dung, lên ý tưởng, concept cho các sự kiện. Làm việc ở ban Nội Dung, bạn còn cần có một tinh thần vô cùng trách nhiệm, kỹ năng làm việc nhóm vì họ thường xuyên phải phối hợp với các phân ban khác để làm nên một chương trình thành công.",
  },
  {
    name: "ban truyền thông",
    image: "/assets/departments/media.jpg.webp",
    description:
      "Ban Truyền Thông đóng vai trò như là “The Face” của CLB với nhiệm vụ tạo nên “giao diện” và đưa hình ảnh của CLB thông qua nền tảng xã hội đến với mọi người. Hoạt động với 3 mảng chính: viết bài, thiết kế và media, các bạn có thể thỏa sức sáng tạo, bắt trend với các concept khác nhau tại các phân ban.",
  },
  {
    name: "ban chuyên môn",
    image: "/assets/departments/expertise.jpg.webp",
    description:
      "Ban Chuyên Môn là ban giúp duy trì và phát triển khả năng chuyên môn của tất cả các thành viên trong JS. Không những vậy, ban Chuyên Môn là nơi đào tạo các team thi đấu cho những cuộc thi lập trình cũng như trau dồi kiến thức và tổ chức các lớp training. Ngoài ra ban Chuyên Môn cũng tham gia tổ chức các sự kiện của JS với vai trò xây dựng những phần nội dung học thuật",
  },
  {
    name: "ban văn hóa",
    image: "/assets/departments/cultural.jpg.webp",
    description:
      "Ban Văn Hóa - linh hồn của JS Club, giúp kết nối các thành viên trong CLB. Với vai trò là người truyền lửa cho CLB, các thành viên ban Văn Hóa luôn là lực lượng nòng cốt, trực tiếp chạy các sự kiện của JS và lên dây cót tinh thần cho các cuộc chơi.",
  },
  {
    name: "ban đối ngoại",
    image: "/assets/departments/external_relation.jpg.webp",
    description:
      "Ban Đối Ngoại là nơi quy tụ những thành viên “ngầu” và “chất như nước cất”. Là ban nắm giữ nguồn lực tài chính của CLB, ban Đối Ngoại có “quyền lực” vô cùng to lớn. Nếu ban Văn Hóa là sợi dây gắn kết thành viên trong JS thì Đối ngoại chính là cầu nối JS với các CLB trong và ngoài trường. Hơn nữa, thành viên ban Đối Ngoại còn có cơ hội làm việc trực tiếp và mở rộng quan hệ với các doanh nghiệp.",
  },
];

function Departments() {
  const [ref, inView] = useInView({
    threshold: 0.05,
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
      variants={oddBoxVariant}
      initial="hidden"
      animate={control}
    >
      <h2
        className="my-6 text-3xl font-semibold uppercase text-red-600 text-center"
        id="timeline"
      >
        các ban
      </h2>
      {departments.map((department) => {
        const { name, image, description } = department;
        return (
          <div
            className="rounded-lg bg-white my-8 flex flex-col md:flex-row md:odd:flex-row-reverse items-center md:p-0 image"
            key={name}
          >
            <div className="group/item relative overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-auto md:max-w-lg basis-1/2 group-hover/item:scale-110 duration-200"
              />
              <div className="invisible group-hover/item:visible absolute inset-0 bg-red-400/50 flex justify-center items-center hover:cursor-pointer font-semibold text-white uppercase text-2xl">
                {name}
              </div>
            </div>
            <p className="text-slate-500 max-w-lg mx-auto px-6 py-8 md:py-0 text-center md:text-left basis-1/2">
              <span className="text-red-600 font-medium">
                {description.split(" ").slice(0, 3).join(" ")}
              </span>{" "}
              {description.split(" ").slice(3).join(" ")}
            </p>
          </div>
        );
      })}
    </motion.section>
  );
}

export default Departments;
