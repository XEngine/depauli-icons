
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
            children.concat([_c('path',{attrs:{"d":"M1.491 4.504a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.491 21.004a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM7.491 16.504a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5v3zM14.991 16.504a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    