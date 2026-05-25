const steps = [
  {
    number: "01",
    title: "Diagnóstico Estratégico",
    desc: "Raio-x completo do seu digital, operação, funil atual, concorrência local e posicionamento. Entendemos onde você está antes de dizer onde pode chegar.",
    highlight: "Ponto de partida",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="9" />
        <path d="M11 6v5l3.5 2" />
        <path d="M2 11h2M18 11h2M11 2v2M11 18v2" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Estrutura de Aquisição",
    desc: "Tráfego pago + criativos estratégicos calibrados para a sua especialidade e região. Cada real investido tem uma hipótese clara.",
    highlight: "Tráfego qualificado",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17l5-5 4 4 7-9" />
        <circle cx="20" cy="4" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Estrutura de Conversão",
    desc: "WhatsApp comercial estruturado, script de atendimento para recepção e fluxo de agendamento otimizado. O lead não morre mais no caminho.",
    highlight: "Lead → Paciente",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l4 4 4-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        <path d="M8 10h8M8 6h8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Otimização de Agenda",
    desc: "Aumento de ticket médio, redução de no-show, estratégia de retorno e fidelização. A agenda trabalha por você.",
    highlight: "Receita maximizada",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="16" height="16" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h16" />
        <path d="M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Escala Controlada",
    desc: "Crescimento previsível com métricas claras: CPL, taxa de conversão, ROI mensal. Você escala o que funciona.",
    highlight: "Crescimento sustentável",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Method() {
  return (
    <section id="metodo" className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-rg-accent/[0.02] to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rg-accent/[0.025] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
          <span className="section-tag mb-6 justify-center">Metodologia</span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-tight mb-5">
            O <span className="text-rg-accent">Método RG</span>
          </h2>
          <p className="font-manrope text-rg-gray text-lg leading-relaxed">
            Cinco etapas para transformar sua clínica em uma operação de
            crescimento previsível.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`scroll-animate delay-${Math.min(i * 100, 400)} relative p-7 rounded-2xl border border-rg-accent/10 bg-rg-deep/40 card-hover flex flex-col ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className="font-sora font-black text-5xl leading-none"
                  style={{ color: "rgba(0,230,118,0.15)" }}
                >
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-rg-surface border border-rg-accent/15 flex items-center justify-center text-rg-accent">
                  {step.icon}
                </div>
              </div>

              {/* Badge */}
              <span className="inline-flex w-fit mb-4 px-2.5 py-1 rounded-md bg-rg-accent/5 border border-rg-accent/15 font-manrope text-[11px] font-semibold text-rg-accent tracking-wide">
                {step.highlight}
              </span>

              <h3 className="font-sora font-bold text-xl text-white mb-3">
                {step.title}
              </h3>
              <p className="font-manrope text-sm text-rg-gray leading-relaxed flex-1">
                {step.desc}
              </p>

              {/* Step connector line (decorative) */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 z-10 hidden" />
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center scroll-animate">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-rg-accent/15 bg-rg-deep/40">
            <svg width="20" height="20" fill="none" stroke="#00E676" strokeWidth="1.5">
              <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L2.2 7.7l5.4-.8z" />
            </svg>
            <p className="font-manrope text-sm text-rg-gray">
              Do diagnóstico à escala — com{" "}
              <span className="text-white font-medium">
                acompanhamento semanal e métricas rastreadas.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
