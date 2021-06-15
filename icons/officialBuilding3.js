
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
            children.concat([_c('path',{attrs:{"d":"M1.5 23.912a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 20.912a.75.75 0 010-1.5h.75v-1.5c0-.827.673-1.5 1.5-1.5v-7.5c-.827 0-1.5-.673-1.5-1.5v-2.25a.741.741 0 01.1-.371l.018-.031a.727.727 0 01.254-.243l.039-.024L11.33.159a1.51 1.51 0 011.339 0l8.666 4.332a.773.773 0 01.32.308c.02.036.04.08.056.127l.016.053a.719.719 0 01.024.183v2.25c0 .827-.673 1.5-1.5 1.5v7.5c.827 0 1.5.673 1.5 1.5v1.5h.75a.75.75 0 010 1.5H1.5zm18.75-1.5v-1.5H3.75v1.5h16.5zm-1.5-3v-7.5h-1.5v7.5h1.5zm-3 0v-7.5h-1.5v7.5h1.5zm-3 0v-7.5h-1.5v7.5h1.5zm-3 0v-7.5h-1.5v7.5h1.5zm-3 0v-7.5h-1.5v7.5h1.5zm-3-9h16.5v-1.5H3.75v1.5zm14.073-3L12 1.501 6.177 4.412h11.646z"}})])
          )
        }
      }
    