const differentials = [
  {
    number: "01",
    title: "Sistema, não serviço",
    desc: "Agências entregam posts e relatórios de alcance. Nós entregamos um processo completo — do clique ao paciente na cadeira.",
  },
  {
    number: "02",
    title: "Especialização exclusiva",
    desc: "Só atendemos médicos. Cada etapa do método foi testada e refinada para a realidade da medicina particular brasileira.",
  },
  {
    number: "03",
    title: "Número é nossa linguagem",
    desc: "CPL, taxa de conversão, ROI mensal. Cada decisão é guiada por dado real. Nada de 'parece que está indo bem'.",
  },
];

// Decorative dashboard mock
function DashboardMock() {
  return (
    <div className="relative w-full rounded-2xl border border-rg-accent/15 bg-rg-deep/60 p-5 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-manrope text-xs text-rg-gray/50 mb-1">ROI Mensal</p>
          <p
            className="font-sora font-black text-3xl text-rg-accent"
            style={{ textShadow: "0 0 20px rgba(0,230,118,0.4)" }}
          >
            +247%
          </p>
        </div>
        <div className="text-right">
          <p className="font-manrope text-xs text-rg-gray/50 mb-1">CPL</p>
          <p className="font-sora font-bold text-lg text-white">R$ 38</p>
        </div>
      </div>

      {/* Chart bars */}
      <div className="flex items-end gap-1.5 h-24 mb-4">
        {[30, 45, 38, 60, 55, 72, 65, 80, 88, 76, 92, 100].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div
              className="w-full rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === 11
                  ? "linear-gradient(to top, #00E676, #7CFF4D)"
                  : `rgba(0, 230, 118, ${0.08 + h * 0.003})`,
                boxShadow: i === 11 ? "0 0 12px rgba(0,230,118,0.4)" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom row metrics */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-rg-accent/10">
        {[
          { label: "Consultas/mês", value: "124" },
          { label: "Taxa conversão", value: "34%" },
          { label: "No-show", value: "↓ 61%" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <p className="font-sora font-bold text-sm text-white">{m.value}</p>
            <p className="font-manrope text-[10px] text-rg-gray/50 mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Glow overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-rg-accent/[0.03] to-transparent pointer-events-none" />
    </div>
  );
}

export default function Solution() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-rg-deep/15">
      <div className="glow-divider absolute top-0 left-0 right-0" />
      <div className="glow-divider absolute bottom-0 left-0 right-0" />

      {/* Background visual */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 line-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center mb-16">
          {/* Left text */}
          <div className="scroll-animate-left">
            <span className="section-tag mb-6 block">Nossa proposta</span>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-[1.08] tracking-tight mb-6">
              Não somos uma{" "}
              <span className="relative inline-block">
                agência.
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-rg-accent/30" />
              </span>
              <br />
              Somos um{" "}
              <span className="text-rg-accent">sistema.</span>
            </h2>
            <p className="font-manrope text-rg-gray text-lg leading-relaxed mb-8">
              A RG Performance é uma empresa de{" "}
              <span className="text-white font-medium">
                estruturação comercial para médicos.
              </span>{" "}
              Entregamos um sistema completo de aquisição e conversão de pacientes
              particulares — não posts bonitos.
            </p>

            {/* Quote */}
            <div className="flex items-start gap-3 p-5 rounded-xl border border-rg-accent/15 bg-rg-black/50">
              <span className="w-0.5 h-full bg-rg-accent/50 rounded-full flex-shrink-0 self-stretch min-h-[40px]" />
              <p className="font-manrope text-sm text-rg-gray leading-relaxed italic">
                "Estruturamos a operação comercial de médicos para gerar um fluxo
                previsível de consultas particulares com custo de aquisição
                controlado — sem dependência de indicação."
              </p>
            </div>
          </div>

          {/* Right: Dashboard mock */}
          <div className="scroll-animate-right">
            <DashboardMock />
          </div>
        </div>

        {/* Comparison */}
        <div className="scroll-animate mb-14">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-red-500/10 bg-red-500/[0.03]">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-5 rounded-md bg-red-500/15 flex items-center justify-center flex-shrink-0">
                  <svg width="9" height="9" fill="none" stroke="#ef4444" strokeWidth="2.5">
                    <path d="M1.5 1.5l6 6M7.5 1.5l-6 6" />
                  </svg>
                </span>
                <span className="font-sora font-semibold text-sm text-white/50">
                  O que agências entregam
                </span>
              </div>
              <ul className="space-y-2">
                {["Posts no Instagram", "Relatório de impressões", "Criativos genéricos", "Reuniões de alinhamento"].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-manrope text-sm text-rg-gray/50">
                    <span className="w-1 h-1 rounded-full bg-rg-gray/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-rg-accent/20 bg-rg-accent/[0.04]">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-5 rounded-md bg-rg-accent/15 flex items-center justify-center flex-shrink-0">
                  <svg width="9" height="9" fill="none" stroke="#00E676" strokeWidth="2.5">
                    <path d="M1 4.5l2.5 2.5 5-5" />
                  </svg>
                </span>
                <span className="font-sora font-semibold text-sm text-rg-accent">
                  O que a RG Performance entrega
                </span>
              </div>
              <ul className="space-y-2">
                {["Sistema de aquisição de pacientes", "Funil de conversão estruturado", "Métricas reais: CPL e ROI", "Otimização contínua de agenda", "Escala previsível e controlada"].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-manrope text-sm text-white">
                    <span className="w-1 h-1 rounded-full bg-rg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div className="grid md:grid-cols-3 gap-4">
          {differentials.map((diff, i) => (
            <div
              key={diff.number}
              className={`scroll-animate delay-${i * 100} p-7 rounded-2xl border border-rg-accent/10 bg-rg-black/60 card-hover`}
            >
              <div className="font-sora font-black text-5xl text-rg-accent/15 mb-4 leading-none">
                {diff.number}
              </div>
              <h3 className="font-sora font-bold text-lg text-white mb-3">{diff.title}</h3>
              <p className="font-manrope text-sm text-rg-gray leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
