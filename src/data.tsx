import {
  EmailIcon,
  FolderIcon,
  HandshakeIcon,
  HomeIcon,
  LibraryBooksIcon,
  MessageIcon,
  PeopleIcon,
  PersonIcon,
  // WhatsAppIcon,
  WorkspacePremiumIcon,
} from './assets/icons/icons';
import {
  Comfy,
  Dainty,
  ErrorPage,
  MaticLotto,
  Sbl,
  StatusPage,
  Insight,
  Fifthfactor,
  FinDash,
  HomeBuddy,
} from './assets/images';

export const portfolio = [
  {
    id: 1,
    image: FinDash,
    title: 'FinDash (Modern Fintech Architecture Demo)',
    body: 'A comprehensive frontend application demonstrating modern fintech architecture. Built with a highly modular component system, it features complex state-driven forms, strict Zod validation, and dynamic UI flows for multi-currency wallet management and user settings.',
    github: 'https://github.com/Bamideleaduke/findash',
    demo: 'https://demo-findash.vercel.app/login',
  },
  {
    id: 10,
    image: HomeBuddy,
    title: 'Home Buddy',
    body: 'A real estate platform that connects buyers and sellers, providing a seamless experience for finding and purchasing properties. With a user-friendly interface and powerful search features, Home Buddy makes it easy to find your dream home.',
    github: 'https://github.com/Bamideleaduke/home-buddy',
    demo: 'https://home-buddy-estate.vercel.app/',
  },
  {
    id: 2,
    image: Dainty,
    title: 'Dainty Confectioneries',
    body: 'An E-commerce website with stripe payment gateway integration.',
    github: 'https://github.com/Bamideleaduke/dainty_confectioneries',
    demo: 'https://dainty-confectioneries.vercel.app/',
  },
  {
    id: 3,
    image: Fifthfactor,
    title: '5th Factor Academy',
    body: '5th Factor Academy, where innovation meets education. Empower yourself with skills that transcend boundaries. Your journey to tech excellence starts now.',
    github: '#',
    demo: 'https://www.5thfactor.academy/',
  },
  {
    id: 4,
    image: MaticLotto,
    title: 'Matic Lotto',
    body: 'An NFT Lottery System that is operated by a smart contract.',
    github: 'https://github.com/Bamideleaduke/Matic-Lotto-NFTLottery',
    demo: 'https://matic-lotto.netlify.app',
  },
  {
    id: 5,
    image: Sbl,
    title: 'Small Business Loan',
    body: 'Small business loan enable small business owners to access loans to expand their businesses.',
    github: '#',
    demo: 'https://loans.dukka.com/',
  },
  {
    id: 6,
    image: Comfy,
    title: 'Comfy Furniture',
    body: 'A platform that serve you the best comfortable furniture.',
    github: 'https://github.com/Bamideleaduke/Comfy-Furniture',
    demo: 'https://comfy-home-of-furniture.netlify.app/',
  },
  {
    id: 7,
    image: StatusPage,
    title: 'Service Status Page',
    body: 'Serves as a comprehensive platform for displaying real-time service status information. This web application provides users with a clear and intuitive interface to monitor the availability and performance of products',
    github: 'https://github.com/Bamideleaduke/status-page',
    demo: 'https://status-page-lake.vercel.app/',
  },
  {
    id: 8,
    image: Insight,
    title: 'Insight Data Dashboard',
    body: 'Insight Data Dashboard is a dashboard to display data charts',
    github: 'https://github.com/Bamideleaduke/insight-dashboard',
    demo: 'https://insight-dashboard.netlify.app/',
  },

  {
    id: 9,
    image: ErrorPage,
    title: '404 Error Page',
    body: '404 gateway error design page.',
    github: 'https://github.com/Bamideleaduke/404-Gateway-Error',
    demo: 'https://404-gateway-error.netlify.app/',
  },
];

export const contacts = [
  {
    platform: 'Email',
    username: 'bamidelebarakatt@outlook.com',
    link: '#',
    icon: EmailIcon,
  },
  // {
  //   platform: "Whatsapp",
  //   username: "08171198478",
  //   link: "#",
  //   icon: WhatsAppIcon,
  // },
];

export const nav = [
  { label: 'header', link: '#home', icon: HomeIcon },
  { label: 'about', link: '#about', icon: PersonIcon },
  { label: 'skill', link: '#skill', icon: LibraryBooksIcon },
  { label: 'portfolio', link: '#portfolio', icon: HandshakeIcon },
  { label: 'contact', link: '#conta', icon: MessageIcon },
];

export const about = [
  {
    title: 'Experience',
    content: '3+ years of experince',
    icon: WorkspacePremiumIcon,
  },
  { title: 'Client', content: '2', icon: PeopleIcon },
  { title: 'Projects', content: '6+ completed', icon: FolderIcon },
];
