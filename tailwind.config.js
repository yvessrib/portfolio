/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      backgroundImage: {
        'about-splash': "url('/splash_about.svg')",
        'about-splash_mobile': "url('/splash_about_mobile.svg')",
      },
      boxShadow: {
        glow: [
          "0 0px 5px rgba(139, 92, 246, 0.35)",
          "0 0px 30px 10px rgba(139, 92, 246, 0.2)"
        ]
      },
      fontFamily: {
        firacode: ['var(--font-fira-code)'],
        poppins: ['var(--font-poppins)'],
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1320px'
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}