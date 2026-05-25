"use client";
const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 px-6">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Main ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-rg-accent/[0.045] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rg-deep/70 rounded-full blur-[100px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-50" />
        {/* Subtle line grid top half */}
        <div className="absolute inset-0 line-grid opacity-30" />
      </div>

      {/* Corner glows */}
      <span
        className="absolute top-8 left-8 w-2 h-2 bg-rg-accent rounded-full"
        style={{ animation: "glow-pulse 4s ease-in-out infinite", boxShadow: "0 0 12px rgba(0,230,118,0.8)" }}
      />
      <span
        className="absolute top-8 right-8 w-1.5 h-1.5 bg-rg-accent/60 rounded-full"
        style={{ animation: "glow-pulse 4s ease-in-out infinite 1.5s" }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── LEFT: Text content ─────────────────────── */}
          <div>
            {/* Pill tag */}
            <div
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 border border-rg-accent/20 rounded-full bg-rg-deep/50"
              style={{ animation: "fade-in 0.6s ease-out forwards" }}
            >
              <span className="w-1.5 h-1.5 bg-rg-accent rounded-full animate-pulse" />
              <span className="font-manrope text-[11px] font-semibold text-rg-accent tracking-[0.18em] uppercase">
                Consultoria exclusiva para médicos
              </span>
            </div>

            {/* Headline — mixed typography */}
            <h1
              className="mb-8"
              style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards", opacity: 0 }}
            >
              <span className="block font-sora font-black text-[52px] sm:text-[62px] lg:text-[58px] xl:text-[68px] leading-[1.02] tracking-tight text-white">
                Crescimento
              </span>
              <span
                className="block font-playfair font-normal italic text-[52px] sm:text-[62px] lg:text-[58px] xl:text-[68px] leading-[1.02] text-white"
              >
                previsível
              </span>
              <span className="block font-sora font-black text-[52px] sm:text-[62px] lg:text-[58px] xl:text-[68px] leading-[1.02] tracking-tight text-white">
                para médicos
              </span>
              <span className="block font-sora font-black text-[52px] sm:text-[62px] lg:text-[58px] xl:text-[68px] leading-[1.02] tracking-tight text-rg-accent">
                que já faturam.
              </span>
            </h1>

            {/* Body */}
            <p
              className="font-manrope text-base sm:text-lg text-rg-gray leading-relaxed mb-10 max-w-lg"
              style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s forwards", opacity: 0 }}
            >
              Estruturamos o sistema comercial da sua clínica para gerar um fluxo
              constante de consultas particulares — com custo de aquisição
              controlado, funil estruturado e{" "}
              <span className="text-white font-medium">crescimento com método.</span>
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4 mb-12"
              style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards", opacity: 0 }}
            >
              {/* Primary split button */}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-split">
                <span className="btn-split-text">Quero estruturar minha clínica</span>
                <span className="btn-split-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M8 3l5 5-5 5" />
                  </svg>
                </span>
              </a>

              {/* Ghost link */}
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 font-sora font-semibold text-sm text-rg-gray hover:text-white transition-colors group"
              >
                Ver o Método RG
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M3 7h8M7 3l4 4-4 4" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8"
              style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards", opacity: 0 }}
            >
              {[
                { value: "+80", label: "médicos atendidos" },
                { value: "5", label: "etapas estruturadas" },
                { value: "100%", label: "operação remota" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-sora font-black text-2xl text-white leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-manrope text-xs text-rg-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Team photo + floating card ──────── */}
          <div
            className="hidden lg:block relative"
            style={{ animation: "scale-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards", opacity: 0 }}
          >
            {/* Glow behind photo */}
            <div className="absolute -inset-4 bg-rg-accent/[0.06] rounded-3xl blur-2xl" />

            {/* Photo container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-rg-accent/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/team.jpg"
                alt="Gabriel e Rodrigo Pereira — Co-fundadores da RG Performance"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Placeholder bg shown until image loads */}
              <div className="absolute inset-0 photo-placeholder -z-10 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="font-sora font-black text-7xl text-rg-accent/20 leading-none mb-2"
                    style={{ textShadow: "0 0 60px rgba(0,230,118,0.3)" }}
                  >
                    RG
                  </div>
                  <p className="font-manrope text-xs text-rg-gray/30 tracking-widest">
                    ADICIONAR FOTO EM /public/team.jpg
                  </p>
                </div>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rg-black/80 via-rg-black/20 to-transparent" />
            </div>

            {/* Floating info card */}
            <div
              className="absolute bottom-6 left-5 right-5 p-5 rounded-xl border border-rg-accent/20 bg-rg-deep/85 backdrop-blur-md"
              style={{ animation: "float 5s ease-in-out infinite" }}
            >
              <div className="space-y-0 mb-4">
                {[
                  { name: "Gabriel Pereira", role: "Co-fundador" },
                  { name: "Rodrigo Pereira", role: "Co-fundador" },
                ].map((p, i) => (
                  <div
                    key={p.name}
                    className={`flex items-center justify-between py-3 ${
                      i < 1 ? "border-b border-rg-accent/10" : ""
                    }`}
                  >
                    <span className="font-sora font-semibold text-sm text-white">
                      {p.name}
                    </span>
                    <span className="font-manrope text-xs font-medium text-rg-accent">
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-rg-accent/10">
                <p className="font-playfair italic text-sm text-rg-gray/80">
                  "Crescimento com método."
                </p>
                <div className="flex items-center gap-1.5 text-rg-gray/40">
                  <svg
                    width="11"
                    height="11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5.5 1C3.57 1 2 2.57 2 4.5c0 2.7 3.5 6.5 3.5 6.5S9 7.2 9 4.5C9 2.57 7.43 1 5.5 1z" />
                    <circle cx="5.5" cy="4.5" r="1.3" />
                  </svg>
                  <span className="font-manrope text-[10px]">Porto Alegre, RS</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-rg-accent/40 rounded-tr-lg" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-rg-accent/40 rounded-bl-lg" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hidden lg:flex">
        <div className="w-5 h-8 rounded-full border border-rg-gray/30 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-rg-accent rounded-full"
            style={{ animation: "float 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
