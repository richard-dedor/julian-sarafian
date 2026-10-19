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

// Where "Contact the team" links go until a contact page exists.
export const CONTACT_URL = '/#contact';

export const nav: Link[] = [
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/#newsletter' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#router' },
  { label: 'Contact', href: '/#contact' },
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

// Homepage practice-area rows. Links jump to the matching service on /services.
export const practiceAreas: Link[] = [
  { label: 'Entertainment law', href: '/services' },
  { label: 'Trademarking', href: '/services#trademarking' },
  { label: 'Contracts', href: '/services' },
  { label: 'Corporate', href: '/services#corporate-formation' },
  { label: 'Employment', href: '/services' },
  { label: 'Venture capital', href: '/services#venture-capital' },
];

// Services page: pricing band.
export const rates = [
  { big: '$550/hr', small: 'General rate' },
  { big: 'From $1000', small: 'Packages for corporate formation and trademarking, plus state filing fees' },
  { big: '$500 flat', small: 'All redlining and negotiating for creator brand deals under $20k' },
  { big: '3%', small: 'For creator brand deals above $20k' },
];

// Services page: the list. `id` is the link anchor, e.g. /services#trademarking
export const services = [
  {
    id: 'corporate-formation',
    name: 'Corporate Formation',
    body: 'If you want to found a company you came to the right place. Whether it’s a C-corp, S-corp, or LLC we can get your company off the ground in no time (and offer affordable packages to get the job done).',
  },
  {
    id: 'brand-deals',
    name: 'Brand Deal Negotiation & Redlining',
    body: 'We will review brand contracts for influencers and creators to ensure you are protected and getting the deal you signed up for. We also create custom agreements for creators and chase down brands that aren’t paying up.',
  },
  {
    id: 'hacked-accounts',
    name: 'Disabled/Hacked Accounts',
    body: 'We help folks recover hacked or wrongfully disabled Facebook or Instagram accounts, including by sending demand letters, drafting reports to the attorney general, and litigating.',
  },
  {
    id: 'small-business',
    name: 'Small Business Counseling',
    body: 'We help small businesses handle legal issues like contract review, negotiation, incorporation, and general legal work.',
  },
  {
    id: 'trademarking',
    name: 'Trademarking',
    body: 'We’ll get your trademark done, start to finish (including search, application, & followup).',
  },
  {
    id: 'stolen-content',
    name: 'Stolen Content',
    body: 'We offer take-down requests and cease and desists to de-platform stolen content. We also use litigation tools and small copyright claims court to handle cases should things escalate.',
  },
  {
    id: 'defamation',
    name: 'Defamation',
    body: 'We protect creators’ first amendment rights to speak out. We also handle demands to stop folks from defaming and slandering our clients.',
  },
  {
    id: 'venture-capital',
    name: 'Venture Capital',
    body: 'We represent small businesses and startups in the venture capital eco-system. Same work as Biglaw at a fraction of the cost. Services include corporate governance, general advise, financing document negotiations, drafting, and review.',
  },
  {
    id: 'prenups',
    name: 'Prenup Agreements',
    body: 'We draft and review prenuptial agreements in California for an affordable rate. Let us handle the legal so you can focus on your big day!',
  },
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
  { label: 'Practice Areas', href: '/services' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQS', href: '/#router' },
  { label: 'Free Resources' },
  { label: 'TikTok' },
  { label: 'Instagram' },
];
