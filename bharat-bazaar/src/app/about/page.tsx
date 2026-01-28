export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="relative py-32 px-6 overflow-hidden flex items-center justify-center min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1598555743842-8390b1464aa2?auto=format&fit=crop&q=80&w=2000" alt="Indian Heritage" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <span className="block text-clay font-bold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">Our Story</span>
                    <h1 className="text-5xl font-serif font-bold tracking-tight text-foreground sm:text-7xl mb-8 leading-tight animate-fade-in-up delay-100">
                        Reviving the <span className="text-clay italic">Soul</span> of India
                    </h1>
                    <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
                        Bharat Bazaar is not just a marketplace; it's a movement to bring Indian heritage to the forefront of the world.
                    </p>
                </div>
            </section>

            {/* Mission - Editorial Style */}
            <section id="mission" className="py-24 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="aspect-[4/5] rounded-lg relative overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1590490715978-0c64d4b17208?auto=format&fit=crop&q=80&w=800"
                                    alt="Artisan at work"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <span className="text-clay font-bold uppercase tracking-widest text-xs mb-4 block">Our Mission</span>
                            <h2 className="text-5xl font-serif font-medium text-foreground mb-8 leading-tight">
                                To Bridge the Gap Between <br />
                                <span className="italic text-foreground/50">Maker & World</span>
                            </h2>
                            <div className="space-y-6 text-lg text-foreground/70 font-light leading-relaxed">
                                <p>
                                    In a world of mass production, we stood still to listen to the rhythm of the loom and the spinning of the potter's wheel. We realized that thousands of years of art were fading away.
                                </p>
                                <p>
                                    Bharat Bazaar was born from a desire to preserve these stories. We are not just a platform; we are a custodian of culture, ensuring that the hands that create beauty are honored, respected, and paid fairly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values - Minimalist */}
            <section id="values" className="py-32 px-6 bg-stone-50">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-serif text-foreground">The Pillars of Our Craft</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="group">
                            <div className="h-16 w-16 mx-auto mb-8 flex items-center justify-center rounded-full border border-clay/20 text-clay transition-all duration-500 group-hover:bg-clay group-hover:text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3 className="text-xl font-serif font-medium mb-4">Authenticity</h3>
                            <p className="text-foreground/60 leading-relaxed px-4">Every item is verified to be 100% handmade by the artisans of the region. No factories, no fakes.</p>
                        </div>
                        <div className="group">
                            <div className="h-16 w-16 mx-auto mb-8 flex items-center justify-center rounded-full border border-sage-dark/20 text-sage-dark transition-all duration-500 group-hover:bg-sage-dark group-hover:text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="text-xl font-serif font-medium mb-4">Sustainability</h3>
                            <p className="text-foreground/60 leading-relaxed px-4">We use eco-friendly packaging and promote crafts that use natural, biodegradable materials.</p>
                        </div>
                        <div className="group">
                            <div className="h-16 w-16 mx-auto mb-8 flex items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className="text-xl font-serif font-medium mb-4">Empowerment</h3>
                            <p className="text-foreground/60 leading-relaxed px-4">We ensure fair wages that allow artisan communities to thrive, not just survive.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
