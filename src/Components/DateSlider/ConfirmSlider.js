import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './dateSlider.module.css'
import Slider from "react-slick";

const ConfirmSlider = (props) => {

    const settings = {
        dots: false,
        dotsClass: "dateDots",
        infinite: false,
        speed: 350,
        autoplaySpeed: 3000,
        cssEase: "linear",
        autoplay: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        nextArrow : false,
        prevArrow : false,
        responsive: [

            {
                breakpoint: 930,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                }
            },

            {
                breakpoint: 730,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 470,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 350,
                settings: {
                slidesToShow: 2,
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

export default ConfirmSlider;