
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
            children.concat([_c('path',{attrs:{"d":"M1.75 19.5C.785 19.5 0 18.715 0 17.75V6.25C0 5.285.785 4.5 1.75 4.5h20.5c.965 0 1.75.785 1.75 1.75v11.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-13.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-7.268a1.731 1.731 0 01-.25.018h-7c-.965 0-1.75-.785-1.75-1.75v-2.5c0-.084.006-.168.018-.25H1.75zm13.5 0a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-7z"}})])
          )
        }
      }
    