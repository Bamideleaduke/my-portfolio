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
} from "./assets/icons/icons";
import {
  Comfy,
  Dainty,
  ErrorPage,
  MaticLotto,
  SBL,
  StatusPage,
} from "./assets/images";

export const portfolio = [
  {
    id: 1,
    image: Dainty,
    title: "Dainty Confectioneries",
    body: "An E-commerce website with stripe payment gateway integration.",
    github: "https://github.com/Bamideleaduke/dainty_confectioneries",
    demo: "https://dainty-confectioneries.vercel.app/",
  },
  {
    id: 2,
    image: MaticLotto,
    title: "Matic Lotto",
    body: "An NFT Lottery System that is operated by a smart contract.",
    github:
      "https://github.com/Bamideleaduke/Matic-Lotto-NFTLottery",
    demo: "https://matic-lotto.netlify.app",
  },
  {
    id: 3,
    image: SBL,
    title: "Small Business Loan",
    body: "Small business loan enable small business owners to access loans to expand their businesses.",
    github: "#",
    demo: "https://loans.dukka.com/",
  },
  {
    id: 4,
    image: Comfy,
    title: "Comfy Furniture",
    body: "A platform that serve you the best comfortable furniture.",
    github: "https://github.com/Bamideleaduke/Comfy-Furniture",
    demo: "https://comfy-home-of-furniture.netlify.app/",
  },
  {
    id: 5,
    image: StatusPage,
    title: "Service Status Page",
    body: "Serves as a comprehensive platform for displaying real-time service status information. This web application provides users with a clear and intuitive interface to monitor the availability and performance of products",
    github: "https://github.com/Bamideleaduke/status-page",
    demo: "https://status-page-lake.vercel.app/",
  },
  {
    id: 6,
    image: ErrorPage,
    title: "404 Error Page",
    body: "404 gateway error design page.",
    github: "https://github.com/Bamideleaduke/404-Gateway-Error",
    demo: "https://404-gateway-error.netlify.app/",
  },
];

export const contacts = [
  {
    platform: "Email",
    username: "bamideleaduke@gmail.com",
    link: "#",
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
  { label: "header", link: "#home", icon: HomeIcon },
  { label: "about", link: "#about", icon: PersonIcon },
  { label: "skill", link: "#skill", icon: LibraryBooksIcon },
  { label: "portfolio", link: "#portfolio", icon: HandshakeIcon },
  { label: "contact", link: "#conta", icon: MessageIcon },
];

export const about = [
  {
    title: "Experience",
    content: "2+ years of experince",
    icon: WorkspacePremiumIcon,
  },
  { title: "Client", content: "2", icon: PeopleIcon },
  { title: "Projects", content: "6+ completed", icon: FolderIcon },
];
