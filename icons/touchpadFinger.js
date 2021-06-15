
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
            children.concat([_c('path',{attrs:{"d":"M3.75 16.497A3.754 3.754 0 010 12.747v-9a3.754 3.754 0 013.75-3.75h16.5A3.754 3.754 0 0124 3.747v9a3.737 3.737 0 01-.937 2.481.753.753 0 01-1.058.065.743.743 0 01-.252-.516.746.746 0 01.187-.543c.362-.41.562-.938.561-1.487v-9a2.252 2.252 0 00-2.25-2.25H3.75a2.252 2.252 0 00-2.25 2.25v9a2.252 2.252 0 002.25 2.25.75.75 0 010 1.5z"}}),_c('path',{attrs:{"d":"M11.25 23.997a.753.753 0 01-.599-.3L6.8 18.565a2.29 2.29 0 01-.075-2.636 2.284 2.284 0 013.271-.56l.499.375V7.5A2.252 2.252 0 0115 7.5v5.399l3.587.798a3.759 3.759 0 012.921 4l-.511 5.622a.746.746 0 01-.747.681l-9-.003zm8.315-1.497l.449-4.94a2.255 2.255 0 00-1.752-2.4l-4.174-.928a.743.743 0 01-.588-.732v-6a.753.753 0 00-1.505 0v9.747a.746.746 0 01-.75.75.756.756 0 01-.451-.15l-1.7-1.278-.034-.025a.784.784 0 00-1.086.217.787.787 0 00.026.905l3.625 4.832 7.94.002z"}})])
          )
        }
      }
    