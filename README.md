# 🚀 Portfolio Lucas Berthet

Voici mon portfolio ! Je l'ai construit avec **Astro** et **React**. Ce projet présente mes différents projets, compétences.

## ✨ Fonctionnalités

- 🎨 **Interface** avec support du mode sombre/clair
- 📱 **Design responsive** adapté à tous les écrans
- 🎬 **Animations fluides** avec Motion et les `<ClientRouter />` d'Astro
- 🎯 **Navigation par onglets** entre projets et contact
- 📧 **Formulaire de contact** fonctionnel avec EmailJS
- ⚡ **Optimisé** grâce à Astro

## 🛠️ Technologies utilisées

### Core

- **[Astro](https://astro.build/)** - Framework web moderne et performant
- **[React](https://react.dev/)** - Bibliothèque UI pour les composants interactifs
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour JavaScript

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Composants UI accessibles et personnalisables
  - Tabs, Avatar, Aspect Ratio, Label, Tooltip
- **[Lucide React](https://lucide.dev/)** - Icônes modernes

### Animations & Interactions

- **[Motion](https://motion.dev/)** (Framer Motion) - Bibliothèque d'animations
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gestion du thème sombre/clair

### Formulaires & Notifications

- **[EmailJS](https://www.emailjs.com/)** - Envoi d'emails depuis le frontend
- **[Sonner](https://sonner.emilkowal.ski/)** - Système de notifications toast

### Outils & Utilitaires

- **[class-variance-authority](https://cva.style/)** - Gestion des variantes de classes
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utilitaires pour les classes CSS
- **[dotenv](https://github.com/motdotla/dotenv)** - Gestion des variables d'environnement

## 📁 Structure du projet

```
portfolioLucasBerthet/
├── .github/
│   └── dependabot.yml          # Configuration Dependabot
├── public/                      # Assets statiques
│   ├── favicon.svg
│   └── *.png                    # Images des projets
├── src/
│   ├── assets/                  # Assets source
│   │   ├── *.png, *.jpeg       # Images
│   │   └── *.mp4                # Vidéos de fond
│   ├── components/              # Composants React
│   │   ├── BackgroundVideo.tsx  # Composant vidéo de fond
│   │   ├── Contact/             # Composants du formulaire de contact
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactText.tsx
│   │   │   ├── EmailInput.tsx
│   │   │   └── MessageInput.tsx
│   │   ├── Icon/                # Icônes personnalisées
│   │   │   ├── ArrowLeftIcon.tsx
│   │   │   ├── GitHubIcon.tsx
│   │   │   └── LinkedinIcon.tsx
│   │   ├── MotionComponents/    # Composants avec animations
│   │   │   ├── MotionDiv.tsx
│   │   │   ├── MotionHeader.tsx
│   │   │   ├── MotionMain.tsx
│   │   │   └── MotionSection.tsx
│   │   ├── ProjectDetails/      # Composants de détails de projet
│   │   │   ├── BackButton.tsx
│   │   │   ├── ProjectDetails.tsx
│   │   │   ├── SkillsCard.tsx
│   │   │   └── TechItems.tsx
│   │   ├── Projects/            # Composants de liste de projets
│   │   │   ├── ProjectCard/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── ProjectCardFooter.tsx
│   │   │   └── ProjectContainer.tsx
│   │   ├── Typographie/         # Composants typographiques
│   │   │   ├── TypographieH1.tsx
│   │   │   └── TypographieP.tsx
│   │   ├── ui/                  # Composants UI (shadcn/ui style)
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── spinner.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── textarea.tsx
│   │   ├── TabsToggle.tsx       # Composant principal de navigation
│   │   └── ThemeProvider.tsx    # Provider pour le thème
│   ├── config/
│   │   └── env.ts               # Configuration des variables d'environnement
│   ├── data/
│   │   └── projects.json        # Données des projets
│   ├── hooks/
│   │   └── use-is-mobile.ts     # Hook pour détecter mobile
│   ├── layouts/                 # Layouts Astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts             # Utilitaires (cn, etc.)
│   ├── pages/                   # Pages Astro
│   │   ├── index.astro          # Page d'accueil
│   │   └── project-details/
│   │       └── [id].astro       # Page dynamique de détails
│   └── styles/
│       └── global.css           # Styles globaux
├── astro.config.mjs             # Configuration Astro
├── components.json              # Configuration shadcn/ui
├── package.json                 # Dépendances
├── tsconfig.json                # Configuration TypeScript
└── biome.json                  # Configuration Biome (lint + format)
```

## 🚦 Commandes disponibles

```bash
# Installation des dépendances
pnpm install

# Démarrage du serveur de développement
pnpm dev

# Build de production
pnpm build

# Prévisualisation du build de production
pnpm preview

# Commandes Astro supplémentaires
pnpm astro -- --help
```

## 🎯 Pages

- **`/`** - Page d'accueil avec onglets Projets et Contact
- **`/project-details/[id]`** - Page de détails d'un projet spécifique


## 📝 Notes

- Le projet utilise **pnpm** comme gestionnaire de paquets
- Les composants React sont marqués avec `client:load` pour l'hydratation
- Les transitions de page sont gérées par Astro Transitions
- Le design est entièrement responsive avec Tailwind CSS

## 🔗 Liens utiles

- [Documentation Astro](https://docs.astro.build)
- [Documentation React](https://react.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs)

---

Développé avec ❤️ 
