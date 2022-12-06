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
            entry: "./src/index.ts",
            name: "Glyphs",
            fileName: (format) => `glyphs.${format}.js`,
            formats: ["cjs", "es"],
        }
    }
}