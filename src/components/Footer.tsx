import ClientLogo from "./ClientLogo";

const WA_LINK =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20diagn%C3%B3stico%20gratuito%20com%20a%20RG%20Performance";

const navLinks = [
  { label: "Método", href: "#metodo" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Como Começar", href: "#como-comecar" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-rg-accent/10 bg-rg-black/90">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <ClientLogo size="md" />
            </div>
            <p className="font-playfair italic text-rg-gray text-base leading-relaxed mb-4">
              "Crescimento com método."
            </p>
            <p className="font-manrope text-sm text-rg-gray/50 leading-relaxed">
              Assessoria de crescimento digital exclusiva para médicos com
              clínica própria.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sora font-semibold text-[11px] text-white mb-5 uppercase tracking-[0.2em]">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-manrope text-sm text-rg-gray hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — without address */}
          <div>
            <h4 className="font-sora font-semibold text-[11px] text-white mb-5 uppercase tracking-[0.2em]">
              Contato
            </h4>
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-rg-deep/80 border border-rg-accent/10 flex items-center justify-center group-hover:border-rg-accent/30 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#00E676">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.428a.5.5 0 0 0 .612.612l5.581-1.467A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.495-5.19-1.362l-.373-.219-3.864 1.016 1.016-3.737-.238-.389A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <span className="font-manrope text-sm text-rg-gray group-hover:text-white transition-colors">
                  WhatsApp
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/rgperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-rg-deep/80 border border-rg-accent/10 flex items-center justify-center group-hover:border-rg-accent/30 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="#B7C2BD"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="2" width="10" height="10" rx="3" />
                    <circle cx="7" cy="7" r="2.5" />
                    <circle cx="10" cy="4" r="0.5" fill="#B7C2BD" />
                  </svg>
                </div>
                <span className="font-manrope text-sm text-rg-gray group-hover:text-white transition-colors">
                  Instagram
                </span>
              </a>

              {/* Email placeholder */}
              <a
                href="mailto:contato@rgperformance.com.br"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-rg-deep/80 border border-rg-accent/10 flex items-center justify-center group-hover:border-rg-accent/30 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="#B7C2BD"
                    strokeWidth="1.5"
                  >
                    <rect x="1" y="3" width="12" height="9" rx="1.5" />
                    <path d="M1 4l6 5 6-5" />
                  </svg>
                </div>
                <span className="font-manrope text-sm text-rg-gray group-hover:text-white transition-colors">
                  E-mail
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="glow-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-xs text-rg-gray/40">
            © {new Date().getFullYear()} RG Performance. Todos os direitos
            reservados.
          </p>
          <p className="font-manrope text-xs text-rg-gray/25">
            Menos achismo. Mais estrutura, método e previsibilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
