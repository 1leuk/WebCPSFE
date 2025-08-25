'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, useScroll } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Contact', href: '/contact' },
];

const divisions = [
  { name: 'CORE', href: '/division/core' },
  { name: 'Research', href: '/division/research' },
  { name: 'Pracitucm', href: '/division/practicum' },
  { name: 'Industry Partnership', href: '/division/partnership' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're on the homepage
  const isHomePage = pathname === '/';
  
  // Determine navbar styling based on page and scroll state
  const getNavbarStyle = () => {
    if (scrolled) {
      // When scrolled on any page: floating pill effect
      return 'bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50 rounded-full max-w-[50%] mx-auto';
    } else {
      // When not scrolled: full width
      return 'bg-transparent w-full';
    }
  };

  const getTextColor = (element: 'logo' | 'nav' | 'button') => {
    if (isHomePage && !scrolled) {
      // Homepage not scrolled: white text
      return 'text-white';
    } else {
      // Homepage scrolled or other pages: black text
      return 'text-black';
    }
  };

  const getHoverColor = () => {
    if (isHomePage && !scrolled) {
      return 'hover:text-red-300';
    } else {
      return 'hover:text-red-600';
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarStyle()}`}
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        animate={{
          scale: scrolled ? 0.95 : 1,
          y: scrolled ? 15 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      >
        <nav className="flex items-center justify-between h-14 px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center group">
              <img 
                src="/cpslogo.png" 
                alt="CPS Logo" 
                className="h-8 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>
          
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 ${getTextColor('button')} ${getHoverColor()}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-6 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center h-14 text-sm font-semibold transition-colors duration-300 ${getTextColor('nav')} ${getHoverColor()}`}
              >
                {item.name}
              </Link>
            ))}
            
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className={`flex items-center gap-x-1 text-sm leading-none font-semibold transition-colors duration-300 outline-none ${getTextColor('nav')} ${getHoverColor()}`}>
                    Division
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                  </Popover.Button>
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 transform">
                    <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5">
                      <div className="relative grid gap-1 bg-white p-3">
                        {divisions.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            
            <Link
              href="/e-learning"
              className="ml-6 text-sm leading-none font-semibold px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
            >
              E-Learning
            </Link>
          </div>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <img 
                src="/cpslogo.png" 
                alt="CPS Logo" 
                className="w-8 h-8 mr-3"
              />
              <span className="text-xl font-bold text-black">CPSRG</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-black hover:text-red-600 hover:bg-red-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="px-3 py-2">
                  <p className="text-base font-semibold text-black mb-3">Division</p>
                  {divisions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link
                    href="/e-learning"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    E-Learning
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}
