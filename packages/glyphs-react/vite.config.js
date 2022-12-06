import dtsPlugin from "vite-plugin-dts";

export default {
    plugins: [
        dtsPlugin(
            {
                outputDir: "dist/types",
            }
        )
    ],
    build: {
        lib: {
            entry: "./glyphs-react.ts",
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
}