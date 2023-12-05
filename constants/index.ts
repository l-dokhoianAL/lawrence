import hi from "@/assets/homepage/hi.png";
import harper from "@/assets/homepage/harper.png";
import lawrence from "@/assets/homepage/lawrence.png";
import piper from "@/assets/homepage/piper.png";
import xps from "@/assets/homepage/xps.png";
import scipro from "@/assets/homepage/scipro.png";
import LiIcon from "@/assets/icons/li.svg";
import FbIcon from "@/assets/icons/fb.svg";
import LgIcon from "@/assets/icons/lg.svg";
import XIcon from "@/assets/icons/x.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import WhiteLogo from "@/assets/logos/white-logo.png";
import PurpleLogo from "@/assets/logos/color-logo.png";
import LiLightIcon from "@/assets/icons/li-light.svg";
import FbLightIcon from "@/assets/icons/fb-light.svg";
import LgLightIcon from "@/assets/icons/lg-light.svg";
import XLightIcon from "@/assets/icons/x-light.svg";
import YoutubeLightIcon from "@/assets/icons/youtube-light.svg";


const BG_VARIANTS = {
  green: "bg-green",
  white: "bg-white",
  purple: "bg-pruple",
  transparent: "bg-transparent",
};

const COLOR_VARIANTS = {
  green: "text-green",
  white: "text-white",
  purple: "text-purple",
};

const BORDER_VARIANTS = {
  green: "border-green",
  white: "border-white",
  purple: "border-purple",
};

const HOVER_COLOR_VARIANTS = {
  green: "hover:text-green",
  white: "hover:text-white",
  purple: "hover:text-purple",
  transparent:"hover:text-transparent"
};

const HOVER_BG_VARIANTS = {
  green: "hover:bg-green",
  white: "hover:bg-white",
  purple: "hover:bg-purple",
};

const STACK = [
  {
    txt: "Data & Analytics",
  },
  {
    txt: "Cloud Applications",
  },
  {
    txt: "Cloud Infra. & DevOps",
  },
  {
    txt: "Privacy & Legal",
  },
  {
    txt: "Cyber Security",
  },
  {
    txt: "Financial Services",
  },
  {
    txt: "Software Engineering",
  },
];
const ANALYTICS = [
  {
    txt: "Full Stack Development /",
  },
  {
    txt: "Frontend & UI Engineering /",
  },
  {
    txt: "Backend Engineer /",
  },
  {
    txt: "Mobile Engineering /",
  },
  {
    txt: "iOS & Andorid / Web Development /",
  },
  {
    txt: "Product Development /",
  },
  {
    txt: "Application Development /",
  },
  {
    txt: "Engineering Management & Leadership /",
  },
  {
    txt: "Executive Search",
  },
];

const FOOTER_LINKS = {
  Explore: [
    { title: "About", path: "about" },
    { title: "Candidates", path: "candidates" },
    { title: "Clients", path: "clients" },
    { title: "Jobs", path: "jobs" },
    { title: "Team", path: "team" },
    { title: "Join us", path: "join-us" },
    { title: "Events", path: "events" },
  ],
  Content: [
    { title: "Blog", path: "blog" },
    { title: "News", path: "news" },
    { title: "Podcast", path: "podcast" },
    { title: "Newsletter", path: "newsletter" },
  ],
  Contact: [
    { title: "Bristol, UK", path: "bristol-uk" },
    { title: "London, UK", path: "london-uk" },
    { title: "Munich, DE", path: "munich-de" },
    { title: "Berlin, DE", path: "berlin-de" },
    { title: "New York, USA", path: "new-york-usa" },
    { title: "Miami, USA", path: "miami-usa" },
    { title: "Austin, USA", path: "austin-usa" },
    { title: "Los Angeles, USA", path: "los-angeles-usa" },
  ],
  Legal: [
    { title: "Privacy Policy", path: "privacy-policy" },
    { title: "Cookie Policy", path: "cookie-policy" },
    {
      title: "Terms & Conditions",
      path: "terms&conditions                                                                                                                                 ",
    },
    { title: "Modern Slavery Policy", path: "modern-slavery-policy" },
  ],
};
const NAVBAR_STYLES = {
  "/": {
    color: "text-white",
    img: WhiteLogo,
    btnBg: "green",
    btnColor: "purple",
    menu: "stroke-white",
    icon:'fill-white',
    searchIcon:'fill-purple'
  },
  "/jobs": {
    color: "text-white",
    img: WhiteLogo,
    btnBg: "green",
    btnColor: "purple",
    menu: "stroke-white",
    icon:'fill-white',
    searchIcon:'fill-purple'
  },
  "/job-ad": {
    color: "text-purple",
    img: PurpleLogo,
    btnBg: "purple",
    btnColor: "white",
    menu: "stroke-purple",
    icon:'fill-purple',
    searchIcon:'fill-white'
  },
} as const;

const FOOTER_LOGOS = [
  {
    url: hi,
    title: "Parent company and employer brand",
    width: 55,
    height: 55,
    id: 1,
  },
  {
    url: lawrence,
    title: "Technology recruitment",
    width: 75,
    height: 25,
    id: 2,
  },
  {
    url: scipro,
    title: "Life Science recruitment",
    width: 76,
    height: 32,
    id: 3,
  },
  {
    url: harper,
    title: "Built Environment recruitment",
    width: 123,
    height: 32,
    id: 4,
  },
  {
    url: piper,
    title: "Clean Energy recruitment",
    width: 85,
    height: 33,
    id: 5,
  },

  {
    url: xps,
    title: "Project Delivery",
    width: 53,
    height: 35,
    id: 6,
  },
];

const FOOTER_WEBSITE = [LiIcon, LgIcon, FbIcon, XIcon, YoutubeIcon];
const HEADER_WEBSITE = [LiLightIcon, LgLightIcon, FbLightIcon, XLightIcon, YoutubeLightIcon];
const MENU_ITEMS = [
  {
    id: 1,
    title: 'About',
    link: '/about',
    subelements: []
  },
  {
    id: 2,
    title: 'Work with us',
    link: '/',
    subelements: [
      {
        id: 1,
        title: 'Candidates',
        link: '/candidates'
      },
      {
        id: 2,
        title: 'Clients',
        link: '/clients'
      },
    ]
  },
  {
    id: 3,
    title: 'Team',
    link: '/team',
    subelements: [
      {
        id: 1,
        title: 'Join us',
        link: '/join-us'
      }
    ]
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog',
    subelements: [
      {
        id: 1,
        title: 'Blogs',
        link: '/blog'
      }
    ]
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    subelements: []
  },
];

export {
  BG_VARIANTS,
  COLOR_VARIANTS,
  BORDER_VARIANTS,
  HOVER_COLOR_VARIANTS,
  HOVER_BG_VARIANTS,
  STACK,
  ANALYTICS,
  FOOTER_LINKS,
  FOOTER_LOGOS,
  FOOTER_WEBSITE,
  NAVBAR_STYLES,
  MENU_ITEMS,
  HEADER_WEBSITE
};
