import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-foreground text-background/80 pt-20 pb-10 font-sans">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                            BHARAT<span className="text-clay">BAZAAR</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Empowering Indian artisans by bringing their timeless crafts to the world stage. Authenticity, Heritage, and Fair Trade.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay transition-colors cursor-pointer text-white">
                                <Instagram size={20} />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay transition-colors cursor-pointer text-white">
                                <Facebook size={20} />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay transition-colors cursor-pointer text-white">
                                <Twitter size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/shop?sort=new" className="hover:text-clay transition-colors">New Arrivals</Link></li>
                            <li><Link href="/shop?sort=best" className="hover:text-clay transition-colors">Best Sellers</Link></li>
                            <li><Link href="/shop?cat=handicrafts" className="hover:text-clay transition-colors">Handicrafts</Link></li>
                            <li><Link href="/shop?cat=clothing" className="hover:text-clay transition-colors">Clothing</Link></li>
                            <li><Link href="/shop?collection=sustainable" className="hover:text-clay transition-colors">Sustainable Picks 🌱</Link></li>
                            <li><Link href="/offers" className="hover:text-clay transition-colors text-clay">Offers 🔥</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/help" className="hover:text-clay transition-colors">Help Center</Link></li>
                            <li><Link href="/track-order" className="hover:text-clay transition-colors">Track Your Order</Link></li>
                            <li><Link href="/shipping" className="hover:text-clay transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/faqs" className="hover:text-clay transition-colors">FAQs</Link></li>
                            <li><Link href="/contact" className="hover:text-clay transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Stay Connected</h4>
                        <p className="text-sm mb-4">Get the latest authentic Indian treasures delivered to your inbox.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-clay outline-none"
                            />
                            <button className="bg-clay text-white font-bold rounded-lg px-4 py-3 hover:bg-gold transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 mb-12">
                    <p>© 2026 Bharat Bazaar. Made with ❤️ in India.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
                    </div>
                </div>

                {/* Grand Typography */}
                <div className="w-full overflow-hidden border-t border-white/5 pt-10">
                    <h1 className="text-[12vw] leading-none font-black text-white/5 text-center tracking-tighter select-none">
                        BHARAT BAZAAR
                    </h1>
                </div>
            </div>
        </footer>
    );
}
