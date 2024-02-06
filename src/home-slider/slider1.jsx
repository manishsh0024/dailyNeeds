import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../home-slider/slider1.css"

const images = [
  { url: "/Pyment-images/Gpay.png" },
  { url: "/Pyment-images/paytm.png" },
  { url: "/Pyment-images/visacard.png" }
];

const App = () => {
  const containerStyles = {
    maxWidth: "100%",
    overflow: "hidden", // This ensures that content beyond the screen width is hidden
    margin: "auto",
  };
  
  return (
    <div className="slider">
      <SimpleImageSlider
        width={1700}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default App;
