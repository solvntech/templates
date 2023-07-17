/** @type {import('tailwindcss').Config} */

module.exports = {
    relative: true,
    content: ["src/**/*.js", "index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["circular std", "Helvetica", "Arial", "sans-serif"],
                inter: ["Inter"],
            },
            colors: {
                primary: "#5D50C6",
                pink: "#F85E9F",
                "btn-content": "#222831",
            },
            keyframes: {
                ripple: {
                    "0%": { width: "0px", height: "0px", opacity: 0.5 },
                    "100%": { width: "500px", height: "500px" },
                },
            },
            animation: {
                ripple: "ripple 1s linear",
            },
        },
    },
    plugins: [],
};
