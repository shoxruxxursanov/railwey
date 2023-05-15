import React from 'react'
import Slider from 'react-slick'
import './elonlar.css'

export const Elonlar = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  return (
    <div className='elon-window'>
      <h2 className='elon-title'>Елонлар</h2>
      <Slider {...settings}>
        <div className="elon-win">
          <img
            src="https://railway.uz/upload/%D1%82%D0%B2%D1%81%D1%80%D0%B72.jpg"
            alt=""
          />
        </div>
        <div className="elon-win">
          <img
            src="https://www.gazeta.uz/media/img/2019/03/QyQIjg15529155165097_b.jpg"
            alt=""
          />
        </div>
        <div className="elon-win">
          <img
            src="https://railway.uz/upload/iblock/9d3/m5gpag1a26klx51sk6og5ickr70dy06p.jpg"
            alt=""
          />
        </div>
        <div className="elon-win">
          <img src="https://daryo.uz/cache/2022/03/2-67-1280x720.jpg" alt="" />
        </div>
        <div className="elon-win">
          <img
            src="https://www.uztour.biz/netcat_files/multifile/56/26/afrosiab2.jpg"
            alt=""
          />
        </div>
        <div className="elon-win">
          <img src="https://www.railway.uz/upload/33.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
