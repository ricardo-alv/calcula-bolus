import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Calculator,
  Droplets,
  Eraser,
  HeartPulse,
} from "lucide-react-native";

import { ACTIVITY } from "./constants";
import { computeBolus, formatDose } from "./bolusLogic";
import {
  getCalculadoraClasses,
  getCalculadoraIconColors,
} from "./styles";
import type { ActivityLevel, ThemeMode } from "./types";

export function Calculadora() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [currentBg, setCurrentBg] = useState("100");
  const [icRatio, setIcRatio] = useState("0");
  const [carbs, setCarbs] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("rest");

  const isDark = theme === "dark";
  const tw = useMemo(() => getCalculadoraClasses(isDark), [isDark]);
  const colors = useMemo(() => getCalculadoraIconColors(isDark), [isDark]);

  const {
    baseDose,
    finalDose,
    showResult,
    carbBolus,
    correctionBolus,
  } = useMemo(
    () => computeBolus(icRatio, currentBg, carbs, activity),
    [icRatio, currentBg, carbs, activity],
  );

  const clearAll = useCallback(() => {
    setCurrentBg("100");
    setIcRatio("0");
    setCarbs("");
    setActivity("rest");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((m) => (m === "dark" ? "light" : "dark"));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className={tw.root}>
        <StatusBar style={isDark ? "light" : "dark"} />
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 24,
              paddingBottom: 40,
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="w-full max-w-[480px]">
              <View className={tw.card}>
                <View className="mb-6 flex-row items-start justify-between">
                  <View className="flex-1 pr-2">
                    <Text className={tw.kicker}>Calculadora</Text>
                    <Text className={tw.title}>Bolus de Refeição</Text>
                    <Text className={tw.subtitle}>
                      Glicemia, I/C, carboidratos e atividade. Toque na gotinha
                      para tema claro ou escuro.
                    </Text>
                  </View>
                  <Pressable
                    onPress={toggleTheme}
                    accessibilityRole="button"
                    accessibilityLabel={
                      isDark ? "Ativar tema claro" : "Ativar tema escuro"
                    }
                    className={tw.dropletWrap}
                  >
                    <Droplets
                      size={28}
                      color={colors.droplet}
                      strokeWidth={1.75}
                    />
                  </Pressable>
                </View>

                <View className={tw.resultBox}>
                  <View className="flex-row items-center gap-2">
                    <Calculator size={18} color={colors.calc} strokeWidth={2} />
                    <Text className={tw.doseLabel}>Dose sugerida</Text>
                  </View>
                  <Text className={tw.doseValue} selectable>
                    {formatDose(finalDose)}
                    <Text className={tw.doseUnit}> u</Text>
                  </Text>
                  {showResult &&
                    baseDose !== null &&
                    finalDose !== null &&
                    carbBolus !== null &&
                    correctionBolus !== null && (
                      <Text className={tw.metaLine}>
                        Carb.: {carbBolus.toFixed(1)} u + Corr.:{" "}
                        {correctionBolus.toFixed(2)} u · Base:{" "}
                        {baseDose.toFixed(1)} u · Ativ.: −
                        {(ACTIVITY[activity].reducer * 100).toFixed(0)}%
                      </Text>
                    )}
                  {!showResult && (
                    <Text className={tw.hintWarn}>
                      Informe relação I/C e carboidratos válidos.
                    </Text>
                  )}
                </View>

                <View className="mb-5">
                  <View className="mb-2 flex-row items-center gap-2">
                    <HeartPulse size={16} color={colors.accent} strokeWidth={2} />
                    <Text className={tw.sectionTitle}>
                      Glicemia atual (mg/dL)
                    </Text>
                  </View>
                  <Text className={tw.fieldHint}>
                    Alvo 100 mg/dL. Vazio = 100. Correção somada: (glicemia −
                    100) ÷ 100 u. Bolus de carb.: carboidratos ÷ I/C.
                  </Text>
                  <TextInput
                    value={currentBg}
                    onChangeText={setCurrentBg}
                    keyboardType="decimal-pad"
                    placeholder="100"
                    placeholderTextColor={tw.placeholder}
                    className={tw.input}
                  />
                </View>

                <View className="mb-5">
                  <Text className={tw.fieldLabel}>
                    Relação I/C (g de carb por 1 u)
                  </Text>
                  <TextInput
                    value={icRatio}
                    onChangeText={setIcRatio}
                    keyboardType="decimal-pad"
                    placeholder="ex: 15"
                    placeholderTextColor={tw.placeholder}
                    className={tw.input}
                  />
                </View>

                <View className="mb-5">
                  <Text className={tw.fieldLabel}>Carboidratos (g)</Text>
                  <TextInput
                    value={carbs}
                    onChangeText={setCarbs}
                    keyboardType="decimal-pad"
                    placeholder="0"
                    placeholderTextColor={tw.placeholder}
                    className={tw.input}
                  />
                </View>

                <Text className={`mb-2 ${tw.sectionTitle}`}>
                  Fator de atividade (HIT / exercício)
                </Text>
                <View className="mb-6 flex-row flex-wrap gap-2">
                  {(Object.keys(ACTIVITY) as ActivityLevel[]).map((key) => {
                    const cfg = ACTIVITY[key];
                    const sel = activity === key;
                    const Icon = cfg.Icon;
                    return (
                      <Pressable
                        key={key}
                        onPress={() => setActivity(key)}
                        className={`min-w-[30%] flex-1 rounded-xl border px-3 py-3 ${
                          sel ? tw.actActive : tw.actInactive
                        }`}
                      >
                        <Icon
                          size={20}
                          color={sel ? colors.actOn : colors.actOff}
                          strokeWidth={2}
                        />
                        <Text
                          className={`mt-1.5 text-xs font-semibold ${
                            sel ? tw.actLabelOn : tw.actLabelOff
                          }`}
                        >
                          {cfg.label}
                        </Text>
                        <Text className={tw.actSub}>{cfg.sub}</Text>
                      </Pressable>
                    );
                  })}
                </View>

                <Pressable onPress={clearAll} className={tw.clearBtn}>
                  <Eraser size={20} color={colors.eraser} strokeWidth={2} />
                  <Text className={tw.clearText}>Limpar</Text>
                </Pressable>

                <Text className={tw.footer}>
                  Uso educativo. Não substitui acompanhamento médico nem
                  prescrição de insulina.
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
