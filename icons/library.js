
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24.001a2.252 2.252 0 01-2.25-2.25v-19.5A2.252 2.252 0 013.75.001h16.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25H3.75zm16.5-1.5a.75.75 0 00.75-.75v-5.25h-1.5v6h.75zm-2.25 0v-6h-1.5v6H18zm-3 0v-7.5h-1.5v7.5H15zm-3 0v-7.5h-1.5v7.5H12zm-4.5-.25c0 .138.112.25.25.25H9v-6H7.5v5.75zm-4.5-.5c0 .414.336.75.75.75h2.268a1.731 1.731 0 01-.018-.25v-6c0-.689.561-1.25 1.25-1.25H9v-.25c0-.689.561-1.25 1.25-1.25h5c.689 0 1.25.561 1.25 1.25v.25H21v-3H3v9.75zm18-11.25v-8.25a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v1.5h1.5a.75.75 0 01.75-.75h5.5c.457 0 .858.247 1.076.614.125-.097.267-.176.422-.232l1.34-.481a1.495 1.495 0 011.148.057c.359.17.631.468.767.841l1.962 5.503c.145.41.101.841-.085 1.199H21zm-7.811 0L12 7.166v3.335h1.189zm-2.689 0v-6H9v6h1.5zm-3 0v-6H6v6h1.5zm-3 0v-5.25H3v5.25h1.5zm8.253-5.705l1.954 5.495 1.341-.482-1.955-5.495-1.34.482z"}})])
          )
        }
      }
    