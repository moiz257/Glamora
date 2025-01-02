'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/hooks/use-cart';
import { useWishlist } from '@/hooks/use-wishlist';
import WishlistCard from '@/components/wishlist/WishlistCard';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  const itemCount = items.length;
  const wishlistCount = wishlistItems.length;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-heading text-3xl font-bold">
          Glamora
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'text-white font-semibold underline underline-offset-4'
                    : 'text-[#F2E9E1] hover:scale-110 hover:text-white transition-transform duration-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-5">
            <Button variant="ghost" size="icon">
              <Search className="text-white h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="text-white h-6 w-6" />
            </Button>

            {/* Wishlist */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="text-white h-6 w-6" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <WishlistCard />
              </SheetContent>
            </Sheet>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="text-white h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#6C4F3D] bg-opacity-90 z-40 md:hidden flex flex-col items-center justify-center">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href ? 'text-white font-semibold' : 'text-[#F2E9E1]'
                } text-2xl hover:scale-110 transition-transform duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
