const pains = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "Agenda Irregular",
    desc: "Um mês com agenda lotada, o próximo pela metade. Sem previsibilidade de receita.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
        <path d="M18 8l2 2-2 2" />
      </svg>
    ),
    title: "Dependência de Indicação",
    desc: "Seu crescimento depende de alguém te indicar. Quando para, você estagna.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        <path d="M20 12l2-1" />
        <circle cx="21" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Anúncios Sem Retorno",
    desc: "Já investiu em tráfego pago mas não sabe se funcionou. O dinheiro saiu, o resultado não veio.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Custo de Aquisição Invisível",
    desc: "Não sabe quanto custa cada paciente novo. Não tem número, não tem controle.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 11h6" />
      </svg>
    ),
    title: "Clínica Premium, Presença Fraca",
    desc: "Tem estrutura de excelência, mas quem busca online não encontra — ou não converte.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v4H3zM3 11h18v4H3zM3 19h10v4H3z" />
      </svg>
    ),
    title: "Falta de Processo",
    desc: "Cada semana funciona de um jeito. Não tem script, fluxo ou sistema de atendimento.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-[350px] h-[350px] bg-rg-accent/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16 scroll-animate">
          <span className="section-tag mb-5 block">O problema</span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-tight mb-5">
            Você reconhece algum{" "}
            <span className="text-rg-accent">desses cenários?</span>
          </h2>
          <p className="font-manrope text-rg-gray text-lg leading-relaxed">
            Se pelo menos um deles se aplica à sua realidade, a RG Performance
            pode transformar como sua clínica cresce.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              className={`scroll-animate delay-${Math.min(i * 100, 500)} p-6 rounded-2xl border border-rg-accent/10 bg-rg-deep/40 card-hover`}
            >
              <div className="w-11 h-11 rounded-xl bg-rg-surface border border-rg-accent/10 flex items-center justify-center text-rg-accent mb-5">
                {pain.icon}
              </div>
              <h3 className="font-sora font-semibold text-lg text-white mb-2.5">
                {pain.title}
              </h3>
              <p className="font-manrope text-sm text-rg-gray leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 scroll-animate">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-rg-accent/5 border border-rg-accent/15">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#00E676"
              strokeWidth="2"
            >
              <path d="M12 2L3 7l9 5 9-5-9-5z" />
              <path d="M3 17l9 5 9-5M3 12l9 5 9-5" />
            </svg>
            <span className="font-manrope text-sm text-rg-gray">
              A causa raiz de tudo isso é a{" "}
              <span className="text-white font-medium">falta de sistema</span> —
              não de esforço.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
