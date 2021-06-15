
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M15 19.5c-.827 0-1.5-.673-1.5-1.5v-3h-3v3c0 .827-.673 1.5-1.5 1.5H6c-.827 0-1.5-.673-1.5-1.5V6c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3h3V6c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-3zm-.75-6a.75.75 0 01.75.75V18h3V6h-3v3.75a.75.75 0 01-.75.75h-4.5A.75.75 0 019 9.75V6H6v12h3v-3.75a.75.75 0 01.75-.75h4.5z"}})])
          )
        }
      }
    