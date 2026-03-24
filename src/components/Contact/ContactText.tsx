import { GitHubIcon } from '../Icon/GitHubIcon';
import { LinkedinIcon } from '../Icon/LinkedinIcon';

interface ContactTextProps {
  roleText: string;
}

export const ContactText = ({ roleText }: ContactTextProps) => {
  return (
    <div className="flex flex-col mt-18 gap-10 items-center justify-center text-nowrap">
      <p>
        {roleText}{' '}
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
        <GitHubIcon classNames="w-14 h-14" />
        <LinkedinIcon classNames="w-14 h-14" />
      </div>
    </div>
  );
};
