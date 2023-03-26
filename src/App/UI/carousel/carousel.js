import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';

const Carousel = (props) => {

    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: '160px',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        
        initialSlide: 0,
        centerMode:true,
        responsive: [
            {
              breakpoint: 1900,
              settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '-70px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '130px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: true,
                centerPadding: '50px',
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 1460,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 912,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '10px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 896,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '-45px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '100px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '75px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '110px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 414,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '50px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 393,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '40px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 390,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '39px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '25px',
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '5px',
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