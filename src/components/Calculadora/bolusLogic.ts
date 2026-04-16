import { ACTIVITY } from "./constants";
import type { ActivityLevel } from "./types";

export function parseNum(s: string): number | null {
  const t = s.replace(",", ".").trim();
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

export function formatDose(n: number | null): string {
  return n === null || !Number.isFinite(n) ? "—" : n.toFixed(1);
}

export type BolusResult = {
  baseDose: number | null;
  finalDose: number | null;
  showResult: boolean;
  /** carboidratos ÷ I/C */
  carbBolus: number | null;
  /** (glicemia − 100) ÷ 100 — alvo fixo 100 mg/dL */
  correctionBolus: number | null;
};

const TARGET_BG = 100;

export function computeBolus(
  icRatio: string,
  currentBg: string,
  carbs: string,
  activity: ActivityLevel,
): BolusResult {
  const ic = parseNum(icRatio);
  const c = parseNum(carbs);
  const reducer = ACTIVITY[activity].reducer;

  if (ic === null || ic <= 0 || c === null || c < 0) {
    return {
      baseDose: null,
      finalDose: null,
      showResult: false,
      carbBolus: null,
      correctionBolus: null,
    };
  }

  const bgParsed = parseNum(currentBg);
  const bg = bgParsed !== null ? bgParsed : TARGET_BG;

  const carbBolus = c / ic;
  const correctionBolus = (bg - TARGET_BG) / 100;
  const base = carbBolus + correctionBolus;
  const final = base * (1 - reducer);

  return {
    baseDose: base,
    finalDose: final,
    showResult: true,
    carbBolus,
    correctionBolus,
  };
}
