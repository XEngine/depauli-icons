
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
            children.concat([_c('path',{attrs:{"d":"M3 21a2.252 2.252 0 01-2.25-2.25.75.75 0 011.5 0c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5H3zM1.5 9a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0V6H4.5a.75.75 0 010 1.5H2.25v.75A.75.75 0 011.5 9zM1.5 15.75A.75.75 0 01.75 15v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM12.75 10.5c-.827 0-1.5-.673-1.5-1.5V7.5h-3a.75.75 0 010-1.5h3V1.5c0-.827.673-1.5 1.5-1.5h2.69c.402 0 .778.157 1.061.44L17.56 1.5h4.189c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5H12.75zm0-1.5h9V3h-4.5a.751.751 0 01-.53-.22L15.44 1.5h-2.69V9zM12.75 24c-.827 0-1.5-.673-1.5-1.5V21h-3a.75.75 0 010-1.5h3V15c0-.827.673-1.5 1.5-1.5h2.69c.402 0 .779.156 1.062.441L17.561 15h4.189c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-9zm0-1.5h9v-6h-4.5a.751.751 0 01-.53-.22L15.44 15h-2.69v7.5z"}})])
          )
        }
      }
    