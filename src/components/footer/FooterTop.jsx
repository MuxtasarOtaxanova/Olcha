import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Footer.css";
const newsData = [
  {
    id: 1,
    title: "ReTimer 3 - Endi hech kim uyqusizlikdan aziyat chekmaydi!",
    date: "10.09.2024 14:25:33",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/geDqpXRucjyEbv7KGZuKa83bKUrrQQFBoDrimn3T.png",
  },
  {
    id: 2,
    title: "2024 yilda noutbukni qanday tanlash mumkin",
    date: "29.08.2024 16:47:21",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/auCBXkAqFMWHDdJqHKUC7zjyrFEbwvyASrwCemUf.png",
  },
  {
    id: 3,
    title: "Parij 2024: Oʻzbekiston sportchilari oltin medallarga erishishdi",
    date: "21.08.2024 14:06:09",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/9XUOi2mw52nWGwQ7ZRnWROruSxPjkKFT6Nu6jo5B.png",
  },
  {
    id: 4,
    title:
      "iPhone 16 taqdimotini kutayotganlar soni koʻpchilikni tashkil qilmoqda!",
    date: "20.08.2024 11:49:02",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/LB8CZLMbUaRooaZZwxMxuMdvr0ky6mJPoAFzdKKw.png",
  },
  {
    id: 5,
    title: "Parij 2024: Oʻzbekiston sportchilari oltin medallarga erishishdi",
    date: "21.08.2024 14:06:09",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/9XUOi2mw52nWGwQ7ZRnWROruSxPjkKFT6Nu6jo5B.png",
  },
  {
    id: 6,
    title:
      "iPhone 16 taqdimotini kutayotganlar soni koʻpchilikni tashkil qilmoqda!",
    date: "20.08.2024 11:49:02",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/5bBvx6Fca1hckSDR3QgPfkSL4qxY3HZuYTlvjVMx.png",
  },
  {
    id: 7,
    title:
      "iPhone 16 taqdimotini kutayotganlar soni koʻpchilikni tashkil qilmoqda!",
    date: "20.08.2024 11:49:02",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/LB8CZLMbUaRooaZZwxMxuMdvr0ky6mJPoAFzdKKw.png",
  },
  {
    id: 8,
    title: "Parij 2024: Oʻzbekiston sportchilari oltin medallarga erishishdi",
    date: "21.08.2024 14:06:09",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/9XUOi2mw52nWGwQ7ZRnWROruSxPjkKFT6Nu6jo5B.png",
  },
  {
    id: 9,
    title:
      "iPhone 16 taqdimotini kutayotganlar soni koʻpchilikni tashkil qilmoqda!",
    date: "20.08.2024 11:49:02",
    image:
      "https://olcha.uz/uploads/312x184/blogs/images/5bBvx6Fca1hckSDR3QgPfkSL4qxY3HZuYTlvjVMx.png",
  },
];

const FooterTop = () => {
  return (
    <div className="container">
      <div className="footerTop">
        <div className="footerTop-swiper">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
            className="mySwiper"
          >
            {newsData.map((news) => (
              <SwiperSlide key={news.id}>
                <div className="card shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{news.date}</p>
                    <h3 className="font-semibold text-lg">{news.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="footerTop-title">
          <h2>Olcha marketpleysi - xarid qilish uchun qulay gipermarket</h2>
          <p>
            Har qanday insoning hayoti va qulay sharoitlarini zamonaviy
            texnologiyalarsiz tasavvur qilib bo'lmaydi. Ish va shaxsiy savollar
            - smartfonda, sevimli filmlar, seriallar va teleko'rsatuvlar -
            televizor, tozalash, yig’ishtirish – changyutgich, pishirish,
            tayyorlash - pechka, pech va ko'plab kichikroq, ammo undan kam
            bo'lmagan foydali qurilmalar va mahsulotlar. Bundan tashqari,
            texnologiyalar rivojlanmoqda va shuning uchun jihozlar muntazam
            yangilanishlarni talab qiladi, men yangi modellarni sinab, tekshirib
            ko'rishni xohlayman lekin mavjud qurilmalar va texnikalarning kuchi
            yetarli emas. Shu nuqtai nazardan, maishiy texnika sotib olish uchun
            xavfsiz va qulay joy, marketpleys bo'lishi foydalidir. Agar siz hali
            o'zingiz uchun mahsulot - tovar topa olmagan bo'lsangiz, biz sizni
            web-saytimizda bir necha daqiqa qolishga taklif qilamiz. Sizni
            ishontirib aytamizki, vaqtingizni behuda sarf qilmaganligingizga
            ishonch hosil qilasiz.
          </p>
          <h2>O'zbekistonda texnikalarni qayerdan sotib olish mumkin?</h2>
          <p>
            Mamlakatda elektronika - texnikalarni sotib olish uchun juda ko'p
            do'kon va imkoniyatlar mavjud, ammo assortiment, tanlov, narx,
            buyurtma berishning shartlari mijozga mos kelishi muhimdir. Biz
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
