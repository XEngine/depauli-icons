import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [vueJsx(), vue()],
    optimizeDeps: {
        exclude: ['vue-demi']
    },
    build: {
        lib: {
            entry: './src/index.js',
            name: 'DPIcon',
            fileName: (format) => `dp-icons.${format}.js`
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                exports: 'named',
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
