
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
            children.concat([_c('path',{attrs:{"d":"M.75 3.748a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM.75 8.248a.75.75 0 010-1.5h18a.75.75 0 010 1.5h-18zM.75 12.748a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 17.248a.75.75 0 010-1.5h18a.75.75 0 010 1.5h-18zM.75 21.748a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21z"}})])
          )
        }
      }
    