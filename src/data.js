import { getDate } from "./functions";

export const ROUTES = [
  {
    path: '/',
    request: `https://v3.football.api-sports.io/fixtures?date=${getDate()}&timezone=Europe/Kiev`,
  },
  {
    path: '/live',
    request: `https://v3.football.api-sports.io/fixtures?live=all&timezone=Europe/Kiev`,
  },
];

export const MENU = [
  {
    title:'Matches',
    to: '/',
    id: 'ball'
  },
  {
    title:'Leagues',
    to: '/leagues',
    id: 'news',
  },
  {
    title:'About',
    to: '/about',
    id: 'faq',
  },
  {
    title:'Support',
    to: '/support',
    id: 'support',
  },
];

export const SIDEMENU = [
  {
    title:'The best',
    to: '/',
    id: 'fire',
    amount: 228,
  },
  {
    title:'Live',
    to: '/live',
    id: 'live',
    amount: 322,
  },
  {
    title:'Favorites',
    to: '/favorites',
    id: 'star',
    amount: 0,
  },
]

export const MOBILEMENU = [
  {
    title:'Matches',
    to: '/',
    id: 'ball'
  },
  {
    title:'Leagues',
    to: '/leagues',
    id: 'news',
  },
  {
    title:'About',
    to: '/about',
    id: 'faq',
  },
  {
    title:'Support',
    to: '/contact',
    id: 'support',
  },
  {
    title:'Live',
    to: '/live',
    id: 'live',
    amount: 322,
  },
  {
    title:'Favorites',
    to: '/favorites',
    id: 'star',
    amount: 0,
  },
];


export const IMAGES = [
  {
    url: 'https://cyberbet-banners-prod.imgix.net/prod/DES_527_CyberBet_MainPage_Top_Banners_v5_5_en_450x134.jpg?q=75&h=78&w=264&fit=clamp&fill=solid&fill-color=0FFF&auto=format&lossless=true&dpr=2',
  },
  {
    url: 'https://cyberbet-banners-prod.imgix.net/prod/DES_527_CyberBet_MainPage_Top_Banners_v5_2_en_450x134.jpg?q=75&h=78&w=264&fit=clamp&fill=solid&fill-color=0FFF&auto=format&lossless=true&dpr=2',
  },
  {
    url: 'https://cyberbet-banners-prod.imgix.net/prod/DES_527_CyberBet_MainPage_Top_Banners_v5_4_en_450x134.jpg?q=75&h=78&w=264&fit=clamp&fill=solid&fill-color=0FFF&auto=format&lossless=true&dpr=2',
  },
  {
    url: 'https://cyberbet-banners-prod.imgix.net/prod/DES_527_CyberBet_MainPage_Top_Banners_v5_17_en_450x134.jpg?q=75&h=78&w=264&fit=clamp&fill=solid&fill-color=0FFF&auto=format&lossless=true&dpr=2',
  },
];