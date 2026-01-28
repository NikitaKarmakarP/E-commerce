"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Home() {
  const { addToCart } = useCart();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const featuredProducts = [
    { id: '1', name: 'Pashmina Shawl', price: '₹4,500', tag: 'Best Seller', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800' },
    { id: '2', name: 'Brass Oil Lamp', price: '₹1,250', tag: 'New', img: 'https://images.unsplash.com/photo-1602168434602-0d48a5298f2b?auto=format&fit=crop&q=80&w=800' },
    { id: '3', name: 'Madhubani Art', price: '₹3,200', tag: 'Limited', img: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&q=80&w=800' },
    { id: '4', name: 'Jute Planter', price: '₹850', tag: 'Eco', img: 'https://images.unsplash.com/photo-1597484661643-2f6f33d0ce6a?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <>
      {/* Toast for Newsletter */}
      {subscribed && (
        <div className="fixed bottom-5 left-5 bg-green-900 text-white px-6 py-3 rounded shadow-xl z-[100] animate-fade-in-up">
          Thanks for subscribing! Welcome to the family.
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-background">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/4 -right-1/4 h-[80vh] w-[80vh] rounded-full bg-clay/5 blur-3xl animate-float"></div>
          <div className="absolute top-1/2 -left-1/4 h-[60vh] w-[60vh] rounded-full bg-sage/5 blur-3xl animate-float delay-1000"></div>
          <div className="absolute bottom-0 right-1/4 h-[40vh] w-[40vh] rounded-full bg-gold/5 blur-3xl animate-float delay-2000"></div>

          {/* Decorative Mandala */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 animate-spin-slow pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground"><path fill="currentColor" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54,17.7C50.6,27.4,39.8,34.8,29.1,43.3C18.4,51.8,7.8,61.3,-1.5,63.4C-10.8,65.5,-18.8,60.2,-29.4,53.5C-40,46.8,-53.2,38.7,-61.8,27.3C-70.4,15.9,-74.4,1.2,-69.8,-11.1C-65.2,-23.4,-52,-33.3,-40.3,-42.6C-28.6,-51.9,-18.4,-60.6,-5.2,-53.4C8,-46.2,34.5,-73,42.7,-62.9Z" transform="translate(100 100)" /></svg>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.02)_100%)]"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="mx-auto max-w-6xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground/70 backdrop-blur-md opacity-0 animate-fade-in-up">
              <span className="h-1.5 w-1.5 rounded-full bg-clay"></span>
              Curated Indian Heritage
            </span>

            <h1 className="mb-8 font-sans text-5xl font-black uppercase tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] opacity-0 animate-fade-in-up delay-100">
              Handcrafted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay via-gold to-clay bg-300% animate-shine">Elegance</span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-lg text-foreground/60 sm:text-xl font-light opacity-0 animate-fade-in-up delay-200">
              Discover a world where tradition meets modernity.
              Authentic treasures from the heart of India, delivered to your doorstep.
            </p>

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row opacity-0 animate-fade-in-up delay-300">
              <Link href="/shop" className="btn-luxury bg-foreground text-background hover:text-white">
                <span className="relative z-10">Start Exploring</span>
              </Link>
              <Link href="/about" className="group flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/10 border border-transparent hover:border-foreground/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-black/10 shadow-sm transition-transform group-hover:scale-110">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                    <path d="M0 6L10.5 6M10.5 6L5.5 1M10.5 6L5.5 11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <span>Our Story</span>
              </Link>
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-foreground/40 opacity-0 animate-fade-in-up delay-300">
              Trusted by 5,000+ Happy Customers
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden bg-foreground py-4 text-background border-y border-white/10">
        <div className="animate-marquee inline-flex items-center gap-12 font-bold uppercase tracking-widest text-sm sm:text-base">
          {Array(10).fill("Ethical • Sustainable • Handcrafted • Authentic • Timeless •").map((text, i) => (
            <span key={i} className="whitespace-nowrap opacity-80">{text}</span>
          ))}
        </div>
      </div>

      {/* Featured Categories (Masonry Style) */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-clay font-bold tracking-wider uppercase text-sm">Collections</span>
              <h2 className="mt-2 text-4xl font-serif font-bold text-foreground sm:text-5xl">Curated for You</h2>
            </div>
            <Link href="/shop" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-clay transition-colors">
              View All Categories
              <span className="block h-px w-8 bg-current transition-all group-hover:w-16"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            {/* Category 1: Handloom */}
            <Link href="/shop?cat=handloom" className="group relative overflow-hidden rounded-3xl bg-stone-100 lg:col-span-6 lg:row-span-2 hover-lift cursor-pointer block">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img src="https://images.unsplash.com/photo-1596395191799-239401737e6f?auto=format&fit=crop&q=80&w=800" alt="Handloom" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/80">320+ Items</span>
                <h3 className="text-3xl font-serif font-bold text-white sm:text-4xl">Handloom</h3>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                  &rarr;
                </div>
              </div>
            </Link>

            {/* Category 2: Pottery */}
            <Link href="/shop?cat=pottery" className="group relative overflow-hidden rounded-3xl bg-orange-100 lg:col-span-3 lg:row-span-1 hover-lift cursor-pointer min-h-[250px] block">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img src="https://images.unsplash.com/photo-1545105511-9252ad367fab?auto=format&fit=crop&q=80&w=800" alt="Pottery" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-serif font-bold text-white">Pottery</h3>
                <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest text-white/80 border-b border-white/40 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity">Shop Now</span>
              </div>
            </Link>

            {/* Category 3: Jewelry */}
            <Link href="/shop?cat=jewelry" className="group relative overflow-hidden rounded-3xl bg-blue-100 lg:col-span-3 lg:row-span-1 hover-lift cursor-pointer min-h-[250px] block">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800" alt="Jewelry" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-serif font-bold text-white">Jewelry</h3>
                <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest text-white/80 border-b border-white/40 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity">Shop Now</span>
              </div>
            </Link>

            {/* Category 4: Home Decor */}
            <Link href="/shop?cat=decor" className="group relative overflow-hidden rounded-3xl bg-amber-100 lg:col-span-6 lg:row-span-1 hover-lift cursor-pointer min-h-[250px] block">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" alt="Home Decor" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white">Home Decor</h3>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Collection &rarr;
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Bharat Promise */}
      <section className="py-20 px-6 bg-stone-50/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-clay font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground">The Bharat Bazaar Promise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Direct from Artisans", desc: "No middlemen. 100% of profits go to the creators.", icon: "🎨" },
              { title: "Certified Authentic", desc: "Every product comes with a craftmark certification.", icon: "✓" },
              { title: "Sustainable Living", desc: "Eco-friendly materials and plastic-free packaging.", icon: "🌱" },
              { title: "Global Shipping", desc: "Bringing Indian heritage to doorsteps worldwide.", icon: "✈" },
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl text-center hover-lift group">
                <div className="w-16 h-16 mx-auto bg-clay/10 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 font-serif">{feature.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Slider (Trending) */}
      <section className="py-24 bg-background border-t border-foreground/5 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-clay/5 rounded-full blur-3xl -z-10"></div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-clay text-xs font-bold tracking-widest uppercase block mb-2">Shop The Look</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">Weekly Favorites</h2>
            </div>
            <Link href="/shop" className="hidden md:inline-block border-b border-foreground text-sm font-medium hover:text-clay hover:border-clay transition-colors pb-1">View All Products</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((item, i) => (
              <div key={i} className="modern-card group relative overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                  {/* Tag */}
                  {item.tag && (
                    <span className="absolute top-0 left-0 z-20 bg-foreground text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      {item.tag}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 z-20 h-8 w-8 flex items-center justify-center bg-white rounded-full shadow-sm text-foreground/40 hover:text-red-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </button>

                  <Link href={`/shop/${item.id}`}>
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>

                  {/* Add to Cart - Modern Flat Bar */}
                  <div className="absolute inset-x-0 bottom-0 z-20">
                    <button
                      onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.img })}
                      className="w-full bg-white/90 backdrop-blur-sm text-foreground py-4 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors translate-y-full group-hover:translate-y-0 duration-300 border-t border-gray-100 cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>

                {/* Product Meta - Clean & Minimal */}
                <div className="p-4 text-left">
                  <div className="flex justify-between items-start">
                    <Link href={`/shop/${item.id}`} className="text-sm font-medium text-foreground tracking-wide hover:text-clay transition-colors">{item.name}</Link>
                    <p className="text-sm font-bold text-foreground">{item.price}</p>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <div className="flex text-clay text-[10px]">★★★★★</div>
                    <span className="text-[10px] text-gray-400">(24)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/shop" className="btn-modern px-8 py-3 inline-block">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Video / Story Section */}
      <section className="relative py-32 px-6 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1601055903147-3f305e81034c?auto=format&fit=crop&q=80&w=2000" className="h-full w-full object-cover opacity-30 fixed-bg" alt="Weaving Loom" />
        </div>

        {/* Simple gradient overlay instead of heavy image for now */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>

        <div className="relative mx-auto max-w-7xl flex flex-col items-center text-center">
          <div className="mb-8 h-20 w-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer transition-transform hover:scale-110">
            <div className="ml-1 h-0 w-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent"></div>
          </div>
          <h2 className="text-4xl font-serif font-medium tracking-tight sm:text-6xl mb-6">
            The Rhythm of the Loom
          </h2>
          <p className="max-w-2xl text-xl text-white/80 mb-10 leading-relaxed font-light">
            Watch the mesmerizing process of how a single thread becomes a masterpiece.
            A tribute to the patience and skill of our master weavers.
          </p>
          <Link href="/artisans" className="btn-luxury bg-white text-stone-900 hover:bg-clay hover:text-white border-0">
            <span className="relative z-10">Watch Full Story</span>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-clay/5 bg-pattern-paisley">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-clay mb-2 block">Stay Connected</span>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Join the Bazaar</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Subscribe to receive updates on new artisans, exclusive collections, and cultural stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-stone-300 bg-transparent px-6 py-4 text-foreground placeholder:text-foreground/40 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay transition-all"
            />
            <button type="submit" className="btn-luxury bg-foreground text-background py-0 px-8 hover:text-white cursor-pointer">
              <span className="relative z-10">Subscribe</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
