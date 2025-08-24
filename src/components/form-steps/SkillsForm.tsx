import { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { PortfolioData } from '@/types/portfolio';
import { Plus, X } from 'lucide-react';

export const SkillsForm = () => {
  const { control, formState: { errors } } = useFormContext<PortfolioData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills',
  });
  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      append(skillInput.trim());
      setSkillInput('');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="skill-input">Skills</Label>
        <div className="flex gap-2 mt-2">
          <Input
            id="skill-input"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddSkill();
              }
            }}
            placeholder="e.g., TypeScript"
          />
          <Button type="button" onClick={handleAddSkill}>
            <Plus className="h-4 w-4 mr-2" /> Add
          </Button>
        </div>
        {errors.skills && <p className="text-sm text-error mt-2">{errors.skills.message}</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1 text-sm">
            {field.value}
            <button type="button" onClick={() => remove(index)} className="text-textSecondary hover:text-text">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
