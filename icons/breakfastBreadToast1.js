
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25v-11.5C0 9.785.785 9 1.75 9H3V5.905A3.018 3.018 0 01.75 3c0-1.654 1.346-3 3-3h13.5c1.654 0 3 1.346 3 3A3.018 3.018 0 0118 5.905V9h2.75c.965 0 1.75.785 1.75 1.75V18h.75a.75.75 0 010 1.5h-.75v2.75c0 .965-.785 1.75-1.75 1.75h-19zm-.25-1.75c0 .138.112.25.25.25h19a.25.25 0 00.25-.25V21H1.5v1.25zM21 19.5v-8.75a.25.25 0 00-.25-.25h-19a.25.25 0 00-.25.25v8.75H21zM16.5 9V5.25a.75.75 0 01.75-.75c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H3.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5a.75.75 0 01.75.75V9h12z"}}),_c('circle',{attrs:{"cx":"18","cy":"16.5","r":"1.125"}})])
          )
        }
      }
    