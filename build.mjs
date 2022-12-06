import {build} from 'vite'

import dts from "vite-plugin-dts";

const libraries = [
    {
        name: 'Glyph',
        entry: 'src/index.ts',
    },
    {
        name: 'GlyphReact',
        entry: './src/react/glyph-react.ts',
    },
    {
        name: 'GlyphVue',
        entry: './src/vue/glyph-vue.ts',
    },
    {
        name: 'GlyphBold',
        entry: './src/icons/bold/index.ts',
    },
    {
        name: 'GlyphRegular',
        entry: './src/icons/regular/index.ts',
    },
    /*{
        name: 'glyph-light',
        entry: './src/icons/light/index.ts',
    },*/
    {
        name: 'GlyphMisc',
        entry: './src/icons/misc/index.ts',
    }
]
libraries.forEach(async library => {
    await build({
        plugins: [
            dts({
                insertTypesEntry: true,
                outputDir: 'dist/types',
            }),
        ],
        build: {
            outDir: "./dist",
            lib: {
                entry: library.entry,
                name: library.name,
                fileName: (format) => `${library.name}.${format}.js`,
                formats: ['cjs', 'es']
            },
            emptyOutDir: false,
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
        },
    }).then(() => {
        console.log(`${library.name} built`)
    });
})