
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
            children.concat([_c('path',{attrs:{"d":"M3 23.998a2.252 2.252 0 01-2.25-2.25v-19.5A2.252 2.252 0 013-.002h15c.59 0 1.147.227 1.571.639l2.996 2.879c.435.424.683 1.012.683 1.615v16.617a2.252 2.252 0 01-2.25 2.25H3zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.131a.754.754 0 00-.227-.537l-2.996-2.879A.747.747 0 0018 1.498H3z"}}),_c('path',{attrs:{"d":"M5.749 20.248c-.689 0-1.25-.561-1.25-1.25v-11c0-.689.561-1.25 1.25-1.25h12.5c.689 0 1.25.561 1.25 1.25v11c0 .689-.561 1.25-1.25 1.25h-12.5zm12.25-1.5v-3h-7.5v3h7.5zm-9 0v-3h-3v3h3zm9-4.5v-3h-7.5v3h7.5zm-9 0v-3h-3v3h3zm9-4.5v-1.5h-12v1.5h12z"}})])
          )
        }
      }
    