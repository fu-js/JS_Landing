import React from "react";

function Departments() {
  const departments = [
    {
      name: "ban nội dung",
      image: "/assets/departments/content.jpg",
      description:
        "Ban Nội Dung chính là một phần cấu tạo nên JS với nhiệm vụ lên nội dung, lên ý tưởng, concept cho các sự kiện. Làm việc ở ban Nội dung, bạn còn cần có một tinh thần vô cùng trách nhiệm, kỹ năng làm việc nhóm vì họ thường xuyên phải phối hợp với các phân ban khác để làm nên một chương trình thành công.",
    },
    {
      name: "ban truyền thông",
      image: "/assets/departments/media.jpg",
      description:
        "Ban Truyền Thông đóng vai trò như là “The Face” của CLB với nhiệm vụ tạo nên “giao diện” và đưa hình ảnh của CLB thông qua nền tảng xã hội đến với mọi người. Hoạt động với 3 mảng chính: viết bài, thiết kế và media, các bạn có thể thỏa sức sáng tạo, bắt trend với các concept khác nhau tại các phân ban.",
    },
    {
      name: "ban chuyên môn",
      image: "/assets/departments/expertise.jpg",
      description:
        "Ban Chuyên Môn là ban giúp duy trì và phát triển khả năng chuyên môn của tất cả các thành viên trong JS. Không những vậy, ban chuyên môn là nơi đào tạo các team thi đấu cho những cuộc thi lập trình cũng như trau dồi kiến thức và tổ chức các lớp training. Ngoài ra ban Chuyên Môn cũng tham gia tổ chức các sự kiện của JS với vai trò xây dựng những phần nội dung học thuật",
    },
    {
      name: "ban văn hóa",
      image: "/assets/departments/cultural.jpg",
      description:
        "Ban Văn Hóa - linh hồn của JS Club, giúp kết nối các thành viên trong CLB. Với vai trò là người truyền lửa cho CLB, các thành viên ban văn hóa luôn là lực lượng nòng cốt, trực tiếp chạy các sự kiện của JS và lên dây cót tinh thần cho các cuộc chơi.",
    },
    {
      name: "ban đối ngoại",
      image: "/assets/departments/external_relation.jpg",
      description:
        "Ban Đối Ngoại của JS được miêu tả bằng những tính từ “Khéo léo”, “nhanh nhạy” và “hoạt bát”. Nếu ban Văn hóa là sợi dây gắn kết thành viên trong JS thì Đối ngoại chính là cầu nối JS với các CLB cũng như tổ chức trong và ngoài phạm vi FPT.",
    },
  ];

  return (
    <div>
      <h2
        class="my-6 text-3xl font-semibold uppercase text-red-600"
        id="timeline"
      >
        các ban
      </h2>
      {departments.map((department) => {
        const { name, image, description } = department;
        return (
          <div
            className="rounded-lg bg-white my-8 flex flex-col md:flex-row md:odd:flex-row-reverse items-center md:p-0"
            key={name}
          >
            <div className="group/item relative overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-auto md:max-w-lg rounded-t-lg md:rounded-t-none basis-1/2 odd:rounded-l-lg even:rounded-r-lg group-hover/item:scale-110 duration-200"
              />
              <div className="invisible group-hover/item:visible absolute inset-0 bg-red-400/50 flex justify-center items-center hover:cursor-pointer font-semibold text-white uppercase text-2xl">
                {name}
              </div>
            </div>
            <p className="text-gray-500 max-w-lg mx-auto px-6 py-8 text-base lg:text-lg text-center md:text-left basis-1/2">
              <span className="text-red-600 font-medium">
                {description.split(" ").slice(0, 3).join(" ")}
              </span>{" "}
              {description.split(" ").slice(3).join(" ")}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Departments;
