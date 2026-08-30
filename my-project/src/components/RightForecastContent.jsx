import FeelsLike from "./FeelsLike";
import FullMoonSection from "./FullMoonSection";
import HourlyWeatherLists from "./HourlyWeatherLists";
import Humudity from "./Humudity";
import WindDetail from "./WindDetail";

const RightForecastContent = () => {
  return (
    <div className="w-8/12   py-4 ">
      <HourlyWeatherLists />
      <div className="w-full  flex gap-2">
        <div className=" w-1/2 ">
          <WindDetail />
          <div className="flex py-4  gap-2">
            <div className="flex-1 flex ">
              <Humudity />
            </div>
            <div className="flex-1 flex">
              <FeelsLike />
            </div>
          </div>
        </div>
        <div className="bg-amber-400 w-1/2 h-[200px]">mfsm,s.</div>
      </div>
    </div>
  );
};

export default RightForecastContent;
