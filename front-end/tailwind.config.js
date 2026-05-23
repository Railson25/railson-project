const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./UI/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /animate-delay-.+/,
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        pending: "rgb(var(--color-pending) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        text: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          inverse: "rgb(var(--color-text-inverse) / <alpha-value>)",
        },
        background: {
          primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-bg-muted) / <alpha-value>)",
        },
        border: {
          primary: "rgb(var(--color-border-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-border-secondary) / <alpha-value>)",
        },
        darkmode: {
          50: "rgb(var(--color-darkmode-50) / <alpha-value>)",
          100: "rgb(var(--color-darkmode-100) / <alpha-value>)",
          200: "rgb(var(--color-darkmode-200) / <alpha-value>)",
          300: "rgb(var(--color-darkmode-300) / <alpha-value>)",
          400: "rgb(var(--color-darkmode-400) / <alpha-value>)",
          500: "rgb(var(--color-darkmode-500) / <alpha-value>)",
          600: "rgb(var(--color-darkmode-600) / <alpha-value>)",
          700: "rgb(var(--color-darkmode-700) / <alpha-value>)",
          800: "rgb(var(--color-darkmode-800) / <alpha-value>)",
          900: "rgb(var(--color-darkmode-900) / <alpha-value>)",
        },
      },
      fontFamily: {
        roboto: ["Roboto"],
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
      },
      screens: {
        xs: "464px",
        "3xl": "1920px",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      strokeWidth: {
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5,
      },
      backgroundImage: {
        "menu-corner":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52' viewBox='0 0 259.51 259.52'%3E%3Cpath id='Path_143' data-name='Path 143' d='M8659.507,423.965c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828-2.394-2.974-4.937-5.936-7.292-8.589-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3a115.051,115.051,0,0,0-12.526-.227h259.51Z' transform='translate(-8399.997 -164.445)' fill='%23f1f5f8'/%3E%3C/svg%3E%0A\")",
        "menu-corner-dark":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52' viewBox='0 0 259.51 259.52'%3E%3Cpath id='Path_143' data-name='Path 143' d='M8659.507,423.965c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828-2.394-2.974-4.937-5.936-7.292-8.589-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3a115.051,115.051,0,0,0-12.526-.227h259.51Z' transform='translate(-8399.997 -164.445)' fill='%23232e45'/%3E%3C/svg%3E%0A\")",
        "bredcrumb-chevron-dark":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right breadcrumb__icon'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\")",
        "bredcrumb-chevron-light":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e8eeff' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right breadcrumb__icon'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\")",
        "bredcrumb-chevron-darkmode":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23718096' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right breadcrumb__icon'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\")",
      },
      keyframes: {
        "intro-divider": {
          "100%": {
            opacity: 1,
          },
        },
        "intro-menu": {
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        "intro-top-menu": {
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, matchUtilities, addVariant }) {
      addVariant("theme-1", ".theme-1 &");
      addVariant("theme-2", ".theme-2 &");

      addBase({
        ":root, .default": {
          "--color-primary": "125 211 252",
          "--color-secondary": "56 189 248",

          "--color-success": "16 185 129",
          "--color-info": "14 165 233",
          "--color-warning": "245 158 11",
          "--color-pending": "249 115 22",
          "--color-danger": "239 68 68",

          "--color-light": "248 250 252",
          "--color-dark": "30 41 59",

          "--color-text-primary": "15 23 42",
          "--color-text-secondary": "71 85 105",
          "--color-text-muted": "100 116 139",
          "--color-text-inverse": "248 250 252",

          "--color-bg-primary": "255 255 255",
          "--color-bg-secondary": "248 250 252",
          "--color-bg-muted": "241 245 249",

          "--color-border-primary": "226 232 240",
          "--color-border-secondary": "203 213 225",
        },

        ".dark": {
          "--color-primary": "56 189 248",
          "--color-darkmode-50": "71 85 105",
          "--color-darkmode-100": "51 65 85",
          "--color-darkmode-200": "30 41 59",
          "--color-darkmode-300": "15 23 42",
          "--color-darkmode-400": "12 20 38",
          "--color-darkmode-500": "8 16 32",
          "--color-darkmode-600": "6 12 26",
          "--color-darkmode-700": "4 8 20",
          "--color-darkmode-800": "2 4 14",
          "--color-darkmode-900": "0 0 8",

          "--color-text-primary": "248 250 252",
          "--color-text-secondary": "203 213 225",
          "--color-text-muted": "148 163 184",
          "--color-text-inverse": "15 23 42",

          "--color-bg-primary": "15 23 42",
          "--color-bg-secondary": "30 41 59",
          "--color-bg-muted": "51 65 85",

          "--color-border-primary": "51 65 85",
          "--color-border-secondary": "71 85 105",
        },

        ".theme-1": {
          "--color-primary": "244 114 182",
          "--color-secondary": "236 72 153",

          "--color-success": "16 185 129",
          "--color-info": "168 85 247",
          "--color-warning": "251 191 36",
          "--color-pending": "249 115 22",
          "--color-danger": "244 63 94",

          "--color-light": "253 242 248",
          "--color-dark": "190 24 93",

          "--color-text-primary": "76 29 50",
          "--color-text-secondary": "153 71 103",
          "--color-text-muted": "190 118 148",
          "--color-text-inverse": "253 242 248",

          "--color-bg-primary": "255 255 255",
          "--color-bg-secondary": "253 242 248",
          "--color-bg-muted": "252 231 243",

          "--color-border-primary": "251 207 232",
          "--color-border-secondary": "249 168 212",
        },

        ".theme-1.dark": {
          "--color-primary": "236 72 153",
          "--color-darkmode-50": "76 29 50",
          "--color-darkmode-100": "86 33 57",
          "--color-darkmode-200": "96 37 64",
          "--color-darkmode-300": "106 41 71",
          "--color-darkmode-400": "116 45 78",
          "--color-darkmode-500": "126 49 85",
          "--color-darkmode-600": "136 53 92",
          "--color-darkmode-700": "146 57 99",
          "--color-darkmode-800": "156 61 106",
          "--color-darkmode-900": "166 65 113",

          "--color-text-primary": "253 242 248",
          "--color-text-secondary": "251 207 232",
          "--color-text-muted": "249 168 212",
          "--color-text-inverse": "76 29 50",

          "--color-bg-primary": "76 29 50",
          "--color-bg-secondary": "96 37 64",
          "--color-bg-muted": "116 45 78",

          "--color-border-primary": "116 45 78",
          "--color-border-secondary": "136 53 92",
        },

        ".theme-2": {
          "--color-primary": "148 163 184",
          "--color-secondary": "100 116 139",

          "--color-success": "16 185 129",
          "--color-info": "100 116 139",
          "--color-warning": "180 83 9",
          "--color-pending": "154 52 18",
          "--color-danger": "185 28 28",

          "--color-light": "248 250 252",
          "--color-dark": "51 65 85",

          "--color-text-primary": "15 23 42",
          "--color-text-secondary": "71 85 105",
          "--color-text-muted": "100 116 139",
          "--color-text-inverse": "248 250 252",

          "--color-bg-primary": "255 255 255",
          "--color-bg-secondary": "248 250 252",
          "--color-bg-muted": "241 245 249",

          "--color-border-primary": "226 232 240",
          "--color-border-secondary": "203 213 225",
        },

        ".theme-2.dark": {
          "--color-primary": "100 116 139",
          "--color-darkmode-50": "30 41 59",
          "--color-darkmode-100": "33 44 62",
          "--color-darkmode-200": "36 47 65",
          "--color-darkmode-300": "39 50 68",
          "--color-darkmode-400": "42 53 71",
          "--color-darkmode-500": "45 56 74",
          "--color-darkmode-600": "48 59 77",
          "--color-darkmode-700": "51 62 80",
          "--color-darkmode-800": "54 65 83",
          "--color-darkmode-900": "57 68 86",

          "--color-text-primary": "248 250 252",
          "--color-text-secondary": "203 213 225",
          "--color-text-muted": "148 163 184",
          "--color-text-inverse": "15 23 42",

          "--color-bg-primary": "30 41 59",
          "--color-bg-secondary": "45 56 74",
          "--color-bg-muted": "60 71 89",

          "--color-border-primary": "51 62 80",
          "--color-border-secondary": "66 77 95",
        },
      });

      matchUtilities(
        {
          "animate-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        {
          values: (() => {
            const values = {};
            for (let i = 1; i <= 50; i++) {
              values[i * 10] = `${i * 0.1}s`;
            }
            return values;
          })(),
        }
      );

      matchUtilities(
        {
          "animate-fill-mode": (value) => ({
            "animation-fill-mode": value,
          }),
        },
        {
          values: {
            none: "none",
            forwards: "forwards",
            backwards: "backwards",
            both: "both",
          },
        }
      );
    }),
  ],
  variants: {
    extend: {
      boxShadow: ["dark"],
      backgroundImage: ["theme-1", "theme-2"],
      gradientColorStops: ["theme-1", "theme-2"],
      textColor: ["theme-1", "theme-2"],
      backgroundColor: ["theme-1", "theme-2"],
      borderColor: ["theme-1", "theme-2"],
    },
  },
};
