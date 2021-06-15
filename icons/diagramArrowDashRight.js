
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
            children.concat([_c('path',{attrs:{"d":"M16.668 18.873a.913.913 0 01-.357-.073c-.131-.057-.556-.293-.556-.937v-1.99h-5.25a.75.75 0 010-1.5h6a.75.75 0 01.75.75v1.563l5.235-4.567-5.24-4.879v1.883a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-2.36c0-.645.426-.881.557-.938a.9.9 0 01.354-.073c.176 0 .442.053.712.303l6.137 5.686c.289.254.467.618.492 1.018a1.491 1.491 0 01-.54 1.251l-6.102 5.323c-.256.239-.518.29-.692.29zM5.25 9.872a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM.75 9.872a.75.75 0 010-1.5H3a.75.75 0 010 1.5H.75zM5.25 15.872a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM.75 15.872a.75.75 0 010-1.5H3a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    