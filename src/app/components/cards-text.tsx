import Image from "next/image";
import colours from "@/images/product-colors.png";

export default function CardsText() {
  return (
    <div className="w-full max-w-[300px] sm:max-w-[239px] h-auto py-6 px-4 flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-md">
      <h5 className="w-full font-Montserrat font-bold text-[16px] sm:text-[18px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-1 py-1 flex justify-center gap-2">
        <h5 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>
    </div>
  );
}
