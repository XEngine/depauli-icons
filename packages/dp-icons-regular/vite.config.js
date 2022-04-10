import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: './index.js',
            name: 'DPIconRegular',
            fileName: (format) => `dp-icons-regular.${format}.js`
        },
    }
})
