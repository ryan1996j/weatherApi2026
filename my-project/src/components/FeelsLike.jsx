const FeelsLike = () => {
  return (
    <div>
      <div className="h-full w-full flex flex-col px-4 py-2 bg-white rounded-xl">
        <p className="py-3 text-xs uppercase font-bold tracking-wide text-gray-500">
          Feels Like
        </p>

        <p className="text-lg font-bold py-4 text-gray-500">30</p>

        <p className="text-sm text-gray-500">
          It feels warmer than the actual temperature
        </p>
      </div>
    </div>
  );
};

export default FeelsLike;
