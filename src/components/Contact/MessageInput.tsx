import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export const MessageInput = () => {
  return (
    <div className="flex flex-col items-start w-full gap-2 md:w-3/4">
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" />
    </div>
  );
};
