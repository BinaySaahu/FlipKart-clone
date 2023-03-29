import React, { useState } from "react";
import Category from "../components/Category";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import SlideShow from "../components/SlideShow";
import '../App.css'
import Footer from "../components/Footer";

function HomePage() {
  const electronics = [
    {
      imgsrc : "https://rukminim1.flixcart.com/image/200/154/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" ,category : "Printers" ,
      price : "From ₹3999" ,
      name:"hp"

    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/200/141/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70" ,
      category : "Top Mirrorless cameras" ,
      price : "Shop now!" ,
      name:"Canon, Sony, Fujifilm..."
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/99/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70" ,
      category : "Top deals on camera accessories" ,
      price : "Shop now!" ,
      name:"Tripods, Gimbals, Bags.."
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/140/400/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70" ,
      category : "Best of Hair Dryers" ,
      price : "Shop now!" ,
      name:"Philips, Nova, Havells & more"
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/95/400/l5jxt3k0/power-bank/b/p/m/power-bank-3-pd-22-5w-10000-rtx2108-realme-original-imagg7jckgt9zgag.jpeg?q=70" ,
      category : "Premium PowerBanks" ,
      price : "Shop now!" ,
      name:"Mi, realme & more"
    },
  ]
  const beauty = [
    {
      imgsrc : "https://rukminim1.flixcart.com/image/27/200/l4d2ljk0/bat/3/4/4/1000-hitman-full-size-double-blade-poplar-cricket-bat-advance-original-imagf9zzgxxfamce.jpeg?q=70" ,
      category : "Cricket, Football & More" ,
      price : "Up to 70% Off" ,
      name:"Ceat, Nivia, Li-Ning..."

    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/157/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70" ,
      category : "Tricycles & Rideons" ,
      price : "Up to 70% Off" ,
      name:"Figurines, Battle Toys & more"
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/189/200/krtjgcw0/headphone/d/9/g/au-mh501-maono-original-imag5j35rffkwpac.jpeg?q=70" ,
      category : "Studio Headphones" ,
      price : "Up to 80% off" ,
      name:"Explore Now!"
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/200/189/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=70" ,
      category : "Puzzles & Cubes" ,
      price : "From ₹ 79" ,
      name:"Unmissable Offers!"
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70" ,
      category : "Tyres" ,
      price : "From 799" ,
      name:"Apollo, Bridgestone, Ceat and"
    },
  ]
  const winter = [
    {
      imgsrc : "https://rukminim1.flixcart.com/image/198/200/kcp4osw0/cap/5/t/2/free-combo-woolen-cap-muffler-and-gloves-poshing-original-imaftrycnbfus837.jpeg?q=70" ,
      category : "Men's Caps" ,
      price : "Min. 50% Off" ,
      name:""

    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/172/200/kzx1a4w0/track-pant/2/6/n/xl-trackpant9013-vitaan-original-imagbtf2jbm9dygg.jpeg?q=70" ,
      category : "Men's Track Pants" ,
      price : "Min. 50% Off" ,
      name:""
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/200/192/xif0q/sweatshirt/k/7/q/l-119-madilyn-original-imagghpzffvc6zp7.jpeg?q=70" ,
      category : "Men's Sweatshirts" ,
      price : "Min. 50% Off" ,
      name:""
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/200/200/xif0q/shopsy-cap/d/v/n/free-2-beanie-cap-jesal-original-imagj3vvdtqey8pf.jpeg?q=70" ,
      category : "Men's Mufflers" ,
      price : "Min. 50% Off" ,
      name:""
    },
    {
      imgsrc : "https://rukminim1.flixcart.com/image/220/135/l4pxk7k0/scarf/c/b/i/free-c2-04-02-fs3-original-imagfkyhjyawg5df.jpeg?q=70" ,
      category : "Women's Scarves" ,
      price : "Min. 50% Off" ,
      name:""
    },
  ]

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const[showContinue,setShowContinue] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      {showLogin && <div className="overlay"></div>}
      {showRegister && <div className="overlay"></div>}
      <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
      <Category />
      <SlideShow/>
      <ProductSection title = "Best of electronics" products = {electronics}/>
      <ProductSection title = "Beauty, Food, Toys & more" products = {beauty}/>
      <ProductSection title = "Winters Essentials" products = {winter}/>
      <Footer/>
      {showLogin && <Login setIsLoggedIn = {setIsLoggedIn} setShowLogin={setShowLogin} setShowRegister={setShowRegister} showLogin = {showLogin} showRegister = {showRegister} showContinue = {showContinue} setShowContinue = {setShowContinue}login_left_title = "Login" login_left_info1 = "Get access to your" login_left_info2 = "Orders, Wishlist and" login_left_info3 = "Recommendations"/>}
      {showRegister && <Login setIsLoggedIn = {setIsLoggedIn} setShowRegister={setShowRegister} setShowLogin={setShowLogin} showRegister = {showRegister} showLogin = {showLogin} showContinue = {showContinue}setShowContinue = {setShowContinue} login_left_title = "Looks like you're new here!" login_left_info1 = "Sign up with your mobile" login_left_info2 = "number to get started" login_left_info3 = ""/>}
    </div>
  );
}

export default HomePage;
