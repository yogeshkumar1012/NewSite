'use client'

import { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'
import { VIDEO_TESTIMONIALS, TESTIMONIALS } from '@/lib/site-data'
import 'swiper/css'

export function TestimonialsCarousel() {
  const videoSwiperRef = useRef<any>(null)
  const textSwiperRef = useRef<any>(null)
  const [activeVideoIdx, setActiveVideoIdx] = useState(0)

  return (
    <div className="space-y-12">
      {/* Video Testimonials Section */}
      <div>
        <h3 className="text-xl font-semibold mb-8 text-center">Video Testimonials</h3>
        <div className="relative">
          <Swiper
            ref={videoSwiperRef}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            centeredSlides={true}
            autoplay={{
              delay: 6500, // 5 seconds pause + 1.5 second transition
              disableOnInteraction: false,
            }}
            speed={1500}
            loop={true}
            onSlideChange={(swiper) => setActiveVideoIdx(swiper.realIndex)}
            className="video-testimonials"
          >
            {VIDEO_TESTIMONIALS.map((testimonial, idx) => (
              <SwiperSlide key={testimonial.id} className="flex justify-center">
                <div className="max-w-2xl mx-auto w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group">
                    {/* Video placeholder with play button */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent" />
                    
                    <video
                      src={testimonial.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay={idx === activeVideoIdx}
                      muted
                      loop
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {VIDEO_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (videoSwiperRef.current?.swiper) {
                    videoSwiperRef.current.swiper.slideTo(idx)
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === activeVideoIdx ? 'bg-primary w-8' : 'bg-border w-2'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Text Testimonials Section */}
      <div>
        <h3 className="text-xl font-semibold mb-8 text-center">Client Reviews</h3>
        <Swiper
          ref={textSwiperRef}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true, // Opposite direction from video
          }}
          speed={800}
          loop={true}
          className="text-testimonials"
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <SwiperSlide key={`${testimonial.name}-${idx}`}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                {/* Star rating */}
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-heading text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
