
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
            children.concat([_c('path',{attrs:{"d":"M8.252 24a.75.75 0 010-1.5h2.25v-7.939l-7.5-7.5A1.501 1.501 0 014.062 4.5h1.477L4.245 1.914a.747.747 0 00-.67-.414H.752a.75.75 0 010-1.5h2.822c.858 0 1.629.476 2.013 1.244L7.216 4.5h7.786A4.503 4.503 0 0119.499.007a4.503 4.503 0 014.497 4.502 4.466 4.466 0 01-1.321 3.179 4.469 4.469 0 01-3.176 1.314 4.523 4.523 0 01-1.631-.307l-5.866 5.867V22.5h2.25a.75.75 0 010 1.5h-6zm3-10.811L18.441 6H4.064l7.188 7.189zm7.839-5.718a2.98 2.98 0 002.526-.846 2.976 2.976 0 00.88-2.118 3.001 3.001 0 00-2.994-3l-.003-.375v.375A3 3 0 0016.503 4.5h1.939c.4 0 .776.156 1.059.438.585.585.586 1.536.001 2.122l-.411.411z"}})])
          )
        }
      }
    