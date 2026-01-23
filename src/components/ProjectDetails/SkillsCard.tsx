export const SkillsCard = ({ skill }: { skill: string }) => {
  return (
    <p className="px-4 py-2 bg-secondary text-secondary-foreground rounded-xs shadow-sm w-fit">
      {skill}
    </p>
  );
};
