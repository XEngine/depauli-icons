import {build} from 'vite'

import dts from "vite-plugin-dts";

const libraries = [
    {
        name: 'dp-icons-react',
        entry: './src/react/dp-icon-react.ts',
    },
    {
        name: 'dp-icons-vue',
        entry: './src/vue/dp-icon-vue.ts',
    },
    {
        name: 'dp-icons-bold',
        entry: './src/icons/bold/index.ts',
    },
    {
        name: 'dp-icons-regular',
        entry: './src/icons/regular/index.ts',
    },
    {
        name: 'dp-icons-light',
        entry: './src/icons/light/index.ts',
    },
    {
        name: 'dp-icons-misc',
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
                formats: ['umd', 'es']
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