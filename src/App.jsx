import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Image, PDFViewer, Font, PDFDownloadLink } from '@react-pdf/renderer';
import image from './assets/image.png';

// Importaciones de imágenes de lenguajes de programación
import pythonBadge from './assets/Python-3776AB.png';
import csharpBadge from './assets/C239120.png'; // Corregido el nombre del archivo
import sqlBadge from './assets/SQL-003B57.png';
import lispBadge from './assets/Lisp-3C3C3C.png';
import javascriptBadge from './assets/JavaScript-F7DF1E.png';
import djangoBadge from './assets/Django-092E20.png';
import restapiBadge from './assets/REST-02569B.png';
import odooBadge from './assets/Odoo-714B67.png';
import fastapiBadge from './assets/FastAPI-009688.png';
import reactBadge from './assets/React-61DAFB.png';
import tensorflowBadge from './assets/TensorFlow-FF6F00.png';
import scikitlearnBadge from './assets/scikit--learn-F7931E.png';
import numpyBadge from './assets/NumPy-013243.png';
import scipyBadge from './assets/SciPy-8CAAE6.png';
import datamodelingBadge from './assets/Data_Modeling-4B8BBE.png';
import postgresqlBadge from './assets/PostgreSQL-336791.png';
import mysqlBadge from './assets/MySQL-4479A1.png';
import mariadbBadge from './assets/MariaDB-003545.png';
import dockerBadge from './assets/Docker-2496ED.png';
import gitBadge from './assets/Git-F05032.png';
import linuxBadge from './assets/Linux-FCC624.png';
import vscodeBadge from './assets/VS_Code-007ACC.png';
import githubactionsBadge from './assets/CD-222222.png'; // Asumo que "CD-222222.png" es para CI/CD

