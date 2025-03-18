'use client';

import { TbBeach } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiCutDiamond, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaMountain, FaSkiing, FaSnowflake, FaSwimmingPool } from "react-icons/fa";

export const CATEGORIES = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: FaMountain,
    description: "This property is in the countryside!",
 },
 {
    label: "Pools",
    icon: FaSwimmingPool,
    description: "This property has a pool!",
 },
 {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on Island!",
 },
 {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to the lake!",
 },
 {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities!",
 },
 {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle!",
 },
 {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities!",
 },
 {
    label: "Arctic",
    icon: FaSnowflake,
    description: "This property is newar arctic!",
 },
 {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property has cave tours!",
 },
 {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
 },
 {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in the barn!",
 },
 {
    label: "Lux",
    icon: GiCutDiamond,
    description: "This property is luxurious!",
 },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category'); //gets the category that we clicked in CategoryBox
  
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    // if we're not on the main page we dont wanna show these Categories
    if(!isMainPage) {
      return null;
    }
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {CATEGORIES.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
