
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
            children.concat([_c('path',{attrs:{"d":"M7.75 24.001c-.965 0-1.75-.785-1.75-1.75v-2a.75.75 0 01.75-.75h.75V7.456a.753.753 0 01-.45-.455 5.273 5.273 0 010-3.498A5.262 5.262 0 0112.004.001 5.257 5.257 0 0116.95 7a.753.753 0 01-.45.455v12.046h.75a.75.75 0 01.75.75v2c0 .965-.785 1.75-1.75 1.75h-8.5zm-.25-1.75c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-1.25h-9v1.25zm7.5-2.75v-3.81l-5.442 3.81H15zM9 18.06l6-4.2v-1.919L9 18.06zm0-3.75l6-4.2V8.192l-6 4.2v1.918zm0-3.75l4.371-3.059H9v3.059zm6.675-4.559a3.757 3.757 0 00-3.672-4.5 3.757 3.757 0 00-3.539 2.501 3.796 3.796 0 00-.138 1.999h7.349z"}})])
          )
        }
      }
    