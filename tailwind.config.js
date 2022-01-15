module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        extend: {
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
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
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: ['@tailwindcss/forms'],
};
