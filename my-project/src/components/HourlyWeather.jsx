// const HourlyWeather = () => {
//   return (
//     <section className="w-full max-h-21 bg-green-400 rounded-xl px-2">
//       <h3 className="pt-3 uppercase text-xs font-semibold tracking-wide text-gray-500">
//         Hourly Weather
//       </h3>
//       <div className="flex  text-xs overflow-x-scroll ">
//         <div className="w-24 bg-red-400 ">
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>

//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//         <div>
//           <p>CLOUD</p>
//           <p>80%</p>
//           <p>29C</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HourlyWeather;

const HourlyWeather = () => {
  const hourlyWeather = [
    { time: "Now", condition: "☁️", rain: "80%", temp: "29°" },
    { time: "8 AM", condition: "☁️", rain: "80%", temp: "29°" },
    { time: "9 AM", condition: "🌧️", rain: "70%", temp: "29°" },
    { time: "10 AM", condition: "🌧️", rain: "65%", temp: "30°" },
    { time: "11 AM", condition: "☁️", rain: "50%", temp: "31°" },
    { time: "12 PM", condition: "☀️", rain: "30%", temp: "32°" },
    { time: "1 PM", condition: "☀️", rain: "20%", temp: "33°" },
    { time: "2 PM", condition: "🌧️", rain: "60%", temp: "32°" },
    { time: "3 PM", condition: "🌧️", rain: "70%", temp: "31°" },
    { time: "4 PM", condition: "☁️", rain: "50%", temp: "30°" },
    { time: "5 PM", condition: "☀️", rain: "20%", temp: "33°" },
    { time: "6 PM", condition: "🌧️", rain: "60%", temp: "32°" },
    { time: "7 PM", condition: "🌧️", rain: "70%", temp: "31°" },
    { time: "8 PM", condition: "☁️", rain: "50%", temp: "30°" },
    { time: "9 PM", condition: "☁️", rain: "80%", temp: "29°" },
    { time: "10 PM", condition: "🌧️", rain: "70%", temp: "29°" },
    { time: "11 PM", condition: "🌧️", rain: "65%", temp: "30°" },
    { time: "12 AM", condition: "☁️", rain: "50%", temp: "31°" },
    { time: "1 AM", condition: "☀️", rain: "30%", temp: "32°" },
    { time: "2 AM", condition: "☀️", rain: "20%", temp: "33°" },
    { time: "3 AM", condition: "🌧️", rain: "60%", temp: "32°" },
    { time: "4 AM", condition: "🌧️", rain: "70%", temp: "31°" },
    { time: "5 AM", condition: "☁️", rain: "50%", temp: "30°" },
    { time: "6 AM", condition: "☀️", rain: "20%", temp: "33°" },
    { time: "7 AM", condition: "🌧️", rain: "60%", temp: "32°" },
    { time: "8 AM", condition: "🌧️", rain: "70%", temp: "31°" },
    { time: "9 AM", condition: "☁️", rain: "50%", temp: "30°" },
  ];

  return (
    <section className="w-full rounded-xl bg-white px-2">
      <h3 className="pt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        Hourly Weather
      </h3>

      <div className="flex gap-6 overflow-x-auto py-4 hide-scrollbar">
        {hourlyWeather.map((weather) => (
          <div key={weather.time} className="w-14 shrink-0 text-center text-xs">
            <p className="font-medium text-gray-600">{weather.time}</p>

            <p className="my-2 text-2xl">{weather.condition}</p>

            <p className="text-gray-600">{weather.rain}</p>

            <p className="mt-1 font-semibold text-gray-600">{weather.temp}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyWeather;
