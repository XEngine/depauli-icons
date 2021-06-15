
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
            children.concat([_c('path',{attrs:{"d":"M12.626 6.75c-1.861 0-3.375-1.514-3.375-3.375S10.765 0 12.626 0s3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875S13.66 1.5 12.626 1.5zM3.254 23.999a2.265 2.265 0 01-1.802-.898 2.235 2.235 0 01-.427-1.668 2.236 2.236 0 01.876-1.482l1.8-1.35a.753.753 0 00.3-.6v-3c0-.365.09-.728.26-1.05l3.16-6a2.259 2.259 0 012.003-1.203 2.23 2.23 0 011.605.688l5.835 5.995.039.043c.769.83.773 2.155.021 3.006l2.721 3.626a.742.742 0 00.6.299.747.747 0 00.67-.414l.416-.828a.748.748 0 011.007-.334.75.75 0 01.333 1.006l-.415.827a2.235 2.235 0 01-2.009 1.242c-.706 0-1.38-.336-1.802-.899l-2.85-3.797a2.232 2.232 0 01-1.94-.621c.172.357.289.743.342 1.147l.488 3.718a2.233 2.233 0 01-.447 1.663 2.23 2.23 0 01-1.761.88l-.039-.001a2.255 2.255 0 01-2.218-1.95l-.438-3.336-1.084-.561a5.297 5.297 0 01-2.096 4.051L4.601 23.55a2.229 2.229 0 01-1.347.449zM9.421 8.248a.758.758 0 00-.674.402l-3.16 6a.758.758 0 00-.086.35v3a2.26 2.26 0 01-.9 1.8l-1.8 1.35a.741.741 0 00-.291.494.745.745 0 00.742.855.744.744 0 00.448-.149L5.5 21A3.783 3.783 0 007 17.999v-1.082a.756.756 0 01.75-.751c.12 0 .239.029.345.084l2.524 1.306a.75.75 0 01.399.568l.489 3.722c.05.369.369.647.743.648h.001a.753.753 0 00.747-.847l-.488-3.719a2.249 2.249 0 00-1.2-1.71l-3.145-1.621a.753.753 0 01-.32-1.016l1.266-2.406a.75.75 0 011.201-.174l4.4 4.521a.75.75 0 001.069-1.051L9.948 8.477a.732.732 0 00-.527-.229zM12 14.887l-2.042-2.099-.433.823L12 14.887z"}}),_c('path',{attrs:{"d":"M18.251 24a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75z"}})])
          )
        }
      }
    