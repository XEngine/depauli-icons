
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
            children.concat([_c('path',{attrs:{"d":"M7.75 24C6.785 24 6 23.215 6 22.25v-4.292a6.754 6.754 0 01-6-6.708V9a.75.75 0 01.75-.75h5.287a7.476 7.476 0 016.713-6.713V.75a.75.75 0 011.5 0v.787a7.476 7.476 0 016.713 6.713h2.287c.408 0 .745.332.75.74a6.741 6.741 0 01-3 5.673v7.586c0 .965-.785 1.75-1.75 1.75H7.75zm-.25-1.75c0 .138.112.25.25.25h11.5a.25.25 0 00.25-.25V15h-5.25v3h1.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h1.5v-3H7.5v7.25zm-6-11A5.263 5.263 0 006 16.445V9.75H1.5v1.5zm18 2.25V9.75h-5.25v3.75h5.25zm-6.75 0V9.75H7.5v3.75h5.25zm8.25-.765a5.182 5.182 0 001.457-2.985H21v2.985zM19.453 8.25A6.005 6.005 0 0013.5 3a6.005 6.005 0 00-5.953 5.25h11.906z"}})])
          )
        }
      }
    