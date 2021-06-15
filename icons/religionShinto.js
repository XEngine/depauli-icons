
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
            children.concat([_c('path',{attrs:{"d":"M18.787 24a.747.747 0 01-.699-.477 36.796 36.796 0 01-2.175-8.434H8.295a36.796 36.796 0 01-2.175 8.434.747.747 0 01-.699.477H1.709a.752.752 0 01-.651-1.123 24.48 24.48 0 002.848-7.788h-.712c-1.232 0-2.235-1.003-2.235-2.235s1.003-2.235 2.235-2.235h1.122a24.58 24.58 0 00-.28-3.7A5.947 5.947 0 01.959 1.72 1.709 1.709 0 011.435.53C1.752.198 2.179.01 2.638 0h.034c.447 0 .869.169 1.19.476a4.37 4.37 0 003.045 1.233H17.3A4.365 4.365 0 0020.345.478 1.718 1.718 0 0123.25 1.72a5.946 5.946 0 01-3.079 5.199 24.45 24.45 0 00-.279 3.7h1.123c1.232 0 2.235 1.003 2.235 2.235s-1.003 2.235-2.235 2.235h-.712a24.474 24.474 0 002.848 7.787.755.755 0 01-.001.75.755.755 0 01-.65.374h-3.713zm2.454-1.5a26.078 26.078 0 01-2.549-7.943.744.744 0 01-.033-.218v-.01a26.289 26.289 0 01-.257-2.961l.001-.029c-.035-1.27.023-2.55.174-3.814a5.931 5.931 0 01-1.275.142h-.138a35.522 35.522 0 002.139 14.832h1.938zm-16.336 0a35.52 35.52 0 002.14-14.832h-.136a5.959 5.959 0 01-1.278-.142c.151 1.263.21 2.541.175 3.81l.002.033c0 .021-.002.041-.004.061-.03.96-.115 1.934-.253 2.897v.011a.72.72 0 01-.034.219 26.07 26.07 0 01-2.548 7.942h1.936zm16.11-8.911a.736.736 0 000-1.47h-1.079c.03.496.074.988.133 1.47h.946zm-5.274 0a38.754 38.754 0 01-.109-1.47H8.576c-.027.492-.063.984-.109 1.47h7.274zm-12.547-1.47a.736.736 0 000 1.47h.946c.058-.482.103-.974.133-1.47H3.194zm12.385-1.5c-.013-.975.015-1.964.082-2.951h-2.807v2.951h2.725zm-4.225 0V7.668H8.547c.067.988.094 1.977.082 2.951h2.725zM17.3 6.168a4.472 4.472 0 004.45-4.452.213.213 0 00-.063-.152.215.215 0 00-.303-.004A5.852 5.852 0 0117.3 3.209H6.906a5.857 5.857 0 01-4.084-1.652.217.217 0 00-.363.16 4.472 4.472 0 004.452 4.452h.752l.011-.001a.572.572 0 01.138.001h4.229a.454.454 0 01.063-.004c.022 0 .043.002.064.004h4.233a.893.893 0 01.132-.002l.013.001h.754z"}})])
          )
        }
      }
    