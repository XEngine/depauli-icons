import dts from 'vite-plugin-dts'

export default {
    plugins: [
        dts({
            outDir: 'dist/types'
        })
    ],
    build: {
        lib: {
            entry: "./src/glyphs.ts",
            name: "Glyphs",
            fileName: (format) => `glyphs.${format}.js`,
            formats: ["cjs", "es"],
        }
    }
}