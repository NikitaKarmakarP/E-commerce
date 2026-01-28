"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
    Search,
    ShoppingCart,
    Heart,
    User,
    Menu,
    X,
    ChevronDown,
    Globe,
    HelpCircle,
    Truck,
    Gift,
    MapPin,
    Sun,
    Moon,
    Bell
} from "lucide-react";

export default function Navbar() {
    const { cart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [pincode, setPincode] = useState("400001");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        {
            name: "Shop",
            href: "/shop",
            mega: true,
            columns: [
                {
                    title: "Categories",
                    items: [
                        { name: "Handicrafts", href: "/shop?cat=handicrafts" },
                        { name: "Clothing", href: "/shop?cat=clothing" },
                        { name: "Home Décor", href: "/shop?cat=decor" },
                        { name: "Jewelry", href: "/shop?cat=jewelry" },
                        { name: "Organic Products", href: "/shop?cat=organic" },
                    ]
                },
                {
                    title: "Discover",
                    items: [
                        { name: "New Arrivals", href: "/shop?sort=new" },
                        { name: "Best Sellers", href: "/shop?sort=best" },
                        { name: "Offers 🔥", href: "/shop?sort=offers" },
                    ]
                }
            ]
        },
        {
            name: "Artisans",
            href: "/artisans",
            dropdown: [
                { name: "Meet the Artisans", href: "/artisans" },
                { name: "State-wise Art", href: "/artisans?view=map" },
                { name: "Stories & Culture", href: "/about" },
            ]
        },
        {
            name: "Collections",
            href: "/collections",
            dropdown: [
                { name: "Festive Collection", href: "/shop?collection=festive" },
                { name: "Wedding Special", href: "/shop?collection=wedding" },
                { name: "Sustainable Picks 🌱", href: "/shop?collection=sustainable" },
            ]
        },
        {
            name: "About",
            href: "/about",
            dropdown: [
                { name: "Our Story", href: "/about" },
                { name: "Mission & Vision", href: "/about#mission" },
                { name: "Made in Bharat 🇮🇳", href: "/about#values" },
            ]
        },
        {
            name: "Blog",
            href: "/blog",
            dropdown: [
                { name: "Craft Stories", href: "/blog/stories" },
                { name: "Buying Guides", href: "/blog/guides" },
                { name: "Culture & Heritage", href: "/blog/culture" },
            ]
        }
    ];

    return (
        <>
            {/* Top Utility Bar */}
            <div className="bg-foreground text-background text-xs py-2 px-6 hidden md:block transition-colors dark:bg-black dark:text-gray-300">
                <div className="mx-auto max-w-7xl flex justify-between items-center">
                    <div className="flex space-x-6 text-white/90">
                        <span className="flex items-center gap-1 hover:text-clay cursor-pointer">
                            <MapPin size={12} className="text-clay" /> Deliver to: <span className="font-semibold border-b border-dashed border-white/40">{pincode}</span>
                        </span>
                        <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Globe size={12} /> English | हिंदी | বাংলা</span>
                    </div>
                    <div className="flex space-x-6 text-white/90">
                        <Link href="/gift-cards" className="flex items-center gap-1 hover:text-clay cursor-pointer">
                            <Gift size={12} /> Gift Cards
                        </Link>
                        <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Truck size={12} /> Track Order</span>
                        <span className="flex items-center gap-1 hover:text-white cursor-pointer"><HelpCircle size={12} /> Support</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`fixed top-0 md:top-8 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm py-2 md:top-0 h-16" : "bg-transparent py-4 text-white hover:bg-white hover:text-foreground dark:hover:bg-stone-900 dark:hover:text-white group h-20"}`}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className={`mx-auto max-w-7xl px-6 h-full flex items-center justify-between ${isScrolled ? "text-foreground dark:text-white" : "text-foreground md:text-white md:group-hover:text-foreground dark:md:group-hover:text-white"}`}>

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-black tracking-tighter">
                        BHARAT<span className="text-clay">BAZAAR</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 h-full">
                        <Link href="/" className="text-sm font-bold uppercase tracking-wider hover:text-clay transition-colors">Home</Link>
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                            >
                                <Link href={link.href} className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider hover:text-clay transition-colors h-full">
                                    {link.name} <ChevronDown size={14} />
                                </Link>

                                {/* Dropdown / Mega Menu */}
                                {activeDropdown === link.name && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-xl border-t-2 border-clay rounded-b-lg p-5 animate-fade-in-up text-foreground dark:text-white">
                                        {link.mega ? (
                                            <div className="flex gap-8 w-[500px] -ml-[150px] p-2">
                                                {link.columns?.map((col, idx) => (
                                                    <div key={idx} className="flex-1">
                                                        <h4 className="font-bold text-clay mb-3 uppercase text-xs tracking-widest">{col.title}</h4>
                                                        <ul className="space-y-2">
                                                            {col.items.map(item => (
                                                                <li key={item.name}>
                                                                    <Link href={item.href} className="text-sm hover:text-clay text-gray-600 dark:text-gray-300 block">{item.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                                {/* Visual Feature in Mega Menu */}
                                                <div className="flex-1 bg-gray-50 dark:bg-stone-800 rounded-lg p-3 hidden lg:block">
                                                    <div className="h-24 rounded mb-2 overflow-hidden relative">
                                                        <img src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=400" alt="Festive Collection" className="h-full w-full object-cover" />
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">New Festive Collection is out now!</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <ul className="space-y-3">
                                                {link.dropdown?.map((item) => (
                                                    <li key={item.name}>
                                                        <Link href={item.href} className="block text-sm hover:text-clay text-gray-600 dark:text-gray-300">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Icons & Actions */}
                    <div className="flex items-center space-x-5">
                        <div className={`hidden lg:flex items-center rounded-full px-3 py-1.5 focus-within:ring-1 ring-clay transition-all ${isScrolled ? "bg-black/5 dark:bg-white/10" : "bg-white/10 group-hover:bg-black/5 dark:group-hover:bg-white/10"}`}>
                            <Search size={16} className={`mr-2 ${isScrolled ? "text-gray-500 dark:text-gray-300" : "text-white/70 group-hover:text-gray-500 dark:group-hover:text-gray-300"}`} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className={`bg-transparent border-none outline-none text-sm w-20 focus:w-32 transition-all placeholder:text-current opacity-80`}
                            />
                        </div>

                        {/* Dark Mode Toggle */}
                        <button onClick={toggleDarkMode} className="hover:text-clay transition-colors">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Notifications */}
                        <div className="relative cursor-pointer hover:text-clay transition-colors group/bell">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
                            <div className="absolute top-8 right-0 w-64 bg-white dark:bg-stone-900 shadow-xl rounded-lg p-4 opacity-0 invisible group-hover/bell:opacity-100 group-hover/bell:visible transition-all text-sm text-foreground dark:text-gray-200 z-50">
                                <p className="font-bold border-b pb-2 mb-2 dark:border-gray-700">Notifications</p>
                                <div className="space-y-2">
                                    <p className="text-xs">🎉 Your order #1234 has shipped!</p>
                                    <p className="text-xs">🔥 Festive sale starts tomorrow.</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/wishlist" className="hover:text-clay transition-colors hidden sm:block relative">
                            <Heart size={20} />
                        </Link>

                        <Link href="/account" className="hover:text-clay transition-colors hidden sm:block">
                            <User size={20} />
                        </Link>

                        <div className="relative group cursor-pointer hover:text-clay transition-colors">
                            <ShoppingCart size={20} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-clay text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-bounce">
                                    {cart.length}
                                </span>
                            )}
                        </div>

                        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white dark:bg-stone-900 pt-24 px-6 overflow-y-auto md:hidden animate-fade-in-up text-foreground dark:text-white">
                    <div className="space-y-6">
                        <div className="pb-6 border-b border-gray-100 dark:border-gray-800">
                            <input type="text" placeholder="Search products..." className="w-full p-3 bg-gray-50 dark:bg-stone-800 rounded-lg border border-gray-200 dark:border-stone-700 outline-none" />
                        </div>

                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <div className="font-bold text-lg mb-2">{link.name}</div>
                                <div className="pl-4 space-y-2 border-l-2 border-gray-100 dark:border-gray-800">
                                    {(link.mega ? link.columns.flatMap(c => c.items) : link.dropdown).map((item: any) => (
                                        <Link key={item.name} href={item.href} className="block text-gray-600 dark:text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><User size={18} /> My Profile</div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><Heart size={18} /> Wishlist</div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><MapPin size={18} /> Deliver to: {pincode}</div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><Gift size={18} /> Gift Cards</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
