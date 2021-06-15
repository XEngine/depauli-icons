
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
            children.concat([_c('path',{attrs:{"d":"M1.488 4.504a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.488 21.004a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM7.488 16.504a.75.75 0 01-.75-.75v-2.25h-1.5v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25a.75.75 0 00-1.5 0v2.25h1.5zM10.488 16.504a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5v3zM19.488 16.504a.75.75 0 01-.586-.281l-1.664-2.081v1.612a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0v1.612l1.665-2.081a.753.753 0 011.054-.117.751.751 0 01.117 1.054l-2.625 3.281 2.625 3.281a.75.75 0 01-.586 1.22z"}})])
          )
        }
      }
    