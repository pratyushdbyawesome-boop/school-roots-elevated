import hero from "@/assets/hero-school.jpg";
import logo from "@/assets/logo.png";
import library from "@/assets/facility-library.jpg";
import lab from "@/assets/facility-lab.jpg";
import computer from "@/assets/facility-computer.jpg";
import sports from "@/assets/facility-sports.jpg";
import smartclass from "@/assets/facility-smartclass.jpg";
import principal from "@/assets/principal.jpg";

/** Maps CMS image keys to bundled, optimised assets. */
export const images = {
  hero,
  logo,
  library,
  lab,
  computer,
  sports,
  smartclass,
  principal,
} as const;

export type ImageKey = keyof typeof images;

export function getImage(key: string): string {
  return images[key as ImageKey] ?? hero;
}
