import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: './src/index.js',
            name: 'DPIcon',
            fileName: (format) => `dp-icons-react.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                exports: 'named',
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        }
    }
})
