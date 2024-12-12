import Image from "next/image";
import Men from "@/images/filter.png";
import women from "@/images/filter (1).png";
import div1 from "@/images/filter (2).png";
import div2 from "@/images/filter (3).png";

export default function Editorspick() {
  return (
    <div className="w-full flex justify-center py-4 bg-[#f5f5f5]">
      <div className="w-full max-w-[1050px] h-auto flex flex-col gap-8 bg-[#FAFAFA] p-6 md:p-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px] text-center">
            EDITOR’S PICK
          </h3>
          <p className="w-full max-w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Men Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src={Men}
              alt="men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src={women}
              alt="women"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories Image */}
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[242px]">
            <Image
              src={div1}
              alt="accessories"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] hover:bg-gray-100">
              ACCESSORIES
            </button>
          </div>

          {/* Kids Image */}
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[242px]">
            <Image
              src={div2}
              alt="kids"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] hover:bg-gray-100">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
