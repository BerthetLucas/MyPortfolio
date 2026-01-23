import { GitHubIcon } from '../Icon/GitHubIcon';
import { LinkedinIcon } from '../Icon/LinkedinIcon';

export const ContactText = () => {
  return (
    <div className="flex flex-col mt-18 gap-10 items-center justify-center text-nowrap">
      <p>
        Développeur Front-End chez{' '}
        <span>
          <a
            href="https://www.kolecto.fr/"
            target="_blank"
            className="text-[#2c46fd] font-bold hover:opacity-50"
          >
            Kolecto
          </a>
        </span>
      </p>
      <div className="flex flex-row items-center justify-center gap-5">
        <GitHubIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
};
