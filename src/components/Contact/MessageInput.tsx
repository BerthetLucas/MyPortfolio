import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export const MessageInput = () => {
  return (
    <div className="flex flex-col items-start w-full gap-2 md:w-3/4">
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" />
    </div>
  );
};
