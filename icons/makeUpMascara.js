
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
            children.concat([_c('path',{attrs:{"d":"M4.75 24A2.754 2.754 0 012 21.25v-5.5a.75.75 0 01.75-.75H5V9.75H3.5a.75.75 0 010-1.5H5v-1.5H3.5a.75.75 0 010-1.5H5v-1.5H3.5a.75.75 0 010-1.5H5V.75a.75.75 0 011.5 0v1.5H8a.75.75 0 010 1.5H6.5v1.5H8a.75.75 0 010 1.5H6.5v1.5H8a.75.75 0 010 1.5H6.5V15h2.25a.75.75 0 01.75.75v5.5A2.754 2.754 0 016.75 24h-2zM3.5 21.25c0 .689.561 1.25 1.25 1.25h2c.689 0 1.25-.561 1.25-1.25V16.5H3.5v4.75zM17.75 24A3.754 3.754 0 0114 20.25V3.75a.75.75 0 01.75-.75h.75V.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V3h.75a.75.75 0 01.75.75v16.5A3.754 3.754 0 0117.75 24zm-2.25-3.75c0 1.241 1.009 2.25 2.25 2.25S20 21.491 20 20.25V4.5h-.75a.75.75 0 01-.75-.75V1.5H17v2.25a.75.75 0 01-.75.75h-.75v15.75z"}})])
          )
        }
      }
    