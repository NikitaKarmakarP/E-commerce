"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { ShoppingCart, Heart, Share2, Truck, ShieldCheck, Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    // In a real app, verify ID or fetch data.
    // For now using mock data.

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [pincode, setPincode] = useState("");
    const [checkStatus, setCheckStatus] = useState<null | 'success' | 'error'>(null);
    const [activeTab, setActiveTab] = useState('description');

    const images = [
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1601055903147-3f305e81034c?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1596395191799-239401737e6f?auto=format&fit=crop&q=80&w=1200'
    ];

    const handlePincodeCheck = () => {
        if (pincode.length === 6) {
            setCheckStatus('success');
        } else {
            setCheckStatus('error');
        }
    };

    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Breadcrumb */}
            <div className="bg-stone-50 py-4 px-6">
                <div className="mx-auto max-w-7xl text-xs sm:text-sm text-foreground/60 flex items-center gap-2">
                    <Link href="/" className="hover:text-clay">Home</Link> /
                    <Link href="/shop" className="hover:text-clay">Shop</Link> /
                    <span className="text-foreground font-medium">Kashmiri Pashmina Shawl</span>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Image Gallery */}
                    <div className="space-y-6">
                        <div className="aspect-[4/5] w-full rounded-2xl relative overflow-hidden group bg-stone-100">
                            <img
                                src={images[selectedImage]}
                                alt="Product View"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground z-10">Best Seller</div>
                            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-clay transition-colors z-10">
                                <Share2 size={20} />
                            </button>
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedImage(i)}
                                    className={`min-w-[80px] h-24 rounded-lg overflow-hidden border-2 ${selectedImage === i ? 'border-clay' : 'border-transparent opacity-70 hover:opacity-100'} transition-all`}
                                >
                                    <img src={img} alt={`Thumbnail ${i}`} className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-clay font-bold text-xs uppercase tracking-widest">Handloom</span>
                            <div className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded text-[10px] font-bold text-green-800">
                                <Star size={10} fill="currentColor" /> 4.8
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-4">Kashmiri Pashmina Shawl</h1>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-bold text-foreground">₹4,500</span>
                            <span className="text-lg text-foreground/40 line-through">₹6,200</span>
                            <span className="text-sm font-bold text-green-600">27% OFF</span>
                        </div>

                        <div className="prose prose-sm text-foreground/70 mb-8">
                            <p>A symbol of luxury and elegance, this authentic Pashmina shawl is handwoven by master artisans in Kashmir. Made from the finest Changthangi goat wool, it offers unmatched warmth and softness.</p>
                        </div>

                        {/* Artisan Link */}
                        <Link href="/artisans/ramesh-sons" className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-clay/30 bg-clay/5 mb-8 hover:bg-clay/10 transition-colors">
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-stone-200">
                                <img src="https://images.unsplash.com/photo-1601055903147-3f305e81034c?auto=format&fit=crop&q=80&w=200" alt="Weaver" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-clay tracking-wider">Handcrafted By</p>
                                <p className="font-serif font-bold text-lg">Ramesh & Sons</p>
                            </div>
                            <div className="ml-auto text-xs font-bold underline">View Profile</div>
                        </Link>

                        {/* Actions */}
                        <div className="space-y-6 border-b border-gray-100 pb-8 mb-8">
                            {/* Quantity */}
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-bold">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-full">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-clay"><Minus size={16} /></button>
                                    <span className="w-8 text-center font-bold">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:text-clay"><Plus size={16} /></button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-foreground text-background py-4 rounded-full font-bold uppercase tracking-widest hover:bg-clay transition-colors flex items-center justify-center gap-2">
                                    <ShoppingCart size={20} /> Add to Cart
                                </button>
                                <button className="p-4 border border-gray-200 rounded-full hover:border-clay hover:text-clay transition-colors">
                                    <Heart size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Delivery Checker */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold mb-3 flex items-center gap-2"><Truck size={16} /> Delivery Options</h3>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter Pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-clay flex-1 max-w-[200px]"
                                />
                                <button onClick={handlePincodeCheck} className="text-sm font-bold text-clay hover:text-foreground">Check</button>
                            </div>
                            {checkStatus === 'success' && <p className="text-green-600 text-xs mt-2 font-medium">✓ Delivery available. Estimated by 5th Oct.</p>}
                            {checkStatus === 'error' && <p className="text-red-500 text-xs mt-2 font-medium">⚠ Invalid Pincode or Delivery not available.</p>}
                        </div>
                    </div>
                </div>

                {/* Details Tabs */}
                <div className="mt-24">
                    <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                        {['description', 'material', 'reviews'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 px-8 text-sm font-bold uppercase tracking-widest whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-clay text-foreground' : 'text-foreground/50 hover:text-foreground'}`}
                            >
                                {tab === 'material' ? 'Material & Care' : tab}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[200px]">
                        {activeTab === 'description' && (
                            <div className="max-w-3xl text-foreground/80 space-y-4 leading-relaxed">
                                <p>Experience the timeless beauty of 100% authentic Pashmina. This shawl is not merely a piece of clothing but a piece of heritage.</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Intricate Sozni embroidery work on borders.</li>
                                    <li>Lightweight yet incredibly warm.</li>
                                    <li>Certified GI (Geographical Indication) tag included.</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'material' && (
                            <div className="max-w-3xl text-foreground/80 space-y-4 leading-relaxed">
                                <p><strong>Material:</strong> 100% Pashmina Wool (Changthangi Goat)</p>
                                <p><strong>Care Instructions:</strong></p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Dry clean only recommended.</li>
                                    <li>Store in a muslin cloth to allow the fabric to breathe.</li>
                                    <li>Avoid direct contact with perfumes or sprays.</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div className="space-y-6">
                                {[1, 2].map(i => (
                                    <div key={i} className="bg-stone-50 p-6 rounded-xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex text-gold"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                                            <span className="text-xs font-bold">Priya K.</span>
                                        </div>
                                        <p className="text-sm text-foreground/70">"Absolutely stunning! The quality is unlike anything I've bought online before. Feels so luxurious."</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Similar Products */}
                <div className="mt-32">
                    <h2 className="text-3xl font-serif text-foreground mb-12">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { img: 'https://images.unsplash.com/photo-1610189012906-4024dd4c8f5f?auto=format&fit=crop&q=80&w=800', name: 'Banarasi Silk Saree', price: '₹12,000' },
                            { img: 'https://images.unsplash.com/photo-1590159763121-7c9fd3121901?auto=format&fit=crop&q=80&w=800', name: 'Neem Wood Comb', price: '₹150' },
                            { img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800', name: 'Blue Pottery Plate', price: '₹850' },
                            { img: 'https://images.unsplash.com/photo-1606293926075-69a00ce49110?auto=format&fit=crop&q=80&w=800', name: 'Hand-block Scarf', price: '₹1,200' },
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden relative">
                                    <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <h3 className="font-serif font-medium text-lg">{item.name}</h3>
                                <p className="text-sm text-foreground/60">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
