export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  size: 'large' | 'small' | 'wide';
}

export const PROJECTS: Project[] = [
  {
    id: 'ai-vision',
    title: 'Project AI Vision',
    description: 'Architecting an enterprise-grade AI monitoring system for edge computing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdr7uIi_HphVNapIiYkWMv-dxJ-XbmCOF5q9ksZ5FjvWeomlhyWx48d64IwEYKXQKu6kPTxOhBU6P01oFIiQ0JP6KPjJihQNrUyxxXUetzWsdtnw6dCWhpZTDmu6NKMgjgESMDXxJV2KaUuBxRpFDhWjzjxezS72oKwbuRHTEkOdyjU5-VOuHV4UccZ8ynf6iECUpO9H4eNpWON8EPM9El64n83pHHn3dPLRNKHOMKw_u2Q3ieEOfjPDvM1psZLS8xkMvxIgK45to',
    tags: ['React', 'TypeScript', 'Material 3'],
    size: 'large'
  },
  {
    id: 'cyber-nexus',
    title: 'Cyber Nexus',
    description: 'Cybersecurity command center UI.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGDVipuE-a0JQr-oK_F0U8YshwSNbksHkd8d30eJicvqTTgMQoYM8zRHq-3KczWB99YzQBgkr-43h1XdFhdBJGarRJL-EYQvj_0BZ01Sp8J2YAm6qIRNIfjWGtd0RQ_TofYUJlXqJze3Z5tAeI2PPIz2p9KuqDQKzTvz6TBPjAXqw-_4WBRNpHbm66ArO82JYQH9dy4M_CNwOeuAMOnJQtvT1It5dADqZA0ZgCYAFgnrJ6bQRJ5w19FHRrKuw9tKWz_hX-QIM-aZ4',
    tags: ['Flutter', 'Node.js'],
    size: 'small'
  },
  {
    id: 'm3-tokens',
    title: 'M3 Design Tokens',
    description: 'Automated token pipelines for React.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKq5WvJmtkeHltCtBInFAAdSRK7RXD5-ZtIEyS4oEOq_CznEoXB8aEhH33r-PhXlyNPRZmgwtwLLAt49ka0Uj9X_btT7Ve7DU9kYzE3PkTju4df5NZ6Ot-I6XG7_UfbS1HiNUy8kw8c4aaAu1UDzjiJj1T8vU4M7E5hqA4vct9WrBiKOsHWp7XT7ptqSQE-ViiSkvYDrIx2CQuH1gl9Wtu2f2LowskY5MXs9bJnCHl0cdO18ApXo6j0eTeBXALlrwy17BAxq8Mpjc',
    tags: ['Storybook'],
    size: 'small'
  },
  {
    id: 'spatial-core',
    title: 'Spatial Core',
    description: '3D environment data visualization suite.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBci7CQSGhKy8kU11u7jrmuiUWhP-s52_4t9NIGBaRLUb3Uv__Rm-H9tDilFB99eTQvjuS2YZwTKw9VCbsCywTkOVr9kcFwSS8Tu6ZeRQbQNrLGB4V1IRYSZKD4V4kflQBJVMrCmsb93PCpkGyEkLVVThue9WixaV3IaKYvzkvUDDKSuGMxqg9R4SnCSN7U0-VWYoeIcpR5m2A-L2T4-cUoZU41K-DKCY_qrNbHU4czyNfau3jNntLdsvGbtFysMdXGKyhj8qbxyxA',
    tags: ['D3.js', 'WebVR'],
    link: '#',
    size: 'wide'
  }
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
  icon: string;
  isCurrent?: boolean;
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'tf-global',
    role: 'Senior Systems Designer',
    company: 'TechFlow Global',
    period: '2021 — Present',
    points: [
      'Lead designer for a multi-platform Design System serving 40+ engineering teams.',
      'Reduced UI development time by 35% through standardized Material 3 component libraries.'
    ],
    icon: 'architecture',
    isCurrent: true
  },
  {
    id: 'quantum-if',
    role: 'UI/UX Engineer',
    company: 'Quantum Interfaces',
    period: '2018 — 2021',
    points: [
      'Implemented high-fidelity prototypes using React and Framer Motion for Series B startup.'
    ],
    icon: 'developer_board'
  }
];
