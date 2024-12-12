import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full rounded-[5px] absolute bg-[#23856D] mt-[-130px] top-[3200px] border">
      <div className="w-full h-auto py-12 px-4 md:py-20 md:px-12">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20">
          {/* Text Section */}
          <div className="flex flex-col gap-6 max-w-md text-center md:text-left">
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white">
              SUMMER 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[36px] md:text-[58px] leading-[48px] md:leading-[80px] text-white">
              Vita Classic Product
            </h1>
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
              We know how large objects will act, We know how our objects will act, We know
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">
                $16.48
              </h3>
              <button className="w-full md:w-[184px] h-[52px] rounded-[5px] px-6 bg-[#2DC071] py-3 flex items-center justify-center gap-2">
                <h1 className="font-Montserrat text-[14px] leading-[22px] text-white">
                  ADD TO CART
                </h1>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              src={greenman}
              alt="picman"
              className="w-full max-w-[300px] md:max-w-[510px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
