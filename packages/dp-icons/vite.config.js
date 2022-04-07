import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
    plugins: [createVuePlugin()],
    build: {
        lib: {
            entry: './src/index.js',
            name: 'DPIcon',
            fileName: (format) => `dp-icons.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})