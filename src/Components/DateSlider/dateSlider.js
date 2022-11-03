import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './dateSlider.module.css'
import Slider from "react-slick";

const DateSlider = (props) => {

    const settings = {
        dots: false,
        dotsClass: "dateDots",
        infinite: false,
        speed: 350,
        autoplaySpeed: 3000,
        cssEase: "linear",
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        nextArrow : false,
        prevArrow : false,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
        ]
    };
    
    return ( 
        <>
            <div className={classes.dateSlider}>
                <Slider className={classes.date} {...settings}>
                    {props.children}
                </Slider>
            </div>
        </>
    );
}

export default DateSlider;