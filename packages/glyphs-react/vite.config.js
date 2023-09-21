import dtsPlugin from "vite-plugin-dts";
import react from '@vitejs/plugin-react'
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [
        react(),
        dtsPlugin(
            {
                insertTypesEntry: true,
                rollupTypes: true,
                strictOutput: true,
                outDir: "dist/types",
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    build: {
        lib: {
            entry: "./src/lib/glyph.tsx",
            name: "Glyphs",
            fileName: (format) => `glyphs-react.${format}.js`,
            formats: ["cjs", "es"],
        },
        rollupOptions: {
            external: ['react', 'react-dom', /^react\//],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    }
})