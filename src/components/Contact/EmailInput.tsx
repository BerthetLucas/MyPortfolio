import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const EmailInput = () => {
  return (
    <div className="flex flex-col items-start w-full gap-2 md:w-3/4">
      <Label htmlFor="email">Email</Label>
      <Input name="email" type="email" />
    </div>
  );
};
