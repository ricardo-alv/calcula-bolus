# CalculaBolus · Bolus de Refeição

<div align="center">

**Interface minimalista para estimar insulina de bolus com base em carboidratos, relação insulina/carboidrato (I/C) e nível de atividade.**

Expo · React Native · Web · Tema escuro/claro

[![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020?style=flat&logo=expo)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?style=flat&logo=react&logoColor=black)](https://reactnative.dev/)

</div>

---

## O que é este app?

Ferramenta **educativa** que calcula uma **dose sugerida de insulina** para cobrir os carboidratos de uma refeição, aplicando um desconto opcional quando há exercício ou atividade física. O resultado é atualizado **em tempo real** conforme você preenche os campos.

> **Aviso importante:** este aplicativo **não substitui** orientação médica, ajuste individual de doses nem prescrição de insulina. Use sempre as regras definidas pelo seu médico ou equipe de diabetes.

---

## Como usar (passo a passo)

1. **Informe a glicemia atual (mg/dL)** — alvo **100 mg/dL**. Campo **vazio** → assume **100** (sem correção).
2. **Defina a relação I/C** — gramas de carboidrato por **1 unidade** de insulina (ex.: `15`).
3. **Informe os carboidratos (g)** da refeição — obrigatório para o cálculo numérico.
4. Escolha o **fator de atividade**: repouso, ativo ou exercício intenso — **reduz** a dose final conforme a tabela abaixo.
5. Leia a **dose sugerida** no topo do cartão (atualização instantânea).
6. Use **Limpar** para voltar aos valores padrão.
7. Toque na **gotinha** para alternar **tema escuro** / **claro**.

---

## Campos da calculadora

| Campo | Obrigatório? | Função |
|--------|----------------|--------|
| **Glicemia atual** | Não† | **mg/dL**. Usada na **correção** (ver fórmula). **Vazio** → **100** mg/dL. |
| **Relação I/C** | Sim* | Gramas de carboidrato por **1 u** de insulina (**> 0**). |
| **Carboidratos (g)** | Sim* | Gramas da refeição. **Bolus carb.** = carboidratos ÷ I/C. |
| **Fator de atividade** | Sim (seleção) | Repouso, ativo ou exercício intenso — **redução %** na dose (tabela abaixo). |

\*Para exibir um número válido, I/C e carboidratos precisam estar preenchidos corretamente. Caso contrário, a dose aparece como **—** e uma mensagem orienta a corrigir os valores.

†Se vazia, a glicemia é assumida como 100 mg/dL (mesma meta usada no primeiro termo da entrada ajustada).

---

## Fator de atividade (HIT / exercício)

| Modo | Efeito na dose final |
|------|----------------------|
| **Repouso** | Nenhuma redução (**0%**) |
| **Ativo** | Reduz **15%** da dose base |
| **Exercício intenso** | Reduz **30%** da dose base |

A ideia é refletir que, com mais gasto energético, pode ser necessário **menos insulina** para a mesma quantidade de carboidrato — os percentuais são **fixos no app** e devem ser validados clinicamente para o seu caso.

---

## Como o cálculo funciona

**Glicemia alvo:** 100 mg/dL. Se o campo **glicemia atual** estiver vazio, assume-se **100 mg/dL** (sem correção).

**Bolus por carboidrato** (relação I/C em g/u):

\[
\text{Bolus carb.} = \frac{\text{Carboidratos (g)}}{\text{Relação I/C}}
\]

**Correção pela glicemia** (soma em unidades de insulina):

\[
\text{Correção} = \frac{\text{Glicemia atual} - 100}{100}
\]

**Dose base** = bolus por carboidrato + correção:

\[
\text{Dose base} = \text{Bolus carb.} + \text{Correção}
\]

*Exemplo:* I/C = 10, glicemia = 100, 25 g de carboidratos → bolus carb. = 25 ÷ 10 = **2,5 u**, correção = (100 − 100) ÷ 100 = **0 u** → dose base **2,5 u**.

**Dose final (após atividade):**

\[
\text{Dose final} = \text{Dose base} \times (1 - \text{redutor de atividade})
\]

O redutor é **0**, **0,15** ou **0,30** conforme o botão selecionado.

No resumo do app: **Carb.** e **Corr.** aparecem separados antes da base. O valor principal da dose usa **uma casa decimal**.

---

## Tecnologias

| | |
|---|---|
| **Framework** | [Expo](https://expo.dev) (SDK 54) · React Native |
| **Linguagem** | TypeScript |
| **Estilo** | [NativeWind](https://www.nativewind.dev) (Tailwind para RN) |
| **Ícones** | [Lucide React Native](https://lucide.dev/) |
| **Layout Web** | Largura máxima ~480px, centralizado (experiência tipo “app no celular”) |

---

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)
- npm (vem com o Node)

---

## Instalação e execução

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd calculabolus

# Instalar dependências
npm install

# Iniciar o Expo (menu: web, Android, iOS)
npm start
```

### Scripts úteis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Servidor Expo (QR code / opções de plataforma) |
| `npm run web` | Abre no navegador (otimizado para layout web) |
| `npm run android` | Emulador ou dispositivo Android |
| `npm run ios` | Simulador iOS (macOS) |

---

## Estrutura do projeto (resumo)

```
├── App.tsx                    # Entrada: import global CSS + componente principal
├── global.css                 # Diretivas Tailwind / NativeWind
├── src/components/Calculadora/
│   ├── Calculadora.tsx        # UI e estado do app
│   ├── styles.ts              # Classes e cores por tema (dark/light)
│   ├── bolusLogic.ts          # parseNum, formatação e fórmula do bolus
│   ├── constants.ts           # Níveis de atividade e ícones
│   └── types.ts               # Tipos TypeScript
├── tailwind.config.js
├── metro.config.js
└── babel.config.js
```

---

## Contribuindo

Issues e pull requests são bem-vindos. Para mudanças grandes, abra antes uma issue para alinhar o escopo.

---

## Licença

Este projeto é de uso livre para fins educacionais. Ajuste a licença no repositório conforme a política da sua organização.

---

<div align="center">

**Cuide da sua glicemia com acompanhamento profissional.**

</div>
