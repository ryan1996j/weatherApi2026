const HourlyWeather = () => {
  return (
    <section className="w-full max-h-21 bg-green-400 rounded-xl px-2">
      <h3 className="pt-3 uppercase text-xs font-semibold tracking-wide text-gray-500">
        Hourly Weather
      </h3>
      <div className="flex text-xs ">
        <div className="flex flex-col ">
          <p>CLOUD</p>
          <p>80%</p>
          <p>29C</p>
        </div>
        <div>
          <p>CLOUD</p>
          <p>80%</p>
          <p>29C</p>
        </div>
        <div>
          <p>CLOUD</p>
          <p>80%</p>
          <p>29C</p>
        </div>
      </div>
    </section>
  );
};

export default HourlyWeather;
