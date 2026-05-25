const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

const steps = [
  {
    number: "1",
    title: "Diagnóstico Gratuito",
    desc: "Em uma conversa de 30 minutos, mapeamos sua situação atual, identificamos os gargalos e avaliamos o potencial da sua clínica. Sem compromisso.",
    badge: "30 min · Gratuito",
  },
  {
    number: "2",
    title: "Proposta Personalizada",
    desc: "Desenvolvemos um plano de ação específico para a sua especialidade, região e objetivos. Sem fórmula pronta — cada médico tem um caminho único.",
    badge: "Estratégia sob medida",
  },
  {
    number: "3",
    title: "Implementação + Escala",
    desc: "Executamos o Método RG com acompanhamento semanal, relatórios de métricas e otimização contínua. Você acompanha cada número em tempo real.",
    badge: "Acompanhamento semanal",
  },
];

export default function Process() {
  return (
    <section
      id="como-comecar"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Glow center */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rg-accent/[0.03] rounded-full blur-[120px]" />
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
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`scroll-animate delay-${i * 100} relative p-7 rounded-2xl border border-rg-accent/10 bg-rg-deep/40 card-hover flex flex-col`}
            >
              {/* Connector line between cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-rg-accent/20 z-10" />
              )}

              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-rg-accent/10 border border-rg-accent/20 flex items-center justify-center mb-5">
                <span className="font-sora font-black text-xl text-rg-accent">
                  {step.number}
                </span>
              </div>

              {/* Badge */}
              <span className="inline-flex w-fit mb-4 px-3 py-1 rounded-full bg-rg-accent/5 border border-rg-accent/15 font-manrope text-xs font-semibold text-rg-accent">
                {step.badge}
              </span>

              <h3 className="font-sora font-bold text-xl text-white mb-3">
                {step.title}
              </h3>
              <p className="font-manrope text-sm text-rg-gray leading-relaxed flex-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center scroll-animate">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-rg-accent text-rg-black font-sora font-bold text-base rounded-full transition-all hover:bg-rg-glow hover:shadow-[0_0_50px_rgba(0,230,118,0.35)] hover:scale-105"
          >
            Começar meu Diagnóstico Agora
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M3 9h12M9 3l6 6-6 6" />
            </svg>
          </a>
          <p className="font-manrope text-sm text-rg-gray mt-4">
            Sem compromisso. A conversa é gratuita.
          </p>
        </div>
      </div>
    </section>
  );
}
