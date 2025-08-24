import { useFormContext, useFieldArray } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { PortfolioData } from '@/types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

export const ProjectsForm = () => {
  const { register, control, formState: { errors } } = useFormContext<PortfolioData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects',
  });

  return (
    <div className="space-y-6">
      {fields.map((item, index) => (
        <div key={item.id} className="p-4 border border-border rounded-lg space-y-4 relative">
          <div className="space-y-2">
            <Label htmlFor={`projects.${index}.title`}>Project Title</Label>
            <Input {...register(`projects.${index}.title`)} placeholder="e.g., E-commerce Platform" />
            {errors.projects?.[index]?.title && <p className="text-sm text-error">{errors.projects[index].title.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor={`projects.${index}.description`}>Description</Label>
            <Textarea {...register(`projects.${index}.description`)} placeholder="A short description of your project..." />
            {errors.projects?.[index]?.description && <p className="text-sm text-error">{errors.projects[index].description.message}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`projects.${index}.liveLink`}>Live Link (Optional)</Label>
              <Input {...register(`projects.${index}.liveLink`)} placeholder="https://example.com" />
              {errors.projects?.[index]?.liveLink && <p className="text-sm text-error">{errors.projects[index].liveLink.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`projects.${index}.githubLink`}>GitHub Link (Optional)</Label>
              <Input {...register(`projects.${index}.githubLink`)} placeholder="https://github.com/..." />
              {errors.projects?.[index]?.githubLink && <p className="text-sm text-error">{errors.projects[index].githubLink.message}</p>}
            </div>
          </div>
          <Button type="button" variant="destructive" size="icon" className="absolute top-2 right-2" onClick={() => remove(index)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button type="button" variant="outline" onClick={() => append({ title: '', description: '', liveLink: '', githubLink: '' })}>
        <Plus className="mr-2 h-4 w-4" /> Add Project
      </Button>
      {errors.projects?.root && <p className="text-sm text-error mt-2">{errors.projects.root.message}</p>}
    </div>
  );
};
