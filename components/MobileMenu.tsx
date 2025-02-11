"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import MenuIcon from "@/public/icons/Menu"
import { useState } from "react"

// Mobil versiya uchun kategoriyalar
const mobileCategories = [
  {
    id: 1,
    title: "Aksiyalar",
    items: []
  },
  {
    id: 2,
    title: "Smartfonlar va Aksessuarlar",
    items: [
      "Samsung smartfonlar",
      "Vivo smartfonlar",
      "Fly smartfonlar",
      "Oppo smartfonlar",
      "Nokia smartfonlar",
      "Realmi smartfonlar",
      "Redmi smartfonlar",
      "Xomi smartfonlar",
      "Artel smartfonlar"
    ],
    accessories: [
      "Quvatlagichlar",
      "Telfon g'iloflari",
      "Quloqchinlar",
      "Xotira chiplari",
      "Quvvat zahirasi",
      "Ekran himoya oynasi"
    ]
  },
  {
    id: 3,
    title: "Televizorlar",
    items: [
      "Samsung televizorlar",
      "LG televizorlar",
      "Artel televizorlar",
      "TCL televizorlar",
      "Sony televizorlar"
    ]
  },
  {
    id: 4,
    title: "Muzlatgichlar",
    items: [
      "Samsung muzlatgichlar",
      "LG muzlatgichlar",
      "Artel muzlatgichlar",
      "Bosch muzlatgichlar",
      "Shivaki muzlatgichlar"
    ]
  },
  {
    id: 5,
    title: "Kompyuter va jihozlari",
    items: [
      "Noutbuklar",
      "Monitorlar",
      "Printerlar",
      "Kompyuter jihozlari",
      "O'yin jihozlari"
    ]
  },
  {
    id: 6,
    title: "Konditsionerlar",
    items: [
      "Samsung konditsionerlar",
      "LG konditsionerlar",
      "Artel konditsionerlar",
      "Gree konditsionerlar",
      "Midea konditsionerlar"
    ]
  },
  {
    id: 7,
    title: "Kir yuvish mashinalari",
    items: [
      "Samsung kir yuvish mashinalari",
      "LG kir yuvish mashinalari",
      "Artel kir yuvish mashinalari",
      "Bosch kir yuvish mashinalari",
      "Shivaki kir yuvish mashinalari"
    ]
  },
  {
    id: 8,
    title: "Chang yutgichlar",
    items: [
      "Samsung chang yutgichlar",
      "LG chang yutgichlar",
      "Artel chang yutgichlar",
      "Bosch chang yutgichlar",
      "Shivaki chang yutgichlar"
    ]
  }
]

const MobileMenu = () => {
  const [activeCategory, setActiveCategory] = useState<number>(2) // Default Smartfonlar

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded flex items-center justify-center">
          <MenuIcon/>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-screen p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Kategoriyalar</SheetTitle>
        </SheetHeader>
        <div className="flex h-full">
          {/* Chap panel - Kategoriyalar */}
          <div className="w-1/2 bg-[#F8FAFD] h-full border-r overflow-y-auto">
            {mobileCategories.map((category) => (
              <button
                key={category.id}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-white transition-colors ${
                  activeCategory === category.id ? 'bg-white' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* O'ng panel - Mahsulotlar */}
          <div className="w-1/2 overflow-y-auto">
            <div className="p-4">
              {activeCategory && (
                <>
                  <h2 className="text-lg font-medium mb-4">
                    {mobileCategories.find(cat => cat.id === activeCategory)?.title}
                  </h2>
                  <ul className="space-y-2">
                    {mobileCategories.find(cat => cat.id === activeCategory)?.items.map((item, idx) => (
                      <li key={idx}>
                        <Link 
                          href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* Aksessuarlar (faqat Smartfonlar uchun) */}
                  {activeCategory === 2 && (
                    <>
                      <h2 className="text-lg font-medium mb-4 mt-6">Aksessuarlar</h2>
                      <ul className="space-y-2">
                        {mobileCategories[1].accessories?.map((item, idx) => (
                          <li key={idx}>
                            <Link 
                              href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu 