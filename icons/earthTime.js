
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
            children.concat([_c('path',{attrs:{"d":"M9.654 23.748a.762.762 0 01-.157-.017 11.961 11.961 0 01-5.552-2.851l-.078-.07c-.064-.059-.125-.118-.187-.177a9.887 9.887 0 01-.272-.27l-.055-.056a11.871 11.871 0 01-3.352-8.376v-.046c.003-.196.008-.37.018-.545l.002-.05c.01-.175.026-.35.044-.526l.019-.164c.016-.132.033-.263.053-.395l.023-.155c.026-.15.053-.301.083-.452l.01-.045.012-.064a11.92 11.92 0 015.209-7.565A11.939 11.939 0 0114.508.259a12.021 12.021 0 019.394 10.18.743.743 0 01-.149.554.744.744 0 01-.594.292.753.753 0 01-.744-.653 10.516 10.516 0 00-1.798-4.635h-3.694a.75.75 0 00-.728.568l-.465 1.856a.749.749 0 01-.912.544.75.75 0 01-.543-.909l.466-1.855a2.247 2.247 0 012.183-1.703h2.424a10.567 10.567 0 00-5.152-2.773 10.44 10.44 0 00-7.904 1.458A10.451 10.451 0 001.94 8.998h4.391c1.034 0 1.932.701 2.183 1.704l.75 3a2.253 2.253 0 01-2.183 2.796h-.464l-.797 3.984a10.38 10.38 0 003.989 1.783.746.746 0 01.577.89.753.753 0 01-.732.593zm-8.043-13.25a10.535 10.535 0 00-.101 1.124l-.002.06a9.58 9.58 0 000 .657c.003.086.008.17.013.255a10.49 10.49 0 002.251 5.913l.052.063a9.576 9.576 0 00.66.747l.035.034.75-3.751a.752.752 0 01.735-.603h1.079a.75.75 0 00.728-.931l-.75-3a.75.75 0 00-.728-.568H1.611z"}}),_c('path',{attrs:{"d":"M17.252 23.998c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M17.252 17.998a.75.75 0 01-.75-.75v-2.652a.75.75 0 011.5 0v1.902h1.902a.75.75 0 010 1.5h-2.652z"}})])
          )
        }
      }
    