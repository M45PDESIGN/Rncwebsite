import { ShoppingBag, ArrowRight, Star, Filter, ChevronDown, X, Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Sidebar } from '../Sidebar';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from '../ui/dialog';
import { motion } from 'motion/react';

// This mocks the data you would get from the Shopify Storefront API
const products = [
  {
    id: 1,
    title: "Resonance 'Midnight' Hoodie",
    price: "€65.00",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop",
    status: "Best Seller",
    description: "Heavyweight cotton blend with embroidered Resonance insignia. Designed for the long nights and early mornings.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    title: "Alpine Frequency - 'Glacier' LP",
    price: "€28.00",
    category: "Vinyl",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1000&auto=format&fit=crop",
    status: "Limited Edition",
    description: "Double LP on 180g clear vinyl. Includes download code and 12-page booklet.",
    sizes: []
  },
  {
    id: 3,
    title: "Resonance Tote Bag",
    price: "€25.00",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop",
    status: "In Stock",
    description: "Durable canvas tote with reinforced handles. Perfect for carrying records.",
    sizes: []
  },
  {
    id: 4,
    title: "The Innsbruck Collective - Live Tape",
    price: "€15.00",
    category: "Cassette",
    image: "https://images.unsplash.com/photo-1594607617279-112eb4642c8b?q=80&w=1000&auto=format&fit=crop",
    status: "In Stock",
    description: "Limited run cassette tape of the legendary 2024 live performance.",
    sizes: []
  },
  {
    id: 5,
    title: "Minimalist Logo Tee",
    price: "€35.00",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    status: "New Arrival",
    description: "Soft organic cotton tee with subtle chest print. Relaxed fit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    title: "Slipmat 'Sacred Geometry'",
    price: "€18.00",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1000&auto=format&fit=crop",
    status: "Low Stock",
    description: "High quality felt slipmat for DJs and audiophiles.",
    sizes: []
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
      <div className="lg:col-span-8">
        
        {/* Shop Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 pb-8 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-liquid-gold text-xs font-bold uppercase tracking-widest mb-2">Resonance Store</div>
              <h1 className="text-5xl font-display font-bold text-white uppercase tracking-tight leading-none">
                Apparel & <br/>Physical Media
              </h1>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 text-platinum/50 text-xs font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-sm hover:border-liquid-gold/50 hover:text-liquid-gold cursor-pointer transition-colors">
                 <Filter className="w-3 h-3" />
                 Filter
               </div>
               <div className="flex items-center gap-2 text-liquid-gold text-xs font-bold uppercase tracking-widest bg-liquid-gold/10 border border-liquid-gold/30 px-4 py-2 rounded-sm cursor-pointer hover:bg-liquid-gold hover:text-midnight-black transition-all">
                 <ShoppingBag className="w-3 h-3" />
                 Cart (0)
               </div>
            </div>
          </div>
          
          {/* Category Tabs */}
          <div className="flex items-center gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Apparel', 'Vinyl', 'Cassette', 'Accessories'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap pb-2 border-b-2 transition-colors ${
                  activeCategory === cat 
                    ? 'text-white border-liquid-gold' 
                    : 'text-platinum/40 border-transparent hover:text-platinum'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Product (Hero) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           onClick={() => setSelectedProduct(products[0])}
           className="mb-16 bg-obsidian border border-white/5 group cursor-pointer relative overflow-hidden hover:border-liquid-gold/30 transition-colors"
        >
           <div className="grid md:grid-cols-2 h-full">
             <div className="relative aspect-square md:aspect-auto h-full min-h-[300px]">
               <ImageWithFallback
                 src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop"
                 alt="Featured"
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
               />
               <div className="absolute top-4 left-4 bg-liquid-gold text-midnight-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                 Limited Drop
               </div>
             </div>
             <div className="p-8 flex flex-col justify-center relative">
                <div className="mb-auto">
                  <div className="text-platinum/50 text-xs font-bold uppercase tracking-widest mb-2">Just Arrived</div>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">Resonance 'Midnight' Hoodie</h2>
                  <p className="text-platinum/70 text-sm leading-relaxed mb-6">
                    Heavyweight cotton blend with embroidered Resonance insignia. Designed for the long nights and early mornings.
                  </p>
                  <div className="text-2xl font-display font-bold text-liquid-gold">€65.00</div>
                </div>
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                   <button className="flex-1 bg-white text-midnight-black h-12 flex items-center justify-center text-xs font-bold uppercase tracking-widest hover:bg-liquid-gold transition-colors">
                     Quick View
                   </button>
                   <button className="h-12 w-12 border border-white/20 flex items-center justify-center hover:border-white transition-colors">
                     <Star className="w-4 h-4 text-liquid-gold" />
                   </button>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          {products.filter(p => activeCategory === 'All' || p.category === activeCategory).map((product) => (
            <motion.div 
              key={product.id} 
              variants={item}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-obsidian border border-white/5">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {product.status === "Best Seller" && (
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-midnight-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-3 h-3 fill-midnight-black" />
                    Hot
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                   <span className="text-white text-[10px] font-bold uppercase tracking-widest">Quick Add</span>
                   <ShoppingBag className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h2 className="text-lg font-display font-bold text-white leading-tight group-hover:underline decoration-liquid-gold underline-offset-4 decoration-2 transition-all">
                    {product.title}
                  </h2>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3">
                   <div className="text-platinum/40 text-[10px] uppercase tracking-widest">{product.category}</div>
                   <span className="text-sm font-display font-bold text-liquid-gold">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Membership Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden border border-liquid-gold/20 bg-gradient-to-r from-liquid-gold/10 to-transparent p-8 md:p-12"
        >
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-center md:text-left">
               <div className="text-liquid-gold text-xs font-bold uppercase tracking-widest mb-2">Resonance Membership</div>
               <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Unlock 20% Off Everything</h3>
               <p className="text-platinum/80 text-sm max-w-lg">Join our inner circle for exclusive discounts, early access to vinyl drops, and free entry to monthly showcases.</p>
             </div>
             <button className="shrink-0 px-8 py-4 bg-liquid-gold text-midnight-black font-bold uppercase tracking-widest hover:bg-white transition-colors text-xs">
               Join for Free
             </button>
           </div>
           {/* Decorative Element */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-liquid-gold/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>

      <aside className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5">
        <Sidebar />
      </aside>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
         <DialogContent className="bg-midnight-black border-white/10 text-white max-w-4xl p-0 overflow-hidden gap-0">
            <DialogHeader className="hidden">
              <DialogTitle>{selectedProduct?.title}</DialogTitle>
              <DialogDescription>Product Details</DialogDescription>
            </DialogHeader>
            
            {selectedProduct && (
              <div className="grid md:grid-cols-2">
                 <div className="bg-obsidian aspect-square relative">
                    <ImageWithFallback 
                      src={selectedProduct.image} 
                      alt={selectedProduct.title} 
                      className="w-full h-full object-cover" 
                    />
                    {selectedProduct.status && (
                      <div className="absolute top-4 left-4 bg-liquid-gold text-midnight-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                        {selectedProduct.status}
                      </div>
                    )}
                 </div>
                 <div className="p-8 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                         <div className="text-platinum/50 text-xs font-bold uppercase tracking-widest mb-2">{selectedProduct.category}</div>
                         <h2 className="text-3xl font-display font-bold text-white leading-none mb-2">{selectedProduct.title}</h2>
                         <div className="text-xl text-liquid-gold font-bold">{selectedProduct.price}</div>
                      </div>
                      <button onClick={() => setSelectedProduct(null)} className="text-platinum/50 hover:text-white">
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="h-px bg-white/10 my-6"></div>

                    <p className="text-platinum/70 leading-relaxed mb-8">
                      {selectedProduct.description}
                    </p>

                    {selectedProduct.sizes.length > 0 && (
                      <div className="mb-8">
                        <div className="text-xs font-bold uppercase tracking-widest text-platinum/50 mb-3">Select Size</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.sizes.map((size) => (
                            <button key={size} className="min-w-[3rem] h-10 border border-white/20 flex items-center justify-center text-sm font-bold hover:bg-white hover:text-midnight-black transition-colors">
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto space-y-4">
                       <button className="w-full py-4 bg-white text-midnight-black font-bold uppercase tracking-widest hover:bg-liquid-gold transition-colors">
                         Add to Cart
                       </button>
                       <div className="flex items-center justify-center gap-2 text-xs text-platinum/40">
                         <Check className="w-3 h-3" />
                         <span>In stock and ready to ship</span>
                       </div>
                    </div>
                 </div>
              </div>
            )}
         </DialogContent>
      </Dialog>

    </div>
  );
}
