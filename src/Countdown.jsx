import { useState, useEffect } from "react";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "January, 4, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2
        class="my-6 text-3xl font-semibold uppercase text-red-600 tracking-wide"
        id="timeline"
      >
        Thời gian ứng tuyển còn
      </h2>
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-8"
        role="timer"
      >
        <div class="flex flex-col items-center justify-center space-y-4">
          <h2 class="day w-20 md:w-32 bg-slate-200 text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
            {days}
          </h2>
          <small class="text-gray-600 uppercase text-xs tracking-widest">
            Ngày
          </small>
        </div>
        <div class="flex flex-col items-center justify-center space-y-4">
          <h2 class="hour w-20 md:w-32 bg-slate-200 text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
            {hours}
          </h2>
          <small class="text-gray-600 uppercase text-xs tracking-widest">
            Giờ
          </small>
        </div>
        <div class="flex flex-col items-center justify-center space-y-4">
          <h2 class="minute w-20 md:w-32 bg-slate-200 text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
            {minutes}
          </h2>
          <small class="text-gray-600 uppercase text-xs tracking-widest">
            Phút
          </small>
        </div>
        <div class="flex flex-col items-center justify-center space-y-4">
          <h2 class="second w-20 md:w-32 bg-slate-200 text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
            {seconds}
          </h2>
          <small class="text-gray-600 uppercase text-xs tracking-widest">
            Giây
          </small>
        </div>
      </div>

      <button className="bg-red-600 mt-8 px-6 py-3 w-fit mx-auto rounded-lg text-white flex justify-center">
        <a href="">Đăng ký ngay</a>
      </button>
    </section>
  );
}

export default Countdown;
