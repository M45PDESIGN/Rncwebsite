import { HeroCarousel } from "../HeroCarousel";
import { LatestFeed } from "../LatestFeed";
import { Sidebar } from "../Sidebar";
import { Ticker } from "../Ticker";

export function HomePage() {
  return (
    <>
      {/* Ticker */}
      <Ticker />

      {/* Hero Section - Full Width Grid */}
      <section className="pb-8">
        <HeroCarousel />
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-t border-white/5">
        
        {/* Left Column: Feed */}
        <div className="lg:col-span-8">
          <LatestFeed />
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 hidden lg:block pl-8 border-l border-white/5">
          <Sidebar />
        </aside>

      </div>

      {/* Mobile-only Sidebar content (stacked at bottom) */}
      <div className="lg:hidden py-12 border-t border-white/5">
        <Sidebar />
      </div>
    </>
  );
}
