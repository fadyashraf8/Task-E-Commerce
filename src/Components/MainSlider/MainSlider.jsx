import React from 'react'
import Slider from "react-slick";
import img1 from '../../../src/imgs/1.jpeg'
import img2 from '../../../src/imgs/2.jpeg'
import img3 from '../../../src/imgs/3.jpeg'
import img4 from '../../../src/imgs/4.jpeg'
import img5 from '../../../src/imgs/5.jpeg'
import img6 from '../../../src/imgs/6.jpeg'


export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
    return (
        <>
        <div className='container my-5'>
        <Slider {...settings}>
        <div>
          <img src={img1} className='w-100' alt='' width={500} height={500} />
        </div>
        <div>
        <img src={img2} className='w-100' alt='' width={500} height={500} />

        </div>
        <div>
        <img src={img3} className='w-100' alt='' width={500} height={500} />

        </div>
        <div>
        <img src={img4} className='w-100' alt='' width={500} height={500} />

        </div>
        <div>
        <img src={img5} className='w-100' alt='' width={500} height={500} />

        </div>
        <div>
        <img src={img6} className='w-100' alt='' width={500} height={500} />

        </div>
      </Slider>
        </div>

        </>
    );
  }
