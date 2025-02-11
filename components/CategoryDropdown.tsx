"use client"
import Chevron from "@/public/icons/Chevron"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { useState, useEffect } from "react"

// Statik ma'lumotlar
const categories = [
  {
    id: 1,
    name: "Smartfonlar va Aksessuarlar",
    slug: "smartfonlar-va-aksessuarlar",
    subcategories: [
      {
        id: 1,
        name: "Samsung",
        subcategories: [
          { id: 1, name: "Galaxy S23 Ultra", slug: "galaxy-s23-ultra" },
          { id: 2, name: "Galaxy S23+", slug: "galaxy-s23-plus" },
          { id: 3, name: "Galaxy Z Fold5", slug: "galaxy-z-fold5" },
          { id: 4, name: "Galaxy A54", slug: "galaxy-a54" },
          { id: 5, name: "Galaxy A34", slug: "galaxy-a34" },
        ]
      },
      {
        id: 2,
        name: "iPhone",
        subcategories: [
          { id: 6, name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max" },
          { id: 7, name: "iPhone 15 Pro", slug: "iphone-15-pro" },
          { id: 8, name: "iPhone 15 Plus", slug: "iphone-15-plus" },
          { id: 9, name: "iPhone 14 Pro", slug: "iphone-14-pro" },
          { id: 10, name: "iPhone 14", slug: "iphone-14" },
        ]
      },
      {
        id: 3,
        name: "Xiaomi",
        subcategories: [
          { id: 11, name: "Redmi Note 12", slug: "redmi-note-12" },
          { id: 12, name: "POCO X5 Pro", slug: "poco-x5-pro" },
          { id: 13, name: "Redmi 12C", slug: "redmi-12c" },
          { id: 14, name: "POCO F5", slug: "poco-f5" },
          { id: 15, name: "Mi 13", slug: "mi-13" },
        ]
      },
      {
        id: 4,
        name: "Aksessuarlar",
        subcategories: [
          { id: 16, name: "Quloqchinlar", slug: "quloqchinlar" },
          { id: 17, name: "Quvvatlagichlar", slug: "quvvatlagichlar" },
          { id: 18, name: "G'iloflar", slug: "giloflar" },
          { id: 19, name: "Himoya oynalari", slug: "himoya-oynalari" },
          { id: 20, name: "Xotira kartalari", slug: "xotira-kartalari" },
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Noutbuklar va Jihozlari",
    slug: "noutbuklar-va-jihozlari",
    subcategories: [
      {
        id: 5,
        name: "MacBook",
        subcategories: [
          { id: 21, name: "MacBook Pro 14", slug: "macbook-pro-14" },
          { id: 22, name: "MacBook Pro 16", slug: "macbook-pro-16" },
          { id: 23, name: "MacBook Air 13", slug: "macbook-air-13" },
          { id: 24, name: "MacBook Air 15", slug: "macbook-air-15" },
          { id: 25, name: "MacBook Pro 13", slug: "macbook-pro-13" },
        ]
      },
      {
        id: 6,
        name: "Lenovo",
        subcategories: [
          { id: 26, name: "ThinkPad X1", slug: "thinkpad-x1" },
          { id: 27, name: "IdeaPad Gaming", slug: "ideapad-gaming" },
          { id: 28, name: "Legion Pro", slug: "legion-pro" },
          { id: 29, name: "Yoga Slim", slug: "yoga-slim" },
          { id: 30, name: "ThinkBook", slug: "thinkbook" },
        ]
      },
      {
        id: 7,
        name: "Aksessuarlar",
        subcategories: [
          { id: 31, name: "Sumkalar", slug: "sumkalar" },
          { id: 32, name: "Sichqonchalar", slug: "sichqonchalar" },
          { id: 33, name: "Klaviaturalar", slug: "klaviaturalar" },
          { id: 34, name: "Kameralar", slug: "kameralar" },
          { id: 35, name: "USB xablar", slug: "usb-xablar" },
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Kir yuvish mashinalari",
    slug: "kir-yuvish-mashinalari",
    subcategories: [
      {
        id: 8,
        name: "Samsung",
        subcategories: [
          { id: 36, name: "Avtomat mashinalar", slug: "avtomat-mashinalar" },
          { id: 37, name: "Yarim avtomat", slug: "yarim-avtomat" },
          { id: 38, name: "Quritgichli", slug: "quritgichli" },
          { id: 39, name: "Invertorli", slug: "invertorli" },
          { id: 40, name: "Smart mashinalar", slug: "smart-mashinalar" },
        ]
      },
      {
        id: 9,
        name: "LG",
        subcategories: [
          { id: 41, name: "Front yuklanuvchi", slug: "front-yuklanuvchi" },
          { id: 42, name: "Yuqori yuklanuvchi", slug: "yuqori-yuklanuvchi" },
          { id: 43, name: "Quritgichli", slug: "quritgichli-lg" },
          { id: 44, name: "AI Direct Drive™", slug: "ai-direct-drive" },
          { id: 45, name: "Steam™", slug: "steam-lg" },
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Televizorlar",
    slug: "televizorlar",
    subcategories: [
      {
        id: 10,
        name: "Samsung TV",
        subcategories: [
          { id: 46, name: "Neo QLED", slug: "neo-qled" },
          { id: 47, name: "OLED", slug: "oled-samsung" },
          { id: 48, name: "The Frame", slug: "the-frame" },
          { id: 49, name: "Crystal UHD", slug: "crystal-uhd" },
          { id: 50, name: "Smart TV", slug: "smart-tv-samsung" },
        ]
      },
      {
        id: 11,
        name: "LG TV",
        subcategories: [
          { id: 51, name: "OLED evo", slug: "oled-evo" },
          { id: 52, name: "QNED", slug: "qned" },
          { id: 53, name: "NanoCell", slug: "nanocell" },
          { id: 54, name: "UHD 4K", slug: "uhd-4k-lg" },
          { id: 55, name: "Smart TV", slug: "smart-tv-lg" },
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Konditsionerlar",
    slug: "konditsionerlar",
    subcategories: [
      {
        id: 12,
        name: "Samsung",
        subcategories: [
          { id: 56, name: "WindFree™", slug: "windfree" },
          { id: 57, name: "Inverter", slug: "inverter-samsung" },
          { id: 58, name: "Premium", slug: "premium-samsung" },
          { id: 59, name: "Standart", slug: "standart-samsung" },
          { id: 60, name: "Smart", slug: "smart-samsung" },
        ]
      },
      {
        id: 13,
        name: "LG",
        subcategories: [
          { id: 61, name: "ARTCOOL", slug: "artcool" },
          { id: 62, name: "DualCool", slug: "dualcool" },
          { id: 63, name: "Inverter V", slug: "inverter-v" },
          { id: 64, name: "Standard Plus", slug: "standard-plus" },
          { id: 65, name: "Smart Inverter", slug: "smart-inverter" },
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Muzlatgichlar",
    slug: "muzlatgichlar",
    subcategories: [
      {
        id: 14,
        name: "Samsung",
        subcategories: [
          { id: 66, name: "Side by Side", slug: "side-by-side" },
          { id: 67, name: "French Door", slug: "french-door" },
          { id: 68, name: "Top Freezer", slug: "top-freezer" },
          { id: 69, name: "Bottom Freezer", slug: "bottom-freezer" },
          { id: 70, name: "Bespoke", slug: "bespoke" },
        ]
      },
      {
        id: 15,
        name: "LG",
        subcategories: [
          { id: 71, name: "InstaView", slug: "instaview" },
          { id: 72, name: "Door-in-Door", slug: "door-in-door" },
          { id: 73, name: "Multi Door", slug: "multi-door" },
          { id: 74, name: "Side by Side", slug: "side-by-side-lg" },
          { id: 75, name: "Bottom Freezer", slug: "bottom-freezer-lg" },
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Chang yutgichlar",
    slug: "chang-yutgichlar",
    subcategories: [
      {
        id: 16,
        name: "Samsung",
        subcategories: [
          { id: 76, name: "Jet Bot AI+", slug: "jet-bot-ai" },
          { id: 77, name: "Jet™ Stick", slug: "jet-stick" },
          { id: 78, name: "Robot", slug: "robot-samsung" },
          { id: 79, name: "Wireless", slug: "wireless-samsung" },
          { id: 80, name: "Canister", slug: "canister-samsung" },
        ]
      },
      {
        id: 17,
        name: "LG",
        subcategories: [
          { id: 81, name: "CordZero", slug: "cordzero" },
          { id: 82, name: "Robot", slug: "robot-lg" },
          { id: 83, name: "Kompressor", slug: "kompressor" },
          { id: 84, name: "Bagless", slug: "bagless" },
          { id: 85, name: "Stick", slug: "stick-lg" },
        ]
      }
    ]
  }
];

const CategoryDropdown = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>("smartfonlar-va-aksessuarlar")
  const [isOpen, setIsOpen] = useState(false)

  // Desktop versiya
  const DesktopDropdown = () => {
    useEffect(() => {
      // Dropdown ochilganda default kategoriyani ko'rsatish
      if (isOpen && !activeCategory) {
        setActiveCategory("smartfonlar-va-aksessuarlar")
      }
    }, [isOpen])

    return (
      <DropdownMenu 
        open={isOpen} 
        onOpenChange={setIsOpen}
        modal={false}
      >
        <DropdownMenuTrigger asChild>
          <button 
            className="bg-button text-white px-6 h-12 rounded flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            Kategorya
            <Chevron />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[60vw] h-[calc(100vh-4rem)] fixed top-16 left-0 mt-0 p-0" sideOffset={0}>
          <div className="flex h-full">
            {/* Chap panel - Kategoriyalar */}
            <div className="w-[250px] bg-[#F8FAFD] h-full border-r overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-white transition-colors ${
                    activeCategory === category.slug ? 'bg-white' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation() // Click eventni to'xtatish
                    setActiveCategory(category.slug)
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* O'ng panel - Mahsulotlar */}
            <div className="flex-1 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-4">
                {activeCategory && (
                  <>
                    <h2 className="text-lg font-medium mb-4">
                      {categories.find(cat => cat.slug === activeCategory)?.name}
                    </h2>
                    <ul className="space-y-2">
                      {categories.find(cat => cat.slug === activeCategory)?.subcategories?.map((subcategory) => (
                        <div key={subcategory.id}>
                          <h3 className="font-medium mb-2">{subcategory.name}</h3>
                          <ul className="space-y-2 mb-6">
                            {subcategory.subcategories?.map((item) => (
                              <li key={item.id}>
                                <Link 
                                  href={`/category/${item.slug}`}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  // Mobil versiya
  const MobileDropdown = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    useEffect(() => {
      // Sheet ochilganda default kategoriyani ko'rsatish
      if (isSheetOpen && !activeCategory) {
        setActiveCategory("smartfonlar-va-aksessuarlar")
      }
    }, [isSheetOpen])

    return (
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <button className="bg-button text-white px-6 h-12 rounded flex items-center gap-2">
            Kategorya
            <Chevron />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-screen p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Kategoriyalar</SheetTitle>
          </SheetHeader>
          <div className="flex h-full">
            {/* Chap panel - Kategoriyalar */}
            <div className="w-1/2 bg-[#F8FAFD] h-full border-r overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-white transition-colors ${
                    activeCategory === category.slug ? 'bg-white' : ''
                  }`}
                  onClick={() => setActiveCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* O'ng panel - Mahsulotlar */}
            <div className="w-1/2 overflow-y-auto">
              <div className="p-4">
                {activeCategory && (
                  <>
                    <h2 className="text-lg font-medium mb-4">
                      {categories.find(cat => cat.slug === activeCategory)?.name}
                    </h2>
                    <ul className="space-y-2">
                      {categories.find(cat => cat.slug === activeCategory)?.subcategories?.map((subcategory) => (
                        <div key={subcategory.id}>
                          <h3 className="font-medium mb-2">{subcategory.name}</h3>
                          <ul className="space-y-2 mb-6">
                            {subcategory.subcategories?.map((item) => (
                              <li key={item.id}>
                                <Link 
                                  href={`/category/${item.slug}`}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <>
      <div className="hidden md:block">
        <DesktopDropdown />
      </div>
      <div className="md:hidden">
        <MobileDropdown />
      </div>
    </>
  )
}

export default CategoryDropdown