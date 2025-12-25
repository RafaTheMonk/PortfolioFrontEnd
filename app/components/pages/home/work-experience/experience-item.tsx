import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/enterprise.png"
            alt="Logo da empresa Perfil"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/grupo-cassi-turismo/about/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ CassiTurismo
          </a>
          <h4 className="text-gray-300">Suporte Técnico (Comercial)</h4>
          <span className="text-gray-500">
            Dezembro 2023 - Outubro 2025 (1 ano e 11 meses)
          </span>
          <p className="text-gray-400">
            Atuação em suporte técnico ao setor comercial, com atendimento a
            clientes, manutenção de sistemas internos e organização de dados.
            Criação de soluções organizacionais e automações simples para
            otimizar rotinas operacionais, utilizando metodologias ágeis.
            Resultados incluem mais de 200 clientes cadastrados e 4.000 reservas
            gerenciadas com Kanban e Scrum.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
        </div>
      </div>
    </div>
  );
};
