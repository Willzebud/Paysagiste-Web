import localFont from "next/font/local";

export const storyScript = localFont({
  src: "./StoryScript-Regular.ttf",   // chemin relatif au fichier .ts
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-story-script",    // variable CSS
});
