const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Main glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rg-accent/[0.04] rounded-full blur-[140px]" />
        {/* Side glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rg-deep/80 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rg-deep/60 rounded-full blur-[80px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      {/* Corner decorations */}
      <span className="absolute top-8 left-8 w-2 h-2 bg-rg-accent rounded-full animate-glow-pulse" />
      <span className="absolute top-8 right-8 w-2 h-2 bg-rg-accent/60 rounded-full animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <span className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-rg-accent/30 rounded-full" />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Label tag */}
        <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 border border-rg-accent/20 rounded-full bg-rg-deep/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-rg-accent rounded-full flex-shrink-0" />
            <span className="font-manrope text-xs font-semibold text-rg-accent tracking-[0.18em] uppercase">
              Assessoria de Crescimento Médico
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-sora font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-[1.04] tracking-tight mb-8 max-w-4xl animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Crescimento{" "}
          <span className="text-rg-accent relative">
            previsível
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rg-accent/30 rounded-full" />
          </span>
          <br />
          para médicos com
          <br />
          clínica própria.
        </h1>

        {/* Subheadline */}
        <p
          className="font-manrope text-lg sm:text-xl text-rg-gray leading-relaxed mb-12 max-w-2xl animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Estruturamos sua operação comercial para gerar um fluxo constante de
          consultas particulares — com{" "}
          <span className="text-white font-medium">método, número e controle</span>.
          Sem depender de indicação.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-rg-accent text-rg-black font-sora font-bold text-base rounded-full transition-all hover:bg-rg-glow hover:shadow-[0_0_40px_rgba(0,230,118,0.4)] hover:scale-105"
          >
            Fazer Diagnóstico Gratuito
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M3 8h10M8 3l5 5-5 5" />
            </svg>
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-rg-accent/20 text-white font-sora font-semibold text-base rounded-full hover:border-rg-accent/40 hover:bg-rg-accent/5 transition-all"
          >
            Conhecer o Método
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M8 3v10M3 8l5 5 5-5" />
            </svg>
          </a>
        </div>

        {/* Trust bar */}
        <div
          className="flex flex-wrap gap-x-8 gap-y-3 items-center animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          {[
            "Porto Alegre, RS",
            "Operação 100% Remota",
            "Especialistas em Médicos",
            "Método Proprietário RG",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-4 bg-rg-accent/70 rounded-full flex-shrink-0" />
              <span className="font-manrope text-sm text-rg-gray">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-manrope text-xs text-rg-gray tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-rg-gray to-transparent" />
      </div>
    </section>
  );
}
