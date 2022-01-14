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
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            fontSize: {
                xxs: [
                    '11px',
                    {
                        letterSpacing: '-0.02em',
                        lineHeight: '10px',
                    },
                ],
            },
        },
    },
    plugins: ['@tailwindcss/forms'],
};
