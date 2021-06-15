
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
            children.concat([_c('path',{attrs:{"d":"M11.999 23.947c-.26 0-.517-.068-.742-.196a20.946 20.946 0 01-5.143-4.208c-2.564-2.922-3.864-6.2-3.864-9.744 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.512 1.512 0 01-.744.196zM12 1.549c-4.549 0-8.25 3.701-8.25 8.25 0 1.863.595 8.282 8.25 12.649 7.655-4.372 8.25-10.786 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M12 12.801a4.13 4.13 0 01-4.125-4.125A4.13 4.13 0 0112 4.551a4.13 4.13 0 014.125 4.125A4.13 4.13 0 0112 12.801zm0-6.75c-1.447 0-2.625 1.178-2.625 2.625s1.178 2.625 2.625 2.625c1.448 0 2.625-1.178 2.625-2.625S13.448 6.051 12 6.051zM12 17.301a.75.75 0 01-.75-.75v-1.5h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    