"use client";

import { BiSearch } from "react-icons/bi";

import useSearchModal from "@/app/hooks/UseSearchModal";

const Search = () => {
  const searchModal = useSearchModal();
  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] border-gray-300 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md  transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] border-gray-300 text-center">
          Any week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
