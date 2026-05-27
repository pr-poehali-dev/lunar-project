export default function RotatingTextAccent() {
  const text = "-- Биология + Инженерия --- "

  return (
    <div className="absolute bottom-20 right-8 w-24 h-24 md:w-32 md:h-32">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-12 h-12 md:w-16 md:h-16" fill="none">
            <circle cx="20" cy="20" r="8" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="3" fill="hsl(var(--primary))" opacity="0.7" />
            <line x1="20" y1="4" x2="20" y2="12" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <line x1="20" y1="28" x2="20" y2="36" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <line x1="4" y1="20" x2="12" y2="20" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <line x1="28" y1="20" x2="36" y2="20" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="absolute inset-0 animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text className="text-xs fill-white font-medium">
              <textPath href="#circle" startOffset="0%">
                {text.repeat(2)}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}