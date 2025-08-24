import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { portfolioSchema, PortfolioData } from '@/types/portfolio';
import { AnimatePresence, motion } from 'framer-motion';

import { PersonalDetailsForm } from '@/components/form-steps/PersonalDetailsForm';
import { SkillsForm } from '@/components/form-steps/SkillsForm';
import { EducationForm } from '@/components/form-steps/EducationForm';
import { ProjectsForm } from '@/components/form-steps/ProjectsForm';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/Progress';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

const steps = [
  { id: '01', name: 'Personal Details', component: <PersonalDetailsForm />, fields: ['fullName', 'photo', 'shortBio', 'email', 'phone', 'linkedin', 'github'] },
  { id: '02', name: 'Skills', component: <SkillsForm />, fields: ['skills'] },
  { id: '03', name: 'Education', component: <EducationForm />, fields: ['education'] },
  { id: '04', name: 'Projects', component: <ProjectsForm />, fields: ['projects'] },
];

const Customize = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<PortfolioData>({
    resolver: zodResolver(portfolioSchema),
    mode: 'onChange',
    defaultValues: {
      skills: [],
      education: [{ degree: '', institution: '', dates: '' }],
      projects: [{ title: '', description: '' }],
    },
  });

  const { trigger, handleSubmit } = methods;

  const handleNext = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as any, { shouldFocus: true });
    if (!output) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep(step => step + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
    }
  };

  const onSubmit = (data: PortfolioData) => {
    navigate(`/preview/${templateId}`, { state: { portfolioData: data } });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Create Your Portfolio</h1>
        <p className="text-lg text-textSecondary">
          Selected Template: <span className="font-semibold text-primary capitalize">{templateId?.replace('-', ' ')}</span>
        </p>
      </div>

      <div className="bg-surface border border-border rounded-xl p-8 shadow-lg">
        <div className="mb-8">
          <Progress value={((currentStep + 1) / steps.length) * 100} />
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <div key={step.id} className={`text-sm ${index <= currentStep ? 'text-text' : 'text-textSecondary'}`}>
                {step.name}
              </div>
            ))}
          </div>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {steps[currentStep].component}
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex justify-between items-center pt-6 border-t border-border">
              <Button type="button" variant="outline" onClick={handlePrev} disabled={currentStep === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={handleNext}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit">
                  Generate Portfolio <Send className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Customize;
