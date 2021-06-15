
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
            children.concat([_c('path',{attrs:{"d":"M4.233 24A3.486 3.486 0 01.75 20.52V4.983A3.486 3.486 0 014.233 1.5H8.25a.75.75 0 010 1.5H4.233C3.14 3 2.25 3.89 2.25 4.983V18h10.5v-2.25a.75.75 0 011.5 0v4.768A3.486 3.486 0 0110.768 24H4.233zM2.25 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.984 1.984 0 001.983-1.982V19.5H2.25v1.018zM16.5 10.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M9 13.5a.75.75 0 01-.75-.75v-1.5c0-.876.198-1.757.57-2.55a6.011 6.011 0 013.038-2.947 3.365 3.365 0 01-.983-2.378C10.875 1.514 12.389 0 14.25 0s3.375 1.514 3.375 3.375c0 .9-.357 1.748-.979 2.374.054.023.107.047.159.072a.747.747 0 01.36.997.753.753 0 01-.998.36 4.458 4.458 0 00-1.907-.427 4.525 4.525 0 00-4.082 2.587 4.516 4.516 0 00-.428 1.912V12h6.75a.75.75 0 010 1.5H9zm5.25-12c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875S15.284 1.5 14.25 1.5z"}})])
          )
        }
      }
    