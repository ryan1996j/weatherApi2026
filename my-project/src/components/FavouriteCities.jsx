const FavouriteCities = () => {
  const cities = [
    {
      city: "CHIANG RAI",
      location: "My Current Location",
      weather: "Partly cloudy",
      temp: "29°C",
      high: "31",
      low: "22",
    },
    {
      city: "BANGKOK",
      location: "Thailand",
      weather: "Sunny",
      temp: "32°C",
      high: "34",
      low: "27",
    },
    {
      city: "CHIANG MAI",
      location: "Thailand",
      weather: "Cloudy",
      temp: "28°C",
      high: "30",
      low: "21",
    },
    {
      city: "PHUKET",
      location: "Thailand",
      weather: "Rainy",
      temp: "27°C",
      high: "29",
      low: "25",
    },
  ];

  return (
    <div className="space-y-5">
      {cities.map((city) => (
        <div
          key={city.city}
          className="
            flex
            w-full
            justify-between
            rounded-2xl
            border
            border-[var(--glass-border)]
            bg-[var(--glass-bg)]
            px-4
            py-6
            shadow-lg
            backdrop-blur-md
          "
        >
          {/* City information */}
          <div>
            <p className="text-lg font-bold text-[var(--text-primary)]">
              {city.city}
            </p>

            <p className="text-xs font-semibold text-[var(--text-secondary)]">
              {city.location}
            </p>

            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {city.weather}
            </p>
          </div>

          {/* Temperature */}
          <div className="text-right">
            <p className="text-2xl font-bold text-[var(--text-primary)]">
              {city.temp}
            </p>

            <p className="text-xs text-[var(--text-secondary)]">
              H:{city.high} L:{city.low}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouriteCities;
