
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3.375 19.95a.747.747 0 01-.577-.27 11.918 11.918 0 01-2.726-8.768A11.916 11.916 0 014.336 2.78a11.836 11.836 0 017.663-2.782c.366 0 .739.017 1.106.05 3.192.29 6.08 1.806 8.132 4.269a11.927 11.927 0 012.755 6.884.75.75 0 01-.699.798l-.048.001a.752.752 0 01-.75-.7 10.427 10.427 0 00-2.41-6.023 10.428 10.428 0 00-7.115-3.735 10.854 10.854 0 00-.97-.044c-2.474 0-4.792.842-6.703 2.434a10.428 10.428 0 00-3.735 7.115 10.434 10.434 0 002.39 7.673.746.746 0 01-.096 1.056.758.758 0 01-.481.174z"}}),_c('path',{attrs:{"d":"M7.946 23.978a.927.927 0 01-.873-.615c-1.155-3.28-2.067-5.869-.107-9.081a.928.928 0 01.888-.443.925.925 0 01.63.334c.392.519.928.871 1.527 1.019a3.43 3.43 0 01-.084-.582 3.457 3.457 0 01.87-2.518 3.454 3.454 0 012.612-1.172c1.351 0 2.563.788 3.133 1.978a2.671 2.671 0 00.554-1.718.929.929 0 01.935-.953c.103 0 .205.017.303.051 3.555 1.286 4.504 4.004 5.602 7.15.11.32.042.673-.177.923a.92.92 0 01-.637.314l-.058.002a.929.929 0 01-.613-.23c-.769-.65-1.497-.997-2.101-.997-.206 0-.397.042-.567.125-.593.289-.892 1.036-.872 1.593a.925.925 0 01-.345.758.935.935 0 01-.589.207h-.01a1.327 1.327 0 00-1.229 1.21.93.93 0 01-.926.857l-.049-.001a.921.921 0 01-.642-.305 1.315 1.315 0 00-.949-.4c-.271 0-.53.081-.751.233a.923.923 0 01-.6.22.938.938 0 01-.749-.376c-.261-.351-.809-.729-1.395-.729-.097 0-.192.01-.283.031-.727.165-1.272 1.004-1.537 2.363a.921.921 0 01-.911.752zm-.059-8.251c-.873 1.836-.609 3.476.047 5.518.651-1.311 1.573-1.719 2.127-1.845.203-.046.412-.069.621-.069.929 0 1.731.454 2.245.942.385-.189.81-.288 1.244-.288.455 0 .905.111 1.305.318a2.833 2.833 0 011.963-1.614c.116-.874.606-1.946 1.688-2.472a2.766 2.766 0 011.224-.273c.515 0 1.049.128 1.595.381-.763-2.005-1.581-3.45-3.409-4.337a4.157 4.157 0 01-2.034 2.9.748.748 0 01-1.124-.604 1.984 1.984 0 00-2.097-1.859 1.968 1.968 0 00-1.363.663 1.977 1.977 0 00-.134 2.459.752.752 0 01-.499 1.174 4.182 4.182 0 01-3.399-.994z"}})])
          )
        }
      }
    