
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h15c.59 0 1.147.227 1.571.639l2.996 2.879c.435.424.683 1.012.683 1.615V21.75A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.133a.754.754 0 00-.227-.537l-2.996-2.879A.747.747 0 0018 1.5H3z"}}),_c('path',{attrs:{"d":"M5.25 19.5a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM10.5 19.5a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H10.5zM5.25 16.5a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM5.25 13.5a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM5.25 10.5a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM10.5 16.5a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H10.5zM15.75 19.5a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-2.25zM15.75 16.5a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-2.25zM15.75 13.5a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    