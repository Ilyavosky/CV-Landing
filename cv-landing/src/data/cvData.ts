import type { CVData } from "./types";

export const cvData: CVData = {
  name: "ILYA CORTÉS RUIZ",
  title: "Backend Developer Intern",
  subtitle: "Backend · Cloud · Android · Full-Stack",
  location: "Tuxtla Gutiérrez, Chiapas, MX",
  email: "ilyacortesruiz@gmail.com",
  linkedin: "linkedin.com/in/ilya-cortes-ruiz",
  github: "github.com/Ilyavosky",
  phone: "961 444 0968",
  about:
    "Estudiante de Ingeniería en TI con experiencia práctica en arquitecturas Clean/Layered/Hexagonal/SOA. Especializado en el desarrollo de APIs robustas con Kotlin/Ktor, Java y Node.js. Despliegue de microservicios en AWS mediante Docker. Enfocado en la escalabilidad y la integridad de datos en entornos MySQL/PostgreSQL.",

  skills: {
    Backend: ["Kotlin", "Ktor", "Java", "Node.js", "Express.js", "TypeScript", "REST APIs", "JWT"],
    Arquitecturas: ["Hexagonal", "SOA", "Clean", "Layered"],
    "Frontend & Mobile": ["Angular", "Next.js", "React", "Jetpack Compose", "MVVM", "Firebase", "Navigation Component"],
    "DevOps / Cloud": ["Docker", "Docker Compose", "AWS EC2", "AWS RDS", "PM2", "Git", "GitHub Actions"],
    "Bases de Datos": ["PostgreSQL", "MySQL", "Room (SQLite)", "Firestore"],
  },

  experience: [
    {
      name: "Hugin & Munin",
      role: "Backend Developer · Arquitecto de Software",
      org: "ZOOMAT — Zoo Miguel Álvarez del Toro",
      year: "2024 – Presente",
      bullets: [
        "Concebí la solución al problema de descentralización y pérdida de registros/reportes y conteo de especies en cautiverio.",
        "Diseñé y desarrollé una API REST con Kotlin/Ktor bajo Arquitectura Hexagonal, garantizando desacoplamiento total de la lógica de negocio.",
        "Lideré la migración de Excel a PostgreSQL 17, optimizando integridad referencial y rendimiento de consultas complejas.",
        "Orquesté el despliegue en AWS EC2 con Docker, asegurando una disponibilidad del 99%.",
      ],
      tags: ["Kotlin", "Ktor", "Angular", "PostgreSQL", "AWS EC2", "Docker"],
      color: "#00ff88",
    },
  ],

  projects: [
    {
      name: "GlamStock",
      role: "Backend Developer · Arquitecto · Despliegue",
      year: "2026 – Presente",
      bullets: [
        "Diseñé el backend bajo arquitectura SOA con repositorios físicamente separados, API REST con cookies HttpOnly y JWT.",
        "Diseñé y normalicé una BD en PostgreSQL con 7 entidades para un catálogo de +1,500 registros de inventario.",
        "Implementé validación bidireccional con Zod y transacciones ACID en PostgreSQL para integridad del stock.",
        "Orquesté el entorno con Docker Compose y desplegué en AWS EC2 con PM2; base de datos en AWS RDS.",
      ],
      tags: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS RDS", "Zod"],
      color: "#ff6b6b",
    },
    {
      name: "GuitarShare",
      role: "Android Developer",
      year: "Finalizado 2025",
      bullets: [
        "Desarrollé la UI con Jetpack Compose bajo MVVM, separando ViewModel, repositorios y fuentes de datos.",
        "Persistencia en dos capas: Room para datos locales y Firestore para sincronización en la nube con Firebase Storage.",
        "Integré Firebase Auth, Navigation Component y acceso nativo a cámara del dispositivo.",
      ],
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Room"],
      color: "#ffd93d",
    },
    {
      name: "Spotify Clone",
      role: "Full Stack Developer",
      year: "Finalizado 2024",
      bullets: [
        "Estructuré servicios bajo ports & adapters en Angular 18 (zoneless) integrando Spotify API con HttpClient y RxJS.",
        "Implementé interceptores HTTP para inyección automática de tokens y búsqueda en tiempo real con operadores reactivos.",
      ],
      tags: ["Angular 18", "RxJS", "TypeScript", "Spotify API"],
      color: "#a78bfa",
    },
  ],

  education: {
    institution: "Universidad Politécnica de Chiapas (UPCH)",
    degree: "Ing. en Tecnologías de la Información y la Innovación Digital",
    period: "2024 – Presente",
    note: "5.° semestre en curso · Graduación esperada 2027",
  },

  certs: [
    {
      title: "Enseñanza de Inglés como Lengua Extranjera",
      org: "SEP / Canadian Center, S.C.",
      year: "2023",
      score: "9.6",
    },
    {
      title: "Soporte y Mantenimiento Básico a Equipos Informáticos",
      org: "ICATECH / COBACH",
      year: "2023",
      score: "50h",
    },
  ],

  languages: [
    { lang: "Español", level: "Nativo",          pct: 100, color: "#00ff88" },
    { lang: "Inglés",  level: "Avanzado B2/C1",  pct: 88,  color: "#a78bfa" },
  ],
};
