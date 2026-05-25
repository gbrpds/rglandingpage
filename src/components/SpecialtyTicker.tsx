const specialties = [
  "Dermatologia",
  "Cirurgia Plástica",
  "Oftalmologia",
  "Ortopedia",
  "Ginecologia",
  "Cardiologia",
  "Urologia",
  "Endocrinologia",
  "Neurologia",
  "Psiquiatria",
  "Pediatria",
  "Reumatologia",
  "Infectologia",
  "Oncologia",
  "Gastroenterologia",
  "Nutrologia",
  "Otorrinolaringologia",
  "Angiologia",
  "Cirurgia Vascular",
  "Medicina Estética",
];

export default function SpecialtyTicker() {
  const doubled = [...specialties, ...specialties];

  return (
    <div className="relative overflow-hidden border-y border-rg-accent/10 bg-rg-deep/30 py-3.5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-rg-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-rg-black to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center gap-3">
        <span className="font-sora font-bold text-[10px] text-rg-accent tracking-[0.22em] uppercase whitespace-nowrap">
          Especialidades
        </span>
        <span className="w-px h-5 bg-rg-accent/30" />
      </div>

      {/* Scrolling strip */}
      <div className="flex overflow-hidden" aria-hidden="true">
        <div className="marquee-track pl-44 shrink-0">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-3 shrink-0"
            >
              <span className="font-manrope text-sm text-rg-gray/80 whitespace-nowrap">
                {name}
              </span>
              <span className="w-1 h-1 rounded-full bg-rg-accent/30 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
