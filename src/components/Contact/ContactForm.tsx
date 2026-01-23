import { EmailInput } from './EmailInput';
import { MessageInput } from './MessageInput';
import { Button } from '../ui/button';
import { toast, Toaster } from 'sonner';
import { ContactText } from './ContactText.tsx';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '@/config/env';
import { Spinner } from '../ui/spinner';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  console.log(PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID);

  const [isEmailSending, setIsEmailSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!email || !message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    if (!form.current) return;
    setIsEmailSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success('Message envoyé avec succès');
      setIsEmailSending(false);
      form.current.reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erreur d'envoie");
      setIsEmailSending(false);
    }
  };

  return (
    <>
      <ContactText />
      <form
        className="flex flex-col items-center justify-center w-full md:w-3/4 mt-10 gap-6 md:gap-8"
        onSubmit={handleSubmit}
        ref={form}
      >
        <EmailInput />
        <MessageInput />
        <Button type="submit" disabled={isEmailSending}>
          {isEmailSending && <Spinner />}
          Envoyer
        </Button>
      </form>
      <Avatar className="w-50 md:w-60 mt-10">
        <AvatarImage src="/me.jpeg" alt="" className="rounded-full" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Toaster richColors closeButton position="top-center" />
    </>
  );
};
