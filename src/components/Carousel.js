import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
    return (
        <Swiper
            className="swiper-container"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}


        >

            <SwiperSlide>
                <img src="chapata1.jpg" alt="Slide 1" className="slide1" style={{ width: "100%" }}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="chapata2.jpg" alt="Slide 1" className="slide2" style={{ width: "100%" }}/>
            </SwiperSlide>
            <SwiperSlide className="chapata3">
                <img src="chapata3.jpg" alt="Slide 1" className="slide3" style={{ width: "100%" }}/>
            </SwiperSlide>

        </Swiper>
    )
};
export default Carousel;