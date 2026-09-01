const Sunset = () => {
  return (
    <div className="w-full flex shadow-xl  py-8 text-center bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl">
      <div className="flex flex-1 flex-col ">
        <p className="text-xs font-semibold text-gray-500">Sunrise</p>
        <p className="text-sm font-bold py-2 text-gray-500 ">5:54 AM</p>
      </div>
      <div className="flex-2 flex text-center bg-fuchsia-950">
        <p>TESTING</p>
      </div>
      <div className="flex flex-1 flex-col ">
        <p className="text-xs font-semibold text-gray-500">Sunset</p>
        <p className="text-sm font-bold py-2 text-gray-500">6:54 PM</p>
      </div>
    </div>
  );
};

export default Sunset;
