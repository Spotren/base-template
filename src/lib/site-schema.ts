import { z } from "zod";

export const siteSchema = z.object({
  title: z.string().trim().min(1).max(255),
});

export type SiteData = z.infer<typeof siteSchema>;
