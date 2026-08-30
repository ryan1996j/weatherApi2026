import CenterLayout from "./CenterLayout";
import Header from "./Header";
import LeftWeatherContent from "./LeftWeatherContent";
import RightForecastContent from "./RightForecastContent";

const CenterContext = () => {
  return (
    <>
      <section className="w-3/4  mx-auto">
        <CenterLayout>
          <Header />
          <div className="flex justify-between ">
            <LeftWeatherContent />
            <RightForecastContent />
          </div>
        </CenterLayout>
      </section>
    </>
  );
};

export default CenterContext;
