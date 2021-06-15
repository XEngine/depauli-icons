
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
            children.concat([_c('path',{attrs:{"d":"M3 23.25c-1.654 0-3-1.346-3-3V3A2.252 2.252 0 012.25.75h15A2.252 2.252 0 0119.5 3v17.25c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V6A.75.75 0 0124 6v14.25c0 1.654-1.346 3-3 3H3zm-.75-21A.75.75 0 001.5 3v17.25c0 .827.673 1.5 1.5 1.5h15.401a2.973 2.973 0 01-.401-1.5V3a.75.75 0 00-.75-.75h-15z"}}),_c('path',{attrs:{"d":"M4.5 15.75a.75.75 0 010-1.5H15a.75.75 0 010 1.5H4.5zM4.5 18.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM5.25 12c-.827 0-1.5-.673-1.5-1.5V6c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5v4.5c0 .827-.673 1.5-1.5 1.5h-9zm0-1.5h9V6h-9v4.5z"}})])
          )
        }
      }
    