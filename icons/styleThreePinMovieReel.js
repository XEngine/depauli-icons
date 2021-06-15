
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
            children.concat([_c('path',{attrs:{"d":"M11.999 23.947c-.26 0-.517-.068-.742-.196a20.946 20.946 0 01-5.143-4.208c-2.564-2.922-3.864-6.2-3.864-9.744 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.512 1.512 0 01-.744.196zM12 1.549c-4.549 0-8.25 3.701-8.25 8.25 0 1.863.595 8.282 8.25 12.649 7.655-4.372 8.25-10.786 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M9.75 14.197a.755.755 0 01-.75-.75v-7.5a.755.755 0 01.75-.75c.127 0 .253.033.364.094l6.75 3.75a.75.75 0 010 1.312l-6.75 3.75a.759.759 0 01-.364.094zm.75-2.024l4.456-2.476L10.5 7.222v4.951z"}})])
          )
        }
      }
    