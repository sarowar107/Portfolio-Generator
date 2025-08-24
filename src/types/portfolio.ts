import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  dates: z.string().min(1, "Dates are required"),
});

export const projectSchema = z.object({
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Description is required"),
  liveLink: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  githubLink: z.string().url("Must be a valid URL").optional().or(z.literal('')),
});

export const portfolioSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  photo: z
    .any()
    .refine((files) => files?.length === 1, "A profile photo is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  shortBio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio cannot exceed 500 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  linkedin: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  github: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  education: z.array(educationSchema).min(1, "At least one education entry is required"),
  projects: z.array(projectSchema).min(1, "At least one project is required"),
});

export type PortfolioData = z.infer<typeof portfolioSchema>;
export type EducationData = z.infer<typeof educationSchema>;
export type ProjectData = z.infer<typeof projectSchema>;
