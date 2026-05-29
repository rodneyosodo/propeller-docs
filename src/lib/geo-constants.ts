export const SITE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.absmach.eu/docs/propeller"
).replace(/\/$/, "");
export const GITHUB_URL = "https://github.com/absmach/propeller" as const;