// Objeto de traducciones
const translations = {
  es: {
    summary: 'Programador y analista de datos con facilidad para el aprendizaje de diversos lenguajes de programación y tecnologías. Capacidad para trabajar en equipo y crear soluciones eficientes y escalables, con el fin de contribuir al dinamismo y expansión de la empresa.',
    experienceTitle: 'Experiencia Laboral',
    current: 'Actual',
    freelancerJobTitle: 'Freelance',
    freelancerCompany: 'Trabajador Independiente, Ciudad de México, México',
    freelancerBullet1: 'Desarrollo y gestión de proyectos digitales locales y basados en web para una organización eclesiástica, apoyando la comunicación y el compromiso comunitario.',
    freelancerBullet2: 'Entrega de contenido de alta calidad a clientes de diversas industrias, asegurando el cumplimiento de los requisitos del proyecto.',
    freelancerBullet3: 'Gestión de múltiples proyectos simultáneamente, cumpliendo con plazos de entrega y manteniendo la satisfacción del cliente.',
    freelancerBullet4: 'Investigación exhaustiva para mejorar la precisión y relevancia del contenido para diversas audiencias.',
    freelancerBullet5: 'Colaboración con clientes para refinar objetivos y entregar soluciones a medida de manera efectiva.',
    restaurantJobTitle: 'Miembro del Equipo de Restaurante',
    restaurantCompany: 'Ana María Urban Carrillo, Cocina Urbana, Ciudad de México',
    restaurantBullet1: 'Servicio al cliente excepcional, garantizando una experiencia gastronómica memorable para los comensales.',
    restaurantBullet2: 'Apoyo en la formación de nuevo personal sobre procedimientos del restaurante y oferta del menú.',
    restaurantBullet3: 'Coordinación con el equipo de cocina para asegurar la preparación y entrega puntual de alimentos.',
    restaurantBullet4: 'Gestión eficiente de múltiples mesas durante horas pico, manteniendo altos estándares de servicio.',
    restaurantBullet5: 'Gestión de inventarios y reposición de suministros.',
    restaurantBullet6: 'Corte de caja al final de cada turno.',
    restaurantBullet7: 'Recopilación y análisis de datos para informes de gestión y toma de decisiones.',
    missionaryJobTitle: 'Misionero',
    missionaryCompany: 'Iglesia Cristiana Reformada de Cuba, La Habana, Cuba',
    missionaryBullet1: 'Vinculación con miembros de la comunidad a través de programas de alcance y eventos.',
    missionaryBullet2: 'Apoyo en la organización de servicios religiosos y actividades.',
    missionaryBullet3: 'Asistencia en el desarrollo de materiales educativos para talleres locales.',
    missionaryBullet4: 'Colaboración con el equipo para identificar necesidades y recursos comunitarios.',
    missionaryBullet5: 'Facilitación del crecimiento espiritual entre los miembros de la congregación, liderando servicios semanales y sesiones de estudio bíblico.',
    practicumJobTitle: 'Estudiante de Prácticas',
    practicumCompany: 'Gestión Empresarial Del Turismo (GET), La Habana, Cuba',
    practicumBullet1: 'Desarrollo e implementación Front-end utilizando Vue.JS.',
    practicumBullet2: 'Automatización del historial de procesos de la empresa.',
    practicumBullet3: 'Diseño e implementación de interfaces de usuario enfocadas en la experiencia del usuario final.',
    educationTitle: 'Formación Académica',
    bachelorTitle: 'Licenciatura en Ciencias de la Computación',
    bachelorCompany: 'Universidad De La Habana - La Habana, Cuba',
    bachelorBullet1: 'Aplicación de principios SOLID en proyectos de diseño y desarrollo de software.',
    bachelorBullet2: 'Desarrollo de múltiples aplicaciones utilizando tecnologías .NET.',
    bachelorBullet3: 'Diseño e implementación de un compilador para resolver escenarios de Problemas de Enrutamiento de Vehículos (VRP).',
    bachelorBullet4: 'Realización de proyectos académicos enfocados en capas y arquitectura de red.',
    bachelorBullet5: 'Participación en proyectos adicionales involucrando algoritmos, estructuras de datos y conceptos de ingeniería de software.',
    bachelorBullet6: 'Proyecto de investigación en colaboración con hospitales de Cuba para identificar factores de riesgo mediante ML en pacientes con infarto de miocardio.',
    bachelorBullet7: 'Proceso de Evaluación Automática en Problemas de Enrutamiento de Vehículos.',
    diplomaTopicModelingTitle: 'Diplomado: Métodos Alternativos de Modelado de Temas',
    diplomaTopicModelingCompany: 'Universidad De La Habana - La Habana, Cuba',
    diplomaImageProcessingTitle: 'Diplomado: Procesamiento de Imágenes 3D',
    diplomaImageProcessingCompany: 'Universidad De La Habana - La Habana, Cuba',
    techStackTitle: 'Stack Tecnológico',
    languagesSection: 'Lenguajes',
    backendFrameworksSection: 'Backend y Frameworks',
    aiDataSection: 'IA y Datos',
    databasesSection: 'Bases de Datos',
    devopsToolsSection: 'DevOps y Herramientas',
    contactTitle: 'Contacto',
    addressLabel: 'Dirección',
    address: '04100, CIUDAD DE MÉXICO, México',
    phoneLabel: 'Teléfono',
    phone: '5518214331',
    emailLabel: 'Correo electrónico',
    email: 'josuerdgz.ramirez@gmail.com',
    websitesTitle: 'Sitios Web',
    github: 'github.com/josueRdgz',
    linkedin: 'linkedin.com/in/josuerdgz',
    sidebarLanguagesTitle: 'Idiomas',
    languages: 'Español Nativo\nInglés B2\nFrancés A1',
    skillsTitle: 'Habilidades',
    skill1: 'Programación Orientada a Objetos',
    skill2: 'Bases de Datos',
    skill3: 'Algoritmos y Estructuras de Datos',
    skill4: 'Desarrollo de Software',
    skill5: 'Análisis de Datos (Data Science)',
    skill6: 'Programación Web',
    skill7: 'Machine Learning e IA',
    skill8: 'Especialista',
    skill9: 'Metodologías Ágiles',
    name: 'JOSUÉ\nRODRÍGUEZ\nRAMÍREZ',
  },
  en: {
    summary: 'Programmer and data analyst with easy learning of different programming languages and technologies with the ability to work as a team and create efficient and scalable solutions, in order to contribute to the dynamism and expansion of the company.',
    experienceTitle: 'Experience',
    current: 'Current',
    freelancerJobTitle: 'Freelancer',
    freelancerCompany: 'Freelancer Employer, Mexico City, Mexico',
    freelancerBullet1: 'Developed and managed web-based and local digital projects for a church organization, supporting communication, outreach, and community engagement.',
    freelancerBullet2: 'Delivered high-quality content to clients across various industries, ensuring alignment with project requirements.',
    freelancerBullet3: 'Managed multiple projects simultaneously, adhering to deadlines and maintaining client satisfaction.',
    freelancerBullet4: 'Conducted thorough research to enhance content accuracy and relevance for diverse audiences.',
    freelancerBullet5: 'Collaborated with clients to refine project goals and deliver tailored solutions effectively.',
    restaurantJobTitle: 'Restaurant Team Member',
    restaurantCompany: 'Ana María Urban Carrillo, Cocina Urbana, Mexico City',
    restaurantBullet1: 'Provided exceptional customer service, ensuring a memorable dining experience for guests.',
    restaurantBullet2: 'Assisted in training new staff on restaurant procedures and menu offerings.',
    restaurantBullet3: 'Coordinated with kitchen staff to ensure timely food preparation and delivery.',
    restaurantBullet4: 'Managed multiple tables efficiently during peak hours, maintaining high service standards.',
    restaurantBullet5: 'Inventory management and supply replenishment.',
    restaurantBullet6: 'Cash count at the end of each shift.',
    restaurantBullet7: 'Data compilation and analysis for management reports and decision-making.',
    missionaryJobTitle: 'Missionary',
    missionaryCompany: 'Christian Reformed Church of Cuba, Havana, Cuba',
    missionaryBullet1: 'Engaged community members through outreach programs and events.',
    missionaryBullet2: 'Provided support in organizing religious services and activities.',
    missionaryBullet3: 'Assisted in developing educational materials for local workshops.',
    missionaryBullet4: 'Collaborated with team to identify community needs and resources.',
    missionaryBullet5: 'Facilitated spiritual growth among congregation members, leading weekly services and bible study sessions.',
    practicumJobTitle: 'Practicum Student',
    practicumCompany: 'Gestión Empresarial Del Turismo (GET), La Habana, Cuba',
    practicumBullet1: 'Front-end development and implementation in Vue.JS language.',
    practicumBullet2: 'Automation of company process history.',
    practicumBullet3: 'Design and implementation of user interfaces focused on the end-user experience.',
    educationTitle: 'Education',
    bachelorTitle: 'Bachelor of Science: Computer Science',
    bachelorCompany: 'Universidad De La Habana - La Habana, Cuba',
    bachelorBullet1: 'Applied SOLID principles in software design and development projects.',
    bachelorBullet2: 'Developed multiple applications using .NET technologies.',
    bachelorBullet3: 'Designed and implemented a compiler to solve Vehicle Routing Problem (VRP) scenarios.',
    bachelorBullet4: 'Completed academic projects focused on network layers and network architecture.',
    bachelorBullet5: 'Worked on additional projects involving algorithms, data structures, and software engineering concepts.',
    bachelorBullet6: 'Research project in collaboration with hospitals in Cuba to find risk factors using ML for heart attack patients.',
    bachelorBullet7: 'Automatic Evaluation Process in Vehicle Routing Problems.',
    diplomaTopicModelingTitle: 'Diploma: Alternative Topic-Modeling Methods',
    diplomaTopicModelingCompany: 'Universidad De La Habana - La Habana, Cuba',
    diplomaImageProcessingTitle: 'Diploma: 3D Image Processing',
    diplomaImageProcessingCompany: 'Universidad De La Habana - La Habana, Cuba',
    techStackTitle: 'Tech Stack',
    languagesSection: 'Languages',
    backendFrameworksSection: 'Backend & Frameworks',
    aiDataSection: 'AI & Data',
    databasesSection: 'Databases',
    devopsToolsSection: 'DevOps & Tools',
    contactTitle: 'Contact',
    addressLabel: 'Address',
    address: '04100, MEXICO CITY, Mexico',
    phoneLabel: 'Phone',
    phone: '5518214331',
    emailLabel: 'E-mail',
    email: 'josuerdgz.ramirez@gmail.com',
    websitesTitle: 'Websites',
    github: 'github.com/josueRdgz',
    linkedin: 'linkedin.com/in/josuerdgz',
    sidebarLanguagesTitle: 'Languages',
    languages: 'Native Spanish\nEnglish B2\nFrench A1',
    skillsTitle: 'Skills',
    skill1: 'Object-Oriented Programming',
    skill2: 'Databases',
    skill3: 'Algorithms and Data Structures',
    skill4: 'Software Development',
    skill5: 'Data Analysis (Data Science)',
    skill6: 'Web Programming',
    skill7: 'Machine Learning and AI',
    skill8: 'Specialist',
    skill9: 'Agile Methodologies',
    name: 'JOSUÉ\nRODRÍGUEZ\nRAMÍREZ',
  },
  fr: {
    summary: "Programmeur et analyste de données avec une facilité d'apprentissage de divers langages de programmation et technologies. Capacité à travailler en équipe et à créer des solutions efficaces et évolutives, afin de contribuer au dynamisme et à l'expansion de l'entreprise.",
    experienceTitle: 'Expérience Professionnelle',
    current: 'Actuel',
    freelancerJobTitle: 'Freelance',
    freelancerCompany: 'Travailleur indépendant, Mexico, Mexique',
    freelancerBullet1: "Développement et gestion de projets numériques locaux et web pour une organisation ecclésiastique, soutenant la communication et l'engagement communautaire.",
    freelancerBullet2: 'Livraison de contenu de haute qualité à des clients de divers secteurs, en veillant au respect des exigences du projet.',
    freelancerBullet3: 'Gestion de plusieurs projets simultanément, en respectant les délais et en maintenant la satisfaction du client.',
    freelancerBullet4: 'Recherche approfondie pour améliorer la précision et la pertinence du contenu pour divers publics.',
    freelancerBullet5: 'Collaboration avec les clients pour affiner les objectifs et livrer des solutions sur mesure de manière efficace.',
    restaurantJobTitle: "Membre de l'équipe de restaurant",
    restaurantCompany: 'Ana María Urban Carrillo, Cocina Urbana, Mexico',
    restaurantBullet1: 'Service client exceptionnel, garantissant une expérience culinaire mémorable pour les convives.',
    restaurantBullet2: "Aide à la formation du nouveau personnel sur les procédures du restaurant et les offres du menu.",
    restaurantBullet3: "Coordination avec l'équipe de cuisine pour assurer la préparation et la livraison des plats dans les délais.",
    restaurantBullet4: 'Gestion efficace de plusieurs tables pendant les heures de pointe, en maintenant des standards de service élevés.',
    restaurantBullet5: 'Gestion des stocks et réapprovisionnement des fournitures.',
    restaurantBullet6: 'Clôture de caisse à la fin de chaque quart de travail.',
    restaurantBullet7: 'Compilation et analyse de données pour les rapports de gestion et la prise de décision.',
    missionaryJobTitle: 'Missionnaire',
    missionaryCompany: 'Église Chrétienne Réformée de Cuba, La Havane, Cuba',
    missionaryBullet1: "Engagement des membres de la communauté par le biais de programmes d'action et d'événements.",
    missionaryBullet2: "Soutien à l'organisation des services religieux et des activités.",
    missionaryBullet3: "Aide à l'élaboration de matériel pédagogique pour les ateliers locaux.",
    missionaryBullet4: "Collaboration avec l'équipe pour identifier les besoins et les ressources de la communauté.",
    missionaryBullet5: "Facilitation de la croissance spirituelle parmi les membres de la congrégation, en dirigeant les services hebdomadaires et les sessions d'étude biblique.",
    practicumJobTitle: 'Étudiant en stage',
    practicumCompany: 'Gestión Empresarial Del Turismo (GET), La Havane, Cuba',
    practicumBullet1: 'Développement et mise en œuvre front-end en utilisant Vue.JS.',
    practicumBullet2: "Automatisation de l'historique des processus de l'entreprise.",
    practicumBullet3: "Conception et mise en œuvre d'interfaces utilisateur axées sur l'expérience de l'utilisateur final.",
    educationTitle: 'Formation Académique',
    bachelorTitle: 'Licence en Informatique',
    bachelorCompany: 'Université de La Havane - La Havane, Cuba',
    bachelorBullet1: 'Application des principes SOLID dans les projets de conception et de développement de logiciels.',
    bachelorBullet2: 'Développement de multiples applications utilisant les technologies .NET.',
    bachelorBullet3: "Conception et mise en œuvre d'un compilateur pour résoudre des scénarios de problèmes de tournée de véhicules (VRP).",
    bachelorBullet4: 'Réalisation de projets académiques axés sur les couches réseau et l\'architecture réseau.',
    bachelorBullet5: 'Participation à des projets supplémentaires impliquant des algorithmes, des structures de données et des concepts de génie logiciel.',
    bachelorBullet6: 'Projet de recherche en collaboration avec des hôpitaux de Cuba pour identifier les facteurs de risque par ML chez les patients cardiaques.',
    bachelorBullet7: 'Processus d\'évaluation automatique dans les problèmes de tournée de véhicules.',
    diplomaTopicModelingTitle: 'Diplôme: Méthodes alternatives de modélisation thématique',
    diplomaTopicModelingCompany: 'Université de La Havane - La Havane, Cuba',
    diplomaImageProcessingTitle: 'Diplôme: Traitement d\'images 3D',
    diplomaImageProcessingCompany: 'Université de La Havane - La Havane, Cuba',
    techStackTitle: 'Pile Technologique',
    languagesSection: 'Langages',
    backendFrameworksSection: 'Backend & Frameworks',
    aiDataSection: 'IA & Données',
    databasesSection: 'Bases de données',
    devopsToolsSection: 'DevOps & Outils',
    contactTitle: 'Contact',
    addressLabel: 'Adresse',
    address: '04100, MEXICO, Mexique',
    phoneLabel: 'Téléphone',
    phone: '5518214331',
    emailLabel: 'E-mail',
    email: 'josuerdgz.ramirez@gmail.com',
    websitesTitle: 'Sites Web',
    github: 'github.com/josueRdgz',
    linkedin: 'linkedin.com/in/josuerdgz',
    sidebarLanguagesTitle: 'Langues',
    languages: 'Espagnol Maternel\nAnglais B2\nFrançais A1',
    skillsTitle: 'Compétences',
    skill1: 'Programmation Orientée Objet',
    skill2: 'Bases de données',
    skill3: 'Algorithmes et Structures de Données',
    skill4: 'Développement Logiciel',
    skill5: 'Analyse de Données (Data Science)',
    skill6: 'Programmation Web',
    skill7: 'Apprentissage Automatique et IA',
    skill8: 'Spécialiste',
    skill9: 'Méthodologies Agiles',
    name: 'JOSUÉ\nRODRÍGUEZ\nRAMÍREZ',
  }
};

