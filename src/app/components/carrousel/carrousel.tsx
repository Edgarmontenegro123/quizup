import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import {colors} from "@/utils/colors";
import "./styles.css";

interface CarrouselProps {
    categories: Array<{id: number, name: string}>;
    onCategorySelect: (categoryId: number) => void;
}
export default function Carrousel({categories, onCategorySelect} : CarrouselProps) {
    const shouldLoop = categories.length > 1;
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Navigation]}
                loop={shouldLoop}
                navigation={true}
                className="mySwiper"
                >
                {
                    categories.map((category, index) => (
                        <SwiperSlide key={category.id}
                                     onClick={() => onCategorySelect(category.id)}
                                     className={`swiper-slide ${colors[index % colors.length]}`}
                        >
                            {category.name}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}