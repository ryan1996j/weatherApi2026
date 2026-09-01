import FeelsLike from "./FeelsLike";
import HourlyWeatherLists from "./HourlyWeatherLists";
import Humudity from "./Humudity";
import Pressure from "./Pressure";
import Sunset from "./Sunset";
import UVindex from "./UVindex";
import WindDetail from "./WindDetail";

const RightForecastContent = () => {
  return (
    <div className="w-8/12   py-4 ">
      <HourlyWeatherLists />
      <div className="w-full  flex gap-2">
        <div className=" w-1/2 ">
          <WindDetail />
          <div className="flex py-4 my-2  gap-2">
            <div className="flex-1 flex ">
              <Humudity />
            </div>
            <div className="flex-1 flex">
              <FeelsLike />
            </div>
          </div>
          <Sunset />
          <div className="flex items-stretch gap-2 my-2 py-4">
            <div className="flex-1">
              <Pressure />
            </div>

            <div className="flex-1">
              <UVindex />
            </div>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl w-1/2 h-[200px]">
          mfsm,s.
        </div>
      </div>
    </div>
  );
};

export default RightForecastContent;
