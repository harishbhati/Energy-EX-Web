import { homePageSchema } from '@/lib/schemas';

export const siteMeta = {
  title: 'Energyex — About Us',
  description: 'Independent UK energy consultancy with proven track record in energy procurement and account management.',
};

export const homePage = homePageSchema.parse({
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Energy Services', href: '/our-services' },
    { label: 'Facility Services', href: '/our-partners' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  hero: {
    eyebrow: "UK's leading energy consultancy",
    titleLines: ['Your business pays too much for energy.', "Let's change that."],
    highlightLine: "Let's change that.",
    subtitle:
      "Energyex doesn't just find you a cheaper deal — we manage your entire energy journey. Procurement, new connections, contracts, renewals and supplier issues — handled completely.",
    primaryCta: { label: 'Get Your Free Quote →', href: '/quote' },
    secondaryCta: { label: 'How it works ↓', href: '#how-it-works' },
    stats: [
      { value: '10,000+', label: 'Clients Served' },
      { value: '13 Yrs', label: 'Expertise' },
      { value: '25%', label: 'Avg. Saving' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&fit=crop',
    overlay: {
      stat: '£0',
      label: 'Upfront cost to you',
      features: [
        { value: '24hr', label: 'Quote turnaround' },
        { value: '100%', label: 'Independent' },
      ],
    },
  },
  trustItems: [
    { icon: 'shield', label: 'Independent — Not Tied to Any Supplier' },
    { icon: 'fee', label: 'No Upfront Fees — Ever' },
    { icon: 'clock', label: '24-Hour Quote Turnaround' },
    { icon: 'manager', label: 'Dedicated Account Manager' },
    { icon: 'uk', label: 'UK-Based Team, London HQ' },
  ],
  whoWeAre: {
    eyebrow: 'Who We Are',
    titleLines: ['Built on expertise,', 'driven by your results'],
    paragraphs: [
      'Energyex is a UK-based independent energy consultancy, founded in 2021 and backed by 13 years of energy expertise. We work across the public and private sectors — from single-site SMEs to multi-site hospitality groups, commercial landlords, and public bodies.',
      "We're brokers, not suppliers. That means we're entirely on your side. We compare the market, negotiate on your behalf, and manage your contracts — so you get the best deal without the admin burden.",
      'Our clients also benefit from free bill validation — because energy suppliers get billing wrong more often than you’d expect. When they do, we arrange refunds that our clients would otherwise never have known about.',
    ],
    highlights: [
      {
        icon: 'check',
        title: 'Free Bill Validation',
        description: 'We check invoices for errors and arrange supplier refunds on your behalf.',
      },
      {
        icon: 'user',
        title: 'Your Own Energy Department',
        description: 'A dedicated expert manages supplier relations, contracts, and billing queries year-round.',
      },
      {
        icon: 'trend',
        title: 'Market Trend Monitoring',
        description: 'We track price movements and advise when to lock in to avoid peaks.',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
    imageBadge: {
      number: '13+',
      label: 'Years of energy expertise',
    },
  },
  howItWorks: {
    steps: [
      {
        number: '01',
        title: 'Share your current bills',
        description: 'Send us your latest invoices or usage data. No lengthy forms, no commitment, no cost — just a conversation.',
      },
      {
        number: '02',
        title: 'We go to market for you',
        description: 'Our team runs a full market comparison using preferred partner access to unlock rates unavailable on public comparison sites.',
      },
      {
        number: '03',
        title: 'You choose, we execute',
        description: 'We present your options clearly, in plain English. Once you decide, we handle the switch and all the paperwork.',
      },
      {
        number: '04',
        title: 'Ongoing support included',
        description: 'Your account manager monitors costs, validates bills, and flags renewals proactively — for the life of your contract.',
      },
    ],
  },
  whyChooseUs: {
    eyebrow: 'Why Choose Energyex',
    titleLines: ['Not just another broker.', 'A proper energy partner.'],
    lead: "Here's what separates us from the comparison sites and the call-centre brokers.",
    cards: [
      {
        icon: 'shield',
        title: '100% Independent',
        description: 'No supplier owns us, funds us, or influences our recommendations. The advice you get is purely in your interest.',
      },
      {
        icon: 'fee',
        title: 'Zero Upfront Cost',
        description: 'Our procurement service costs you nothing. We’re paid by the supplier you choose — disclosed clearly and transparently.',
      },
      {
        icon: 'eye',
        title: 'Full Market Access',
        description: 'Preferred partner status with aggregators means we access rates and products that simply aren’t available elsewhere.',
      },
      {
        icon: 'savings',
        title: 'Up to 25% Savings',
        description: 'Our clients save an average of 25% on energy costs — from better contracts, not guesswork.',
      },
      {
        icon: 'check',
        title: 'Bill Validation Included',
        description: 'Billing errors are common. We check every invoice and recover money you didn’t know you were owed.',
      },
      {
        icon: 'multi',
        title: 'Multi-Utility Expertise',
        description: 'Electricity, gas, water, waste, solar — one relationship that covers everything, so nothing falls through the gaps.',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&q=80&fit=crop',
    heroText: 'Backed by over a decade of energy expertise, trusted by businesses across the UK',
    stats: [
      { value: '10,000+', label: 'Clients' },
      { value: '£0', label: 'To engage' },
      { value: '25%', label: 'Avg saving' },
    ],
  },
  values: {
    eyebrow: 'Our Principles',
    titleLines: ['What we stand for'],
    lead: 'Three commitments that every client — across every contract, every year — can hold us to.',
    cards: [
      {
        icon: 'eye',
        title: 'Transparency, Always',
        description: "We're open about how we're paid. You'll always know we receive a commission from the supplier you choose. No surprises, no small print — ever.",
      },
      {
        icon: 'check',
        title: 'Accountable by Default',
        description: 'You get one named expert who owns your account. They are personally accountable for the advice given, the contracts placed, and the results delivered.',
      },
      {
        icon: 'bolt',
        title: 'Proactive, Not Reactive',
        description: 'We monitor markets, flag renewal windows, and validate bills — without waiting to be asked. You focus on running your business; we manage the energy.',
      },
    ],
  },
  disclosure: {
    title: 'Commission Disclosure',
    text: 'Energyex is an independent energy broker and is not employed by any energy supplier. When we negotiate a contract on your behalf, we receive a commission from the supplier you choose. This is fully disclosed as part of our service. There is no direct cost to you for our procurement work.',
  },
  contact: {
    phone: '0203 727 2588',
    email: 'info@energyex.uk',
    address: 'Suite 7 Airport House, Purley Way, Croydon, England, CR0 0XZ',
  },
  footer: {
    logo: 'Energyex',
    tagline: 'Your trusted energy, property and facility partner — backed by 13 years of energy industry expertise.',
    contact: 'Suite 7 Airport House, Purley Way, Croydon, England, CR0 0XZ\n0203 727 2588\ninfo@energyex.uk',
    socialLabel: 'LinkedIn',
    services: [
      { title: 'Electricity', href: '/electricity-procurement' },
      { title: 'Gas', href: '/gas-procurement' },
      { title: 'Solar', href: '/solar-procurement' },
      { title: 'New connections', href: '/new-connections' },
    ],
    facilities: [
      { title: 'Property management', href: '/property-management' },
      { title: 'Cleaning', href: '/cleaning' },
      { title: 'Water', href: '/water-procurement' },
      { title: 'Waste', href: '/waste-procurement' },
    ],
    copyright: '© 2026 Elite Investment EIC UK Limited. Energyex is a trading name of Elite Investment EIC UK Limited. Registered in England and Wales.',
    extra: 'Homepage · v5',
  },
});
