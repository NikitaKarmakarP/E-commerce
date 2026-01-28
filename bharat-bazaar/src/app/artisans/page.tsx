"use client";

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ArtisansContent() {
    const searchParams = useSearchParams();
    const view = searchParams.get('view');
    const [filter, setFilter] = useState('All');

    // Derived state for default view vs map view
    // If view=map, we filter by clicking states, so initial filter might change or we show state grid.

    const artisans = [
        { id: 'ramesh-sons', name: 'Ramesh & Sons', location: 'Varanasi', craft: 'Banarasi Silk', description: 'Weaving heritage silks for over 5 generations.', image: 'https://images.unsplash.com/photo-1601055903147-3f305e81034c?auto=format&fit=crop&q=80&w=800', category: 'Handloom' },
        { id: 'lakshmi-potters', name: 'Lakshmi Potters', location: 'Khurja', craft: 'Blue Pottery', description: 'Masters of the traditional Persian blue glazing technique.', image: 'https://images.unsplash.com/photo-1590490715978-0c64d4b17208?auto=format&fit=crop&q=80&w=800', category: 'Pottery' },
        { id: 'tribal-arts-co', name: 'Tribal Arts Co.', location: 'Bastar', craft: 'Dhokra Metal', description: 'Preserving the ancient lost-wax casting method.', image: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=800', category: 'Metal' },
        { id: 'kutch-embroiders', name: 'Kutch Embroiders', location: 'Gujarat', craft: 'Mirror Work', description: 'Women-led collective creating vibrant textiles.', image: 'https://images.unsplash.com/photo-1596395191799-239401737e6f?auto=format&fit=crop&q=80&w=800', category: 'Textiles' },
        { id: 'jaipur-gems', name: 'Jaipur Gems', location: 'Jaipur', craft: 'Gemstone Cutting', description: 'Precision cutting of precious and semi-precious stones.', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800', category: 'Jewelry' },
        { id: 'kashmir-wood', name: 'Kashmir Woodworks', location: 'Srinagar', craft: 'Walnut Carving', description: 'Intricate floral designs carved into premium walnut wood.', image: 'https://images.unsplash.com/photo-1615598218141-8f5b801a6bb6?auto=format&fit=crop&q=80&w=800', category: 'Woodwork' },
        { id: 'bengal-weavers', name: 'Bengal Looms', location: 'West Bengal', craft: 'Jamdani', description: 'Fine muslin textiles with intricate woven motifs.', image: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=800', category: 'Handloom' },
        { id: 'channapatna-toys', name: 'Channapatna Toys', location: 'Karnataka', craft: 'Wooden Toys', description: 'Eco-friendly wooden toys colored with vegetable dyes.', image: 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=800', category: 'Woodwork' },
    ];

    const states = [
        { name: 'Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800', craft: 'Blue Pottery, Block Printing' },
        { name: 'Gujarat', image: 'https://images.unsplash.com/photo-1606293926075-69a00ce49110?auto=format&fit=crop&q=80&w=800', craft: 'Textiles, Mirror Work' },
        { name: 'Kashmir', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800', craft: 'Pashmina, Woodwork' },
        { name: 'West Bengal', image: 'https://images.unsplash.com/photo-1628080373033-d96a75168670?auto=format&fit=crop&q=80&w=800', craft: 'Terracotta, Muslin' },
        { name: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800', craft: 'Coir, Spices' },
        { name: 'Varanasi', image: 'https://images.unsplash.com/photo-1561585403-418b39d59a5d?auto=format&fit=crop&q=80&w=800', craft: 'Silk Weaving' },
    ];

    const filteredArtisans = filter === 'All'
        ? artisans
        : artisans.filter(a => a.category === filter || a.craft.includes(filter) || a.location.includes(filter));

    const categories = ['All', 'Handloom', 'Pottery', 'Metal', 'Textiles', 'Jewelry', 'Woodwork'];

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative py-24 px-6 bg-foreground text-background overflow-hidden flex items-center justify-center min-h-[50vh]">
                <div className="absolute inset-0 opacity-40">
                    <img src="https://images.unsplash.com/photo-1455620611406-966ca68105b8?auto=format&fit=crop&q=80&w=2000" alt="Artisan Hands" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--color-gold)_0%,_transparent_60%)]"></div>
                <div className="relative mx-auto max-w-7xl text-center">
                    <span className="text-clay font-bold tracking-wider uppercase mb-2 inline-block">The Hands Behind the Art</span>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white font-serif">
                        {view === 'map' ? 'Crafts of India' : 'Meet Our Artisans'}
                    </h1>
                    <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto font-light">
                        {view === 'map'
                            ? 'Explore the diverse artistic heritage of India, region by region.'
                            : 'Every product has a face, a name, and a story. We connect you directly with the masters of Indian craftsmanship.'
                        }
                    </p>
                </div>
            </div>

            {view === 'map' ? (
                /* State-wise Map View */
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {states.map((state, i) => (
                            <div
                                key={i}
                                onClick={() => setFilter(state.name === 'Rajasthan' ? 'Jaipur' : state.name === 'Kashmir' ? 'Srinagar' : state.name)}
                                className="group cursor-pointer relative overflow-hidden rounded-2xl h-64 border border-gray-200 hover:shadow-xl transition-all"
                            >
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                    <img src={state.image} alt={state.name} className="h-full w-full object-cover" />
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="text-2xl font-serif font-bold">{state.name}</h3>
                                    <p className="text-sm opacity-90">{state.craft}</p>
                                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white/50 pb-1">
                                        View Artisans &rarr;
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div id="artisan-list" className="mt-20">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">{filter !== 'All' ? `Artisans in ${filter}` : 'Select a Region above'}</h2>
                        {filter !== 'All' ? (
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredArtisans.map((artisan, i) => (
                                    <ArtisanCard key={i} artisan={artisan} />
                                ))}
                                {filteredArtisans.length === 0 && (
                                    <p className="col-span-full text-center text-foreground/50">No artisans listed for this region yet.</p>
                                )}
                            </div>
                        ) : (
                            <p className="text-center text-foreground/50">Click a state card to see artisans from that region.</p>
                        )}
                    </div>
                </div>
            ) : (
                /* Standard Artisan List View */
                <>
                    {/* Spotlight Section */}
                    <section className="py-16 px-6 bg-white border-b border-gray-100">
                        <div className="mx-auto max-w-7xl">
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-stone-800 group cursor-pointer">
                                        <img
                                            src="https://images.unsplash.com/photo-1610189012906-4024dd4c8f5f?auto=format&fit=crop&q=80&w=1200"
                                            alt="Weaver Spotlight"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="text-sm font-medium bg-red-600 px-2 py-0.5 rounded inline-block mb-1">Featured Story</p>
                                            <h3 className="font-bold text-lg">Voices from the Loom: The Weavers of Varanasi</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <span className="text-clay font-bold uppercase tracking-wider text-sm mb-2 block">Artisan Spotlight</span>
                                    <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Preserving a 500-Year-Old Legacy</h2>
                                    <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
                                        Meet the Ansari family, who have been weaving magic into Banarasi silk for generations. In this exclusive feature, we explore their workshop, understand the intricate Jacquard technique, and see how they are adapting to modern designs while keeping tradition alive.
                                    </p>
                                    <Link href="/artisans/ramesh-sons" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-clay transition-colors">
                                        Read Their Story
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Filter & Grid Section */}
                    <div className="mx-auto max-w-7xl px-6 py-16">
                        {/* Filters */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-clay text-white shadow-lg scale-105'
                                        : 'bg-white text-foreground/70 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredArtisans.map((artisan, i) => (
                                <ArtisanCard key={i} artisan={artisan} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

function ArtisanCard({ artisan }: { artisan: any }) {
    return (
        <div className="flex flex-col bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="h-64 w-full relative overflow-hidden">
                <img src={artisan.image} alt={artisan.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground">
                    {artisan.craft}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif text-foreground">{artisan.name}</h3>
                    <span className="text-xs font-semibold text-clay bg-clay/10 px-2 py-1 rounded">{artisan.location}</span>
                </div>
                <p className="text-foreground/70 mb-4 text-sm flex-grow line-clamp-2">{artisan.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Verified Artisan</span>
                    <Link href={`/artisans/${artisan.id}`} className="text-clay font-semibold hover:text-gold transition-colors text-sm flex items-center gap-1 group-hover:gap-2">
                        View Profile <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ArtisansPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Artisans...</div>}>
            <ArtisansContent />
        </Suspense>
    );
}
