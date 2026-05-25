const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

export default function CTAFinal() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rg-accent/[0.06] rounded-full blur-[100px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      {/* Corner dots */}
      <span className="absolute top-8 left-8 w-1.5 h-1.5 bg-rg-accent/50 rounded-full" />
      <span className="absolute top-8 right-8 w-1.5 h-1.5 bg-rg-accent/50 rounded-full" />
      <span className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-rg-accent/30 rounded-full" />
      <span className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-rg-accent/30 rounded-full" />

      {/* Border top */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/30 to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="scroll-animate">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-rg-accent/20 rounded-full bg-rg-deep/40">
            <span className="w-1.5 h-1.5 bg-rg-accent rounded-full" />
            <span className="font-manrope text-xs font-semibold text-rg-accent tracking-widest uppercase">
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
            entender exatamente o que está travando o crescimento da sua
            clínica — e o que fazer para resolver.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-rg-accent text-rg-black font-sora font-black text-lg rounded-full transition-all hover:bg-rg-glow hover:shadow-[0_0_60px_rgba(0,230,118,0.45)] hover:scale-105 mb-6"
          >
            Solicitar Diagnóstico Gratuito
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M4 10h12M10 4l6 6-6 6" />
            </svg>
          </a>

          {/* Sub details */}
          <div className="flex flex-wrap justify-center gap-5 mt-2">
            {[
              "Sem compromisso",
              "Operação 100% Remota",
              "Porto Alegre, RS",
            ].map((item) => (
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
                <span className="font-manrope text-sm text-rg-gray">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
