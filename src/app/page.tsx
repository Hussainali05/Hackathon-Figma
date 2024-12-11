import BlueHeader from "./components/Blue-header";
import Carausel from "./components/Caraousel";
import Editors from "./components/Editorspick";
import Footer from "./components/Footer";
import GreenDiv from "./components/Green-div";
import Lastdiv from "./components/Lastdiv";
import Navbar from "./components/navbar";
import ProductCard from "./components/Product-card";
import Whitediv from "./components/White-dic";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Lastdiv/>
      <Footer/>
           
    </div>
  )
}