
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
            children.concat([_c('path',{attrs:{"d":"M.75 24.001a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v.75H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6a.75.75 0 010-1.5h2.118A2.262 2.262 0 006 16.501H1.5v4.5h13.371zM15 15c-.827 0-1.5-.673-1.5-1.5v-3h-3C9.673 10.5 9 9.827 9 9V6c0-.827.673-1.5 1.5-1.5h3v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3v3c0 .827-.673 1.5-1.5 1.5h-3zm-4.5-6h3.75a.75.75 0 01.75.75v3.75h3V9.75a.75.75 0 01.75-.75h3.75V6h-3.75a.75.75 0 01-.75-.75V1.5h-3v3.75a.75.75 0 01-.75.75H10.5v3z"}})])
          )
        }
      }
    