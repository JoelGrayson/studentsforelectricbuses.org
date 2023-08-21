/** @type {import('tailwindcss').Config} */

const tailwindPlugin=require('tailwindcss/plugin');

module.exports={
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {}
    },
    plugins: [
        tailwindPlugin(({ addVariant })=>{
            // 'mobile:red' or 'm:red' instead of 'black md:red'
            addVariant('mobile', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
            addVariant('m', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
        })
    ]
};
