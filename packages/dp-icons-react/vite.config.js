import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import {build} from 'vite'

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
            outputDir: 'dist/types',
        }),
        react(),
        vue()
    ],
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'DPIcon',
            fileName: (format) => `dp-icon.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom", "vue"],
            output: {
                exports: 'named',
                preserveModules: false,
                globals: {
                    react: "React",
                    vue: 'Vue',
                    "react-dom": "ReactDOM",
                },
            },
        }
    }
})
