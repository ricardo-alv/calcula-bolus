export type CalculadoraClasses = {
  root: string;
  card: string;
  kicker: string;
  title: string;
  subtitle: string;
  dropletWrap: string;
  resultBox: string;
  doseLabel: string;
  doseValue: string;
  doseUnit: string;
  metaLine: string;
  hintWarn: string;
  fieldLabel: string;
  fieldHint: string;
  input: string;
  inputSm: string;
  sectionTitle: string;
  inlineMuted: string;
  carbLabel: string;
  slowBox: string;
  slowText: string;
  actInactive: string;
  actActive: string;
  actLabelOn: string;
  actLabelOff: string;
  actSub: string;
  clearBtn: string;
  clearText: string;
  footer: string;
  placeholder: string;
};

export type CalculadoraIconColors = {
  droplet: string;
  accent: string;
  muted: string;
  calc: string;
  actOn: string;
  actOff: string;
  eraser: string;
};

const dark: CalculadoraClasses = {
  root: "flex-1 bg-zinc-950",
  card:
    "rounded-3xl border border-cyan-500/25 bg-zinc-900/90 p-5 shadow-lg shadow-cyan-500/10",
  kicker:
    "text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90",
  title: "mt-1 text-2xl font-bold text-zinc-50",
  subtitle: "mt-1 text-sm leading-5 text-zinc-400",
  dropletWrap: "rounded-2xl bg-emerald-500/15 p-3 active:opacity-80",
  resultBox:
    "mb-6 rounded-2xl border border-emerald-500/30 p-5 bg-cyan-500/15",
  doseLabel: "text-sm font-medium text-zinc-300",
  doseValue: "mt-2 text-5xl font-bold tabular-nums text-cyan-400",
  doseUnit: "text-2xl font-semibold text-zinc-400",
  metaLine: "mt-2 text-sm text-zinc-500",
  hintWarn: "mt-2 text-sm text-amber-400/90",
  fieldLabel:
    "mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500",
  fieldHint: "mb-2 text-[11px] leading-4 text-zinc-500",
  input:
    "rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3.5 text-lg text-zinc-100",
  inputSm:
    "rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-base text-zinc-100",
  sectionTitle:
    "text-xs font-semibold uppercase tracking-wide text-zinc-500",
  inlineMuted: "text-sm text-zinc-400",
  carbLabel: "mb-2 text-sm text-zinc-400",
  slowBox:
    "mt-2 flex-row items-start gap-2 rounded-xl border border-amber-500/25 bg-amber-500/10 px-3 py-2",
  slowText: "flex-1 text-xs leading-5 text-amber-200/95",
  actInactive: "border-zinc-700 bg-zinc-950/50",
  actActive: "border-emerald-400/60 bg-emerald-500/20",
  actLabelOn: "text-emerald-200",
  actLabelOff: "text-zinc-400",
  actSub: "text-[10px] text-zinc-500",
  clearBtn:
    "flex-row items-center justify-center gap-2 rounded-2xl border border-zinc-600 bg-zinc-800/80 py-4 active:bg-zinc-700",
  clearText: "font-semibold text-zinc-200",
  footer: "mt-5 text-center text-[11px] leading-4 text-zinc-600",
  placeholder: "#71717a",
};

const light: CalculadoraClasses = {
  root: "flex-1 bg-zinc-100",
  card:
    "rounded-3xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-300/40",
  kicker:
    "text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600",
  title: "mt-1 text-2xl font-bold text-zinc-900",
  subtitle: "mt-1 text-sm leading-5 text-zinc-600",
  dropletWrap: "rounded-2xl bg-emerald-500/20 p-3 active:opacity-80",
  resultBox:
    "mb-6 rounded-2xl border border-emerald-500/40 p-5 bg-cyan-500/10",
  doseLabel: "text-sm font-medium text-zinc-700",
  doseValue: "mt-2 text-5xl font-bold tabular-nums text-cyan-600",
  doseUnit: "text-2xl font-semibold text-zinc-500",
  metaLine: "mt-2 text-sm text-zinc-600",
  hintWarn: "mt-2 text-sm text-amber-700",
  fieldLabel:
    "mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-600",
  fieldHint: "mb-2 text-[11px] leading-4 text-zinc-500",
  input:
    "rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-lg text-zinc-900",
  inputSm:
    "rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900",
  sectionTitle:
    "text-xs font-semibold uppercase tracking-wide text-zinc-600",
  inlineMuted: "text-sm text-zinc-600",
  carbLabel: "mb-2 text-sm text-zinc-600",
  slowBox:
    "mt-2 flex-row items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2",
  slowText: "flex-1 text-xs leading-5 text-amber-900",
  actInactive: "border-zinc-200 bg-zinc-50",
  actActive: "border-emerald-500/50 bg-emerald-500/15",
  actLabelOn: "text-emerald-800",
  actLabelOff: "text-zinc-600",
  actSub: "text-[10px] text-zinc-500",
  clearBtn:
    "flex-row items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-zinc-200 py-4 active:bg-zinc-300",
  clearText: "font-semibold text-zinc-800",
  footer: "mt-5 text-center text-[11px] leading-4 text-zinc-500",
  placeholder: "#a1a1aa",
};

const darkIcons: CalculadoraIconColors = {
  droplet: "#34d399",
  accent: "#34d399",
  muted: "#a1a1aa",
  calc: "#22d3ee",
  actOn: "#34d399",
  actOff: "#71717a",
  eraser: "#a1a1aa",
};

const lightIcons: CalculadoraIconColors = {
  droplet: "#059669",
  accent: "#059669",
  muted: "#71717a",
  calc: "#0891b2",
  actOn: "#059669",
  actOff: "#71717a",
  eraser: "#52525b",
};

export function getCalculadoraClasses(isDark: boolean): CalculadoraClasses {
  return isDark ? dark : light;
}

export function getCalculadoraIconColors(
  isDark: boolean,
): CalculadoraIconColors {
  return isDark ? darkIcons : lightIcons;
}
