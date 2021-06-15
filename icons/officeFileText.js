
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
            children.concat([_c('path',{attrs:{"d":"M3 23.998a2.252 2.252 0 01-2.25-2.25v-19.5A2.252 2.252 0 013-.002h15c.591 0 1.149.228 1.571.64l2.996 2.878c.435.424.683 1.012.683 1.615v16.617a2.252 2.252 0 01-2.25 2.25H3zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.131a.754.754 0 00-.227-.537l-2.996-2.878A.75.75 0 0018 1.498H3z"}}),_c('path',{attrs:{"d":"M7.5 11.998a.75.75 0 010-1.5h.75v-4.5h-1.5v.75a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-.75h-1.5v4.5h.75a.75.75 0 010 1.5h-3zM15.75 10.498a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-2.25zM15.75 5.998a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-2.25zM6 14.998a.75.75 0 010-1.5h12a.75.75 0 010 1.5H6zM6 19.498a.75.75 0 010-1.5h12a.75.75 0 010 1.5H6z"}})])
          )
        }
      }
    