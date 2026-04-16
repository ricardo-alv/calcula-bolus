import { Activity, Moon, Zap } from "lucide-react-native";

import type { ActivityLevel } from "./types";

export const ACTIVITY: Record<
  ActivityLevel,
  { label: string; sub: string; reducer: number; Icon: typeof Moon }
> = {
  rest: { label: "Repouso", sub: "−0%", reducer: 0, Icon: Moon },
  active: { label: "Ativo", sub: "−15%", reducer: 0.15, Icon: Activity },
  intense: {
    label: "Exercício intenso",
    sub: "−30%",
    reducer: 0.3,
    Icon: Zap,
  },
};
