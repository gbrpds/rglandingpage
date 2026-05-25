const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

export default function CTAFinal() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rg-accent/[0.07] rounded-full blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-25" />
      </div>
      <div className="glow-divider absolute top-0 left-0 right-0" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-rg-accent/30 rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-rg-accent/30 rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-rg-accent/30 rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-rg-accent/30 rounded-br-xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="scroll-animate">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-rg-accent/20 rounded-md bg-rg-deep/40">
            <span className="w-1.5 h-1.5 bg-rg-accent rounded-full" />
            <span className="font-manrope text-[11px] font-semibold text-rg-accent tracking-[0.18em] uppercase">
              Crescimento com método
            </span>
          </div>

          <h2 className="font-sora font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
            Pronto para crescer
            <br />
            <span className="text-rg-accent">com método?</span>
          </h2>

          <p className="font-manrope text-lg text-rg-gray leading-relaxed mb-10 max-w-xl mx-auto">
            Solicite seu diagnóstico gratuito agora. Em 30 minutos, você vai
            entender exatamente o que está travando o crescimento da sua clínica
            — e o que fazer para resolver.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-split inline-flex"
            >
              <span className="btn-split-text text-base px-9 py-4">
                Solicitar Diagnóstico Gratuito
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

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-5 mt-2">
              {["Sem compromisso", "100% Remoto", "Resposta em até 24h"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="#00E676"
                      strokeWidth="2"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                    <span className="font-manrope text-sm text-rg-gray">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
