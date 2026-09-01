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
      <section
        className="
        flex
        w-full
        justify-between
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
      "
      >
        <SideContent />
        <CenterContext />
      </section>
    </>
  );
};

export default LandingPage;
