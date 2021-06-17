import { babel } from "@rollup/plugin-babel";
import { pascalCase } from "pascal-case";
import vue from 'rollup-plugin-vue'

const plugins = [babel({ babelHelpers: "bundled" }), vue()];

const builds = [
    {
        name: "dp-icon",
        input: "./src/index.js",
        outputDir: `./dist`,
    },
].map(({ name, input, outputDir }) => {
    return [
        /* esm */
        {
            input,
            plugins,
            output: {
                file: `${outputDir}/index.es.js`,
                format: "es",
                sourcemap: true,
            },
        },

        /* cjs */
        {
            input,
            plugins,
            output: {
                file: `${outputDir}/index.cjs.js`,
                format: "cjs",
                sourcemap: true,
            },
        },

        /* umd */
        {
            input,
            plugins,
            output: {
                file: `${outputDir}/index.umd.js`,
                format: "umd",
                name: `${pascalCase(name)}`,
                sourcemap: true,
            },
        },
    ];
});

export default [].concat(...builds);