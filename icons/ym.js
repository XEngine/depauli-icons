
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
            children.concat([_c('path',{attrs:{"d":"M.738 4.504a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.738zM.738 21.004a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.738zM8.238 16.504a.75.75 0 01-.75-.75v-3.133a2.26 2.26 0 01-1.5-2.121V8.254a.75.75 0 011.5 0V10.5a.75.75 0 001.5 0V8.254a.75.75 0 011.5 0V10.5c0 .96-.615 1.808-1.5 2.121v3.133a.75.75 0 01-.75.75zM17.238 16.504a.75.75 0 01-.75-.75v-4.792l-.857 1.428c-.135.224-.381.364-.643.364s-.509-.14-.643-.364l-.857-1.428v4.792a.75.75 0 01-1.5 0v-7.5a.752.752 0 01.75-.75c.262 0 .509.139.643.364l1.607 2.678 1.607-2.678a.754.754 0 01.843-.337c.325.09.551.387.551.723v7.5a.752.752 0 01-.751.75z"}})])
          )
        }
      }
    