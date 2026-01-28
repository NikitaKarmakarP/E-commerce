
"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';

// Separate component to wrap in Suspense because standard functional component cannot be async directly for some hooks?
// No, useSearchParams is a client hook.
// IMPORTANT: In Next.js App Router, using useSearchParams causes the page to opt into client-side rendering at request time.
// It's recommended to wrap the component using searchParams in a Suspense boundary if pre-rendering is important, but for now we'll do direct.

function ShopContent() {
    const searchParams = useSearchParams();
    // Get params
    const categoryParam = searchParams.get('cat');
    const collectionParam = searchParams.get('collection');
    const sortParam = searchParams.get('sort');

    const [activeCategory, setActiveCategory] = useState('All');

    // Sync URL params with local state
    useEffect(() => {
        if (categoryParam) {
            const formatted = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
            if (categoryParam === 'decor') setActiveCategory('Home Decor');
            else if (categoryParam === 'organic') setActiveCategory('Natural');
            else setActiveCategory(formatted);
        } else if (!categoryParam && !collectionParam && !sortParam) {
            // Only reset if no other params are active, otherwise we might kill a collection view
            setActiveCategory('All');
        }
    }, [categoryParam, collectionParam, sortParam]);


    const allProducts = [
        { id: 1, name: 'Kashmiri Pashmina Shawl', price: 4500, category: 'Handloom', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800', collections: ['festive', 'wedding'] },
        { id: 2, name: 'Blue Pottery Vase', price: 1200, category: 'Pottery', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800', collections: ['decor', 'sustainable'] },
        { id: 3, name: 'Terracotta Water Bottle', price: 850, category: 'Pottery', image: 'https://images.unsplash.com/photo-1582845512747-e42005c956d4?auto=format&fit=crop&q=80&w=800', collections: ['sustainable', 'organic'] },
        { id: 4, name: 'Sandalwood Carving', price: 3200, category: 'Woodwork', image: 'https://images.unsplash.com/photo-1594917535439-d8e2003c2605?auto=format&fit=crop&q=80&w=800', collections: ['wedding'] },
        { id: 5, name: 'Madhubani Painting', price: 2100, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=800', collections: ['decor'] },
        { id: 6, name: 'Brass Oil Lamp', price: 1500, category: 'Metal', image: 'https://images.unsplash.com/photo-1602168434602-0d48a5298f2b?auto=format&fit=crop&q=80&w=800', collections: ['festive'] },
        { id: 7, name: 'Jute Tote Bag', price: 650, category: 'Accessories', image: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80&w=800', collections: ['sustainable'] },
        { id: 8, name: 'Kantha Stitch Quilt', price: 5500, category: 'Handloom', image: 'https://images.unsplash.com/photo-1591146755497-2a4f489f660c?auto=format&fit=crop&q=80&w=800', collections: ['wedding', 'winter'] },
        { id: 9, name: 'Organic Turmeric Soap', price: 250, category: 'Natural', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800', collections: ['organic', 'sustainable'], tag: 'New' },
        { id: 10, name: 'Silver Anklets', price: 2800, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800', collections: ['wedding'], tag: 'Best Seller' },
        { id: 11, name: 'Cotton Kurta', price: 1100, category: 'Clothing', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800', collections: ['summer'] },
        { id: 12, name: 'Bamboo Basket', price: 450, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1615217688206-5e63b8d998e3?auto=format&fit=crop&q=80&w=800', collections: ['sustainable'], tag: 'Offer' },
        // New Products
        { id: 13, name: 'Banarasi Silk Saree', price: 12000, category: 'Clothing', image: 'https://images.unsplash.com/photo-1610189012906-4024dd4c8f5f?auto=format&fit=crop&q=80&w=800', collections: ['wedding', 'festive'] },
        { id: 14, name: 'Kundan Necklace', price: 5600, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800', collections: ['wedding', 'festive'] },
        { id: 15, name: 'Neem Wood Comb', price: 150, category: 'Natural', image: 'https://images.unsplash.com/photo-1590159763121-7c9fd3121901?auto=format&fit=crop&q=80&w=800', collections: ['organic', 'sustainable'] },
        { id: 16, name: 'Clay Cooking Pot', price: 950, category: 'Pottery', image: 'https://images.unsplash.com/photo-1526434426615-1abe81ef80b5?auto=format&fit=crop&q=80&w=800', collections: ['sustainable'] },
        { id: 17, name: 'Hand-painted Coasters', price: 400, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1615598218141-8f5b801a6bb6?auto=format&fit=crop&q=80&w=800', collections: ['decor'] },
        { id: 18, name: 'Khadi Cotton Shirt', price: 1200, category: 'Clothing', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800', collections: ['sustainable', 'summer'] },
        { id: 19, name: 'Temple Jewelry Set', price: 3400, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1600520611035-8a297f6da98e?auto=format&fit=crop&q=80&w=800', collections: ['wedding', 'festive'] },
        { id: 20, name: 'Ayurvedic Face Oil', price: 890, category: 'Natural', image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=800', collections: ['organic'] },
        { id: 21, name: 'Ikat Table Runner', price: 1500, category: 'Handloom', image: 'https://images.unsplash.com/photo-1596395191799-239401737e6f?auto=format&fit=crop&q=80&w=800', collections: ['decor', 'festive'] },
    ];

    // Filter Logic
    let displayProducts = allProducts;

    // 1. Filter by Category (Active State)
    if (activeCategory !== 'All') {
        displayProducts = displayProducts.filter(p =>
            p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            (activeCategory === 'Home Decor' && p.category === 'Decor') ||
            (activeCategory === 'Natural' && p.category === 'Natural')
        );
    }

    // 2. Filter by Collection (URL Param)
    if (collectionParam) {
        displayProducts = displayProducts.filter(p => p.collections?.includes(collectionParam));
    }

    // 3. Sort Logic
    if (sortParam === 'new') {
        displayProducts = displayProducts.filter(p => p.tag === 'New').concat(displayProducts.filter(p => p.tag !== 'New'));
    } else if (sortParam === 'best') {
        displayProducts = displayProducts.filter(p => p.tag === 'Best Seller');
    } else if (sortParam === 'offers') {
        displayProducts = displayProducts.filter(p => p.tag === 'Offer');
    }

    // Title Generator
    const getPageTitle = () => {
        if (collectionParam) return `${collectionParam.charAt(0).toUpperCase() + collectionParam.slice(1)} Collection`;
        if (sortParam === 'new') return "New Arrivals";
        if (sortParam === 'best') return "Best Sellers";
        if (sortParam === 'offers') return "Special Offers";
        if (activeCategory !== 'All') return activeCategory;
        return "Shop Our Collection";
    };

    return (
        <div className="bg-background min-h-screen">
            {/* Header */}
            <div className="relative py-20 px-6 overflow-hidden bg-foreground text-background">
                <div className="absolute inset-0 opacity-40">
                    <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=2000" alt="Spices and Colors" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 mx-auto max-w-7xl text-center">
                    <span className="text-clay font-bold tracking-wider uppercase text-xs mb-3 block">Authentic Marketplace</span>
                    <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl mb-4">{getPageTitle()}</h1>
                    <p className="text-lg text-white/80 max-w-xl mx-auto font-light leading-relaxed">
                        Curated handmade treasures from every corner of India, delivered with love.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                            <ul className="space-y-3 text-foreground/70">
                                {['All', 'Handloom', 'Pottery', 'Jewelry', 'Home Decor', 'Clothing', 'Natural'].map((cat) => (
                                    <li
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`cursor-pointer transition-colors ${activeCategory === cat ? 'text-clay font-bold' : 'hover:text-clay'}`}
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-4">Collections</h3>
                            <ul className="space-y-3 text-foreground/70 text-sm">
                                <li>
                                    <Link href="/shop?collection=festive" onClick={() => setActiveCategory('All')} className={`hover:text-clay cursor-pointer ${collectionParam === 'festive' ? 'text-clay font-bold' : ''}`}>
                                        Festive Season
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop?collection=wedding" onClick={() => setActiveCategory('All')} className={`hover:text-clay cursor-pointer ${collectionParam === 'wedding' ? 'text-clay font-bold' : ''}`}>
                                        Wedding Special
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop?collection=sustainable" onClick={() => setActiveCategory('All')} className={`hover:text-clay cursor-pointer ${collectionParam === 'sustainable' ? 'text-clay font-bold' : ''}`}>
                                        Sustainable Picks
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {displayProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                {displayProducts.map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg relative mb-4">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {product.tag && (
                                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground z-10">{product.tag}</span>
                                            )}

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Link href={`/shop/${product.id}`} className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-foreground px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-clay hover:text-white shadow-lg">
                                                    Quick View
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                            <h3 className="text-lg font-serif font-medium text-foreground">{product.name}</h3>
                                            <p className="text-xs text-foreground/50 uppercase tracking-widest mb-2 mt-1">{product.category}</p>
                                            <div className="flex items-center justify-center gap-3">
                                                <span className="text-md font-medium text-foreground">₹{product.price.toLocaleString('en-IN')}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-foreground/50">
                                <p className="text-xl">No products found in this category.</p>
                                <button onClick={() => { setActiveCategory('All'); }} className="mt-4 text-clay underline">View all products</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Shop...</div>}>
            <ShopContent />
        </Suspense>
    );
}
