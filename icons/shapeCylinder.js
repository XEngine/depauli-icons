
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-5.986 0-10.5-2.257-10.5-5.25V5.25C1.5 2.257 6.014 0 12 0s10.5 2.257 10.5 5.25v13.5C22.5 21.743 17.986 24 12 24zm0-9c-4.794 0-9 1.752-9 3.75s4.206 3.75 9 3.75 9-1.752 9-3.75S16.794 15 12 15zm0-1.5c3.759 0 7.15.955 9 2.485V8.019c-1.85 1.547-5.18 2.481-9 2.481s-7.15-.934-9-2.481v7.962c1.85-1.547 5.18-2.481 9-2.481zm0-12c-4.794 0-9 1.752-9 3.75S7.206 9 12 9s9-1.752 9-3.75-4.206-3.75-9-3.75z"}})])
          )
        }
      }
    