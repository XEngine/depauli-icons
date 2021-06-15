
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
            children.concat([_c('path',{attrs:{"d":"M6.75 22.118a.75.75 0 010-1.5h.915l1.313-5.25H6.75C3.028 15.368 0 12.34 0 8.618s3.028-6.75 6.75-6.75h10.5c3.722 0 6.75 3.028 6.75 6.75s-3.028 6.75-6.75 6.75h-2.227l1.312 5.25h.915a.75.75 0 010 1.5H6.75zm8.04-1.5l-1.312-5.25h-2.954l-1.313 5.25h5.579zM6.75 3.368c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25h10.5c2.895 0 5.25-2.355 5.25-5.25s-2.355-5.25-5.25-5.25H6.75z"}}),_c('path',{attrs:{"d":"M12 12.368c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"}})])
          )
        }
      }
    