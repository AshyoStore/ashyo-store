"use client";

import Image from "next/image";
import Artel from "../public/images/Artel.png";
import Samsung from "../public/images/Samsung.png";
import Nokia from "../public/images/Nokia.png";
import Apple from "../public/images/Apple.png";
import Vivo from "../public/images/Vivo.png";
import Huawei from "../public/images/Huawei.png";
import Mi from "../public/images/MI.png";

const brands = [
  { id: 1, name: "Artel", image: Artel, bg: "bg-green-100", grid: "row-span-2" },
  { id: 2, name: "Samsung", image: Samsung, bg: "bg-blue-100", grid: "row-span-3" },
  { id: 3, name: "Nokia", image: Nokia, bg: "bg-blue-200", grid: "row-span-2" },
  { id: 4, name: "Apple", image: Apple, bg: "bg-gray-200", grid: "row-span-3" },
  { id: 5, name: "Vivo", image: Vivo, bg: "bg-blue-100", grid: "row-span-3 row-start-3" },
  { id: 6, name: "Huawei", image: Huawei, bg: "bg-red-100", grid: "row-span-2 col-start-2 row-start-4" },
  { id: 7, name: "Xiaomi", image: Mi, bg: "bg-orange-100", grid: "row-span-3 col-start-3 row-start-3" },
];

const BrandList = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-3 max-w-[1440px] w-full mx-auto p-6">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className={`flex items-center justify-center p-4 rounded-xl ${brand.bg} ${brand.grid}`}
        >
          <Image src={brand.image} alt={brand.name} width={100} height={50} />
        </div>
      ))}
      <div className="flex items-center justify-center p-4 rounded-xl bg-gray-100 text-blue-600 row-span-2 col-start-4 row-start-4">
        <span>Ko'proq</span>
      </div>
    </div>
  );
};

export default BrandList;
