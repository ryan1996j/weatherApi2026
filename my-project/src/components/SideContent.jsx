import FavouriteCitiesLists from "./FavouriteCitiesLists";
import SearchingCity from "./SearchingCity";

const SideContent = () => {
  return (
    <div className="w-2/10 h-full  p-2.5 pb-4">
      <SearchingCity />
      <FavouriteCitiesLists />
    </div>
  );
};

export default SideContent;
