import type { CVData } from "./types";

const PATTERNS = {
  wildlife: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5z' fill='%2300ff8808'/%3E%3Cpath d='M10 35 Q15 45 10 55 Q5 45 10 35z' fill='%2300ff8805'/%3E%3Cpath d='M50 30 Q55 40 50 50 Q45 40 50 30z' fill='%2300ff8806'/%3E%3C/svg%3E")`,
  luxury: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23ff6b6b08' stroke-width='0.5'/%3E%3C/svg%3E")`,
  acoustic: `url("data:image/svg+xml,%3Csvg width='80' height='20' viewBox='0 0 80 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q10 2 20 10 Q30 18 40 10 Q50 2 60 10 Q70 18 80 10' fill='none' stroke='%23ffd93d06' stroke-width='1'/%3E%3C/svg%3E")`,
  streaming: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='12' fill='none' stroke='%23a78bfa06' stroke-width='0.5'/%3E%3Ccircle cx='25' cy='25' r='8' fill='none' stroke='%23a78bfa04' stroke-width='0.5'/%3E%3C/svg%3E")`,
};

const ICONS = {
  wildlife: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  luxury: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  acoustic: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
  streaming: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z",
};

export const cvData: CVData = {
  name: "ILYA CORTÉS RUIZ",
  title: "Backend Developer Intern",
  subtitle: "Backend / Cloud / Android / Full-Stack",
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
      role: "Backend Developer / Arquitecto de Software",
      org: "ZOOMAT",
      year: "2024 - Presente",
      bullets: [
        "Concebí la solución al problema de descentralización y pérdida de registros/reportes y conteo de especies en cautiverio.",
        "Diseñé y desarrollé una API REST con Kotlin/Ktor bajo Arquitectura Hexagonal, garantizando desacoplamiento total de la lógica de negocio.",
        "Lideré la migración de Excel a PostgreSQL 17, optimizando integridad referencial y rendimiento de consultas complejas.",
        "Orquesté el despliegue en AWS EC2 con Docker, asegurando una disponibilidad del 99%.",
      ],
      tags: ["Kotlin", "Ktor", "Angular", "PostgreSQL", "AWS EC2", "Docker"],
      color: "#00ff88",
      theme: {
        gradient: "linear-gradient(135deg, #00ff8808 0%, #00aa5508 50%, transparent 100%)",
        pattern: PATTERNS.wildlife,
        glowColor: "#00ff88",
        iconPath: ICONS.wildlife,
        ambientOpacity: 0.04,
      },
    },
  ],

  projects: [
    {
      name: "GlamStock",
      role: "Backend Developer / Arquitecto / Despliegue",
      year: "2026 - Presente",
      bullets: [
        "Diseñé el backend bajo arquitectura SOA con repositorios físicamente separados, API REST con cookies HttpOnly y JWT.",
        "Diseñé y normalicé una BD en PostgreSQL con 7 entidades para un catálogo de +1,500 registros de inventario.",
        "Implementé validación bidireccional con Zod y transacciones ACID en PostgreSQL para integridad del stock.",
        "Orquesté el entorno con Docker Compose y despliegue en AWS EC2 con PM2; base de datos en AWS RDS.",
      ],
      tags: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS RDS", "Zod"],
      color: "#ff6b6b",
      theme: {
        gradient: "linear-gradient(135deg, #ff6b6b06 0%, #cc444408 50%, transparent 100%)",
        pattern: PATTERNS.luxury,
        glowColor: "#ff6b6b",
        iconPath: ICONS.luxury,
        ambientOpacity: 0.035,
      },
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
      theme: {
        gradient: "linear-gradient(135deg, #ffd93d06 0%, #cc990008 50%, transparent 100%)",
        pattern: PATTERNS.acoustic,
        glowColor: "#ffd93d",
        iconPath: ICONS.acoustic,
        ambientOpacity: 0.03,
      },
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
      theme: {
        gradient: "linear-gradient(135deg, #a78bfa06 0%, #7c3aed08 50%, transparent 100%)",
        pattern: PATTERNS.streaming,
        glowColor: "#a78bfa",
        iconPath: ICONS.streaming,
        ambientOpacity: 0.035,
      },
    },
  ],

  education: {
    institution: "Universidad Politécnica de Chiapas (UPCH)",
    degree: "Ing. en Tecnologías de la Información y la Innovación Digital",
    period: "2024 - Presente",
    note: "5to semestre en curso / Graduación esperada 2027",
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
    { lang: "Español", level: "Nativo", pct: 100, color: "#00ff88" },
    { lang: "Inglés", level: "Avanzado B2/C1", pct: 88, color: "#a78bfa" },
  ],
};