// Registro de fuentes para evitar que las letras se encimen
Font.register({
  family: 'OpenSans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 'bold' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf', fontStyle: 'italic' }
  ]
});

// Definición de estilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'OpenSans',
  },
  main: {
    width: '70%',
    padding: '40pt 30pt',
  },
  sidebar: {
    width: '30%',
    backgroundColor: '#1a2b56',
    color: '#FFFFFF',
    padding: '35pt 22pt',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: '100%', // Ocupa el ancho disponible en la sidebar
    height: 'auto', // Mantiene la relación de aspecto
    objectFit: 'contain', // Asegura que la imagen completa sea visible sin recortar
    marginBottom: 20,
    alignSelf: 'center', // Centra la imagen horizontalmente
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 25,
    lineHeight: 1.1,
    letterSpacing: 1.5,
  },
  sectionTitleSide: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },
  sectionTitleMain: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2b56',
    borderBottom: '1pt solid #eeeeee',
    paddingBottom: 5,
    marginBottom: 15,
    marginTop: 20,
  },
  summary: {
    fontSize: 9.5,
    color: '#444',
    lineHeight: 1.5,
    marginBottom: 20,
    textAlign: 'justify',
  },
  textSmall: {
    fontSize: 8.5,
    marginBottom: 4,
    lineHeight: 1.3,
  },
  sidebarText: {
    fontSize: 8,
    marginBottom: 3,
    color: '#aaa',
  },
  contactItem: {
    marginBottom: 12,
  },
  experienceRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  dateCol: {
    width: '85pt',
    fontSize: 8,
    color: '#777',
  },
  contentCol: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  companyInfo: {
    fontSize: 8.5,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  bulletContainer: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bulletSymbol: {
    width: 10,
    fontSize: 8,
    color: '#777',
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: '#444',
    lineHeight: 1.3,
  },
  skillHighlight: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 10,
  },
  badge: {
    height: 16,
    marginRight: 6,
    marginBottom: 4,
  },

});

