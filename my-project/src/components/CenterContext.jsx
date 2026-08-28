import CenterLayout from "./CenterLayout";
import Header from "./Header";

const CenterContext = () => {
  return (
    <>
      <section className="w-3/4 bg-blue-800">
        <CenterLayout>
          <Header />
        </CenterLayout>
      </section>
    </>
  );
};

export default CenterContext;
