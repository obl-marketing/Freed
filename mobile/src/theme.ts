/** FREED brand tokens — shared by every screen. */
export const colors = {
  pink: '#FFAEB3',
  pinkSoft: '#FFE1E3',
  green: '#7BC96F',
  greenMid: '#B0E1A2',
  greenLight: '#CBF5AF',
  cream: '#FAFFD8',
  bg: '#FFFEFA',
  surface: '#FFFFFF',
  ink: '#26312B',
  ink2: '#5E6B62',
  ink3: '#8A968D',
  line: '#EFEAE0',
  avail: '#3FA34D',
  danger: '#E5686E',
};

export const radius = { sm: 12, md: 18, lg: 26, pill: 999 };
export const space = (n: number) => n * 4;

/**
 * Typography — a warm, humanist system chosen to feel modern yet relaxing.
 * Body/headings: Plus Jakarta Sans (soft, open counters, low cognitive load).
 * Wordmark only: Unbounded. Premium upgrade: swap `display`/`body` for
 * Satoshi (Fontshare) in the native app, where Google-Fonts-only does not
 * apply — bundle the .otf via expo-font and update these names.
 */
export const font = {
  logo: 'Unbounded_800ExtraBold', // FREED wordmark only
  display: 'PlusJakartaSans_700Bold', // headers — Bold
  medium: 'PlusJakartaSans_500Medium',
  body: 'PlusJakartaSans_400Regular',
  bodyBold: 'PlusJakartaSans_600SemiBold',
};

/**
 * Relaxing spacing rules (apply per component):
 * - Headers (H1/H2): lineHeight ~1.2, letterSpacing ~ -0.015em, sentence case.
 * - Body/bio: lineHeight ~1.55, letterSpacing 0.
 * - Buttons: SemiBold, letterSpacing ~ +0.02em, centered, sentence case.
 * Never all-caps — it reads as shouting and triggers micro-anxiety.
 */
export const type = {
  h1: { lineHeight: 31, letterSpacing: -0.4 },
  h2: { lineHeight: 25, letterSpacing: -0.24 },
  body: { lineHeight: 23, letterSpacing: 0 },
  button: { letterSpacing: 0.3 },
};

export const shadow = {
  card: {
    shadowColor: '#26312B',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
};