// Componente para Bullets consistente
const BulletItem = ({ children }) => (
  <View style={styles.bulletContainer}>
    <Text style={styles.bulletSymbol}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

// --- Versión Web (React DOM) para visualización directa como página ---
const BulletItemWeb = ({ children }) => (
  <div style={{ display: 'flex', marginBottom: '4px' }}>
    <span style={{ width: '15px', color: '#777', fontSize: '12px' }}>•</span>
    <div style={{ flex: 1, fontSize: '11.5px', color: '#444', lineHeight: 1.4 }}>{children}</div>
  </div>
);

const MyCVWeb = ({ language }) => {
  const t = translations[language];
  const sectionTitleStyle = { fontSize: '20px', fontWeight: 'bold', color: '#1a2b56', borderBottom: '1px solid #eeeeee', paddingBottom: '5px', marginBottom: '15px', marginTop: '20px' };
  const sidebarHeaderStyle = { fontSize: '16px', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FFFFFF', width: '100%', maxWidth: '900px', margin: '0 auto', boxShadow: '0 0 30px rgba(0,0,0,0.15)', minHeight: '297mm', fontFamily: "'Open Sans', sans-serif", textAlign: 'left' }}>
      {/* Contenido Principal */}
      <div style={{ width: '70%', padding: '40pt 30pt', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '12.5px', color: '#444', lineHeight: 1.5, marginBottom: '20px', textAlign: 'justify' }}>{t.summary}</div>

        <h2 style={sectionTitleStyle}>{t.experienceTitle}</h2>
        {[
          { d: `2024-12 - ${t.current}`, t: t.freelancerJobTitle, c: t.freelancerCompany, b: [t.freelancerBullet1, t.freelancerBullet2, t.freelancerBullet3, t.freelancerBullet4, t.freelancerBullet5] },
          { d: '2025-08 - 2025-12', t: t.restaurantJobTitle, c: t.restaurantCompany, b: [t.restaurantBullet1, t.restaurantBullet2, t.restaurantBullet3, t.restaurantBullet4, t.restaurantBullet5, t.restaurantBullet6, t.restaurantBullet7] },
          { d: '2023-10 - 2024-12', t: t.missionaryJobTitle, c: t.missionaryCompany, b: [t.missionaryBullet1, t.missionaryBullet2, t.missionaryBullet3, t.missionaryBullet4, t.missionaryBullet5] },
          { d: '2021-10 - 2022-07', t: t.practicumJobTitle, c: t.practicumCompany, b: [t.practicumBullet1, t.practicumBullet2, t.practicumBullet3] }
        ].map((exp, i) => (
          <div key={i} style={{ display: 'flex', marginBottom: '16px' }}>
            <div style={{ width: '115px', fontSize: '11px', color: '#777', flexShrink: 0 }}>{exp.d}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{exp.t}</div>
              <div style={{ fontSize: '11px', color: '#555', fontStyle: 'italic', marginBottom: '5px' }}>{exp.c}</div>
              {exp.b.map((bullet, j) => <BulletItemWeb key={j}>{bullet}</BulletItemWeb>)}
            </div>
          </div>
        ))}

        <h2 style={sectionTitleStyle}>{t.educationTitle}</h2>
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <div style={{ width: '115px', fontSize: '11px', color: '#777', flexShrink: 0 }}>2024-01</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{t.bachelorTitle}</div>
            <div style={{ fontSize: '11px', color: '#555', fontStyle: 'italic', marginBottom: '5px' }}>{t.bachelorCompany}</div>
            {[t.bachelorBullet1, t.bachelorBullet2, t.bachelorBullet3, t.bachelorBullet4, t.bachelorBullet5].map((b, i) => <BulletItemWeb key={i}>{b}</BulletItemWeb>)}
            <BulletItemWeb><strong>Machine Learning:</strong> {t.bachelorBullet6}</BulletItemWeb>
            <BulletItemWeb><strong>Thesis:</strong> {t.bachelorBullet7}</BulletItemWeb>
          </div>
        </div>
        {[{ d: '2023-01', t: t.diplomaTopicModelingTitle, c: t.diplomaTopicModelingCompany }, { d: '2021-01', t: t.diplomaImageProcessingTitle, c: t.diplomaImageProcessingCompany }].map((edu, i) => (
          <div key={i} style={{ display: 'flex', marginBottom: '12px' }}>
            <div style={{ width: '115px', fontSize: '11px', color: '#777', flexShrink: 0 }}>{edu.d}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{edu.t}</div>
              <div style={{ fontSize: '11px', color: '#555', fontStyle: 'italic' }}>{edu.c}</div>
            </div>
          </div>
        ))}

        <h2 style={sectionTitleStyle}>{t.techStackTitle}</h2>
        {[
          { l: t.languagesSection, b: [pythonBadge, csharpBadge, sqlBadge, lispBadge, javascriptBadge] },
          { l: t.backendFrameworksSection, b: [djangoBadge, restapiBadge, odooBadge, fastapiBadge, reactBadge] },
          { l: t.aiDataSection, b: [tensorflowBadge, scikitlearnBadge, numpyBadge, scipyBadge, datamodelingBadge] },
          { l: t.databasesSection, b: [postgresqlBadge, mysqlBadge, mariadbBadge] },
          { l: t.devopsToolsSection, b: [dockerBadge, gitBadge, linuxBadge, vscodeBadge, githubactionsBadge] }
        ].map((group, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '11.5px', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>{group.l}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>{group.b.map((img, j) => <img key={j} src={img} style={{ height: '21px' }} />)}</div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div style={{ width: '30%', backgroundColor: '#1a2b56', color: '#FFFFFF', padding: '35pt 22pt', boxSizing: 'border-box' }}>
        <img src={image} style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
        <div style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px', lineHeight: 1.1, letterSpacing: '1.5px', whiteSpace: 'pre-line' }}>{t.name}</div>

        <h3 style={sidebarHeaderStyle}>{t.contactTitle}</h3>
        <div style={{ fontSize: '10.5px', color: '#aaa', marginBottom: '12px' }}>
          <div style={{ fontSize: '8px' }}>{t.addressLabel}</div><div style={{ color: '#fff', marginBottom: '5px' }}>{t.address}</div>
          <div style={{ fontSize: '8px' }}>{t.phoneLabel}</div><div style={{ color: '#fff', marginBottom: '5px' }}>{t.phone}</div>
          <div style={{ fontSize: '8px' }}>{t.emailLabel}</div><div style={{ color: '#fff' }}>{t.email}</div>
        </div>

        <h3 style={sidebarHeaderStyle}>{t.websitesTitle}</h3>
        <div style={{ fontSize: '10.5px', color: '#fff', marginBottom: '12px' }}><div>{t.github}</div><div>{t.linkedin}</div></div>

        <h3 style={sidebarHeaderStyle}>{t.sidebarLanguagesTitle}</h3>
        <div style={{ fontSize: '10.5px', color: '#fff', marginBottom: '12px', whiteSpace: 'pre-line' }}>{t.languages}</div>

        <h3 style={sidebarHeaderStyle}>{t.skillsTitle}</h3>
        <div style={{ fontSize: '10.5px', color: '#fff', lineHeight: 1.6 }}>
          {[t.skill1, t.skill2, t.skill3, t.skill4, t.skill5, t.skill6, t.skill7].map(s => <div key={s}>• {s}</div>)}
          <div>• <strong>Python</strong> {t.skill8}</div>
          <div>• {t.skill9}</div>
        </div>
      </div>
    </div>
  );
};

const MyCV = ({ language }) => {
  const t = translations[language]; // Obtiene las traducciones para el idioma seleccionado

  return (
    <Page size="A4" style={styles.page}>
      {/* Columna Izquierda (Contenido Principal) */}
      <View style={styles.main}>
        <Text style={styles.summary}>
          {t.summary}
        </Text>

        <Text style={styles.sectionTitleMain}>{t.experienceTitle}</Text>

        <View style={styles.experienceRow}>
          <Text style={styles.dateCol}>2024-12 - {t.current}</Text>
          <View style={styles.contentCol}>
            <Text style={styles.jobTitle}>{t.freelancerJobTitle}</Text>
            <Text style={styles.companyInfo}>{t.freelancerCompany}</Text>
            <BulletItem>{t.freelancerBullet1}</BulletItem>
            <BulletItem>{t.freelancerBullet2}</BulletItem>
            <BulletItem>{t.freelancerBullet3}</BulletItem>
            <BulletItem>{t.freelancerBullet4}</BulletItem>
            <BulletItem>{t.freelancerBullet5}</BulletItem>
          </View>
        </View>

        <View style={styles.experienceRow}>
          <Text style={styles.dateCol}>2025-08 - 2025-12</Text>
          <View style={styles.contentCol}>
            <Text style={styles.jobTitle}>{t.restaurantJobTitle}</Text>
            <Text style={styles.companyInfo}>{t.restaurantCompany}</Text>
            <BulletItem>{t.restaurantBullet1}</BulletItem>
            <BulletItem>{t.restaurantBullet2}</BulletItem>
            <BulletItem>{t.restaurantBullet3}</BulletItem>
            <BulletItem>{t.restaurantBullet4}</BulletItem>
            <BulletItem>{t.restaurantBullet5}</BulletItem>
            <BulletItem>{t.restaurantBullet6}</BulletItem>
            <BulletItem>{t.restaurantBullet7}</BulletItem>
          </View>
        </View>

        <View style={styles.experienceRow}>
          <Text style={styles.dateCol}>2023-10 - 2024-12</Text>
          <View style={styles.contentCol}>
            <Text style={styles.jobTitle}>{t.missionaryJobTitle}</Text>
            <Text style={styles.companyInfo}>{t.missionaryCompany}</Text>
            <BulletItem>{t.missionaryBullet1}</BulletItem>
            <BulletItem>{t.missionaryBullet2}</BulletItem>
            <BulletItem>{t.missionaryBullet3}</BulletItem>
            <BulletItem>{t.missionaryBullet4}</BulletItem>
            <BulletItem>{t.missionaryBullet5}</BulletItem>
          </View>
        </View>

        <View style={styles.experienceRow}>
          <Text style={styles.dateCol}>2021-10 - 2022-07</Text>
          <View style={styles.contentCol}>
            <Text style={styles.jobTitle}>{t.practicumJobTitle}</Text>
            <Text style={styles.companyInfo}>{t.practicumCompany}</Text>
            <BulletItem>{t.practicumBullet1}</BulletItem>
            <BulletItem>{t.practicumBullet2}</BulletItem>
            <BulletItem>{t.practicumBullet3}</BulletItem>
          </View>
        </View>

        <Text style={styles.sectionTitleMain}>{t.educationTitle}</Text>
        <View style={styles.experienceRow}>
          <Text style={styles.dateCol}>2024-01</Text>
          <View style={styles.contentCol}>
            <Text style={styles.jobTitle}>{t.bachelorTitle}</Text>
            <Text style={styles.companyInfo}>{t.bachelorCompany}</Text>
            <BulletItem>{t.bachelorBullet1}</BulletItem>
            <BulletItem>{t.bachelorBullet2}</BulletItem>
            <BulletItem>{t.bachelorBullet3}</BulletItem>
            <BulletItem>{t.bachelorBullet4}</BulletItem>
            <BulletItem>{t.bachelorBullet5}</BulletItem>
            <BulletItem><Text style={{ fontWeight: 'bold' }}>Machine Learning:</Text> {t.bachelorBullet6}</BulletItem>
            <BulletItem><Text style={{ fontWeight: 'bold' }}>Thesis:</Text> {t.bachelorBullet7}</BulletItem>
          </View>
        </View>

        <View style={styles.experienceRow}>
          <Text style={styles.dateCol}>2023-01</Text>
          <View style={styles.contentCol}>
            <Text style={styles.jobTitle}>{t.diplomaTopicModelingTitle}</Text>
            <Text style={styles.companyInfo}>{t.diplomaTopicModelingCompany}</Text>
          </View>
        </View>

        <View style={styles.experienceRow}>
          <Text style={styles.dateCol}>2021-01</Text>
          <View style={styles.contentCol}>
            <Text style={styles.jobTitle}>{t.diplomaImageProcessingTitle}</Text>
            <Text style={styles.companyInfo}>{t.diplomaImageProcessingCompany}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitleMain}>{t.techStackTitle}</Text>

        <Text style={styles.textSmall}>{t.languagesSection}</Text>
        <View style={styles.badgeRow}>
          <Image src={pythonBadge} style={styles.badge} />
          <Image src={csharpBadge} style={styles.badge} />
          <Image src={sqlBadge} style={styles.badge} />
          <Image src={lispBadge} style={styles.badge} />
          <Image src={javascriptBadge} style={styles.badge} />
        </View>

        <Text style={styles.textSmall}>{t.backendFrameworksSection}</Text>
        <View style={styles.badgeRow}>
          <Image src={djangoBadge} style={styles.badge} />
          <Image src={restapiBadge} style={styles.badge} />
          <Image src={odooBadge} style={styles.badge} />
          <Image src={fastapiBadge} style={styles.badge} />
          <Image src={reactBadge} style={styles.badge} />
        </View>

        <Text style={styles.textSmall}>{t.aiDataSection}</Text>
        <View style={styles.badgeRow}>
          <Image src={tensorflowBadge} style={styles.badge} />
          <Image src={scikitlearnBadge} style={styles.badge} />
          <Image src={numpyBadge} style={styles.badge} />
          <Image src={scipyBadge} style={styles.badge} />
          <Image src={datamodelingBadge} style={styles.badge} />
        </View>

        <Text style={styles.textSmall}>{t.databasesSection}</Text>
        <View style={styles.badgeRow}>
          <Image src={postgresqlBadge} style={styles.badge} />
          <Image src={mysqlBadge} style={styles.badge} />
          <Image src={mariadbBadge} style={styles.badge} />
        </View>

        <Text style={styles.textSmall}>{t.devopsToolsSection}</Text>
        <View style={styles.badgeRow}>
          <Image src={dockerBadge} style={styles.badge} />
          <Image src={gitBadge} style={styles.badge} />
          <Image src={linuxBadge} style={styles.badge} />
          <Image src={vscodeBadge} style={styles.badge} />
          <Image src={githubactionsBadge} style={styles.badge} />
        </View>
      </View>

      {/* Columna Derecha (Sidebar) */}
      <View style={styles.sidebar}>
        <View>
          <Image
            style={styles.profileImage}
            src={image}
          />
          <Text style={styles.name}>{t.name}</Text>

          <Text style={styles.sectionTitleSide}>{t.contactTitle}</Text>
          <View style={styles.contactItem}>
            <Text style={{ fontSize: 8, color: '#aaa' }}>{t.addressLabel}</Text>
            <Text style={styles.sidebarText}>{t.address}</Text>
            <Text style={{ fontSize: 8, color: '#aaa', marginTop: 5 }}>{t.phoneLabel}</Text>
            <Text style={styles.sidebarText}>{t.phone}</Text>
            <Text style={{ fontSize: 8, color: '#aaa', marginTop: 5 }}>{t.emailLabel}</Text>
            <Text style={styles.sidebarText}>{t.email}</Text>
          </View>

          <Text style={styles.sectionTitleSide}>{t.websitesTitle}</Text>
          <View style={styles.contactItem}>
            <Text style={styles.sidebarText}>{t.github}</Text>
            <Text style={styles.sidebarText}>{t.linkedin}</Text>
          </View>

          <Text style={styles.sectionTitleSide}>{t.sidebarLanguagesTitle}</Text>
          <View style={styles.contactItem}>
            <Text style={styles.sidebarText}>{t.languages}</Text>
          </View>

          <Text style={styles.sectionTitleSide}>{t.skillsTitle}</Text>
          <View style={styles.contactItem}>
            <Text style={styles.sidebarText}>• {t.skill1}</Text>
            <Text style={styles.sidebarText}>• {t.skill2}</Text>
            <Text style={styles.sidebarText}>• {t.skill3}</Text>
            <Text style={styles.sidebarText}>• {t.skill4}</Text>
            <Text style={styles.sidebarText}>• {t.skill5}</Text>
            <Text style={styles.sidebarText}>• {t.skill6}</Text>
            <Text style={styles.sidebarText}>• {t.skill7}</Text>
            <Text style={styles.sidebarText}>• <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Python</Text> {t.skill8}</Text>
            <Text style={styles.sidebarText}>• {t.skill9}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
};

const App = () => (
  <LanguageSelector />
);

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null); // null, 'es', 'en', 'fr', 'all'
  const [viewMode, setViewMode] = useState(null); // 'web', 'pdf'

  const btnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#1a2b56',
    color: 'white',
    border: '2px solid transparent',
    borderRadius: '8px',
    width: '250px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  };

  const dlStyle = {
    ...btnStyle,
    backgroundColor: '#fff',
    color: '#1a2b56',
    border: '2px solid #1a2b56',
    textDecoration: 'none',
  };

  const backBtnStyle = {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
  };

  const languageNames = { es: 'Español', en: 'English', fr: 'Français', all: 'Todos' };

  if (!selectedLanguage) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '30px', backgroundColor: '#f5f7fa' }}>
        <h1 style={{ color: '#1a2b56', fontSize: '32px', marginBottom: '10px' }}>Hola Josué, Selecciona el idioma del CV</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <button onClick={() => setSelectedLanguage('es')} style={btnStyle}>Español</button>
          <button onClick={() => setSelectedLanguage('en')} style={btnStyle}>English</button>
          <button onClick={() => setSelectedLanguage('fr')} style={btnStyle}>Français</button>
          <button onClick={() => setSelectedLanguage('all')} style={{ ...btnStyle, backgroundColor: '#4a5568' }}>Todos los Idiomas</button>
        </div>
      </div>
    );
  }

  const getDocument = () => (
    <Document>
      {selectedLanguage === 'all' ? (
        <>
          <MyCV language="es" />
          <MyCV language="en" />
          <MyCV language="fr" />
        </>
      ) : (
        <MyCV language={selectedLanguage} />
      )}
    </Document>
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <button
        onClick={() => { setSelectedLanguage(null); setViewMode(null); }}
        style={backBtnStyle}
      >
        ← Volver a selección
      </button>

      {selectedLanguage && !viewMode ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '30px', backgroundColor: '#f5f7fa' }}>
          <h1 style={{ color: '#1a2b56' }}>Idioma: {languageNames[selectedLanguage]}</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <button onClick={() => setViewMode('web')} style={btnStyle}>Ver en Navegador</button>
            <PDFDownloadLink document={getDocument()} fileName={`CV_Josue_Rodriguez_${selectedLanguage.toUpperCase()}.pdf`} style={dlStyle}>
              {({ loading }) => (loading ? 'Generando...' : 'Descargar PDF')}
            </PDFDownloadLink>
          </div>
        </div>
      ) : viewMode === 'web' ? (
        <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '40px 0' }}>
          {selectedLanguage === 'es' && <MyCVWeb language="es" />}
          {selectedLanguage === 'en' && <MyCVWeb language="en" />}
          {selectedLanguage === 'fr' && <MyCVWeb language="fr" />}
          {selectedLanguage === 'all' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <MyCVWeb language="es" />
              <MyCVWeb language="en" />
              <MyCVWeb language="fr" />
            </div>
          )}
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button onClick={() => setViewMode('pdf')} style={{ ...btnStyle, width: 'auto' }}>Abrir en Visor PDF Real</button>
          </div>
        </div>
      ) : (
        <PDFViewer style={{ width: '100%', height: '100%' }}>
          {getDocument()}
        </PDFViewer>
      )}
    </div>
  );
};

export default App;
