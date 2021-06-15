
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
            children.concat([_c('path',{attrs:{"d":"M3.75 19.998a.75.75 0 010-1.5H6v-13.5H3c-.401 0-.779.157-1.062.44S1.5 6.099 1.5 6.499a.75.75 0 01-1.5.002 2.978 2.978 0 01.877-2.122 2.982 2.982 0 012.12-.881H10.5a.75.75 0 010 1.5h-3v13.5h2.25a.75.75 0 010 1.5h-6zM14.25 19.998a.75.75 0 010-1.5h2.25v-13.5h-3a.75.75 0 010-1.5H21c1.654 0 3 1.346 3 3a.751.751 0 01-1.5.002c0-.828-.673-1.502-1.5-1.502h-3v13.5h2.25a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    