import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: './index.js',
            name: 'DPIconLight',
            fileName: (format) => `dp-icons-light.${format}.js`
        },
    }
})
