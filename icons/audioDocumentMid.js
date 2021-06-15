
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
            children.concat([_c('path',{attrs:{"d":"M2.25 4.5a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25zM2.25 21a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25zM9.75 16.5a.75.75 0 01-.75-.75v-4.792l-.857 1.428c-.135.225-.381.364-.643.364s-.508-.139-.643-.364L6 10.958v4.792a.75.75 0 01-1.5 0v-7.5a.752.752 0 01.75-.75c.262 0 .509.139.643.364L7.5 10.542l1.607-2.678a.757.757 0 01.842-.338.754.754 0 01.551.724v7.5a.75.75 0 01-.75.75zM12.75 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM15.75 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75 3.754 3.754 0 013.75 3.75v1.5a3.754 3.754 0 01-3.75 3.75zm.75-1.629A2.264 2.264 0 0018 12.75v-1.5c0-.962-.621-1.808-1.5-2.121v5.742z"}})])
          )
        }
      }
    