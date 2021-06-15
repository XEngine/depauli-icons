
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM4.5 16.5a.75.75 0 010-1.5H6a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6A2.252 2.252 0 016 16.5H4.5zM10.5 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5S12.077 9 11.25 9v3zM18 16.5a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 0118 7.5h1.5a.75.75 0 010 1.5H18a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-.75a.75.75 0 010-1.5h.75a.75.75 0 01.75.75v1.5A2.252 2.252 0 0118 16.5z"}})])
          )
        }
      }
    