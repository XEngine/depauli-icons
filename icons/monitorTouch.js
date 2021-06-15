
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 15.75v-12A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v10.5a.75.75 0 01-1.5 0V3.75a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75V15h8.25a.75.75 0 010 1.5H1.632A2.262 2.262 0 003.75 18h6c.018 0 .056.003.073.006h.004a.3.3 0 01.076.012c.015.003.038.01.061.017a.655.655 0 01.062.02c.029.012.048.022.067.032a.887.887 0 01.068.038.922.922 0 01.155.138c.021.025.036.042.048.061a.476.476 0 01.036.06.643.643 0 01.057.129.681.681 0 01.039.206l.002.034a.552.552 0 01-.005.071.255.255 0 01-.005.052L9.885 22.5h1.365a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75v-4.209a2.243 2.243 0 00-1.88-2.219l-1.993-.332a.749.749 0 01-.627-.74v-3a.75.75 0 00-1.5 0V18a.756.756 0 01-.355.638.76.76 0 01-.73.033l-1.175-.587a.893.893 0 00-.399-.095.882.882 0 00-.454.127.88.88 0 00-.404.546.891.891 0 00.307.908l3.795 3.099a.751.751 0 01-.949 1.162l-3.789-3.094a2.39 2.39 0 01.267-3.906 2.378 2.378 0 012.298-.088l.088.044V12.75c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v2.365l1.366.228A3.737 3.737 0 0124 19.041v4.209a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    