import FullMoonSection from "./FullMoonSection";
import SevereWeatheAlert from "./SevereWeatheAlert";
import TenDaysForecastLists from "./TenDaysForecastLists";

const LeftWeatherContent = () => {
  return (
    <div className="w-4/12  p-4 ">
      <SevereWeatheAlert />
      <TenDaysForecastLists />
      <FullMoonSection />
    </div>
  );
};

export default LeftWeatherContent;
