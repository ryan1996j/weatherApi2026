import FavouriteCities from "./FavouriteCities";
import SearchingCity from "./SearchingCity";

const SideContent = () => {
  return (
    <div className="w-2/10  p-2.5 bg-gray-800">
      <SearchingCity />
      <FavouriteCities />
    </div>
  );
};

export default SideContent;
