import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
            outputDir: 'dist/types',
        }),
        react()
    ],
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'DPIcon',
            fileName: (format) => `dp-icon.${format}.js`
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
