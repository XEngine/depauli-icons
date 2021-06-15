
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.78 0H2.22a.75.75 0 00-.75.75v22.5a.75.75 0 00.75.75h5.87a.75.75 0 00.75-.75v-5.12h12.94a.75.75 0 00.75-.75V.75a.75.75 0 00-.75-.75zM21 16.63H8.09a.75.75 0 00-.75.75v5.12H3v-21h18z"}}),_c('path',{attrs:{"d":"M8.09 12.26h7.83a.75.75 0 00.75-.75V6.62a.75.75 0 00-.75-.75H8.09a.75.75 0 00-.75.75v4.89a.75.75 0 00.75.75zm.75-4.89h6.33v3.39H8.84z"}})])
          )
        }
      }
    