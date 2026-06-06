'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const companies = [
  'Forbes',
  'Microsoft',
  'Google',
  'Tesla',
  'Amazon',
  'Netflix',
  'Apple',
  'Meta',
]

export function CompaniesCarousel() {
  return (
    <div className="space-y-4">
      {/* Row 1 - Left to Right */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={8000}
        className="companies-carousel-row1"
      >
        {[...companies, ...companies].map((company, idx) => (
          <SwiperSlide key={`row1-${idx}`} className="!w-auto px-4">
            <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {company}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2 - Right to Left (Opposite Direction) */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={8000}
        className="companies-carousel-row2"
      >
        {[...companies, ...companies].map((company, idx) => (
          <SwiperSlide key={`row2-${idx}`} className="!w-auto px-4">
            <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              {company}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
