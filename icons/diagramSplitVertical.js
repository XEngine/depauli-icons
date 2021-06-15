
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V9.738A5.258 5.258 0 006 4.5H2.561l1.72 1.72a.746.746 0 01-.001 1.06c-.141.142-.329.22-.53.22s-.388-.078-.53-.22l-3-3a.763.763 0 01-.164-.246l-.008-.022a.749.749 0 01.173-.794L3.22.22a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L2.561 3h3.427A6.778 6.778 0 0112 6.661 6.773 6.773 0 0118 3h3.439l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.75.75 0 011.061 0l2.985 2.985c.145.127.238.332.238.546s-.093.419-.255.562L20.78 7.28a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72h-3.427c-2.898 0-5.253 2.348-5.262 5.235V23.25A.752.752 0 0112 24z"}})])
          )
        }
      }
    