export const fr = {
  'meta.title': 'Lucas Berthet - Portfolio',
  'meta.description': 'Découvrez mes projets et mes compétences en développement web',
  'hero.role': 'Développeur Web',
  'hero.cta': 'Découvrez mes projets !',
  'tabs.projects': 'Projets',
  'tabs.contact': 'Contact',
  'contact.role': 'Développeur Front-End chez',
  'contact.send': 'Envoyer',
  'contact.errorEmpty': 'Veuillez remplir tous les champs',
  'contact.errorEmail': 'Veuillez entrer une adresse email valide',
  'contact.success': 'Message envoyé avec succès',
  'contact.error': "Erreur d'envoie",
  'project.theProject': 'Le projet',
  'project.skills': 'Compétences',
  'project.viewProject': 'Voir le projet',
  'project.wip': '... Ou mes travaux en cours ?',
  'footer.rights': 'Tous droits réservés.',
  'lang.switch': 'EN',
} as const;

export type TranslationKey = keyof typeof fr;
