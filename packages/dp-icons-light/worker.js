import {build} from 'vite'

export default async ({name, entry, fileName}) => {
    return await build({
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