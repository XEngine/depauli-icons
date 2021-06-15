
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 01-.75-.75V10.5a10.47 10.47 0 014.788-8.803.696.696 0 01.15-.097A10.456 10.456 0 0112 0c1.969 0 3.892.553 5.562 1.6a.758.758 0 01.151.097A10.474 10.474 0 0122.5 10.5v12.75a.75.75 0 01-.75.75H2.25zM21 22.5v-5.25h-4.5v5.25H21zm-6 0v-8.25c0-1.654-1.346-3-3-3s-3 1.346-3 3v8.25h6zm-7.5 0v-5.25H3v5.25h4.5zM21 15.75v-4.5h-5.652a4.497 4.497 0 011.152 3v1.5H21zm-13.5 0v-1.5c0-1.115.419-2.182 1.152-3H3v4.5h4.5zm13.467-6a9.065 9.065 0 00-3.522-6.409L13.366 9.75h7.601zm-10.333 0L6.555 3.341A9.063 9.063 0 003.033 9.75h7.601zM12 9.103l4.181-6.569A8.99 8.99 0 0012 1.5a8.982 8.982 0 00-4.18 1.034L12 9.103z"}})])
          )
        }
      }
    