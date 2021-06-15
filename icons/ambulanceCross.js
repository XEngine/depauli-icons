
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V21H6v2.25a.75.75 0 01-1.5 0V.75a.75.75 0 011.5 0V3h12V.75a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zM18 19.5v-15H6v15h12z"}}),_c('path',{attrs:{"d":"M12 16.5a.75.75 0 01-.75-.75v-3h-3a.75.75 0 010-1.5h3v-3a.75.75 0 011.5 0v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    