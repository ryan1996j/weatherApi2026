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
      <div
        className="
    rounded-2xl
    border
    bg-[var(--glass-bg)]
    border-[var(--glass-border)]
    backdrop-blur-md
    shadow-xl
    p-4
  "
      >
        {/* Section title */}
        <h3
          className="
        py-3
        text-xs
        font-bold
        tracking-wide
        text-[var(--text-secondary)]
      "
        >
          10-DAY FORECAST
        </h3>

        {/* Forecast rows */}
        <div>
          {forecast.map((weather) => (
            <div
              key={weather.day}
              className="
            grid
            grid-cols-[30px_30px_60px_1fr_30px]
            items-center
            gap-2
            border-t
            border-[var(--border)]
            py-4
          "
            >
              {/* Day */}
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {weather.day}
              </p>

              {/* Weather icon */}
              <div className="text-center text-xl">{weather.icon}</div>

              {/* Low temperature */}
              <p className="text-sm text-[var(--text-secondary)]">
                {weather.low}°
              </p>

              {/* Condition */}
              <p className="text-right text-xs text-[var(--text-secondary)]">
                {weather.condition}
              </p>

              {/* High temperature */}
              <p className="text-right text-sm font-semibold text-[var(--text-primary)]">
                {weather.high}°
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TenDaysForecast;
