const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

const steps = [
  {
    number: "1",
    title: "Diagnóstico Gratuito",
    desc: "Em 30 minutos mapeamos sua situação atual, identificamos os gargalos e avaliamos o potencial da sua clínica. Sem compromisso.",
    badge: "30 min · Gratuito",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Proposta Personalizada",
    desc: "Um plano de ação específico para a sua especialidade, região e objetivos. Sem fórmula pronta — cada médico tem um caminho único.",
    badge: "Estratégia sob medida",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Implementação + Escala",
    desc: "Executamos o Método RG com acompanhamento semanal, relatórios de métricas e otimização contínua. Você acompanha cada número.",
    badge: "Acompanhamento semanal",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17l4-5 4 3 5-7 5 4" />
        <path d="M21 21H3" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="como-comecar" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 scroll-animate">
          <span className="section-tag mb-6 justify-center">Como começar</span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-tight mb-5">
            Três passos.{" "}
            <span className="text-rg-accent">Sem burocracia.</span>
          </h2>
          <p className="font-manrope text-rg-gray text-lg leading-relaxed">
            Começamos com uma conversa, não com um contrato.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-4 mb-14">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gradient-to-r from-rg-accent/30 via-rg-accent/15 to-rg-accent/30 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`scroll-animate delay-${i * 100} relative p-7 rounded-2xl border border-rg-accent/10 bg-rg-deep/40 card-hover flex flex-col z-10`}
            >
              {/* Number circle */}
              <div className="w-11 h-11 rounded-full border border-rg-accent/25 bg-rg-surface flex items-center justify-center mb-5 text-rg-accent">
                {step.icon}
              </div>

              {/* Badge */}
              <span className="inline-flex w-fit mb-4 px-2.5 py-1 rounded-md bg-rg-accent/5 border border-rg-accent/12 font-manrope text-[11px] font-semibold text-rg-accent">
                {step.badge}
              </span>

              <h3 className="font-sora font-bold text-xl text-white mb-3">
                {step.title}
              </h3>
              <p className="font-manrope text-sm text-rg-gray leading-relaxed flex-1">
                {step.desc}
              </p>

              {/* Step number */}
              <div className="absolute top-5 right-6 font-sora font-black text-4xl text-rg-accent/10 leading-none">
                {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center scroll-animate">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-split inline-flex"
          >
            <span className="btn-split-text text-base px-8 py-4">
              Começar meu Diagnóstico Agora
            </span>
            <span className="btn-split-icon px-5">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M4 9h10M9 4l5 5-5 5" />
              </svg>
            </span>
          </a>
          <p className="font-manrope text-sm text-rg-gray mt-5">
            Sem compromisso. A conversa inicial é gratuita.
          </p>
        </div>
      </div>
    </section>
  );
}
