import CenterContext from "../components/CenterContext";
import SideContent from "../components/SideContent";

const LandingPage = () => {
  return (
    // <div className="flex flex-col grid-cols-8">
    //   <SideContent></SideContent>
    //   <CenterContext></CenterContext>
    //   testing
    // </div>
    <>
      <section className="flex justify-between w-full text-white bg-mist-300">
        <SideContent />
        <CenterContext />
      </section>
    </>
  );
};

export default LandingPage;
