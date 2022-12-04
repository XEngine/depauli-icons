import {build} from 'vite'
import dts from "vite-plugin-dts";

export default async ({name, entry, fileName}) => {
    return await build({
        plugins: [
            dts({
                insertTypesEntry: true,
                outputDir: 'dist/types',
            }),
        ],
        build: {
            outDir: "./dist",
            lib: {
                entry,
                name,
                fileName: (format) => fileName ? fileName(format) : `${name}.${format}.js`,
                formats: ['umd', 'es']
            },
            emptyOutDir: false,
        },
    }).then((stats) => {
        console.log(`${name} built`)
    });
}