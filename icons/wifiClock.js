
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
            children.concat([_c('path',{attrs:{"d":"M5.96 12.034a.748.748 0 01-.53-1.281 6.06 6.06 0 014.252-1.748c.859 0 1.688.178 2.464.53a.746.746 0 01.374.993.75.75 0 01-.683.441.755.755 0 01-.31-.067 4.446 4.446 0 00-1.846-.397 4.546 4.546 0 00-3.191 1.311.75.75 0 01-.53.218zM3.071 8.572a.75.75 0 01-.508-1.302 10.486 10.486 0 017.106-2.789c2.609 0 5.12.979 7.072 2.757.148.135.235.319.244.52s-.06.392-.195.54a.753.753 0 01-1.059.049 8.992 8.992 0 00-6.062-2.365 8.98 8.98 0 00-6.09 2.392.75.75 0 01-.508.198z"}}),_c('path',{attrs:{"d":"M18.6 4.642a.753.753 0 01-.47-.166c-2.409-1.936-5.413-3.003-8.459-3.003-3.042 0-6.044 1.064-8.451 2.996a.744.744 0 01-1.054-.115A.75.75 0 01.281 3.3a15.056 15.056 0 019.39-3.302 15.054 15.054 0 019.399 3.31.746.746 0 01.115 1.054.746.746 0 01-.585.28zM17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.356 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 18a.75.75 0 01-.75-.75v-2.651a.75.75 0 011.5 0V16.5h1.902a.75.75 0 01.001 1.5H17.25z"}})])
          )
        }
      }
    