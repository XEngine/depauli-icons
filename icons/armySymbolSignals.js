
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20A2.252 2.252 0 010 17.75v-12A2.252 2.252 0 012.25 3.5h19.5A2.252 2.252 0 0124 5.75v12A2.252 2.252 0 0121.75 20H2.25zM1.508 5.644a.723.723 0 00-.008.106v12c0 .414.336.75.75.75h18.782L12.75 9.865v3.77c0 .406-.168.8-.461 1.082-.281.27-.648.418-1.034.418h-.038a1.49 1.49 0 01-1.05-.461l-8.659-9.03zm11.243 2.721c.406 0 .8.168 1.081.461l8.661 9.029a.713.713 0 00.008-.106v-12A.752.752 0 0021.75 5H2.968l8.282 8.635v-3.77c0-.827.673-1.5 1.501-1.5z"}})])
          )
        }
      }
    