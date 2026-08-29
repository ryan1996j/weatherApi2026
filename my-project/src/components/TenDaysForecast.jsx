// const TenDaysForecast = () => {
//   return (
//     <>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//       <div className="flex justify-between py-4 border-t ">
//         <p className="txt-sm">Today</p>
//         <p>Logo</p>
//         <p>24</p>
//         <p>5555555</p>
//         <p>30</p>
//       </div>
//     </>
//   );
// };

// export default TenDaysForecast;
const TenDaysForecast = () => {
  const forecast = [
    { day: "Today", icon: "☀️", low: 24, condition: "Sunny", high: 30 },
    { day: "Sun", icon: "🌤️", low: 23, condition: "Partly cloudy", high: 29 },
    { day: "Mon", icon: "🌧️", low: 22, condition: "Light rain", high: 28 },
    { day: "Tue", icon: "⛈️", low: 23, condition: "Thunderstorm", high: 27 },
    { day: "Wed", icon: "🌦️", low: 24, condition: "Showers", high: 29 },
    { day: "Thu", icon: "☀️", low: 25, condition: "Sunny", high: 31 },
    { day: "Fri", icon: "🌤️", low: 24, condition: "Partly cloudy", high: 30 },
    { day: "Sat", icon: "🌧️", low: 23, condition: "Rain", high: 28 },
    { day: "Sun", icon: "☀️", low: 24, condition: "Sunny", high: 30 },
    { day: "Mon", icon: "🌦️", low: 23, condition: "Showers", high: 29 },
  ];
  return (
    <section className="my-4">
      {" "}
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
        {" "}
        {/* Section title */}{" "}
        <h3 className="py-3 text-xs font-bold tracking-wide text-gray-500">
          {" "}
          10-DAY FORECAST{" "}
        </h3>{" "}
        {/* Forecast rows */}{" "}
        <div>
          {" "}
          {forecast.map((weather) => (
            <div
              key={weather.day}
              className="grid grid-cols-[30px_30px_60px_1fr_30px] items-center gap-2 border-t border-gray-400 py-4"
            >
              {" "}
              {/* Day */}{" "}
              <p className="text-sm font-medium text-gray-700">
                {" "}
                {weather.day}{" "}
              </p>
              {/* Weather icon */}{" "}
              <div className="text-center text-xl"> {weather.icon} </div>{" "}
              {/* Low temperature */}{" "}
              <p className="text-sm text-gray-400"> {weather.low}° </p>{" "}
              {/* Condition */}{" "}
              <p className="text-right text-xs text-gray-500">
                {" "}
                {weather.condition}{" "}
              </p>{" "}
              {/* High temperature */}{" "}
              <p className="text-right text-sm font-semibold text-gray-800">
                {" "}
                {weather.high}°{" "}
              </p>{" "}
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default TenDaysForecast;
