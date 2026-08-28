const FavouriteCities = () => {
  return (
    <div>
      <div className=" w-full rounded-xl bg-gray-600 mt-5 flex justify-between px-4 py-6 text-gray-200">
        <div>
          <p className="text-lg font-bold">CITY</p>
          <p className="text-xs font-smeibold">My Current Location</p>
          <p>current weather</p>
        </div>
        <div>
          <p>29C</p>
          <p>H:31 L:22</p>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCities;
