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
