
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
            children.concat([_c('path',{attrs:{"d":"M3 15.173a.75.75 0 01-.75-.75V9.75a.75.75 0 011.5 0v4.673a.75.75 0 01-.75.75zM7.5 19.5a.75.75 0 01-.75-.75V5.25a.75.75 0 011.5 0v13.5a.75.75 0 01-.75.75zM21 15.173a.75.75 0 01-.75-.75V9.75a.75.75 0 011.5 0v4.673a.75.75 0 01-.75.75zM16.5 19.5a.75.75 0 01-.75-.75V5.25a.75.75 0 011.5 0v13.5a.75.75 0 01-.75.75zM12 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.5A.75.75 0 0112 24z"}})])
          )
        }
      }
    