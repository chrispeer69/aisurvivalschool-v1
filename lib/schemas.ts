import { z } from "zod";

export const groupSizes = ["10-15", "15-25", "25-50", "50+"] as const;
export const dateRanges = [
  "Within 30 days",
  "1-3 months",
  "3-6 months",
  "6+ months / exploring",
] as const;

export const industries = [
  "Towing & Recovery",
  "HVAC",
  "Plumbing",
  "Electrical / Contractors",
  "Auto Repair / Body",
  "Landscaping",
  "Retail",
  "Professional Services",
  "Trade Association / Chamber",
  "Workforce Development",
  "Other",
] as const;

// /workshops — businesses booking on-site training
export const workshopInquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().min(2, "Please enter your business name").max(160),
  industry: z.enum(industries),
  groupSize: z.enum(groupSizes),
  dateRange: z.enum(dateRanges),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.string().trim().max(80).optional(),
});
export type WorkshopInquiryInput = z.infer<typeof workshopInquirySchema>;

// /cohorts and /course — waitlist
export const businessTypes = [
  "Owner / Operator",
  "Solo / Freelance",
  "Manager",
  "Team Lead",
  "Other",
] as const;

export const waitlistSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  businessType: z.enum(businessTypes),
  industry: z.string().trim().max(120).optional().or(z.literal("")),
  source: z.string().trim().max(80).optional(),
});
export type WaitlistInput = z.infer<typeof waitlistSchema>;

// /contact + newsletter signups
export const contactReasons = [
  "Workshop inquiry",
  "Cohort question",
  "Course question",
  "Speaking inquiry",
  "Newsletter signup",
  "Other",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  reason: z.enum(contactReasons),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  source: z.string().trim().max(80).optional(),
});
export type ContactInput = z.infer<typeof contactSchema>;

// /newsletter — light email-only signup
export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(200),
  source: z.string().trim().max(80).optional(),
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;
