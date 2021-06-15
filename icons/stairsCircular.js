
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h9.75V21H3.75a.75.75 0 010-1.5h6.75V18H6.75a.75.75 0 010-1.5h3.75V15H8.25a.75.75 0 010-1.5h2.25V.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v.75h8.25a.75.75 0 010 1.5H15v1.5h6.75a.75.75 0 010 1.5H15v1.5h5.25a.75.75 0 010 1.5H15v1.5h3.75a.75.75 0 010 1.5H15v1.5h2.25a.75.75 0 010 1.5H15v8.25a.75.75 0 01-.75.75H.75zm12.75-1.5v-21H12v21h1.5z"}})])
          )
        }
      }
    