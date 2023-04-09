export interface LocaleStrings {
  greeting: string;
  welcomeMessage: string;
}

export const locales: { [key: string]: LocaleStrings } = {
  en: {
    greeting: "Hello!",
    welcomeMessage: "Welcome to my website!",
  },
  es: {
    greeting: "¡Hola!",
    welcomeMessage: "¡Bienvenido a mi sitio web!",
  },
  fr: {
    greeting: "Bonjour !",
    welcomeMessage: "Bienvenue sur mon site web !",
  },
};
