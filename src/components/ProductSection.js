import React from "react";
import Product from "./Product";
import "./ProductSection.css";
function ProductSlider({products,title}) {
  return (
    <>
      <div className="product_section">
        <div className="product_section_left">
          <div className="product_section_left_content">
            <div className="product_section_left_title">
              <p>{title}</p>
            </div>
            <div className="product_section_left_btn">
              <button>VIEW ALL</button>
            </div>
          </div>
        </div>
        <div className="product_section_right">
          {products.map((item) => (
            (<Product
              imgsrc={item.imgsrc}
              category={item.category}
              price={item.price}
              name={item.name}
            />)
          ))}

          {/* <Product imgsrc = "https://rukminim1.flixcart.com/image/200/141/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70" category = "Top Mirrorless cameras" price = "Shop now!" name="Canon, Sony, Fujifilm..."/>
        <Product imgsrc = "https://rukminim1.flixcart.com/image/99/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70" category = "Top deals on camera accessories" price = "Shop now!" name="Tripods, Gimbals, Bags.."/>
        <Product imgsrc = "https://rukminim1.flixcart.com/image/140/400/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70" category = "Best of Hair Dryers" price = "Shop now!" name="Philips, Nova, Havells & more"/>
        <Product imgsrc = "https://rukminim1.flixcart.com/image/95/400/l5jxt3k0/power-bank/b/p/m/power-bank-3-pd-22-5w-10000-rtx2108-realme-original-imagg7jckgt9zgag.jpeg?q=70" category = "Premium PowerBanks" price = "Shop now!" name="Mi, realme & more"/> */}
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
