import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Sidebar } from '../Sidebar';

export function FeaturesPage() {
  const features = [
    {
      id: 1,
      title: "The Rise of Innsbruck's Electronic Underground",
      subtitle: "How a small alpine city became the unlikely capital of experimental techno, fostering a scene that rivals Berlin's underground.",
      author: "Sarah Müller",
      date: "Jan 25, 2025",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
      category: "SCENE REPORT"
    },
    {
      id: 2,
      title: "Modular Synthesis in the Mountains",
      subtitle: "We trekked to a remote cabin where a collective of artists are recording the sounds of melting glaciers.",
      author: "Felix Hofer",
      date: "Jan 20, 2025",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop",
      category: "INTERVIEW"
    },
    {
      id: 3,
      title: "The Lost Tapes of Austrian Synth-Pop",
      subtitle: "Uncovering the forgotten gems of the 80s that paved the way for today's producers.",
      author: "Marcus Weber",
      date: "Jan 15, 2025",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop",
      category: "HISTORY"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
      <div className="lg:col-span-8">
        <div className="border-b border-white/10 pb-6 mb-8">
          <h1 className="text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">Features</h1>
          <p className="text-platinum/60 text-lg">Long-form journalism and in-depth storytelling.</p>
        </div>

        <div className="space-y-12">
          {features.map((feature) => (
            <div key={feature.id} className="group cursor-pointer">
              <div className="relative aspect-[21/9] mb-6 overflow-hidden bg-obsidian">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 bg-midnight-black px-4 py-2 text-liquid-gold text-xs font-bold uppercase tracking-widest">
                  {feature.category}
                </div>
              </div>
              
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 leading-none group-hover:text-electric-gold transition-colors">
                  {feature.title}
                </h2>
                <p className="text-platinum/70 text-lg leading-relaxed mb-4 font-serif">
                  {feature.subtitle}
                </p>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-platinum/40">
                  <span className="text-liquid-gold">By {feature.author}</span>
                  <span>•</span>
                  <span>{feature.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-liquid-gold/30 text-liquid-gold hover:bg-liquid-gold hover:text-midnight-black text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
            Load More Features
          </button>
        </div>
      </div>

      <aside className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5">
        <Sidebar />
      </aside>
    </div>
  );
}
