
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5H3v-21H.75a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H18v18h.728a3.778 3.778 0 003.772-3.772v-1.019a3.307 3.307 0 00-1.249-2.597 4.845 4.845 0 01-1.563-5.296l.6-1.8a.747.747 0 01.95-.474.75.75 0 01.473.948l-.6 1.8a3.34 3.34 0 001.077 3.65A4.8 4.8 0 0124 14.709v1.019A5.278 5.278 0 0118.728 21H18v1.5h2.25a.75.75 0 010 1.5H.75zm15.75-1.5v-3h-12v3h12zm0-4.5v-3h-12v3h12zm0-4.5v-3h-12v3h12zm0-4.5V6h-12v3h12zm0-4.5v-3h-12v3h12z"}})])
          )
        }
      }
    