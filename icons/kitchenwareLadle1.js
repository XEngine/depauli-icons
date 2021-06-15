
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24c-4.135 0-7.5-3.365-7.5-7.5V8.25A6.758 6.758 0 001.5 1.5a.75.75 0 010-1.5c4.549 0 8.25 3.701 8.25 8.25v4.86c1.576-.811 4.051-1.11 6-1.11 5.153 0 7.5 1.555 7.5 3v1.5c0 4.135-3.365 7.5-7.5 7.5zm-5.986-7.095A6.008 6.008 0 0015.75 22.5a6.008 6.008 0 005.987-5.595c-1.102.558-2.55.822-3.483.942l-1.88 2.82a.752.752 0 01-1.248-.001l-1.88-2.82c-.932-.119-2.381-.383-3.482-.941zM15.75 13.5c-4.13 0-6 1.151-6 1.5 0 .266 1.232 1.098 4.008 1.396a.75.75 0 01.544.329l1.448 2.172 1.448-2.172a.748.748 0 01.544-.33c2.776-.299 4.008-1.131 4.008-1.396 0-.348-1.87-1.499-6-1.499z"}})])
          )
        }
      }
    