import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';
import { useEffect, useState } from 'react';

const Carousel = (props) => {
    const [countSlides,setCountSlides] = useState(1);


    const checkSizeWindow = () => {
        const sizeWindow = window.innerWidth;
        
        if(sizeWindow < 900) setCountSlides(1);
        if(sizeWindow > 1000 && sizeWindow < 1500) setCountSlides(2);
        if(sizeWindow > 1500 && sizeWindow < 1900) setCountSlides(3);
        if(sizeWindow > 1900) setCountSlides(4);
    }

    useEffect(() => {
        checkSizeWindow();
    },[])

    const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        centerMode:true,
        responsive: [
            {
              breakpoint: 1470,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="container">
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div>
    )
}

export default Carousel;