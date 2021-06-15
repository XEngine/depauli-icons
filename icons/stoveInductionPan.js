
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
            children.concat([_c('path',{attrs:{"d":"M9.75 11.25A2.252 2.252 0 017.5 9V5.25H.75a.75.75 0 010-1.5H22.5c.827 0 1.5.673 1.5 1.5V9a2.252 2.252 0 01-2.25 2.25h-12zM9 9c0 .414.336.75.75.75h12A.75.75 0 0022.5 9V5.25H9V9zM9.75 17.25A.75.75 0 019 16.5V15a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM12.75 17.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM15.75 17.25a.75.75 0 01-.75-.75V15a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM21.75 17.25a.75.75 0 01-.75-.75V15a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM18.75 17.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM8.25 20.25a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15z"}})])
          )
        }
      }
    