
export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;

    const formattedTitle = category.charAt(0).toUpperCase() + category.slice(1);

    // Mock Data based on category
    let articles = [
        { title: "The Art of Block Printing", date: "Oct 12, 2025", excerpt: "Discover the meticulous process behind Jaipur's famous block prints.", image: "https://images.unsplash.com/photo-1606293926075-69a00ce49110?auto=format&fit=crop&q=80&w=800" },
        { title: "Sustainable Weaving", date: "Nov 05, 2025", excerpt: "How eco-friendly dyes are changing the textile industry.", image: "https://images.unsplash.com/photo-1596395191799-239401737e6f?auto=format&fit=crop&q=80&w=800" },
    ];

    if (category === 'guides') {
        articles = [
            { title: "How to Identify Authentic Pashmina", date: "Sep 20, 2025", excerpt: "A buyer's guide to spotting real Kashmiri wool versus synthetic fakes.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" },
            { title: "Care Tips for Terracotta", date: "Aug 15, 2025", excerpt: "Keep your clay pots fitting for a lifetime with these simple tricks.", image: "https://images.unsplash.com/photo-1582845512747-e42005c956d4?auto=format&fit=crop&q=80&w=800" },
        ];
    } else if (category === 'culture') {
        articles = [
            { title: "Diwali: The Festival of Lights", date: "Nov 01, 2025", excerpt: "Exploring the traditions and crafts associated with India's biggest festival.", image: "https://images.unsplash.com/photo-1574679727653-b3c99026d30d?auto=format&fit=crop&q=80&w=800" },
            { title: "Tribal Art of Central India", date: "Jul 10, 2025", excerpt: "The deep symbolism hidden within Warli and Gond paintings.", image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=800" },
        ];
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-foreground text-background py-16 px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="text-clay font-bold uppercase tracking-wider text-sm mb-2 block">The Bharat Bazaar Blog</span>
                    <h1 className="text-4xl md:text-6xl font-black">{formattedTitle === 'Stories' ? 'Craft Stories' : (formattedTitle === 'Guides' ? 'Buying Guides' : 'Culture & Heritage')}</h1>
                    <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
                        Deep dive into the world of Indian craftsmanship, history, and handy tips.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {articles.map((article, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video w-full rounded-2xl mb-6 overflow-hidden relative">
                                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-foreground/50 mb-3">
                                <span>{category.toUpperCase()}</span>
                                <span>•</span>
                                <span>{article.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-clay transition-colors">{article.title}</h2>
                            <p className="text-foreground/70 leading-relaxed">{article.excerpt}</p>
                            <span className="inline-block mt-4 text-sm font-bold text-clay border-b border-clay/30 pb-0.5 group-hover:border-clay transition-all">Read Article</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Generate static params if we were doing SSG, but for dynamic route in dev this is fine.
