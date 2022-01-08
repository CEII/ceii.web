module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#23272C',
                accent: '#ED554C',
                secondary: '#033C71',
            },
        },
    },
    plugins: ['@tailwindcss/forms'],
};
