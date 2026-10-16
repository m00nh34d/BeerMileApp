export type Units = "metric" | "imperial";

// US / Liberia / Myanmar use oz + miles. UK uses ml + metres on track
// (miles on roads, but training uses track + km), so treat UK as metric.
const IMPERIAL_REGIONS = new Set(["US", "LR", "MM"]);

function regionFromLocale(locale: string): string | null {
  const parts = locale.replace("_", "-").split("-");
  if (parts.length >= 2) {
    return parts[parts.length - 1].toUpperCase();
  }
  return null;
}

export function detectUnits(): Units {
  try {
    const lang =
      typeof navigator !== "undefined" && navigator.language
        ? navigator.language
        : "en-GB";
    const region = regionFromLocale(lang);
    if (region && IMPERIAL_REGIONS.has(region)) return "imperial";
    // en-US without region parsed (rare) -> imperial
    if (lang.toLowerCase() === "en-us") return "imperial";
    return "metric";
  } catch {
    return "metric";
  }
}

function trimNum(n: number): string {
  const rounded = Math.round(n * 10) / 10;
  return Number.isInteger(rounded) ? String(Math.round(rounded)) : String(rounded);
}

export function mlForOz(oz: number): number {
  return Math.round(oz * 29.5735);
}

export function kmForMiles(mi: number): string {
  return trimNum(mi * 1.60934);
}

export function localizeText(text: string, units: Units): string {
  if (units === "metric") {
    return (
      text
        // 6oz -> 177ml, 12oz -> 355ml (case-insensitive)
        .replace(/(\d+(?:\.\d+)?)\s?oz\b/gi, (_, n) => {
          const oz = parseFloat(n);
          return `${mlForOz(oz)}ml`;
        })
        // 1.5-mi -> 2.4km, 1.5 mi -> 2.4km, 1 mile / 2 miles -> x km
        .replace(/(\d+(?:\.\d+)?)\s?-mi\b/gi, (_, n) => {
          return `${kmForMiles(parseFloat(n))}km`;
        })
        .replace(/(\d+(?:\.\d+)?)\s?miles?\b/gi, (_, n) => {
          return `${kmForMiles(parseFloat(n))}km`;
        })
        .replace(/(\d+(?:\.\d+)?)\s?mi\b/gi, (_, n) => {
          return `${kmForMiles(parseFloat(n))}km`;
        })
    );
  } else {
    // imperial: keep oz + miles, convert track meters to familiar terms
    // Beer Mile itself stays a mile. Laps: 400m -> quarter mile, 800m -> half mile, 100m -> 110 yards
    // 5K (parkrun distance) -> 3 miles for imperial readers
    return text
      .replace(/\b400m\b/gi, "quarter mile")
      .replace(/\b800m\b/gi, "half mile")
      .replace(/\b100m\b/gi, "110 yards")
      .replace(/\b5k\b/gi, "3 miles");
  }
}
