import React from "react";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="basis-7/12">
        <img src="/assets/culture/2022_Summer_ClubDay.jpg" alt="" />
      </div>
      <div className="space-y-4 basis-5/12">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          CLB KỸ SƯ PHẦN MỀM NHẬT BẢN - JS CLUB
        </h1>

        <p className="text-center md:text-left">
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
            YÊU THÍCH TIẾNG NHẬT và ĐAM MÊ LẬP TRÌNH.
          </span>
        </p>

        <p className="text-center md:text-left">
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
    </div>
  );
}

export default Hero;
