# Portfolio About Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a personality layer to the portfolio — an "AboutSnippet" section between the hero and tabs, plus a new "À propos" tab with full bio and tech stack.

**Architecture:** Two new components (`AboutSnippet.astro` static section, `AboutTab.tsx` React component) plugged into the existing page and tabs structure. Zero new dependencies, zero runtime JS added.

**Tech Stack:** Astro, React, Tailwind v4

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/components/About/AboutSnippet.astro` | Intermediate section: photo + short bio + 4 tech badges |
| Create | `src/components/About/AboutTab.tsx` | "À propos" tab: photo + full bio + stack by category |
| Modify | `src/pages/index.astro` | Insert `<AboutSnippet />` between `<Header />` and `<TabsToggle />` |
| Modify | `src/components/TabsToggle.tsx` | Add "À propos" tab (order: Projets → À propos → Contact) |

---

## Task 1: Create `AboutSnippet.astro`

**Files:**
- Create: `src/components/About/AboutSnippet.astro`

- [ ] **Step 1: Create the component**

```astro
---
import meImage from '@/assets/me.jpeg';

const stack = ['React', 'Next.js', 'TypeScript', 'NestJS'];
---

<section class="flex items-start gap-5 px-6 py-7 border-b border-border/20 w-full max-w-3xl mx-auto flex-col sm:flex-row">
  <img
    src={meImage.src}
    alt="Lucas Berthet"
    class="w-18 h-18 rounded-full object-cover border-2 border-border/20 flex-shrink-0"
    width={72}
    height={72}
  />
  <div class="flex flex-col gap-3">
    <p class="text-sm leading-relaxed text-muted-foreground">
      Développeur web curieux, en permanence en train d'explorer et de me former aux nouvelles
      technologies. J'aime construire des projets qui résolvent de vrais problèmes — avec soin
      pour le code et le design.
    </p>
    <div class="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span class="text-xs px-2 py-1 rounded border border-border/30 bg-muted/30">{tech}</span>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About/AboutSnippet.astro
git commit -m "feat: add AboutSnippet component"
```

---

## Task 2: Add `AboutSnippet` to `index.astro`

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Import and insert the component**

Replace current content:
```astro
---
import Layout from '../layouts/Layout.astro';
import { TabsToggle } from '@/components/TabsToggle.tsx';
import Header from '@/layouts/Header.astro';
---

<Layout>
	<Header />
	<TabsToggle client:load />	
</Layout>
```

With:
```astro
---
import Layout from '../layouts/Layout.astro';
import { TabsToggle } from '@/components/TabsToggle.tsx';
import Header from '@/layouts/Header.astro';
import AboutSnippet from '@/components/About/AboutSnippet.astro';
---

<Layout>
	<Header />
	<div class="flex justify-center w-full">
		<AboutSnippet />
	</div>
	<TabsToggle client:load />	
</Layout>
```

- [ ] **Step 2: Start dev server and verify visually**

```bash
pnpm dev
```

Open http://localhost:4321. Check:
- Photo appears between hero and tabs
- Bio text visible
- 4 tech badges rendered
- Layout responsive on narrow viewport (stack vertically)

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: insert AboutSnippet between hero and tabs"
```

---

## Task 3: Create `AboutTab.tsx`

**Files:**
- Create: `src/components/About/AboutTab.tsx`

- [ ] **Step 1: Create the component**

