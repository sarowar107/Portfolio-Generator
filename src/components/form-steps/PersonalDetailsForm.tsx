import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import { PortfolioData } from '@/types/portfolio';

const FormField = ({ name, label, children, error }) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    {children}
    {error && <p className="text-sm text-error">{error.message}</p>}
  </div>
);

export const PersonalDetailsForm = () => {
  const { register, formState: { errors } } = useFormContext<PortfolioData>();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField name="fullName" label="Full Name" error={errors.fullName}>
          <Input id="fullName" {...register('fullName')} placeholder="e.g., Sarowar Islam" />
        </FormField>
        <FormField name="photo" label="Profile Photo" error={errors.photo}>
          <Input id="photo" type="file" accept="image/*" {...register('photo')} className="pt-2"/>
        </FormField>
      </div>
      <FormField name="shortBio" label="Short Bio" error={errors.shortBio}>
        <Textarea id="shortBio" {...register('shortBio')} placeholder="A short, engaging bio about yourself..." />
      </FormField>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField name="email" label="Email Address" error={errors.email}>
          <Input id="email" type="email" {...register('email')} placeholder="your.email@example.com" />
        </FormField>
        <FormField name="phone" label="Phone Number (Optional)" error={errors.phone}>
          <Input id="phone" type="tel" {...register('phone')} placeholder="+1 (555) 123-4567" />
        </FormField>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField name="linkedin" label="LinkedIn URL (Optional)" error={errors.linkedin}>
          <Input id="linkedin" {...register('linkedin')} placeholder="https://linkedin.com/in/..." />
        </FormField>
        <FormField name="github" label="GitHub URL (Optional)" error={errors.github}>
          <Input id="github" {...register('github')} placeholder="https://github.com/..." />
        </FormField>
      </div>
    </div>
  );
};
