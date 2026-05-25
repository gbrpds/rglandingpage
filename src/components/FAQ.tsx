"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Funciona para qualquer especialidade médica?",
    a: "Trabalhamos com médicos de todas as especialidades que tenham consultório ou clínica própria e atendam pacientes particulares. Cardiologistas, dermatologistas, ortopedistas, ginecologistas, cirurgiões — o método é adaptado para cada contexto.",
  },
  {
    q: "Quanto tempo leva para ver os primeiros resultados?",
    a: "Os primeiros indicadores — como volume de leads qualificados e taxa de agendamento — aparecem nas primeiras semanas de implementação. Resultados financeiros consistentes se consolidam entre 60 e 90 dias de operação. Não prometemos milagre no primeiro mês.",
  },
  {
    q: "Preciso ter uma equipe grande?",
    a: "Não. Estruturamos o processo para funcionar com a equipe que você já tem — incluindo recepcionistas sem experiência em marketing. Parte do nosso trabalho é capacitar quem já está lá antes de sugerir qualquer expansão de time.",
  },
  {
    q: "Vocês fazem o quê de diferente de uma agência de marketing?",
    a: "Agências entregam serviços isolados: posts, anúncios, relatórios de alcance. A RG Performance entrega um sistema completo — desde a aquisição do lead até a conversão em paciente agendado e fidelização. Somos parceiros de crescimento, não fornecedores de serviço.",
  },
  {
    q: "Preciso ter presença nas redes sociais antes de começar?",
    a: "Não necessariamente. Avaliamos o cenário completo no diagnóstico. Em alguns casos, iniciamos a estrutura de aquisição mesmo com presença digital zero. Em outros, refinamos o que já existe. Não há receita única.",
  },
  {
    q: "Qual é o investimento para contratar a RG Performance?",
    a: "O investimento é definido após o diagnóstico gratuito, quando entendemos o tamanho do seu desafio e o plano necessário. Trabalhamos com modelo de retainer mensal. Não publicamos valores fixos porque cada realidade é diferente.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl transition-colors duration-200 ${
        isOpen
          ? "border-rg-accent/25 bg-rg-deep/60"
          : "border-rg-accent/8 bg-rg-black/40 hover:border-rg-accent/15"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        onClick={onToggle}
      >
        <span className="font-sora font-semibold text-base text-white leading-snug">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "border-rg-accent bg-rg-accent/15 rotate-45"
              : "border-rg-accent/20"
          }`}
        >
          <svg
            width="12"
            height="12"
            fill="none"
            stroke={isOpen ? "#00E676" : "#B7C2BD"}
            strokeWidth="2.5"
          >
            <path d="M6 2v8M2 6h8" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="font-manrope text-sm text-rg-gray leading-relaxed">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 px-6 overflow-hidden bg-rg-deep/10">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-rg-accent/15 to-transparent" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 scroll-animate">
          <span className="section-tag mb-6 justify-center">Dúvidas</span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl leading-tight">
            Perguntas{" "}
            <span className="text-rg-accent">frequentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3 scroll-animate">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
