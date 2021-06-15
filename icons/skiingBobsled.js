
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
            children.concat([_c('path',{attrs:{"d":"M14.249 18.5a.75.75 0 010-1.5h1.29l-.375-1.5H6.585L6.21 17h1.289a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h1.664l.375-1.5H2.249a2.24 2.24 0 01-1.966-1.157 2.239 2.239 0 01-.198-1.71.731.731 0 01.051-.13l1.103-2.194A2.268 2.268 0 013.38 8.75h9.639a.753.753 0 00.736-.603l.509-2.544A.751.751 0 0114.999 5h3.75a5.256 5.256 0 015.25 5.25 5.256 5.256 0 01-5.25 5.25h-2.04l.375 1.5h1.665a.75.75 0 010 1.5h-4.5zM1.514 13.101a.74.74 0 00.08.513.745.745 0 00.655.386h16.5a3.754 3.754 0 003.75-3.75 3.754 3.754 0 00-3.75-3.75h-3.135l-.388 1.941a2.255 2.255 0 01-2.206 1.809H3.38a.753.753 0 00-.721.544.731.731 0 01-.051.13l-1.094 2.177z"}})])
          )
        }
      }
    