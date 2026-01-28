
import Link from 'next/link';

export default async function ArtisanProfile({ params }: { params: Promise<{ id: string }> }) {
    // In a real app, we would fetch data based on params.id
    // For now, we'll mock some generic details that would apply to any artisan
    const { id } = await params;
    const artisanId = id;

    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Profile Header Image */}
            <div className="h-64 sm:h-80 w-full bg-stone-300 relative">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12">
                    <div className="mx-auto max-w-7xl">
                        <span className="bg-clay text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">Verified Artisan</span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Artisan Profile: {decodeURIComponent(artisanId).replace('-', ' ')}</h1>
                        <p className="text-white/90 text-lg">Master Craftsman • Est. 1985</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Sidebar Info */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-foreground mb-4">About the Maker</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center">📍</div>
                                <div>
                                    <p className="text-sm text-foreground/60">Location</p>
                                    <p className="font-semibold text-foreground">Varanasi, Uttar Pradesh</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center">⚒️</div>
                                <div>
                                    <p className="text-sm text-foreground/60">Specialty</p>
                                    <p className="font-semibold text-foreground">Handloom Weaving</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center">👥</div>
                                <div>
                                    <p className="text-sm text-foreground/60">Team Size</p>
                                    <p className="font-semibold text-foreground">15 Artisans</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-3 bg-foreground text-background font-semibold rounded-xl hover:bg-clay transition-colors">
                            Contact Artisan
                        </button>
                    </div>

                    <div className="bg-clay/5 p-6 rounded-2xl border border-clay/10">
                        <h3 className="text-lg font-bold text-clay mb-2">Authenticity Guaranteed</h3>
                        <p className="text-sm text-foreground/70">
                            All products from this artisan are verified for authenticity and fair trade practices.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Their Story</h2>
                    <div className="prose prose-lg text-foreground/80 mb-12">
                        <p>
                            Generations of skill passed down from father to son, mother to daughter. This artisan family has been preserving the ancient techniques of their craft for decades.
                        </p>
                        <p>
                            Using only natural materials and traditional tools, they create pieces that are not just objects, but living history. Each item takes days, sometimes weeks, to complete, ensuring the highest level of quality and attention to detail.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-6">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="aspect-square bg-stone-200 flex items-center justify-center text-stone-400">Product {i}</div>
                                <div className="p-4">
                                    <h4 className="font-bold text-foreground">Handcrafted Item #{i}</h4>
                                    <p className="text-sm text-foreground/60 mb-2">By {decodeURIComponent(artisanId).replace('-', ' ')}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold">₹1,200</span>
                                        <span className="text-clay text-sm font-medium">View &rarr;</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
