import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        "gray-1" : "#333",
        "gray-2" : "#4F4F4F",
        "gray-3" : "#828282",
        "blue-1" : "#2F80ED",
        background : "#F2F2F2",
        red:"#EB5757"
      }
    },
  },
  plugins: [],
}
export default config
