import Image from "next/image";
import Navbar from "../components/Navbar";
import GreenHeader from "../components/Green-header";
import arrow from "@/images/Vector (13).png";
import cat1 from "@/images/card-item.png";
import cat2 from "@/images/card-item (1).png";
import cat3 from "@/images/card-item (2).png";
import cat4 from "@/images/card-item (3).png";
import cat5 from "@/images/card-item (4).png";
import drop from "@/images/Vector (14).png";
import clients from "@/images/desktop-clients-1.png";
import pic9 from "@/images/product-cover-5 (8).png";
import pic10 from "@/images/product-cover-5 (9).png";
import pic11 from "@/images/product-cover-5 (10).png";
import pic12 from "@/images/product-cover-5 (11).png";
import pic13 from "@/images/product-cover-5 (12).png";
import pic14 from "@/images/product-cover-5 (13).png";
import pic15 from "@/images/product-cover-5 (14).png";
import pic16 from "@/images/product-cover-5 (15).png";
import pic17 from "@/images/product-cover-5 (16).png";
import pic18 from "@/images/product-cover-5 (17).png";
import pic19 from "@/images/product-cover-5 (18).png";
import pic20 from "@/images/product-cover-5 (19).png";
import fb from "@/images/facebook.png";
import instagram from "@/images/ant-design_instagram-outlined.png";
import twitter from "@/images/ant-design_twitter-outlined.png";
import CardText from "../components/Cards-text";

const page = () => {
  return (
    <div>
      <GreenHeader />
      <Navbar />
      {/* Shop Section */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full py-[24px] flex flex-col items-center">
        <div className="w-full max-w-screen-xl h-[44px] flex justify-between items-center py-[40px] px-4">
          {/* Shop Title */}
          <div className="flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">Shop</h2>
          </div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">Home</div>
              <Image src={arrow} alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">Shop</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="w-full bg-[#FAFAFA] py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Image src={cat1} alt="1" />
          <Image src={cat2} alt="2" />
          <Image src={cat3} alt="3" />
          <Image src={cat4} alt="4" />
          <Image src={cat5} alt="5" />
        </div>
      </div>

      {/* Popularity Section */}
      <div className="w-full py-[24px] px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
          <div className="font-Montserrat font-bold text-[14px] text-[#737373]">
            Showing all 12 results
          </div>
          <div className="flex items-center gap-[15px] mt-4 sm:mt-0">
            <button className="w-full sm:w-[141px] h-[50px] border border-[#DDDDDD] text-[#737373] font-Montserrat text-[14px] relative">
              Popularity
              <Image src={drop} alt="drop" className="absolute top-2 right-2" />
            </button>
            <button className="w-full sm:w-[94px] h-[50px] px-[20px] py-[10px] bg-[#23A6F0] text-white font-Montserrat font-bold text-[14px]">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="w-full py-12 px-4">
        <Image src={clients} alt="clients" className="w-full" />
      </div>

      {/* Footer */}
      <footer className="bg-white py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold">Bandage</h1>
            <div className="flex gap-6 mt-4">
              <Image src={fb} alt="fb" className="w-6 h-6" />
              <Image src={instagram} alt="insta" className="w-6 h-6" />
              <Image src={twitter} alt="twitter" className="w-6 h-6" />
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
              <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
            </nav>
          </div>

          {/* Get In Touch */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
            <div className="mt-3">
              <div className="relative mb-4">
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                  placeholder="Your Email"
                />
                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Products Section */}
      <div className="relative py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {[pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20].map((pic, index) => (
            <div key={index} className="flex flex-col items-center mb-[30px]">
              <div className="w-full h-auto">
                <Image src={pic} alt={`picture${index + 9}`} />
                <CardText />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="w-[313px] h-[74px] border border-[#BDBDBD] rounded-md shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <h2 className="font-Montserrat font-bold text-[14px] text-[#BDBDBD]">First</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
