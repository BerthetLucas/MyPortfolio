import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ContactForm } from './Contact/ContactForm';
import { ProjectContainer } from './Projects/ProjectContainer';
import { useWebHaptics } from 'web-haptics/react';
import type { Lang } from '@/i18n/utils';
import { getTranslations } from '@/i18n/utils';

interface TabsToggleProps {
  lang?: Lang;
}

export const TabsToggle = ({ lang = 'fr' }: TabsToggleProps) => {
  const { trigger } = useWebHaptics();
  const t = getTranslations(lang);

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
          {t['tabs.projects']}
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="text-xl"
          onClick={handleTabChangeClick}
        >
          {t['tabs.contact']}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-3/4">
        <ProjectContainer lang={lang} />
      </TabsContent>
      <TabsContent value="contact" className="flex flex-col w-3/4">
        <ContactForm lang={lang} />
      </TabsContent>
    </Tabs>
  );
};
