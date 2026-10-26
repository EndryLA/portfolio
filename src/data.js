import SdiExpertise from '@assets/projects/sdiexpertise.webp'
import AssociationAdmin from '@assets/projects/association-admin.webp'
import Pomodoro from '@assets/projects/pomodoro.png'
import NebulaUI from '@assets/projects/nebula-ui.png'
import GithubReadmeGenerator from '@assets/projects/github-readme-generator.png'
import WeatherApp from '@assets/projects/weather-forecast.png'
import GaragePoirot from '@assets/projects/garage-poirot.webp'
import ArcadiaZoo from '@assets/projects/arcadia-zoo.png'
import ZxwlPhotography from '@assets/projects/zxwl-photography.webp'
import CendrillonWesh from '@assets/projects/cendrillon-wesh.webp'
import RimberioCoffee from '@assets/projects/rimberio.png'
import ShopSphereApi from '@assets/projects/api-shopsphere.webp'
import MonevoApi from '@assets/projects/api-monevo.webp'
import BooksApi from '@assets/projects/api-books.webp'

import angularLogo from '@assets/stack-logos/angular.svg'
import typescriptLogo from '@assets/stack-logos/typescript.svg'
import rxjsLogo from '@assets/stack-logos/rxjs.svg'
import javascriptLogo from '@assets/stack-logos/javascript.svg'
import htmlLogo from '@assets/stack-logos/html.svg'
import cssLogo from '@assets/stack-logos/css.svg'
import javaLogo from '@assets/stack-logos/java.svg'
import springbootLogo from '@assets/stack-logos/springboot.svg'
import nodejsLogo from '@assets/stack-logos/nodejs.svg'
import nestjsLogo from '@assets/stack-logos/nestjs.svg'
import postgresqlLogo from '@assets/stack-logos/postgresql.svg'
import mongodbLogo from '@assets/stack-logos/mongodb.svg'
import figmaLogo from '@assets/stack-logos/figma.svg'
import webflowLogo from '@assets/stack-logos/webflow.svg'
import canvaLogo from '@assets/stack-logos/canva.svg'
import gitLogo from '@assets/stack-logos/git.svg'
import githubLogo from '@assets/stack-logos/github.svg'
import dockerLogo from '@assets/stack-logos/docker.svg'
import postmanLogo from '@assets/stack-logos/postman.svg'
import jiraLogo from '@assets/stack-logos/jira.svg'
import claudeLogo from '@assets/stack-logos/claude.svg'

export const GITHUB_URL = 'https://github.com/endryLA'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/endry-lundy-167440193/'

// CV served from public/cv-endry-lundy.pdf
export const CV_URL = '/cv-endry-lundy.pdf'

// address the contact form opens a mail to
export const CONTACT_EMAIL = 'endry.lundy@gmail.com'

// key figures under the hero: value counts up, prefix/suffix stay fixed
export const kpis = [
    { value:2, suffix:'+', label:'ans d’expérience' },
    { value:8, suffix:'+', label:'projets livrés' },
    { value:100, suffix:'%', label:'clients satisfaits' },
]

