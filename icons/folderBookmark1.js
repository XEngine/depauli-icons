
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.5A2.252 2.252 0 010 20.25V3.75A2.252 2.252 0 012.25 1.5H7.5a2.26 2.26 0 011.8.9l1.575 2.1H13.5c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5h.75A2.252 2.252 0 0124 6.75v13.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H21v7.5a.746.746 0 01-.75.75.753.753 0 01-.45-.15l-2.55-1.913L14.7 14.1a.759.759 0 01-.786.071.747.747 0 01-.414-.671V6h-3a.753.753 0 01-.6-.3L8.1 3.3a.753.753 0 00-.6-.3H2.25zM15 12l1.8-1.35a.753.753 0 01.9 0L19.5 12V4.5H15V12z"}})])
          )
        }
      }
    