import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ContactForm } from './Contact/ContactForm';
import { ProjectContainer } from './Projects/ProjectContainer';
import { MotionSection } from './MotionComponents/MotionSection';

export const TabsToggle = () => {
  return (
    <Tabs
      defaultValue="projects"
      className="flex w-full flex-col items-center justify-center min-h-screen scroll-mt-10"
      id="tabs-toggle"
    >
      <TabsList>
        <TabsTrigger value="projects" className="text-xl">
          Projets
        </TabsTrigger>
        <TabsTrigger value="contact" className="text-xl">
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-3/4">
        <ProjectContainer />
      </TabsContent>
      <TabsContent value="contact" className="flex flex-col w-3/4">
        <MotionSection
          delay={0.1}
          className="w-full flex flex-col items-center"
        >
          <ContactForm />
        </MotionSection>
      </TabsContent>
    </Tabs>
  );
};
