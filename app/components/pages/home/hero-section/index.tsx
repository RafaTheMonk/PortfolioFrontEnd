'use client'

import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import { Button } from "../../../button/index";
import { TechBadge } from "../../../tech-badge";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandInstagram,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/RafaTheMonk",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/rafael-brito-ba3021b4/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/5571988904263",
    icon: <TbBrandWhatsapp />,
  },
  {
    url: "https://www.instagram.com/rafaelbrito.dev/",
    icon: <TbBrandInstagram />,
  },
];

const MOCK_TECHNOLOGIES = [
  // Backend & Integrações
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "Node.js" },
  { name: "n8n" },

  // Dados
  { name: "SQL" },
  { name: "PostgreSQL" },
  { name: "MySQL" },

  // Front-end (base e portfolio)
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "HTML/CSS" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },

  // Ferramentas
  { name: "Git/GitHub" },
  { name: "Linux (Terminal)" },
];

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Rafael Brito</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base"> Desenvolvedor de software com experiência em backend e noções de
            frontend, focado em criar soluções funcionais, integrações e
            aplicações web bem estruturadas. </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {MOCK_TECHNOLOGIES.map((technologies, index) => (
              <TechBadge name={technologies.name} />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600  flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/images/profile.png"
          width={420}
          height={404}
          alt="Foto de perfil do portifólio"
          className="w-[390px] h-[390px] lg:w-[420px] lg:h[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
