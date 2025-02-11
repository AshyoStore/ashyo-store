"use client"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"

interface NavDropdownProps {
  title: string
  slug: string
}

// Statik ma'lumotlar
const navProducts = {
  "aksiyalar": {
    name: "Aksiyalar",
    products: [
      { id: 1, name: "Samsung Galaxy S23 Ultra", slug: "galaxy-s23-ultra" },
      { id: 2, name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max" },
      { id: 3, name: "MacBook Pro 14", slug: "macbook-pro-14" },
      { id: 4, name: "Samsung Neo QLED TV", slug: "neo-qled" },
      { id: 5, name: "LG OLED evo", slug: "lg-oled-evo" },
      { id: 6, name: "Bosch Side by Side", slug: "bosch-side" },
    ]
  },
  "smartfonlar": {
    name: "Smartfonlar",
    products: [
      { id: 1, name: "iPhone 14 Pro", slug: "iphone-14-pro" },
      { id: 2, name: "Samsung Galaxy Z Fold5", slug: "galaxy-z-fold5" },
      { id: 3, name: "Xiaomi 13 Pro", slug: "xiaomi-13-pro" },
      { id: 4, name: "Google Pixel 7 Pro", slug: "pixel-7-pro" },
      { id: 5, name: "Huawei P60 Pro", slug: "huawei-p60-pro" },
      { id: 6, name: "OnePlus 11", slug: "oneplus-11" },
    ]
  },
  "noutbuklar": {
    name: "Noutbuklar",
    products: [
      { id: 9, name: "MacBook Air 15", slug: "macbook-air-15" },
      { id: 10, name: "Lenovo ThinkPad X1", slug: "thinkpad-x1" },
      { id: 11, name: "ASUS ROG Zephyrus", slug: "rog-zephyrus" },
      { id: 12, name: "Dell XPS 15", slug: "dell-xps-15" },
    ]
  },
  "kondetsionerlar": {
    name: "Konditsionerlar",
    products: [
      { id: 13, name: "Samsung WindFree", slug: "samsung-windfree" },
      { id: 14, name: "LG ARTCOOL", slug: "lg-artcool" },
      { id: 15, name: "Gree Inverter", slug: "gree-inverter" },
      { id: 16, name: "Midea Aurora", slug: "midea-aurora" },
    ]
  },
  "televizorlar": {
    name: "Televizorlar",
    products: [
      { id: 17, name: "Samsung The Frame", slug: "the-frame" },
      { id: 18, name: "Sony Bravia XR", slug: "sony-bravia" },
      { id: 19, name: "TCL QLED", slug: "tcl-qled" },
    ]
  },
  "muzlatgichlar": {
    name: "Muzlatgichlar",
    products: [
      { id: 21, name: "Samsung Bespoke", slug: "samsung-bespoke" },
      { id: 22, name: "LG InstaView", slug: "lg-instaview" },
      { id: 23, name: "Hitachi French Door", slug: "hitachi-french" },
    ]
  },
  "kiryuvish-mashinalari": {
    name: "Kir yuvish mashinalari",
    products: [
      { id: 25, name: "LG AI DD", slug: "lg-ai-dd" },
      { id: 26, name: "Samsung EcoBubble", slug: "samsung-eco" },
      { id: 27, name: "Bosch Serie 6", slug: "bosch-serie6" },
      { id: 28, name: "Electrolux Steam", slug: "electrolux-steam" },
    ]
  }
}

const NavDropdown = ({ title, slug }: NavDropdownProps) => {
  const data = navProducts[slug as keyof typeof navProducts]

  if (!data) {
    return (
      <Link href={`/category/${slug}`} className="hover:text-blue-600">
        {title}
      </Link>
    )
  }

  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Link href={`/category/${slug}`} className="hover:text-blue-600">
          {title}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-[300px] p-4">
        <div>
          <h3 className="font-bold mb-3">{data.name}</h3>
          <ul className="space-y-2">
            {data.products.map((product) => (
              <li key={product.id}>
                <Link 
                  href={`/product/${product.slug}`}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default NavDropdown 