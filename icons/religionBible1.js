
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
            children.concat([_c('path',{attrs:{"d":"M5.513 24c-1.654 0-3-1.346-3-3V3.75A3.754 3.754 0 016.263 0h15a.75.75 0 01.75.75v18a.75.75 0 01-.75.75h-.75v3h.75a.75.75 0 010 1.5H5.513zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h13.5v-3h-13.5zm.75-18a2.252 2.252 0 00-2.25 2.25v14.651a2.973 2.973 0 011.5-.401h15V1.5H6.263z"}}),_c('path',{attrs:{"d":"M12.263 15a.75.75 0 01-.75-.75V9h-2.25a.75.75 0 010-1.5h2.25V5.25a.75.75 0 011.5 0V7.5h2.25a.75.75 0 010 1.5h-2.25v5.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    