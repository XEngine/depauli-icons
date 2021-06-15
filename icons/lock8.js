
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a3.754 3.754 0 01-3.75-3.75v-9A3.754 3.754 0 015.25 7.5H6V5.25A5.256 5.256 0 0111.25 0a5.256 5.256 0 015.25 5.25V7.5h.75A3.754 3.754 0 0121 11.25a.75.75 0 01-1.5 0A2.252 2.252 0 0017.25 9h-12A2.252 2.252 0 003 11.25v9a2.252 2.252 0 002.25 2.25h12a2.252 2.252 0 002.25-2.25.75.75 0 011.5 0A3.754 3.754 0 0117.25 24h-12zM15 7.5V5.25a3.754 3.754 0 00-3.75-3.75A3.754 3.754 0 007.5 5.25V7.5H15z"}}),_c('path',{attrs:{"d":"M15.75 15a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM15.75 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    