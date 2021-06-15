
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75h18c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5H3v6.75a.75.75 0 01-.75.75zM21 15V3H3v12h18z"}})])
          )
        }
      }
    