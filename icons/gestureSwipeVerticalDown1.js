
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
            children.concat([_c('path',{attrs:{"d":"M9.75 8.998a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M.75 11.998a.75.75 0 010-1.5h9.75c1.654 0 3-1.346 3-3s-1.346-3-3-3H.75a.75.75 0 010-1.5h9.75c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5H.75zM14.25 23.998a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v5.25h5.25a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M17.25 20.998a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v5.25h.389a19.462 19.462 0 00.584-18.417.751.751 0 011.344-.666 21.004 21.004 0 01-.214 19.083h3.147a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    