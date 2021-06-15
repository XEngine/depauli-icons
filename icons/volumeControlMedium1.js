
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
            children.concat([_c('path',{attrs:{"d":"M15.067 20.962c-.05 0-.1-.002-.151-.008a9.001 9.001 0 01-7.271-5.205H3.82c-.827 0-1.5-.673-1.5-1.5v-4.5c0-.827.673-1.5 1.5-1.5h3.824a9 9 0 017.271-5.205 1.502 1.502 0 011.651 1.491v14.927a1.497 1.497 0 01-1.499 1.5zM3.82 14.25h4.321c.311 0 .585.187.699.477a7.473 7.473 0 006.229 4.736l-.002-14.926A7.472 7.472 0 008.84 9.273a.747.747 0 01-.699.477H3.82v4.5zM20.132 14.991a.752.752 0 01-.582-1.222 2.755 2.755 0 000-3.455.751.751 0 01.582-1.223c.227 0 .439.101.582.277a4.26 4.26 0 010 5.346.747.747 0 01-.582.277z"}})])
          )
        }
      }
    