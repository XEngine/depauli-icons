
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
            children.concat([_c('path',{attrs:{"d":"M1.5 23.5C.673 23.5 0 22.827 0 22v-3.75a3.754 3.754 0 013.75-3.75h.75v-6H3.25c-.965 0-1.75-.785-1.75-1.75v-4C1.5 1.785 2.285 1 3.25 1h17.5c.965 0 1.75.785 1.75 1.75v4c0 .965-.785 1.75-1.75 1.75H19.5v6h.75A3.754 3.754 0 0124 18.25V22c0 .827-.673 1.5-1.5 1.5h-21zm21-1.5v-3.75A2.252 2.252 0 0020.25 16h-.75v6h3zM18 22V11.736a9.608 9.608 0 01-5.25 2.032v.781a.75.75 0 01-1.5 0v-.78A9.592 9.592 0 016 11.733V22h2.25v-2.25c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5V22H18zm-3.75 0v-2.25h-4.5V22h4.5zm-10.5-6a2.252 2.252 0 00-2.25 2.25V22h3v-6h-.75zM12 10.799a.75.75 0 01.75.75v.714A8.196 8.196 0 0018 9.706V8.5H6v1.205a8.136 8.136 0 005.25 2.558v-.714a.75.75 0 01.75-.75zM20.75 7a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H18V7h2.75zM16.5 7V2.5h-9V7h9zM3.25 2.5a.25.25 0 00-.25.25v4c0 .138.112.25.25.25H6V2.5H3.25z"}})])
          )
        }
      }
    