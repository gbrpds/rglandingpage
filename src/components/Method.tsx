const steps = [
  {
    number: "01",
    title: "Diagnóstico Estratégico",
    desc: "Raio-x completo do seu digital, operação, funil atual, concorrência local e posicionamento. Entendemos onde você está antes de dizer onde pode chegar.",
    highlight: "Ponto de partida",
  },
  {
    number: "02",
    title: "Estrutura de Aquisição",
    desc: "Tráfego pago + criativos estratégicos calibrados para a sua especialidade e região. Cada real investido tem uma hipótese clara.",
    highlight: "Tráfego qualificado",
  },
  {
    number: "03",
    title: "Estrutura de Conversão",
    desc: "WhatsApp comercial estruturado, script de atendimento para recepção e fluxo de agendamento otimizado. O lead não morre mais no caminho.",
    highlight: "Lead → Paciente",
  },
  {
    number: "04",
    title: "Otimização de Agenda",
    desc: "Aumento de ticket médio, redução de no-show, estratégia de retorno e fidelização. A agenda trabalha por você.",
    highlight: "Receita maximizada",
  },
  {
    number: "05",
    title: "Escala Controlada",
    desc: "Crescimento previsível com métricas claras: CPL, taxa de conversão, ROI mensal. Você escala o que funciona.",
    highlight: "Crescimento sustentável",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-rg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
          <span className="section-tag mb-6 justify-center">
            Metodologia
          </span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-tight mb-5">
            O{" "}
            <span className="text-rg-accent">Método RG</span>
          </h2>
          <p className="font-manrope text-rg-gray text-lg leading-relaxed">
            Cinco etapas para transformar sua clínica em uma operação de
            crescimento previsível.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rg-accent/30 via-rg-accent/10 to-transparent md:-translate-x-px hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`scroll-animate delay-${Math.min(i * 100, 400)} relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0`}
                >
                  {/* Content — left side on even, right on odd */}
                  <div
                    className={`w-full md:w-[calc(50%-3rem)] ${
                      isRight ? "md:pr-12 md:text-right" : "md:order-last md:pl-12"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border border-rg-accent/10 bg-rg-deep/50 card-hover ${
                        isRight ? "" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isRight ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-rg-accent/10 border border-rg-accent/20 font-manrope text-xs font-semibold text-rg-accent">
                          {step.highlight}
                        </span>
                      </div>
                      <h3
                        className={`font-sora font-bold text-xl text-white mb-3 ${
                          isRight ? "md:text-right" : ""
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`font-manrope text-sm text-rg-gray leading-relaxed ${
                          isRight ? "md:text-right" : ""
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-rg-black border-2 border-rg-accent/30 items-center justify-center z-10">
                    <span className="font-sora font-black text-sm text-rg-accent">
                      {step.number}
                    </span>
                  </div>

                  {/* Mobile number badge */}
                  <div className="sm:hidden flex-shrink-0 w-10 h-10 rounded-full bg-rg-deep border border-rg-accent/30 flex items-center justify-center">
                    <span className="font-sora font-black text-xs text-rg-accent">
                      {step.number}
                    </span>
                  </div>

                  {/* Spacer for the other side */}
                  <div className={`hidden md:block w-[calc(50%-3rem)] ${isRight ? "md:order-last" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center scroll-animate">
          <div className="inline-block p-6 rounded-2xl border border-rg-accent/15 bg-rg-deep/40">
            <p className="font-sora font-semibold text-lg text-white mb-1">
              Do diagnóstico à escala.
            </p>
            <p className="font-manrope text-sm text-rg-gray">
              Cada etapa é implementada com acompanhamento semanal e métricas
              rastreadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
