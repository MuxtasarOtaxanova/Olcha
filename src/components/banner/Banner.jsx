import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { memo } from "react";
const images = [
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2024-05-27/pBbegfLejqOchYPZP0Hkn1Blo2Ok1jfNFBq46vRZ0YQ0LT35CC5mffcXaa7r.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-03-10/dzszkJmkuLv3219hcYHoE6kwHVpiTuBEOE9xF7BjecHhpok2haHazBeQJbWh.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-25/KBQBHgU9UG1TC0LLmZHCOj4OVXT9Rv7WKnMS5xHaqPqg9ARGh81Xz63J5OWW.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-01-27/08L6BDqIEHLkzTJXQZhkunCn6rZQWjslpBNSDqu4wNXCa6ttuH7e40FsPWo3.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/eD44YbvcWxdjW3A6z1jAC5ZFhhA7eS6LUxiJt21BD28v8QUUQ8Lc0yrwrX6a.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/Xh8dn6Pn29v1G2AK1g9dbkoxBXfiDB9mAhl94oy41NYSzyHwTvLrW2WLhpTD.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/60kvQf1fj2xSdapH6aHaCcT1PBEWqsq0iyHohrQlSeKn1SKjZQGWOXIwc3Gc.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/kpYdIWB7puYSmDsEXQNdHxL9sN51pLeGuBlc2K4tTVapDm07JYU2cpN0vehR.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/hPZ21KpqZVfQvNNqYdWdY3zprjMFfIUsL9YuhDmTZJefelzjxdzjIKntDHum.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/X67IFeWIUVCgKMgNaV6tIyyMIECqnIXy1p25jVpbUB7YEGtGdZbqtZBT4UiU.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-27/zWvJyFXIVngjiWu0bopmouev0d806yhC3oyYMyPqmDbG4eNQKjrU0PbGjvES.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/GJOd1a55WNLyOwH5cSidwV57cLowXNpuSdEPgUX6Hqj5kYgXkEqUDtctNay2.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-10/eBKJbU0Db1UU3wpysrb33ngKT3XnD4bF3PTJdIutW8uIHIM9zFgzSCTK77th.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-01-23/pEHchQ84G31MgdC2c4eyoAua5ZQAlEKhLPjDCBwqTD4xOMigq4TjevYkEHFi.png",
];

const Banner = () => {
  return (
    <div className="banner-swiper">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="banner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(Banner);
