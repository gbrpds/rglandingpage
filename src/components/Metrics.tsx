const metrics = [
  {
    value: "5+",
    label: "Médicos atendidos",
    sub: "e crescendo",
  },
  {
    value: "30",
    label: "Dias para primeiros resultados",
    sub: "em média",
  },
  {
    value: "100%",
    label: "Foco em médicos",
    sub: "especialização exclusiva",
  },
  {
    value: "5",
    label: "Etapas do método",
    sub: "sistema proprietário",
  },
];

export default function Metrics() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-rg-deep/25 pointer-events-none" />
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/20 to-transparent" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`scroll-animate delay-${i * 100} text-center`}
            >
              <div className="font-sora font-black text-4xl sm:text-5xl text-rg-accent mb-2 leading-none">
                {metric.value}
              </div>
              <div className="font-manrope font-semibold text-sm text-white mb-1">
                {metric.label}
              </div>
              <div className="font-manrope text-xs text-rg-gray/60">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
