import s from './style.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../data';
 
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true
};


const Banner = () => {
  return  (
    <Slider {...settings} className={s.slider}>
      {
        IMAGES.map(({url},index)=>(
            <img src={url} alt={`banner${index}`} key={index}></img>
          ))
      }
    </Slider>
  )
}

export default Banner;