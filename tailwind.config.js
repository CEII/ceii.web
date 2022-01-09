module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#23272C',
                accent: '#ED554C',
                secondary: '#033C71',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            screens: {
                sm: '375px',
                md: '768px',
                lg: '1024px',
                xl: '1440px',
                '2xl': '1920px',
            },
            fontSize: {
                'xxs': ['11px', {
                    letterSpacing: '-0.02em',
                    lineHeight: '10px',
                }],
            },
        },
    },
    plugins: [],
};
