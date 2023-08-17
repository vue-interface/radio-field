export default {
    content: [
        './index.html',
        './demo/**/*',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        ...require('@vue-interface/form-control/tailwindcss'),
    ],
    safelist: [
        ...require('@vue-interface/form-control/tailwindcss/safelist')(),
    ]
};