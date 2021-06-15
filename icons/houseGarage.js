
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.575a.75.75 0 010-1.5h.75v-12h-.006c-.827 0-1.5-.673-1.5-1.5v-1.05A1.5 1.5 0 01.793 6.2L11.291.601a1.502 1.502 0 011.41 0l10.501 5.601c.49.258.796.764.798 1.32l-.006 1.057a1.5 1.5 0 01-1.494 1.496v12h.75a.75.75 0 010 1.5H.75zm20.25-1.5v-12H3v12h1.5v-9.75a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75v9.75H21zm-3 0v-9H6v9h12zM1.497 7.525l-.003 1.05h21l.006-1.052-10.503-5.598-10.5 5.6z"}}),_c('path',{attrs:{"d":"M8.25 17.575a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.25 20.575a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    