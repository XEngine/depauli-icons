
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
            children.concat([_c('path',{attrs:{"d":"M3 23.25c-1.654 0-3-1.346-3-3V3.75c0-1.654 1.346-3 3-3h15.75A2.252 2.252 0 0121 3v1.629a2.26 2.26 0 011.5 2.121v3.129A2.258 2.258 0 0124 12v4.5c0 .96-.615 1.808-1.5 2.121V21a2.252 2.252 0 01-2.25 2.25H3zm0-21c-.827 0-1.5.673-1.5 1.5v16.5c0 .827.673 1.5 1.5 1.5h17.25A.75.75 0 0021 21v-2.25h-3a4.505 4.505 0 01-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5h3v-3a.75.75 0 00-.75-.75H5.625a2.496 2.496 0 01-2.268-1.278.75.75 0 011.308-.734.991.991 0 00.874.514l.05-.001L19.5 4.5V3a.75.75 0 00-.75-.75H3zm15 9c-1.654 0-3 1.346-3 3s1.346 3 3 3h3.75a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H18z"}}),_c('circle',{attrs:{"cx":"18","cy":"14.25","r":"1.125"}})])
          )
        }
      }
    