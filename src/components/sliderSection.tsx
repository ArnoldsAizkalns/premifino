import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

import slider1 from '../../public/sliderSection/slider4.jpg';
import slider2 from '../../public/sliderSection/slider2.jpeg';
import slider3 from '../../public/sliderSection/slider3.jpeg';
import slider4 from '../../public/sliderSection/slider1.jpg';
import slider5 from '../../public/sliderSection/slider5.jpg';
import slider6 from '../../public/sliderSection/slider12.jpg';
import slider7 from '../../public/sliderSection/slider13.jpg';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

  const slideTexts = [
    ['01', 'Houses', 'Projects'],
    ['02', 'Apartments', 'Projects'],
    ['03', 'Houses', 'Projects'],
    ['04', 'Apartments', 'Projects'],
    ['05', 'Houses', 'Projects'],
    ['06', 'Houses', 'Projects'],
    ['07', 'Houses', 'Projects '],
  ];

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {[slider1, slider2, slider3, slider4, slider5, slider6, slider7].map(
        (slider, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                loading={index < 5 ? 'eager' : 'lazy'}
                alt={`Slide ${index + 1}`}
                src={slider}
              />
              {activeSlide === index && (
                <div
                  className="--font-mont"
                  style={{
                    position: 'absolute',
                    top: '82%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    fontSize: '24px',
                    color: 'white',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlignLast: 'start',
                    padding: '1rem',
                  }}
                >
                  {slideTexts[index].map((textLine, lineIndex) => (
                    <div
                      key={lineIndex}
                      style={{
                        padding: '5px 0',
                        fontSize: lineIndex === 1 ? '24px' : '16px',
                      }}
                    >
                      {textLine}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
}
