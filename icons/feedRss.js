
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
            children.concat([_c('path',{attrs:{"d":"M13.53 21.75a.75.75 0 001.5 0A12.8 12.8 0 002.25 9a.75.75 0 000 1.5 11.29 11.29 0 0111.28 11.25zM2 16.72v4.53a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75A5.33 5.33 0 002.75 16a.75.75 0 00-.75.72zm1.5.83a3.85 3.85 0 012.92 2.95H3.5z"}}),_c('path',{attrs:{"d":"M21 21.75a.75.75 0 001.5 0A20.27 20.27 0 002.25 1.5a.75.75 0 000 1.5A18.77 18.77 0 0121 21.75z"}})])
          )
        }
      }
    