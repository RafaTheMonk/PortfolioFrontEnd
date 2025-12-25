import { FaJava } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { SiN8N, SiSpringboot, SiPostgresql, SiMysql } from "react-icons/si";

import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./known-tech";

const techs = [
  { icon: <FaJava className="text-2xl" />, name: "Java", startDate: "2025-01-01" },
  { icon: <TbBrandJavascript className="text-2xl" />, name: "JavaScript", startDate: "2024-06-01" },
  { icon: <IoLogoNodejs className="text-2xl" />, name: "Node.js", startDate: "2024-08-01" },
  { icon: <SiSpringboot className="text-2xl" />, name: "Spring Boot", startDate: "2025-08-01" },
  { icon: <SiPostgresql className="text-2xl" />, name: "PostgreSQL", startDate: "2024-09-01" },
  { icon: <SiMysql className="text-2xl" />, name: "MySQL", startDate: "2024-07-01" },
  { icon: <SiN8N className="text-2xl" />, name: "n8n", startDate: "2025-10-01" },
];


export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
