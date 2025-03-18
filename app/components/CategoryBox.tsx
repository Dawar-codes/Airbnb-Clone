'use-client';

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

import { motion } from "framer-motion";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    // 	Converts current query params to an object.
    if (params) {
      currentQuery = qs.parse(params.toString()); // create an object out of all our current paramaters
    }

    // Updates or adds the category.
    const updatedQuery: Record<string, string | undefined> = {
      ...currentQuery,
      category: label, // when we click one of category boxes the current label is gonna be assigned as the category param in our URL
    };

    // Checks if the same category is already selected. Removes the category if it's clicked again.
    if (params?.get("category") === label) {
      // clicking again on a category to remove them
      delete updatedQuery.category; // if the category we click on is already been selected in the URL that means we want to reset it. thats the purpose of it.
    }

    // Converts the updated query object back into a URL string.
    const url = qs.stringifyUrl(
      {
        // Converts the updated query object back into a URL string.
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    ); // skipNull removes any empty param e.g category:

    router.push(url); //  updates the browser's URL and re-renders the page dynamically.
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`relative flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer 
        ${selected ? " text-neutral-800" : " text-neutral-500"}
        `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>

      {/* for animation */}
      {selected && (
        <motion.div
          layoutId="category-underline"
          className="absolute bottom-0 left-0 w-full h-[3px] bg-neutral-800"
          transition={{ type: "spring", duration: 0.4 }}
        />
      )}
    </div>
  );
};

export default CategoryBox;
