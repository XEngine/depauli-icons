
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
            children.concat([_c('path',{attrs:{"d":"M12 23.262c-5.986 0-10.5-2.257-10.5-5.25 0-.543.155-1.077.46-1.587l.011-.02 8.736-14.929a1.5 1.5 0 012.585-.001l8.737 14.929a3.047 3.047 0 01.472 1.609C22.5 21.005 17.986 23.262 12 23.262zm-8.751-6.074c-.164.27-.249.549-.249.824 0 1.998 4.206 3.75 9 3.75s9-1.752 9-3.75a1.584 1.584 0 00-.273-.862c-1.041-1.67-4.713-2.888-8.727-2.888s-7.687 1.218-8.733 2.896a.784.784 0 01-.018.03zM5.116 14c1.874-.794 4.307-1.238 6.884-1.238s5.01.444 6.884 1.238L11.999 2.234 5.116 14z"}})])
          )
        }
      }
    