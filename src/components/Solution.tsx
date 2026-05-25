const differentials = [
  {
    number: "01",
    title: "Sistema, não serviço",
    desc: "Agências entregam posts e relatórios de alcance. Nós entregamos um processo completo de aquisição e conversão — do clique ao paciente na cadeira.",
  },
  {
    number: "02",
    title: "Especialização exclusiva",
    desc: "Só atendemos médicos. Isso significa que cada etapa do nosso método foi testada e refinada para a realidade da medicina particular brasileira.",
  },
  {
    number: "03",
    title: "Número é nossa linguagem",
    desc: "CPL, taxa de conversão, ROI mensal. Cada decisão é guiada por dado real. Nada de 'parece que está indo bem'.",
  },
];

export default function Solution() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-rg-deep/20">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/20 to-transparent" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Main statement */}
        <div className="mb-20 scroll-animate">
          <span className="section-tag mb-6 block">Nossa proposta</span>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-tight mb-6">
                Não somos uma{" "}
                <span className="relative inline-block">
                  agência
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-rg-accent/40" />
                </span>
                .<br />
                Somos um{" "}
                <span className="text-rg-accent">sistema.</span>
              </h2>
              <p className="font-manrope text-rg-gray text-lg leading-relaxed mb-8">
                A RG Performance é uma empresa de{" "}
                <span className="text-white font-medium">
                  estruturação comercial para médicos
                </span>
                . Entregamos um sistema completo de aquisição e conversão de
                pacientes particulares — não posts bonitos.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-rg-accent/15 bg-rg-black/40">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#00E676"
                  strokeWidth="1.5"
                  className="mt-0.5 flex-shrink-0"
                >
                  <path d="M8 12.5l2.5 2.5 5-5" />
                  <circle cx="10" cy="10" r="9" />
                </svg>
                <p className="font-manrope text-sm text-rg-gray leading-relaxed italic">
                  "Estruturamos a operação comercial de médicos para gerar um
                  fluxo previsível de consultas particulares com custo de
                  aquisição controlado — sem dependência de indicação."
                </p>
              </div>
            </div>

            {/* Visual comparison */}
            <div className="space-y-3">
              {/* Agency column */}
              <div className="p-5 rounded-2xl border border-red-500/10 bg-red-500/[0.03]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                    >
                      <path d="M2 2l6 6M8 2l-6 6" />
                    </svg>
                  </span>
                  <span className="font-sora font-semibold text-sm text-white/60">
                    O que agências entregam
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Posts no Instagram",
                    "Relatório de impressões",
                    "Criativos genéricos",
                    "Reuniões de alinhamento",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-manrope text-sm text-rg-gray/60"
                    >
                      <span className="w-1 h-1 rounded-full bg-rg-gray/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RG column */}
              <div className="p-5 rounded-2xl border border-rg-accent/20 bg-rg-accent/[0.04]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-5 h-5 rounded-full bg-rg-accent/20 flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      fill="none"
                      stroke="#00E676"
                      strokeWidth="2.5"
                    >
                      <path d="M1.5 5l3 3 5-5" />
                    </svg>
                  </span>
                  <span className="font-sora font-semibold text-sm text-rg-accent">
                    O que a RG Performance entrega
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Sistema de aquisição de pacientes",
                    "Funil de conversão estruturado",
                    "Métricas reais: CPL e ROI",
                    "Otimização contínua de agenda",
                    "Escala previsível e controlada",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-manrope text-sm text-white"
                    >
                      <span className="w-1 h-1 rounded-full bg-rg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div className="grid md:grid-cols-3 gap-5">
          {differentials.map((diff, i) => (
            <div
              key={diff.number}
              className={`scroll-animate delay-${i * 100} p-7 rounded-2xl border border-rg-accent/10 bg-rg-black/60 card-hover`}
            >
              <div className="font-sora font-black text-4xl text-rg-accent/20 mb-4 leading-none">
                {diff.number}
              </div>
              <h3 className="font-sora font-bold text-lg text-white mb-3">
                {diff.title}
              </h3>
              <p className="font-manrope text-sm text-rg-gray leading-relaxed">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
