"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { useAxios } from "@/hooks/useAxios"

interface BannerItem {
  id: number
  name: string
  description: string
  productId: number
  image: string
}

interface BannerResponse {
  banners: BannerItem[]
}

const Hero = () => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [banners, setBanners] = useState<BannerItem[]>([])
  const request = useAxios()

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await request<BannerResponse>({ 
          url: '/banner'
        })
        setBanners(data.banners)
      } catch (error) {
        console.error('Error fetching hero data:', error)
      }
    }
    fetchHero()
  }, [])

  useEffect(() => {
    if (!api || banners.length === 0) return

    api.scrollTo(current)
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [api, current, banners.length])

  if (banners.length === 0) {
    return <div className="container mx-auto py-6 h-[500px]" />
  }

  return (
    <div className="container mx-auto py-4 md:py-6 px-4">
      <Carousel
        opts={{ loop: true }}
        className="relative"
        setApi={setApi}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-hero rounded-lg p-4 md:p-8">
                <div className="w-full flex flex-col items-start md:max-w-[500px] space-y-2 md:space-y-4 text-left">
                  <h1 className="text-2xl md:text-4xl font-bold">{banner.name}</h1>
                  <p className="text-gray-600 text-sm md:text-base">{banner.description}</p>
                  <Button variant="default" className="bg-button hover:bg-blue-800 text-white h-10 md:h-12 px-6 md:px-8 py-4 md:py-5 text-sm md:text-base">
                    Batafsil
                  </Button>
                </div>
                <div className="relative w-full md:w-[600px] h-[200px] md:h-[400px] mt-4 md:mt-0">
                  <Image
                    src={"https://c1.wallpaperflare.com/preview/257/683/626/technology-computer-laptop-technology.jpg"}
                    alt={banner.name}
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-4 md:bottom-16 right-4 md:left-8 flex gap-2 items-center">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 md:w-4 h-3 md:h-4 rounded-full transition-colors ${
                current === index ? 'bg-[#95BEF3] p-1.5 md:p-2 border-[6px] md:border-[8px] border-white' : 'bg-white'
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}

export default Hero