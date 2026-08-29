import FavouriteCitiesLists from "./FavouriteCitiesLists";
import SearchingCity from "./SearchingCity";

const SideContent = () => {
  return (
    <div className="w-2/10  p-2.5 bg-gray-800">
      <SearchingCity />
      <FavouriteCitiesLists />
    </div>
  );
};

export default SideContent;
