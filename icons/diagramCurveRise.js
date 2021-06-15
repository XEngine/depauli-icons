
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
            children.concat([_c('path',{attrs:{"d":"M14.446 19a4.704 4.704 0 01-4.696-4.658V8.663a3.153 3.153 0 00-.917-2.239A3.105 3.105 0 006.619 5.5H4.663A3.167 3.167 0 001.5 8.663V11.5a.75.75 0 01-1.5 0V8.663A4.669 4.669 0 014.663 4H6.62a4.607 4.607 0 013.277 1.362 4.604 4.604 0 011.353 3.279v5.696a3.197 3.197 0 003.191 3.163H16.4a3.089 3.089 0 002.193-.917c.586-.589.908-1.37.906-2.199v-4.072L17.78 12.03a.744.744 0 01-1.06 0 .749.749 0 010-1.06l2.989-2.989a.744.744 0 01.796-.185l.042.016c.067.028.134.07.194.123a.47.47 0 01.041.035l3 3a.75.75 0 01-.002 1.061.748.748 0 01-1.06-.001l-1.722-1.722v4.074a4.577 4.577 0 01-1.343 3.259A4.58 4.58 0 0116.401 19h-1.955z"}})])
          )
        }
      }
    