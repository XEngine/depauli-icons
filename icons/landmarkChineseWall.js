
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.751.751 0 01-.6-1.2l3.6-4.8h-7.189l-5.78 5.78a.747.747 0 01-1.061 0 .744.744 0 010-1.06l5.78-5.78v-3.129l-9.22 9.22a.744.744 0 01-1.06 0 .747.747 0 010-1.061l5.764-5.764-7.74-3.87A2.237 2.237 0 010 10.323V.75a.75.75 0 011.5 0v1.5H3V.75a.75.75 0 011.5 0v1.5H6V.75a.75.75 0 011.5 0v8.536l3.485 1.743a.75.75 0 01-.671 1.342L1.5 7.964v2.359c0 .286.159.543.415.671l8.187 4.093 3.398-3.398V6A.75.75 0 0115 6v1.5h3V6a.75.75 0 011.5 0v1.5h3V6A.75.75 0 0124 6v11.25a.695.695 0 01-.019.161.583.583 0 01-.021.072.692.692 0 01-.026.071c-.01.022-.02.04-.03.058a.526.526 0 01-.052.084L19.35 23.7a.753.753 0 01-.6.3zm3.75-7.5V9H15v7.5h1.5v-3c0-1.241 1.009-2.25 2.25-2.25S21 12.259 21 13.5v3h1.5zm-3 0v-3a.75.75 0 00-1.5 0v3h1.5zM6 8.536V3.75H1.5v2.536L6 8.536z"}})])
          )
        }
      }
    