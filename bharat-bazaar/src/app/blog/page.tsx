
import Link from 'next/link';

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-background">
            <div className="relative py-24 px-6 text-center overflow-hidden flex items-center justify-center min-h-[40vh]">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=2000" alt="Culture & Heritage" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-transparent"></div>
                </div>
                <div className="relative z-10">
                    <span className="text-clay font-bold tracking-widest uppercase text-xs mb-3 block">Stories form the Roots</span>
                    <h1 className="text-5xl font-bold font-serif text-white mb-8">Bharat Bazaar Blog</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Link href="/blog/stories" className="group relative h-96 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform">
                    <img src="https://images.unsplash.com/photo-1596395191799-239401737e6f?auto=format&fit=crop&q=80&w=800" alt="Craft Stories" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-left">
                        <h2 className="text-3xl font-bold text-white mb-2 font-serif">Craft Stories</h2>
                        <p className="text-white/80">Meet the makers and see the process.</p>
                    </div>
                </Link>
                <Link href="/blog/guides" className="group relative h-96 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform">
                    <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" alt="Buying Guides" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-left">
                        <h2 className="text-3xl font-bold text-white mb-2 font-serif">Buying Guides</h2>
                        <p className="text-white/80">Tips on authenticity and care.</p>
                    </div>
                </Link>
                <Link href="/blog/culture" className="group relative h-96 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform">
                    <img src="https://images.unsplash.com/photo-1574679727653-b3c99026d30d?auto=format&fit=crop&q=80&w=800" alt="Culture" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-left">
                        <h2 className="text-3xl font-bold text-white mb-2 font-serif">Culture & Heritage</h2>
                        <p className="text-white/80">Deep dives into Indian history.</p>
                    </div>
                </Link>
            </div>
        </div>
        </div >
    )
}
