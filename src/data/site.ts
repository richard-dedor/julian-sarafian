import teresaJack from '../assets/testimonials/teresa-jack.jpg';
import arshiaFirouzi from '../assets/testimonials/arshia-firouzi.webp';
import haelySawyer from '../assets/testimonials/haely-sawyer.webp';
import sevMozhaev from '../assets/testimonials/sev-mozhaev.webp';
import michelle from '../assets/testimonials/michelle.webp';

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

// Free Brand Deal Course (Free Resources page).
export const COURSE_URL = 'https://pillar.io/julian/checkout/dea5e4f0-63f7-11ee-9b2f-bf399bc0602e';

export const nav: Link[] = [
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/free-resources' },
  { label: 'Testimonials', href: '/client-testimonials' },
  { label: 'FAQ', href: '/faq' },
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

// Client Testimonials page: big stories with photos. The first paragraph of
// each quote is shown large. Photos live in src/assets/testimonials/.
export const featuredStories = [
  {
    name: 'Teresa Jack',
    role: 'Creator',
    photo: teresaJack,
    quote: [
      '“Julian believed me when I came to him with my case.',
      'He took it seriously when other firms didn’t. And we won a large settlement. In a world committed to underestimating and ripping off small creators, Julian fought for me.”',
    ],
  },
  {
    name: 'Arshia Firouzi',
    role: 'Co-Founder, Ravata Solutions',
    photo: arshiaFirouzi,
    quote: [
      '“First of all, responsive!',
      'I never had to wait more than a day, and usually less than that, for work to get done. How refreshing! Julian was a great advisor for my start-up. He helped mentor and guide me through the process of SAFE fundraising and commercial and contract issues my company had. And he’s a fraction of the cost of larger firms.”',
    ],
  },
  {
    name: 'Haely Sawyer',
    role: 'Creator & founder',
    photo: haelySawyer,
    quote: [
      '“For Creators By Creators was hired after I expressed concerns about a big influencer online.',
      'They accused me of defamation, I knew I needed a law firm that understood social media and how muddy the water can get in these cases. They allowed me to vent through my anger while still advising me on the legalities. Over the course of a few months I was able to defuse the situation through their guidance and avoid court. Having a firm that is compassionate is essential in this world today. They provided that and great assistance.”',
    ],
  },
  {
    name: 'Sev Mozhaev',
    role: '@sevspics, creator',
    photo: sevMozhaev,
    quote: [
      '“When discovering For Creators, By Creators, I was immediately invested in acquiring the team to be in my corner.',
      'When it comes to my personal brand and the content I share online in collaboration with other brands, there is no comparison to the experience For Creators, By Creators has in this field when it comes to legal representation.',
      'Julian and his team are incredibly responsive to my queries and concerns. When it comes to assisting me in drawing up a contract or looking over another, I go to the team with no hesitation because not only are they loyal, but their rates are super accessible!',
      'Looking forward to working on many more future projects knowing I have a talented team ensuring I am looked after well with my contracts and agreements.”',
    ],
  },
  {
    name: 'Michelle',
    role: '@misomelon, creator',
    photo: michelle,
    quote: [
      '“After sharing my dog’s experience at luxury pet hotel chain on my social media, their lawyer reached out with potential legal action.',
      'I had never been contacted by a lawyer before. To say the least, I was shocked and scared. I connected with Julian at FCBC, and knew I needed to hire them within five minutes.',
      'They understand the intersection of social media and law, including cease & desisted orders and defamation claims, like no other. Over the next few weeks, Julian and the FCBC helped de-escalate the situation and prevent litigation. They communicated and reassured me every step of the way. I love working with FCBC and still use them for brand deals & contract reviewed to this day.”',
    ],
  },
];

// Client Testimonials page: shorter quotes without photos.
export const moreTestimonials = [
  {
    name: 'Dr. Kojo Sarfo',
    handle: '@dr.kojosarfo',
    role: 'creator',
    quote: [
      '“I came across a very fantastic attorney, a man by the name of Julian Sarafian. This is a guy who went to Harvard. he’s educated, and he’s posted about his mental health journey online. His journey is not only inspiring, but I can relate to it.',
      'And knowing that I have representation by an attorney who has experience as a content creator and who also has lived experience with mental health struggles, it makes me so much more confident in knowing that as I move forward with future business transactions, my company, my community, that we’ve built here collectively online and the people that I love will not be compromised neither financially nor with our information.',
      'I’m so grateful to be represented by this attorney.”',
    ],
  },
  {
    name: 'Kelly Tran',
    handle: '@beautybykellytran',
    role: 'creator',
    quote: [
      '“I was introduced to Julian when I was looking for an attorney that specialized in working with small businesses and entrepreneurs with an emphasis in the beauty space and social content. I was pleasantly surprised with how quickly, efficient, and professional working with Julian was.',
      'He explained things to me that made sense and responded to my long list of questions in a timely manner. I appreciate the attention to detail he has and the affordability of his services.',
      'Being able to be set up for success and protect my business in a world of uncertainty was a goal of mine this year and I wasn’t sure how I’d get here if it wasn’t for Julian. After more than a decade of being in business, I am now able to move forward confidently in my business by sending contracts to my clients without the fear of them misinterpreting my terms all thanks to Julian!”',
    ],
  },
  {
    name: 'Jenna',
    handle: '@jennamediaco',
    role: 'creator',
    quote: [
      '“I love how their goal is to make it easy for us as creators to work with the law and not let this happen anymore. Their team is literally a team full of creators, so they understand our side. We need to let these slimy brands and agencies know we are not just going to roll over—we have a team on our side that is ready to help us. I’m super excited to announce that I’m working with For Creators By Creators.”',
    ],
  },
  {
    name: 'Maes Mystic',
    handle: '@maesmystics',
    role: 'creator',
    quote: [
      '“In todays age, you’re more than likely to get scammed & have content stolen. Take this as your sign to hire a lawyer. FCBC and Julian did an AMAZING job at helping me.”',
    ],
  },
  {
    name: 'Nurjahan Boulden',
    handle: '@nurjahanboulden',
    role: 'creator',
    quote: ['“I finally got my Facebook page back!!! HUGE thanks to Julian Sarafian at For Creators by Creators PC for getting it back to me!”'],
  },
];

// Client Testimonials page: "Hear directly from creators" videos. Until real
// videos are added, numbered placeholder tiles show. Add YouTube Shorts IDs,
// e.g. ['abc123XYZ', ...].
export const creatorVideoIds: string[] = [];

// Links without an href show as plain text until a destination exists.
export const footerLinks: Link[] = [
  { label: 'Practice Areas', href: '/services' },
  { label: 'Testimonials', href: '/client-testimonials' },
  { label: 'FAQS', href: '/faq' },
  { label: 'Free Resources', href: '/free-resources' },
  { label: 'TikTok' },
  { label: 'Instagram' },
];

// FAQ page. Each answer is a list of paragraphs; a paragraph is a list of
// pieces, either plain text or a link { t: 'text', href: '...' }.
export type FaqPiece = string | { t: string; href: string };
export type Faq = { id: string; q: string; a: FaqPiece[][] };

export const faqGroups: { id: string; title: string; items: Faq[] }[] = [
  {
    id: 'working-with-us',
    title: 'Working with us',
    items: [
      {
        id: 'need-lawyer',
        q: 'Do I really need a lawyer?',
        a: [
          ['If you are asking yourself that question the answer is probably yes.'],
          [
            'Being a creator is like running a business, and there are tons of ways a lawyer (like us!) can help you, from corporate formation, to contract review, to reducing litigation risk, and protecting your intellectual property.',
          ],
        ],
      },
      {
        id: 'not-listed',
        q: 'I have a legal case and it’s not listed in your areas of expertise. Can you still help me?',
        a: [[{ t: 'Reach out to our team', href: CONTACT_URL }, ' and we can see how we can help!']],
      },
      {
        id: 'cease-and-desist',
        q: 'I just got a cease and desist letter and I’m scared. What do I do?',
        a: [[{ t: 'Contact us', href: CONTACT_URL }, ' — we will help you get it sorted ASAP.']],
      },
      {
        id: 'free-advice',
        q: 'Do you give out free advice?',
        a: [
          [
            'We don’t give out free legal advice but we do offer a lot of tips, tricks, and knowledge about the creator economy and small businesses on our ',
            { t: 'TikTok', href: 'https://www.tiktok.com/@forcreatorsbycreators' },
            ' and ',
            { t: 'Instagram', href: 'https://www.instagram.com/forcreatorsbycreatorspc/' },
            ', so drop us a follow.',
          ],
        ],
      },
      {
        id: 'cancel',
        q: 'What do I do if I don’t need your services anymore? Do I have to cancel?',
        a: [
          [
            'Nothing. Once you hire us we will be here for you going forward for anything legal we can help with. No need to cancel or “fire” us — in fact, we think you should keep us around because you signed with us already!',
          ],
        ],
      },
    ],
  },
  {
    id: 'rates-billing',
    title: 'Rates & billing',
    items: [
      {
        id: 'rates',
        q: 'What are your rates?',
        a: [
          [
            'For social media brand deals my rate is a flat $500 (for deals less than $20k) or 3% (for deals $20k or greater) of gross revenue for unlimited contract review, negotiation, and advisement. Other general legal work is $550/hour. Corporate formations and trademark filings begin at $1000 plus filing fees. I also offer fractional general counsel work for a negotiable flat fee per month. Chat with me about flexible payment structures!',
          ],
        ],
      },
      {
        id: 'afford',
        q: 'Can I afford your firm?',
        a: [
          [
            'We talk to every client to determine if we can help them with their case. Even if you don’t have funds, reach out and have a conversation with us. I create custom plans that fit clients’ budgets all the time.',
          ],
        ],
      },
      {
        id: 'fee-caps',
        q: 'Do you provide fee caps?',
        a: [
          [
            'Yes, we do. Just make sure to tell Julian at ',
            { t: 'julian@forcreatorsbycreators.co', href: 'mailto:julian@forcreatorsbycreators.co' },
            ' and we will honor it.',
          ],
        ],
      },
      {
        id: 'billing',
        q: 'When do I get charged/billed?',
        a: [
          [
            'We send invoices at the beginning of each month for the prior month’s legal work. Payments are made via Zelle to ',
            { t: 'team@forcreatorsbycreators.co', href: 'mailto:team@forcreatorsbycreators.co' },
            '.',
          ],
          [
            'If you want to know your balance at any time, feel free to email us at ',
            { t: 'team@forcreatorsbycreators.co', href: 'mailto:team@forcreatorsbycreators.co' },
            ' with the request and we will send you your balance.',
          ],
        ],
      },
      {
        id: 'forms',
        q: 'What if I just want a form document?',
        a: [
          [
            'No problem. Once you sign with our firm you can purchase customized form documents at the flat rate of $400 each, or $750 for brand deal form agreements.',
          ],
        ],
      },
    ],
  },
];