export const projects = [
    {
        title: 'SDIExpertise',
        type: 'Full-Stack',
        description: 'Nouvelle plateforme d’une société de diagnostic immobilier : site web React et suite de microservices Java utilisés par les applications mobiles, le site et les ERP partenaires.',
        stack: ['Java', 'Spring Boot', 'Microservices', 'Clean Architecture', 'React'],
        href: 'https://www.sdiexpertise.fr/',
        image: SdiExpertise,
    },
    {
        title: 'Plateforme de gestion interne',
        type: 'Full-Stack',
        description: 'Back-office d’une organisation : gestion des membres et des équipes, planification des activités, suivi de la participation avec tableaux de bord et indicateurs, génération de supports de communication.',
        stack: ['Angular', 'Signals', 'Spring Boot', 'Spring Security', 'Chart.js'],
        href: '',
        private: true,
        image: AssociationAdmin,
    },
    {
        title: 'Nebula UI',
        type: 'Frontend',
        description: 'Une bibliothèque de blocs d’interface prêts à l’emploi pour Angular.',
        stack: ['Angular', 'RxJS', 'i18n'],
        href: 'https://nebula-ui-pied.vercel.app/',
        image: NebulaUI,
    },
    {
        title: 'Cendrillon Wesh!',
        type: 'Full-Stack',
        description: 'Le site du spectacle de l’Agapé Company.',
        stack: ['Angular', 'Node.js', 'TypeScript', 'SCSS'],
        href: 'https://cendrillonwesh.fr/',
        image: CendrillonWesh,
    },
    {
        title: 'Weather Forecast',
        type: 'Frontend',
        description: 'Application météo branchée sur une API externe, flux de données en RxJS.',
        stack: ['Angular', 'TypeScript', 'RxJS'],
        href: 'https://weather-forecast-chi-steel.vercel.app/',
        image: WeatherApp,
    },
    {
        title: 'Pomodoro Focus',
        type: 'Frontend',
        description: 'Un minuteur Pomodoro avec liste de tâches et statistiques, pour rester concentré sur une chose à la fois.',
        stack: ['Angular', 'TypeScript'],
        href: 'https://pomodoro-app-sooty-iota.vercel.app/',
        image: Pomodoro,
    },
    {
        title: 'Github ReadMe Generator',
        type: 'Frontend',
        description: 'Un générateur de README pour les profils GitHub, en plusieurs langues.',
        stack: ['Angular', 'i18n', 'Design system'],
        href: 'https://github-generator-nine.vercel.app/',
        image: GithubReadmeGenerator,
    },
    {
        title: 'Garage V. Poirot',
        type: 'Full-Stack',
        description: 'Site d’un garage automobile : front Angular, API Express et base MySQL.',
        stack: ['Angular', 'Node.js', 'Express', 'MySQL'],
        href: 'https://garagepoirot.vercel.app/',
        image: GaragePoirot,
    },
    {
        title: 'Zoo Arcadia',
        type: 'Full-Stack',
        description: 'Site d’un zoo : front React, API Express et base MongoDB.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB'],
        href: 'https://arcadia-ecf.vercel.app/',
        image: ArcadiaZoo,
    },
    {
        title: 'Zxwl Photography',
        type: 'Frontend',
        description: 'Le portfolio d’un photographe.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        href: 'https://zxwl-photography.vercel.app/',
        image: ZxwlPhotography,
    },
    {
        title: 'Rimberio Coffee',
        type: 'Frontend',
        description: 'Le site d’un coffee shop, maquetté sur Figma et monté sur Webflow. Bientôt en ligne.',
        stack: ['Figma', 'Webflow'],
        href: '',
        image: RimberioCoffee,
    },
    {
        title: 'ShopSphere',
        type: 'Backend',
        description: 'Back-end e-commerce en Spring Boot : architecture en couches (contrôleurs, services, repositories), DTO et mappers, sécurité Spring Security avec JWT. 38 endpoints.',
        stack: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA', 'MySQL'],
        href: 'https://github.com/endryLA/shopsphere',
        cta: 'Code source',
        image: ShopSphereApi,
    },
    {
        title: 'Monevo',
        type: 'Backend',
        description: 'Back-end de suivi de transactions en Spring Boot : architecture en couches, transactions et catégories par utilisateur, sécurité par filtre JWT. 17 endpoints.',
        stack: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA', 'MySQL'],
        href: 'https://github.com/endryLA/monevo-backend/tree/auth',
        cta: 'Code source',
        image: MonevoApi,
    },
    {
        title: 'Books API',
        type: 'Backend',
        description: 'Projet d’entraînement : un CRUD en couches sur une bibliothèque de livres, avec Java 21, Spring Boot 3.5 et PostgreSQL.',
        stack: ['Java 21', 'Spring Boot', 'JPA', 'PostgreSQL'],
        href: 'https://github.com/endryLA/training-spring',
        cta: 'Code source',
        image: BooksApi,
    },
]

export const experiences = [
    {
        period:'Nov. 2026 — aujourd’hui',
        title:'Développeur Full Stack Java / Angular',
        company:'CEC Paris',
        description:'Application mobile de covoiturage pour l’association, pour mettre en relation les conducteurs et les membres qui ont besoin d’un trajet.',
        skills:['Angular 20', 'Ionic 8', 'Spring Boot', 'Google Cloud Run', 'Docker'],
    },
    {
        period:'Janv. — avr. 2026',
        title:'Développeur Full Stack Java / Angular',
        company:'CEC Paris',
        description:'Outils internes et CRM pour gérer les tâches de l’association et simplifier ses processus, avec un développement assisté par l’IA.',
        skills:['Spring Boot', 'Spring Security', 'Data JPA', 'RBAC', 'Angular 21', 'Claude Code'],
    },
    {
        period:'Avr. 2025 — mars 2026',
        title:'Développeur Full Stack Microservices Java / React',
        company:'SDIExpertise',
        description:'Nouvelle plateforme digitale d’une société de diagnostic immobilier : un site web React et une suite de microservices Java utilisés par les applications mobiles, le site et les ERP partenaires.',
        skills:['Microservices', 'Java', 'Spring Boot', 'Clean Architecture', 'React'],
    },
]

export const stack = [
    { name:'Angular', icon:angularLogo },
    { name:'TypeScript', icon:typescriptLogo },
    { name:'RxJS', icon:rxjsLogo },
    { name:'JavaScript', icon:javascriptLogo },
    { name:'HTML', icon:htmlLogo },
    { name:'CSS / SCSS', icon:cssLogo },
    { name:'Java', icon:javaLogo },
    { name:'Spring Boot', icon:springbootLogo },
    { name:'Node.js', icon:nodejsLogo },
    { name:'NestJS', icon:nestjsLogo },
    { name:'PostgreSQL', icon:postgresqlLogo },
    { name:'MongoDB', icon:mongodbLogo },
    { name:'Figma', icon:figmaLogo },
    { name:'Webflow', icon:webflowLogo },
    { name:'Canva', icon:canvaLogo },
    { name:'Git', icon:gitLogo },
    { name:'GitHub', icon:githubLogo },
    { name:'Docker', icon:dockerLogo },
    { name:'Postman', icon:postmanLogo },
    { name:'Jira', icon:jiraLogo },
    { name:'Claude', icon:claudeLogo },
]
