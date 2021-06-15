
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.998a.75.75 0 010-1.5h4.8l11.2-21h-4a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-4.8l-11.2 21h4a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    