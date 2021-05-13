import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import slider1 from "../../common/img/slider1.jpg";
import slider2 from "../../common/img/slider2.jpg";
import slider3 from "../../common/img/slider3.jpg";
import { SliderImg } from "./Slider.style";
export const Slider = () => {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <SliderImg src={slider1} alt="im1" />
        <SliderImg src={slider2} alt="im2" />
        <SliderImg src={slider3} alt="im3" />
      </AliceCarousel>
    </div>
  );
};
