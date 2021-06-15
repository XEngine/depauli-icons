
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
            children.concat([_c('path',{attrs:{"d":"M.738 4.504a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.738zM.738 21.004a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.738zM5.238 16.504a3.754 3.754 0 01-3.75-3.75v-1.5a3.754 3.754 0 013.75-3.75.75.75 0 010 1.5 2.252 2.252 0 00-2.25 2.25v1.5a2.252 2.252 0 002.25 2.25.75.75 0 010 1.5zM11.238 16.504a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-.75.75zM20.238 16.504a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    