export default function Footer() {
  return (
    <footer className="w-full px-6 relative py-[0] mt-16 h-auto mb-0 bg-card">
      <div className="absolute top-8 right-6 text-accent text-2xl">+</div>
      <div className="absolute top-1/2 right-12 text-accent text-lg transform -translate-y-1/2">*</div>
      <div className="absolute bottom-12 right-20 text-accent text-xl">+</div>
      <div className="absolute top-16 right-32 text-accent text-sm">*</div>
      <div className="absolute bottom-8 right-8 text-accent text-lg">*</div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between pt-12 pb-4">
          <div className="flex-1 max-w-lg">
            <h2
              className="text-foreground text-4xl md:text-5xl mb-8 leading-[3.5rem] md:leading-[4rem] font-semibold text-center md:text-left mt-0"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Природа знает лучше.
            </h2>

            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Нейробионика — не просто протезирование, это симбиоз биологии и техники.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Мы научились не только «читать» сигналы мозга, но и «писать» в него.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Будущее требует инженерных решений и этической ответственности.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Анимированная нейрон-схема */}
              <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow opacity-30">
                <circle cx="100" cy="100" r="90" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" strokeDasharray="4 6" />
                <circle cx="100" cy="100" r="60" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" strokeDasharray="2 8" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-40 h-40">
                  <circle cx="50" cy="50" r="12" fill="hsl(var(--accent))" opacity="0.2" />
                  <circle cx="50" cy="50" r="6" fill="hsl(var(--accent))" opacity="0.6" />
                  {[0,45,90,135,180,225,270,315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180
                    const x2 = 50 + 28 * Math.cos(rad)
                    const y2 = 50 + 28 * Math.sin(rad)
                    return <line key={i} x1="50" y1="50" x2={x2} y2={y2} stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.5" />
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="w-full px-6 py-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 border-t border-border mt-8">
          <div className="flex flex-col md:flex-row gap-2 text-center md:text-left">
            <h2 className="text-foreground font-mono text-xl font-bold">Нейробионика меняет нашу реальность</h2>
          </div>

          <a href="#top">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center gap-2">
              К началу
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10M7 17L17 7" />
              </svg>
            </button>
          </a>
        </div>

        <div className="w-full px-6 py-4 border-t border-border flex md:flex-row items-center justify-between gap-2 flex-row">
          <p className="text-muted-foreground text-sm font-mono">2026 Нейробионика</p>
          <p className="text-muted-foreground text-sm font-mono">poehali.dev</p>
        </div>
      </div>
    </footer>
  )
}