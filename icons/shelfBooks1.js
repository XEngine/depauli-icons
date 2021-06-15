
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75c0-.96.615-1.808 1.5-2.121v-7.757C.615 11.558 0 10.71 0 9.75s.615-1.808 1.5-2.121V.75a.75.75 0 011.5 0V7.5h9V2.75c0-.689.561-1.25 1.25-1.25h5c.689 0 1.25.561 1.25 1.25V7.5H21V.75a.75.75 0 011.5 0v6.879c.885.313 1.5 1.161 1.5 2.121s-.615 1.808-1.5 2.121v7.757a2.26 2.26 0 011.5 2.121 2.252 2.252 0 01-2.25 2.25H2.25zm0-3a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM21 19.5V12H3v7.5h1.5v-4.75c0-.689.561-1.25 1.25-1.25h8c.689 0 1.25.561 1.25 1.25v4.75h6zm-7.5 0V15H12v4.5h1.5zm-3 0V15H9v4.5h1.5zm-3 0V15H6v4.5h1.5zM2.25 9a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM18 7.5V3h-1.5v4.5H18zm-3 0V3h-1.5v4.5H15z"}})])
          )
        }
      }
    