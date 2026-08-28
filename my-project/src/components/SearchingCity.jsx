import { HiSearch } from "react-icons/hi";
const SearchingCity = () => {
  return (
    <div>
      <form className="relative w-full max-w-md">
        <HiSearch
          className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        />

        <input
          type="search"
          placeholder="Search..."
          //   value={search}
          //   onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
          className="w-full rounded-xl bg-black  py-2 pl-10 pr-4
                   text-gray-800 placeholder:text-gray-400 font-semibold
                   outline-none
                   transition
                   focus:border-blue-500
                   focus:ring-2 focus:ring-blue-200"
        />
      </form>
    </div>
  );
};

export default SearchingCity;
