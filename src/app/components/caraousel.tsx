import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carausel() {
  return (
    <div className="relative w-full h-[716px] lg:h-[716px] border">
      <div className="w-full h-full">
        <Image
          src={women}
          alt="women"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start gap-5 p-6 md:p-12 lg:left-[100px] lg:top-[100px] lg:gap-[35px]">
        <h5 className="font-Montserrat font-semibold text-[14px] md:text-[16px] leading-[24px] text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-[32px] md:text-[48px] lg:text-[58px] leading-[40px] md:leading-[60px] lg:leading-[80px] text-white max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-full md:w-[221px] h-[50px] md:h-[62px] rounded-[5px] px-[20px] md:px-[40px] py-[10px] md:py-[15px] bg-[#2DC071] text-white text-[18px] md:text-[24px] font-Montserrat leading-[24px] md:leading-[32px]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
