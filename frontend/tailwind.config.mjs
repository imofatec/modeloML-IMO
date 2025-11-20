/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "custom-primary": "#0E0025",
                "custom-gray": "#1A1A2E"
            },
        },
    },
    plugins: [],
};
