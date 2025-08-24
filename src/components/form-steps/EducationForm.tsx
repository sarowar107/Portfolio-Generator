import { useFormContext, useFieldArray } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { PortfolioData } from '@/types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

export const EducationForm = () => {
  const { register, control, formState: { errors } } = useFormContext<PortfolioData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education',
  });

  return (
    <div className="space-y-6">
      {fields.map((item, index) => (
        <div key={item.id} className="p-4 border border-border rounded-lg space-y-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`education.${index}.degree`}>Degree</Label>
              <Input {...register(`education.${index}.degree`)} placeholder="B.Sc. in Computer Science" />
              {errors.education?.[index]?.degree && <p className="text-sm text-error">{errors.education[index].degree.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`education.${index}.institution`}>Institution</Label>
              <Input {...register(`education.${index}.institution`)} placeholder="Metropolitan University" />
              {errors.education?.[index]?.institution && <p className="text-sm text-error">{errors.education[index].institution.message}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`education.${index}.dates`}>Dates</Label>
            <Input {...register(`education.${index}.dates`)} placeholder="2018 - 2022" />
            {errors.education?.[index]?.dates && <p className="text-sm text-error">{errors.education[index].dates.message}</p>}
          </div>
          <Button type="button" variant="destructive" size="icon" className="absolute top-2 right-2" onClick={() => remove(index)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button type="button" variant="outline" onClick={() => append({ degree: '', institution: '', dates: '' })}>
        <Plus className="mr-2 h-4 w-4" /> Add Education
      </Button>
      {errors.education?.root && <p className="text-sm text-error mt-2">{errors.education.root.message}</p>}
    </div>
  );
};
