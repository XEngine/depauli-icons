
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
            children.concat([_c('path',{attrs:{"d":"M5.999 17.249a.75.75 0 010-1.5h.75v-4.5h-1.5v.75a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-.75h-1.5v4.5h.75a.75.75 0 010 1.5h-3zM14.249 15.749a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5h-5.25zM14.249 11.249a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5h-5.25zM4.499 20.249a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15z"}}),_c('path',{attrs:{"d":"M2.998 23.999A3.003 3.003 0 01-.001 21V3c0-.801.311-1.554.878-2.121a2.983 2.983 0 012.121-.88h14.379c.602 0 1.167.234 1.592.66L23.34 5.03c.419.419.66.999.66 1.591V21a3.003 3.003 0 01-2.999 2.999H2.998zM3 1.499c-.402 0-.779.156-1.062.44A1.49 1.49 0 001.499 3v18c0 .826.673 1.499 1.5 1.499H21c.826 0 1.499-.673 1.499-1.5v-13.5h-3.75a2.252 2.252 0 01-2.25-2.25v-3.75H3zm14.999 3.75c0 .414.336.75.75.75h3.438l-4.188-4.188v3.438z"}})])
          )
        }
      }
    