```tsx
import meImage from '@/assets/me.jpeg';

const stack: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Astro', 'Tailwind'],
  Backend: ['NestJS', 'Node.js', 'Firebase', 'Supabase'],
  Outils: ['Docker', 'CI/CD', 'Playwright', 'Git'],
};

export const AboutTab = () => (
  <div className="flex flex-col gap-8 py-6 max-w-2xl mx-auto">
    <div className="flex gap-6 items-start flex-col sm:flex-row">
      <img
        src={meImage.src}
        alt="Lucas Berthet"
        className="w-24 h-24 rounded-full object-cover border-2 border-border/20 flex-shrink-0"
        width={96}
        height={96}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Lucas Berthet</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Développeur web curieux, en permanence en train d'explorer et de me former aux nouvelles
          technologies. J'aime construire des projets qui résolvent de vrais problèmes — avec soin
          pour le code et le design. Autant à l'aise sur un backend robuste que sur une interface
          soignée.
        </p>
        <span className="text-xs text-muted-foreground">📍 Lyon, France</span>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
        Stack technique
      </p>
      {Object.entries(stack).map(([category, techs]) => (
        <div key={category} className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded border border-border/30 bg-muted/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About/AboutTab.tsx
git commit -m "feat: add AboutTab component"
```

---

## Task 4: Add "À propos" tab to `TabsToggle.tsx`

**Files:**
- Modify: `src/components/TabsToggle.tsx`

- [ ] **Step 1: Update the file**

Replace current content:
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ContactForm } from './Contact/ContactForm';
import { ProjectContainer } from './Projects/ProjectContainer';
import { useWebHaptics } from 'web-haptics/react';

export const TabsToggle = () => {
  const { trigger } = useWebHaptics();

  const handleTabChangeClick = () => {
    trigger([{ duration: 40 }]);
  };

  return (
    <Tabs
      defaultValue="projects"
      className="flex w-full flex-col items-center justify-center min-h-screen scroll-mt-10 mt-5"
      id="tabs-toggle"
    >
      <TabsList>
        <TabsTrigger
          value="projects"
          className="text-xl"
          onClick={handleTabChangeClick}
        >
          Projets
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="text-xl"
          onClick={handleTabChangeClick}
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-3/4">
        <ProjectContainer />
      </TabsContent>
      <TabsContent value="contact" className="flex flex-col w-3/4">
        <ContactForm />
      </TabsContent>
    </Tabs>
  );
};
```

With:
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ContactForm } from './Contact/ContactForm';
import { ProjectContainer } from './Projects/ProjectContainer';
import { AboutTab } from './About/AboutTab';
import { useWebHaptics } from 'web-haptics/react';

export const TabsToggle = () => {
  const { trigger } = useWebHaptics();

  const handleTabChangeClick = () => {
    trigger([{ duration: 40 }]);
  };

  return (
    <Tabs
      defaultValue="projects"
      className="flex w-full flex-col items-center justify-center min-h-screen scroll-mt-10 mt-5"
      id="tabs-toggle"
    >
      <TabsList>
        <TabsTrigger
          value="projects"
          className="text-xl"
          onClick={handleTabChangeClick}
        >
          Projets
        </TabsTrigger>
        <TabsTrigger
          value="about"
          className="text-xl"
          onClick={handleTabChangeClick}
        >
          À propos
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="text-xl"
          onClick={handleTabChangeClick}
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-3/4">
        <ProjectContainer />
      </TabsContent>
      <TabsContent value="about" className="w-3/4">
        <AboutTab />
      </TabsContent>
      <TabsContent value="contact" className="flex flex-col w-3/4">
        <ContactForm />
      </TabsContent>
    </Tabs>
  );
};
```

- [ ] **Step 2: Verify visually**

Dev server should still be running. Check:
- 3 tabs visible: Projets | À propos | Contact
- "À propos" tab shows photo, bio, location, stack by category
- Haptic trigger fires on tab click
- No TypeScript errors in terminal

- [ ] **Step 3: Commit**

```bash
git add src/components/TabsToggle.tsx
git commit -m "feat: add À propos tab to TabsToggle"
```

---

## Task 5: Production build check

- [ ] **Step 1: Run build**

```bash
pnpm build
```

Expected: build completes with no errors. If TypeScript errors appear, fix them before proceeding.

- [ ] **Step 2: Preview and final check**

```bash
pnpm preview
```

Open http://localhost:4321. Verify both the snippet and the tab render correctly in production mode.

- [ ] **Step 3: Final commit if any fixes were needed**

```bash
git add -p
git commit -m "fix: resolve build issues"
```
