"use client"
import Logo from "@/public/icons/Logo"
import Link from "next/link"
import CategoryDropdown from "./CategoryDropdown"
import Balance from "@/public/icons/Balance"
import Like from "@/public/icons/Like"
import Cart from "@/public/icons/Cart"
import User from "@/public/icons/User"
import SearchHeader from "@/public/icons/SearchHeader"
import MobileMenu from "./MobileMenu"
import NavDropdown from "./NavDropdown"

const DesktopHeader = () => {
  return (
    <div className="hidden md:block">
      {/* Top header */}
      <div className="bg-primary py-2 px-4 text-primary">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>Tashkent</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/contacts">Contacts</Link>
            <span>+998 (71) 123-45-67</span>
            <select className="bg-white p-1 outline-none">
              <option>Uz</option>
              <option>Ru</option>
              <option>En</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          <CategoryDropdown />

          <div className="flex-1 flex items-center rounded-lg bg-primary">
            <input 
              type="text" 
              placeholder="What are you looking for?"
              className="w-full px-2 h-[48px] outline-none bg-transparent border-none"
            />
            <button className="bg-blue-700 rounded">
              <SearchHeader/>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
              <Balance/>
            </button>
            
            <button className="relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                11
              </span>
              <Like/>
            </button>
            
            <button className="relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                7
              </span>
              <Cart/>
            </button>
            
            <button>
              <User/>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex gap-6 py-4 text-primary overflow-x-auto">
            <NavDropdown title="Aksiyalar" slug="aksiyalar" />
            <NavDropdown title="Smartfonlar" slug="smartfonlar" />
            <NavDropdown title="Noutbuklar" slug="noutbuklar" />
            <NavDropdown title="Konditsionerlar" slug="kondetsionerlar" />
            <NavDropdown title="Televizorlar" slug="televizorlar" />
            <NavDropdown title="Muzlatgichlar" slug="muzlatgichlar" />
            <NavDropdown title="Kir yuvish mashinalari" slug="kiryuvish-mashinalari" />
          </ul>
        </div>
      </nav>
    </div>
  )
}

const MobileHeader = () => {
  return (
    <div className="md:hidden">
      {/* Main header */}
      <div className="container mx-auto py-4 ">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <span className="text-primary font-bold text-sm">+998 (71) 123-45-67</span>

          <div className="flex items-center gap-3">
            
          <MobileMenu />

          </div>
          <div className="fixed left-0 w-full bottom-4 bg-white flex items-center justify-between gap-3">
          <button className="relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
              <Balance/>
            </button>
            
            <button className="relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                11
              </span>
              <Like/>
            </button>
            
            <button className="relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                7
              </span>
              <Cart/>
            </button>
            
            <button>
              <User/>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Category */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          <CategoryDropdown />
          <div className="flex-1 flex items-center rounded-lg bg-primary">
            <input 
              type="text" 
              placeholder="Search..."
              className="w-full px-2 h-[40px] outline-none bg-transparent border-none text-sm"
            />
            <button>
              <SearchHeader/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <header className="w-full">
      <DesktopHeader />
      <MobileHeader />
    </header>
  )
}

export default Header