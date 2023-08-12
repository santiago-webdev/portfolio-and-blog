import { defineConfig } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  transformers: [transformerDirectives()],
  theme: {
    fontFamily: {
      ui: ['Manrope'],
      body: ['Basier Circle']
    },
    colors: {
      palette: {
        red: {
          old: 'hsl(358 61% 64%)',
          oldBorder: 'hsl(358 61% 68%)',
          40: 'hsl(346 77% 62%)',
          50: 'hsl(343 77% 75%)'
        },
        purple: {
          mauve: '#a9798b',
          mauveBorder: '#af8393',
          50: '#b79bc3',
          40: '#a17fad'
        },
        orange: {
          50: '#ff9e64',
          70: '#fab387'
        },
        yellow: {
          500: '#f6c177'
        },

        green: {
          goaway: '#8bc4c4',
          500: '#9ece6a'
        },

        blue: {
          azure: '#3e8fb0',
          70: '#A6BFEC',
          50: '#82A6E4'
        }
      },

      // Light theme monochromatic scale
      light: {
        100: 'hsl(0 0% 7%)',
        200: 'hsl(0 0% 21%)',
        300: 'hsl(0 0% 25%)',
        400: 'hsl(0 0% 37%)',
        500: 'hsl(0 0% 46%)',
        600: 'hsl(0 0% 59%)',
        700: 'hsl(0 0% 70%)',
        800: 'hsl(0 0% 80%)',
        900: 'hsl(0 0% 91%)',

        trp: {
          400: 'hsl(0 0% 37% / 88%)',
          500: 'hsl(0 0% 46% / 94%)'
        },

        inv: {
          100: 'hsl(240 6% 90%)',
          200: 'hsl(240 5% 84%)',
          300: 'hsl(240 5% 65%)',
          400: 'hsl(240 4% 46%)',
          500: 'hsl(240 5% 34%)',
          600: 'hsl(240 5% 26%)',
          700: 'hsl(240 4% 16%)',
          800: 'hsl(240 6% 10%)',
          900: 'hsl(240 10% 4%)'
        }
      },

      // Dark theme monochromatic scale
      dark: {
        100: 'hsl(236 8% 10%)',
        200: 'hsl(236 8% 14%)',
        300: 'hsl(236 8% 18%)',
        400: 'hsl(236 8% 20%)',
        500: 'hsl(236 8% 22%)',
        600: 'hsl(236 8% 24%)',
        700: 'hsl(236 8% 26%)',
        800: 'hsl(236 8% 28%)',
        900: 'hsl(236 8% 32%)',
        trp: {
          400: 'hsl(236 8% 20% / 88%)',
          500: 'hsl(236 8% 22% / 94%)'
        },

        inv: {
          100: 'hsl(214 14% 23%)',
          200: 'hsl(214 15% 31%)',
          300: 'hsl(213 16% 39%)',
          400: 'hsl(212 16% 45%)',
          500: 'hsl(214 15% 56%)',
          600: 'hsl(215 15% 66%)',
          700: 'hsl(213 16% 75%)',
          800: 'hsl(215 15% 84%)',
          900: 'hsl(216 15% 94%)'
        }
      }
    }
  },
  shortcuts: {
    tags: `drop-shadow inline-flex place-items-center gap-1 px-3 py-1.5 rounded-xl
 dark:bg-dark-600 dark:border-dark-700 dark:border-t-solid dark:border-l-solid border-1
`,
    'inline-items': `inline-flex place-items-center flex-wrap gap-1`
  }
});
