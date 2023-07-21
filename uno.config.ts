import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      palette: {
        'red-40': 'hsl(346 77% 62%)',
        'red-50': 'hsl(343 77% 75%)',
        redOld: 'hsl(358 61% 64%)',
        redOldBorder: 'hsl(358 61% 68%)',
        // 'purple-40': '#b79bc3',
        // 'purple-50': '#a17fad',
        purpleMauve: '#a9798b',
        purpleMauveBorder: '#af8393'
        // 'orange-50': '#ff9e64',
        // 'orange-70': '#fab387',
        // 'yellow-50': '#f6c177',
        // 'green-50': '#9ece6a',
        // 'goaway-green': '#8bc4c4',
        // teal: '#63b1b1',
        // azure: '#3e8fb0',
        // 'blue-30': '#a6bfec',
        // 'blue-40': '#82a6e4'
      },
      light: {
        '100': 'hsl(0 0% 7%)',
        '200': 'hsl(0 0% 21%)',
        '300': 'hsl(0 0% 25%)',
        '400': 'hsl(0 0% 37%)',
        '500': 'hsl(0 0% 46%)',
        '600': 'hsl(0 0% 59%)',
        '700': 'hsl(0 0% 70%)',
        '800': 'hsl(0 0% 80%)',
        '900': 'hsl(0 0% 91%)',

        trp: {
          '400': 'hsl(0 0% 37% / 88%)',
          '500': 'hsl(0 0% 46% / 94%)'
        },

        inv: {
          '100': 'hsl(240 6% 90%)',
          '200': 'hsl(240 5% 84%)',
          '300': 'hsl(240 5% 65%)',
          '400': 'hsl(240 4% 46%)',
          '500': 'hsl(240 5% 34%)',
          '600': 'hsl(240 5% 26%)',
          '700': 'hsl(240 4% 16%)',
          '800': 'hsl(240 6% 10%)',
          '900': 'hsl(240 10% 4%)'
        }
      },
      dark: {
        '100': 'hsl(236 8% 10%)',
        '200': 'hsl(236 8% 14%)',
        '300': 'hsl(236 8% 18%)',
        '400': 'hsl(236 8% 20%)',
        '500': 'hsl(236 8% 22%)',
        '600': 'hsl(236 8% 24%)',
        '700': 'hsl(236 8% 26%)',
        '800': 'hsl(236 8% 28%)',
        '900': 'hsl(236 8% 32%)',
        trp: {
          '400-trp': 'hsl(236 8% 20% / 88%)',
          '500-trp': 'hsl(236 8% 22% / 94%)'
        },

        inv: {
          '100': 'hsl(214 14% 23%)',
          '200': 'hsl(214 15% 31%)',
          '300': 'hsl(213 16% 39%)',
          '400': 'hsl(212 16% 45%)',
          '500': 'hsl(214 15% 56%)',
          '600': 'hsl(215 15% 66%)',
          '700': 'hsl(213 16% 75%)',
          '800': 'hsl(215 15% 84%)',
          '900': 'hsl(216 15% 94%)'
        }
      }
    }
  },
  shortcuts: {
    reverse: `border-t border-l border-t-solid border-l-solid drop-shadow
      dark:bg-dark-inv-900 dark:border-white dark:text-dark-100
      hover:dark:text-dark-inv-900 hover:dark:bg-palette-purple-mauve hover:dark:border-palette-purple-mauve-border`,
    default: `border-t border-l border-t-solid border-l-solid rounded-xl drop-shadow
      dark:bg-dark-700 dark:border-dark-900 dark:text-dark-inv-800
      hover:dark:bg-palette-red-old hover:dark:border-palette-red-old-border
`
  }
});
