# Portfolio — Section "À propos" — Design Spec

**Date:** 2026-04-26

## Contexte

Portfolio de Lucas Berthet (Astro SSG + React islands). Objectif : gagner en notoriété auprès de développeurs et de clients potentiels. Problème identifié : aucune personnalité visible — le visiteur ne sait rien de Lucas avant de voir les projets.

## Ce qu'on construit

Deux ajouts statiques, zéro maintenance :

1. **Section intermédiaire** — entre le hero et les tabs
2. **Onglet "À propos"** — 3ème tab dans `TabsToggle`

---

## 1. Section intermédiaire (`AboutSnippet.astro`)

Composant Astro statique placé entre `<Header />` et `<TabsToggle />` dans `src/pages/index.astro`.

**Layout :** rangée horizontale — photo ronde à gauche, texte + badges à droite.

**Contenu :**
- Photo : `src/assets/me.jpeg`, 72px, border-radius 50%
- Bio courte : "Développeur web curieux, en permanence en train d'explorer et de me former aux nouvelles technologies. J'aime construire des projets qui résolvent de vrais problèmes — avec soin pour le code et le design."
- Badges stack (statiques) : `React` · `Next.js` · `TypeScript` · `NestJS`

**Style :** padding vertical `28px`, séparé du hero par une bordure subtile (`border-bottom` opacity faible). Responsive : sur mobile, photo + texte s'empilent.

---

## 2. Onglet "À propos" (`AboutTab.tsx`)

Nouveau `TabsTrigger` + `TabsContent` dans `src/components/TabsToggle.tsx`. Contenu rendu via un composant Astro statique.

**Contenu :**
- Photo : `src/assets/me.jpeg`, 100px, border-radius 50%
- Nom : "Lucas Berthet"
- Bio longue : même texte que la section intermédiaire + "Autant à l'aise sur un backend robuste que sur une interface soignée."
- Localisation : "📍 Lyon, France"
- Stack par catégorie :
  - **Frontend** : React, Next.js, TypeScript, Astro, Tailwind
  - **Backend** : NestJS, Node.js, Firebase, Supabase
  - **Outils** : Docker, CI/CD, Playwright, Git

---

## Architecture

```
src/
  components/
    About/
      AboutSnippet.astro   ← section intermédiaire (Astro, statique)
      AboutTab.tsx          ← contenu de l'onglet (React, JSX statique)
  pages/
    index.astro             ← ajouter <AboutSnippet /> entre Header et TabsToggle
  components/
    TabsToggle.tsx          ← ajouter onglet "À propos" (ordre : Projets | À propos | Contact)
```

**Note :** `AboutTab.tsx` est un composant React sans state (JSX pur) car il vit à l'intérieur de `TabsToggle.tsx` qui est déjà un island React. `AboutSnippet.astro` peut rester Astro car il est dans la page directement.

---

## Ce qui ne change pas

- Hero (`Header.astro`) — inchangé
- Pages projet (`[id].astro`) — inchangées
- Contact form — inchangée
- Footer — inchangé
- `projects.json` — inchangé
