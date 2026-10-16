// All editable homepage content lives here.
// Change text, add or remove items, and the page updates to match.

// Where every "free consult" button goes. Replace with the real booking link
// (Calendly, Acuity, etc.) once it's chosen.
export const CONSULT_URL = '#contact';

// Newsletter signup endpoint. Leave empty until the email provider is chosen;
// the form will tell visitors signup isn't available yet.
export const NEWSLETTER_URL = '';

// Hero background video. Leave empty to show the photo slideshow instead.
// Put video files in /public/video/ and set e.g. '/video/hero.mp4'.
export const HERO_VIDEO = { mp4: '', webm: '', poster: '' };

export const TEDX_VIDEO_ID = '7CnbEt-R81U';

export type Link = { label: string; href?: string };

export const nav: Link[] = [
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#newsletter' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#router' },
  { label: 'Contact', href: '#contact' },
];

// Shown as text for now. Swap for logo images when available.
export const press = [
  'The New York Times',
  'Business Insider',
  'TEDx',
  'The American Lawyer',
  'Law360',
  'Mashable',
  'USA Today',
  'Newsweek',
  'CNBC',
];

// PLACEHOLDERS: replace with real clients. `photo` is a path under /public
// (e.g. '/clients/jane.jpg', 4:5 ratio, at least 600x750). `href` is optional.
export type Client = { name: string; niche: string; followers: string; photo?: string; href?: string };

export const clients: Client[] = [
  { name: 'Creator name', niche: 'Comedy · TikTok', followers: '2.1M followers' },
  { name: 'Creator name', niche: 'Fitness · YouTube', followers: '860K followers' },
  { name: 'Creator name', niche: 'Beauty · Instagram', followers: '1.4M followers' },
  { name: 'Creator name', niche: 'Finance · TikTok', followers: '540K followers' },
  { name: 'Creator name', niche: 'Gaming · Twitch', followers: '3.2M followers' },
  { name: 'Creator name', niche: 'Food · YouTube', followers: '1.1M followers' },
  { name: 'Creator name', niche: 'Parenting · Instagram', followers: '720K followers' },
  { name: 'Creator name', niche: 'Education · TikTok', followers: '2.6M followers' },
];

// Each row will link to its own service page once those exist.
export const practiceAreas: Link[] = [
  { label: 'Entertainment law', href: '#router' },
  { label: 'Trademarking', href: '#router' },
  { label: 'Contracts', href: '#router' },
  { label: 'Corporate', href: '#router' },
  { label: 'Employment', href: '#router' },
  { label: 'Venture capital', href: '#router' },
];

export const stats = [
  { big: '250M+', small: 'followers' },
  { big: '$5M+', small: 'annual brand deal volume' },
  { big: '75+', small: 'creators' },
  { big: 'Hundreds', small: 'of brand deals per year' },
];

// "What's going on?" section.
export const routerOptions = [
  {
    question: 'A brand sent me a contract',
    area: 'Brand deals',
    body: 'I help creators land brand deals so they can monetize and negotiate brand deal terms on their behalf to get them better deals.',
    quote: 'Julian and his team are incredibly responsive to my queries and concerns.',
    who: 'Sven Mozhaev, brand deal review',
  },
  {
    question: 'I want to protect my name or brand',
    area: 'Trademarking',
    body: 'Trademarks for your name, channel, and products.',
    quote: 'They got my trademark done CRAZY fast! Highly recommend Julian.',
    who: 'Catherine, Creator',
  },
  {
    question: 'I’m starting or growing a business',
    area: 'Contracts, corporate, employment & venture capital',
    body: 'I’m passionate about helping folks build their businesses, and often serve as an advisor to my clients to help them ideate and execute on new products and businesses.',
    quote: 'He’s helped our startup from ground zero and caught issues we as founders would have never seen.',
    who: 'Christophe, small business owner',
  },
  {
    question: 'Someone stole or misused my content',
    area: 'Litigation',
    body: 'Disputes over stolen content, unpaid deals, and broken agreements.',
    quote: 'He took it seriously when other firms didn’t. And we won a large settlement.',
    who: 'Teresa Jack',
  },
  {
    question: 'I’m facing an accusation or threat',
    area: 'Defamation defense',
    body: 'Defense when you’re accused, with de-escalation where possible.',
    quote: 'FCBC helped de-escalate the situation and prevent litigation.',
    who: 'Michelle, defamation defense',
  },
];

export const testimonials = [
  {
    text: 'I went and found Julian, who’s a lawyer that thankfully handles all of my legal stuff now. He represents content creators and has definitely saved me from trying to sign on to anything questionable.',
    who: 'Cori, Creator',
  },
  {
    text: 'When you’re neurodivergent, you may have to ask for help with a lot of things. I’m grateful to have good people around me. Thank you Julian for your services and legal representation.',
    who: 'Dr. Kojo Sarfo, Creator',
  },
  {
    text: 'Julian was incredibly fast and created a custom contract for my business that fit my needs perfectly, and for cheap!',
    who: 'Zach, creator',
  },
];

// Links without an href show as plain text until a destination exists.
export const footerLinks: Link[] = [
  { label: 'Practice Areas', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQS', href: '#router' },
  { label: 'Free Resources' },
  { label: 'TikTok' },
  { label: 'Instagram' },
];
