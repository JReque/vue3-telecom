module.exports = {
  content: [
    "./index.html", // Esto es necesario para que Tailwind escanee el HTML
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Asegúrate de que se incluye todo el código Vue y JS/TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
