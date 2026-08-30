const Humudity = () => {
  return (
    <div>
      <div className="h-full w-full flex flex-col px-4 py-2 bg-white rounded-xl">
        <p className="py-3 text-xs uppercase font-bold tracking-wide text-gray-500">
          Humidity
        </p>

        <p className="text-md text-gray-500">Higher than yesterday</p>

        <p className="text-lg font-bold py-4 text-gray-500">90%</p>
      </div>
    </div>
  );
};

export default Humudity;
