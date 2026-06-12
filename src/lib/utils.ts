import type { AccentColor, SkillCategory } from "@/types";

const ACCENT_MAP: Record<AccentColor, string> = {
  green: "text-accent-green",
  blue: "text-accent-blue",
  purple: "text-accent-purple",
  amber: "text-accent-amber",
  cyan: "text-accent-cyan",
  rose: "text-accent-rose",
};

const ACCENT_BG_MAP: Record<AccentColor, string> = {
  green: "bg-accent-green/10 border-accent-green/20",
  blue: "bg-accent-blue/10 border-accent-blue/20",
  purple: "bg-accent-purple/10 border-accent-purple/20",
  amber: "bg-accent-amber/10 border-accent-amber/20",
  cyan: "bg-accent-cyan/10 border-accent-cyan/20",
  rose: "bg-accent-rose/10 border-accent-rose/20",
};

const ACCENT_BORDER_MAP: Record<AccentColor, string> = {
  green: "border-l-accent-green",
  blue: "border-l-accent-blue",
  purple: "border-l-accent-purple",
  amber: "border-l-accent-amber",
  cyan: "border-l-accent-cyan",
  rose: "border-l-accent-rose",
};

const CATEGORY_COLOR_MAP: Record<SkillCategory, AccentColor> = {
  Languages: "blue",
  Frameworks: "purple",
  Cloud: "cyan",
  Databases: "amber",
  "ML/AI": "green",
  DevOps: "rose",
};

const ACCENT_PILL_MAP: Record<AccentColor, string> = {
  green: "bg-accent-green/10 text-accent-green",
  blue: "bg-accent-blue/10 text-accent-blue",
  purple: "bg-accent-purple/10 text-accent-purple",
  amber: "bg-accent-amber/10 text-accent-amber",
  cyan: "bg-accent-cyan/10 text-accent-cyan",
  rose: "bg-accent-rose/10 text-accent-rose",
};

const ACCENT_DOT_MAP: Record<AccentColor, string> = {
  green: "bg-accent-green",
  blue: "bg-accent-blue",
  purple: "bg-accent-purple",
  amber: "bg-accent-amber",
  cyan: "bg-accent-cyan",
  rose: "bg-accent-rose",
};

export function accentTextClass(color: AccentColor): string {
  return ACCENT_MAP[color];
}

export function accentBgClass(color: AccentColor): string {
  return ACCENT_BG_MAP[color];
}

export function accentBorderClass(color: AccentColor): string {
  return ACCENT_BORDER_MAP[color];
}

export function categoryColor(category: SkillCategory): AccentColor {
  return CATEGORY_COLOR_MAP[category];
}

export function accentPillClass(color: AccentColor): string {
  return ACCENT_PILL_MAP[color];
}

export function accentDotClass(color: AccentColor): string {
  return ACCENT_DOT_MAP[color];
}
