import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: './index.js',
            name: 'DPIconBold',
            fileName: (format) => `dp-icons-bold.${format}.js`
        },
    }
})
