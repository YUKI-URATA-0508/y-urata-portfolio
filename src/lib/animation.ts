/** Animation values are centralized so future direction / timing changes stay predictable. */
export const animation = {
  loading: { hold: 0.25, duration: 0.55, ease: "power2.inOut" },
  reveal: { y: 20, duration: 0.75, ease: "power2.out", start: "top 93%" },
} as const;
