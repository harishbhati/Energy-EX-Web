import { z } from 'zod';

const navLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  active: z.boolean().optional(),
});

const heroStatSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const heroSchema = z.object({
  eyebrow: z.string(),
  titleLines: z.array(z.string()),
  highlightLine: z.string(),
  subtitle: z.string(),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema,
  stats: z.array(heroStatSchema),
  heroImage: z.string().url(),
  overlay: z.object({
    stat: z.string(),
    label: z.string(),
    features: z.array(heroStatSchema),
  }),
});

const trustItemSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

const highlightSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

const whoSectionSchema = z.object({
  eyebrow: z.string(),
  titleLines: z.array(z.string()),
  paragraphs: z.array(z.string()),
  highlights: z.array(highlightSchema),
  imageUrl: z.string().url(),
  imageBadge: z.object({
    number: z.string(),
    label: z.string(),
  }),
});

const stepSchema = z.object({
  number: z.string(),
  title: z.string(),
  description: z.string(),
});

const whyCardSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

const whySectionSchema = z.object({
  eyebrow: z.string(),
  titleLines: z.array(z.string()),
  lead: z.string(),
  cards: z.array(whyCardSchema),
  imageUrl: z.string().url(),
  heroText: z.string(),
  stats: z.array(heroStatSchema),
});

const valueCardSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

const disclosureSchema = z.object({
  title: z.string(),
  text: z.string(),
});

const contactItemSchema = z.object({
  icon: z.string(),
  label: z.string(),
  value: z.string(),
  href: z.string().optional(),
  isPlainText: z.boolean().optional(),
});

const footerSchema = z.object({
  logo: z.string(),
  tagline: z.string(),
  contact: z.string(),
  socialLabel: z.string(),
  services: z.array(z.object({ title: z.string(), href: z.string() })),
  facilities: z.array(z.object({ title: z.string(), href: z.string() })),
  copyright: z.string(),
  extra: z.string(),
});

// ── About page ─────────────────────────────────────────────────────────────

const aboutStatSchema = z.object({ val: z.string(), label: z.string() });

export const aboutPageSchema = z.object({
  hero: z.object({
    eyebrow: z.string(),
    h1: z.array(z.string()),
    h1Italic: z.string(),
    subtitle: z.string(),
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema,
    stats: z.array(aboutStatSchema),
    image: z.string().url(),
    overlay: z.object({
      bigStat: z.string(),
      bigLabel: z.string(),
      miniStats: z.array(aboutStatSchema),
    }),
  }),
  trustBar: z.array(
    z.object({ icon: z.string(), title: z.string(), desc: z.string() }),
  ),
  whoWeAre: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    headingItalic: z.string(),
    paragraphs: z.array(z.string()),
    highlights: z.array(
      z.object({ icon: z.string(), title: z.string(), desc: z.string() }),
    ),
    image: z.string().url(),
    badge: z.object({ num: z.string(), label: z.string() }),
  }),
  howItWorks: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    subtitle: z.string(),
    steps: z.array(
      z.object({ num: z.string(), title: z.string(), desc: z.string() }),
    ),
  }),
  whyChooseUs: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    subtitle: z.string(),
    cards: z.array(
      z.object({ icon: z.string(), title: z.string(), desc: z.string() }),
    ),
    image: z.string().url(),
    stats: z.array(aboutStatSchema),
  }),
  values: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    subtitle: z.string(),
    items: z.array(
      z.object({ icon: z.string(), title: z.string(), desc: z.string() }),
    ),
    disclosure: z.string(),
  }),
  cta: z.object({
    eyebrow: z.string(),
    headingLines: z.array(z.string()),
    headingItalic: z.string(),
    body: z.string(),
    buttonLabel: z.string(),
    buttonHref: z.string(),
    contactEyebrow: z.string(),
    contacts: z.array(
      z.object({
        icon: z.string(),
        label: z.string(),
        value: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

export type AboutPageContent = z.infer<typeof aboutPageSchema>;

// ── Home page ───────────────────────────────────────────────────────────────

export const homePageSchema = z.object({
  navLinks: z.array(navLinkSchema),
  hero: heroSchema,
  trustItems: z.array(trustItemSchema),
  whoWeAre: whoSectionSchema,
  howItWorks: z.object({ steps: z.array(stepSchema) }),
  whyChooseUs: whySectionSchema,
  values: z.object({
    eyebrow: z.string(),
    titleLines: z.array(z.string()),
    lead: z.string(),
    cards: z.array(valueCardSchema),
  }),
  disclosure: disclosureSchema,
  contact: z.object({
    phone: z.string(),
    email: z.string(),
    address: z.string(),
  }),
  footer: footerSchema,
});

export type HomePageContent = z.infer<typeof homePageSchema>;
