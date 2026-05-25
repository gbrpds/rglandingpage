const metrics = [
  {
    value: "+80",
    label: "Médicos atendidos",
    sub: "e crescendo",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#00E676" strokeWidth="1.5">
        <circle cx="10" cy="7" r="4" />
        <path d="M2 18a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    value: "5",
    label: "Etapas do Método RG",
    sub: "sistema proprietário",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#00E676" strokeWidth="1.5">
        <path d="M3 17l4-4 4 4 6-8" />
        <circle cx="3" cy="17" r="1" fill="#00E676" />
        <circle cx="7" cy="13" r="1" fill="#00E676" />
        <circle cx="11" cy="17" r="1" fill="#00E676" />
        <circle cx="17" cy="9" r="1" fill="#00E676" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Foco em médicos",
    sub: "nicho exclusivo",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#00E676" strokeWidth="1.5">
        <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L2.2 7.7l5.4-.8z" />
      </svg>
    ),
  },
  {
    value: "30d",
    label: "Para primeiros resultados",
    sub: "primeiros indicadores",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#00E676" strokeWidth="1.5">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 5v5l3 3" />
      </svg>
    ),
  },
];

export default function Metrics() {
  return (
    <section className="relative py-14 px-6">
      <div className="absolute inset-0 bg-rg-deep/25" />
      <div className="glow-divider absolute top-0 left-0 right-0" />
      <div className="glow-divider absolute bottom-0 left-0 right-0" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`scroll-animate delay-${i * 100} text-center flex flex-col items-center gap-3`}
            >
              <div className="w-10 h-10 rounded-xl bg-rg-accent/5 border border-rg-accent/10 flex items-center justify-center mb-1">
                {m.icon}
              </div>
              <div className="font-sora font-black text-4xl sm:text-5xl text-rg-accent leading-none">
                {m.value}
              </div>
              <div>
                <div className="font-sora font-semibold text-sm text-white mb-0.5">
                  {m.label}
                </div>
                <div className="font-manrope text-xs text-rg-gray/60">{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
