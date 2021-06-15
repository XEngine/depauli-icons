
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
            children.concat([_c('path',{attrs:{"d":"M13.5 23.25a.75.75 0 01-.75-.75c-.026-.057-.292-.25-.75-.25s-.724.193-.753.27c.003.394-.334.73-.747.73s-.75-.336-.75-.75c0-.77.602-1.418 1.5-1.655V18.75H1.5a.75.75 0 010-1.5h.75v-12c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h19.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5v12h.75a.75.75 0 010 1.5h-9.75v2.095c.898.237 1.5.885 1.5 1.655a.75.75 0 01-.75.75zm6.75-6v-12H3.75v12h16.5zm-18-13.5h19.5v-1.5H2.25v1.5z"}}),_c('path',{attrs:{"d":"M7.5 15.75a.75.75 0 010-1.5h.75V12a.75.75 0 011.5 0v2.25h1.5v-4.5a.75.75 0 011.5 0v4.5h1.5V7.5a.75.75 0 011.5 0v6.75h.75a.75.75 0 010 1.5h-9z"}})])
          )
        }
      }
    