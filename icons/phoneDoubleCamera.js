
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75V3.75a2.252 2.252 0 00-2.25-2.25H13.5v2.25A3.754 3.754 0 019.75 7.5H3v15.75a.75.75 0 01-1.5 0V3.75A3.754 3.754 0 015.25 0h13.5a3.754 3.754 0 013.75 3.75v19.5a.75.75 0 01-.75.75zm-12-18A2.252 2.252 0 0012 3.75V1.5H5.25A2.252 2.252 0 003 3.75V6h6.75z"}}),_c('path',{attrs:{"d":"M5.25 4.875c-.62 0-1.125-.505-1.125-1.125 0-.599.468-1.09 1.067-1.121l.03-.003-.026.002A1.127 1.127 0 016.375 3.75c0 .62-.505 1.125-1.125 1.125zM9 4.875c-.62 0-1.125-.505-1.125-1.125a1.12 1.12 0 011.086-1.122l.041-.001.046.002a1.117 1.117 0 011.077 1.122c0 .619-.505 1.124-1.125 1.124z"}})])
          )
        }
      }
    