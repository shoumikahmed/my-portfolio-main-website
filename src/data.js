//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,

} from 'react-icons/fi';
import { FaGoogle, FaLinkedin } from "react-icons/fa";


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/S.A photography.png';
import Project2 from './assets/img/projects/Cpu Tech.png';
import Project3 from './assets/img/projects/Bike Stock.png';
import Project4 from './assets/img/projects/Money Calculation.png';
import Project5 from './assets/img/projects/Panda Mart.png';
import Project6 from './assets/img/projects/Camera Review Page.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
    {
        name: 'home',
        href: 'home',
    },
    {
        name: 'about',
        href: 'about',
    },
    {
        name: 'portfolio',
        href: 'portfolio',
    },
    {
        name: 'contact',
        href: 'contact',
    },
];

// social
export const social = [

    {
        icon: <FiGithub />,
        href: 'https://github.com/shoumikahmed',
    },
    {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/shoumikahmed/',
    },
    {
        icon: <FaGoogle />,
        href: 'https://mail.google.com/mail/u/0/#inbox',
    },

];

// companies
export const brands = [
    {
        img: FreelancerBrandIcon,
        href: '',
    },
    {
        img: UpworkBrandIcon,
        href: '',
    },
    {
        img: FiverBrandIcon,
        href: '',
    },
    {
        img: BehanceBrandIcon,
        href: '',
    },
    {
        img: DribbbleBrandIcon,
        href: '',
    },
];

// projects
export const projectsData = [
    {
        id: '1',
        image: Project1,
        name: 'S.A Photography',
        category: 'Reactjs',
        livelink: 'https://sa-photography-assignment10.web.app/?fbclid=IwAR2E8BTBRjNsspAA93_fHaZc8j2qdEWMB12m7kAjwvj-HfpFpgja8hAoAGE'
    },
    {
        id: '2',
        image: Project2,
        name: 'Cpu Tech',
        category: 'Reactjs',
        livelink: 'https://cpu-manufacturer-assignm-47d23.web.app/'
    },
    {
        id: '3',
        image: Project3,
        name: 'Bike Stock',
        category: 'Reactjs',
        livelink: 'https://bike-stock-assignment11.web.app/?fbclid=IwAR2E8BTBRjNsspAA93_fHaZc8j2qdEWMB12m7kAjwvj-HfpFpgja8hAoAGE'
    },
    {
        id: '4',
        image: Project4,
        name: 'Money Calculation',
        category: 'Javascript',
        livelink: 'https://nervous-albattani-d7b2c3.netlify.app/'
    },
    {
        id: '5',
        image: Project5,
        name: 'Panda Mart',
        category: 'web development',
        livelink: 'https://distracted-bose-d70032.netlify.app/'
    },
    {
        id: '6',
        image: Project6,
        name: 'Camera review page',
        category: 'web development',
        livelink: 'https://sparkly-mermaid-89563e.netlify.app/'
    },

];

// projects
export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'javascript',
    },
    {
        name: 'reactjs',
    },

];

// skill
export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
];

// services
export const services = [
    {
        icon: <FiLayout />,
        name: 'Web Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
        icon: <FiSettings />,
        name: 'Web Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
        icon: <FiPenTool />,
        name: 'Branding',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
        icon: <FiTag />,
        name: 'SEO',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
];

// testimonials
export const testimonials = [
    {
        authorImg: TestiImage1,
        authorText:
            'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google',
    },
    {
        authorImg: TestiImage2,
        authorText:
            'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google',
    },
    {
        authorImg: TestiImage3,
        authorText:
            'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google',
    },
];

// contact
export const contact = [
    {
        icon: <FiMail />,
        title: 'Have a question?',
        subtitle: 'I am here to help you.',
        description: 'Email me at hello@youremail.com',
    },
    {
        icon: <FiMapPin />,
        title: 'Current Location',
        subtitle: 'Bucharest, Romania',
        description: 'Serving clients worldwide',
    },
];
