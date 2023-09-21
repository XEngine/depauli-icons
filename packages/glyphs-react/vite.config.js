import dtsPlugin from "vite-plugin-dts";
import react from '@vitejs/plugin-react'
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [
        react(),
        dtsPlugin(
            {
                outDir: "dist/types",
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    build: {
        lib: {
            entry: "./glyph.jsx",
            name: "Glyphs",
            fileName: (format) => `glyphs-react.${format}.js`,
            formats: ["cjs", "es"],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    }
})