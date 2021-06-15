
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
            children.concat([_c('path',{attrs:{"d":"M17.25 15c-.827 0-1.5-.673-1.5-1.5v-6h-1.5c-.827 0-1.5-.673-1.5-1.5V4.5c0-.827.673-1.5 1.5-1.5h1.5V1.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5V3h1.5c.827 0 1.5.673 1.5 1.5V6c0 .827-.673 1.5-1.5 1.5h-1.5v6c0 .827-.673 1.5-1.5 1.5h-1.5zm-3-9h1.5c.827 0 1.5.673 1.5 1.5v6h1.5v-6c0-.827.673-1.5 1.5-1.5h1.5V4.5h-1.5c-.827 0-1.5-.673-1.5-1.5V1.5h-1.5V3c0 .827-.673 1.5-1.5 1.5h-1.5V6zM1.5 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15h4.5c1.8 0 3.324 1.268 3.675 3H13.5a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H2.25v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6.75a.75.75 0 010-1.5h2.118a2.262 2.262 0 00-2.118-1.5h-4.5V21h13.371z"}})])
          )
        }
      }
    