import CenterLayout from "./CenterLayout";
import Header from "./Header";
import LeftWeatherContent from "./LeftWeatherContent";
import RightForecastContent from "./RightForecastContent";

const CenterContext = () => {
  return (
    <>
      <section className="w-3/4 bg-blue-800 mx-auto">
        <CenterLayout>
          <Header />
          <div className="flex flex-between ">
            <LeftWeatherContent />
            <RightForecastContent />
          </div>
        </CenterLayout>
      </section>
    </>
  );
};

export default CenterContext;
