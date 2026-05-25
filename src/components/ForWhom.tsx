const forList = [
  "Médicos com consultório ou clínica própria",
  "Que já atendem, mas querem crescer com previsibilidade",
  "Que estão cansados de depender de indicação",
  "Que já investiram em marketing e não viram retorno claro",
  "Que querem dados reais, não promessas vazias",
  "Que entendem que presença digital é estratégia, não post bonito",
  "Que buscam um parceiro de crescimento, não um fornecedor",
];

const notForList = [
  "Está começando do zero sem carteira de pacientes",
  "Não tem estrutura para atender mais pacientes",
  "Busca resultados sem investimento em tráfego pago",
  "Quer um serviço pontual, sem comprometimento com processo",
];

export default function ForWhom() {
  return (
    <section
      id="para-quem"
      className="relative py-24 px-6 overflow-hidden bg-rg-deep/15"
    >
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/15 to-transparent" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 scroll-animate">
          <span className="section-tag mb-6 justify-center">Perfil ideal</span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-tight">
            Para quem é a{" "}
            <span className="text-rg-accent">RG Performance?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* FOR */}
          <div className="scroll-animate-left p-8 rounded-2xl border border-rg-accent/20 bg-rg-black/50">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-8 rounded-full bg-rg-accent/15 border border-rg-accent/25 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="#00E676"
                  strokeWidth="2.5"
                >
                  <path d="M2 7l4 4 6-6" />
                </svg>
              </div>
              <h3 className="font-sora font-bold text-lg text-white">
                É para você se...
              </h3>
            </div>
            <ul className="space-y-4">
              {forList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-rg-accent rounded-full flex-shrink-0" />
                  <span className="font-manrope text-sm text-rg-gray leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* NOT FOR */}
          <div className="scroll-animate-right delay-100 p-8 rounded-2xl border border-white/5 bg-rg-black/30">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2.5"
                >
                  <path d="M2 2l10 10M12 2L2 12" />
                </svg>
              </div>
              <h3 className="font-sora font-bold text-lg text-white/70">
                Não é para você se...
              </h3>
            </div>
            <ul className="space-y-4">
              {notForList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-red-500/50 rounded-full flex-shrink-0" />
                  <span className="font-manrope text-sm text-rg-gray/60 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="font-manrope text-sm text-rg-gray/50 italic">
                Não fazemos promessas que não conseguimos cumprir. Precisamos do
                contexto certo para entregar resultado real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
