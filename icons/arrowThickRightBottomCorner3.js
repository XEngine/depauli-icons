
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
            children.concat([_c('path',{attrs:{"d":"M10.063 22.161a2.237 2.237 0 01-1.591-.658l-2.781-2.781a1.49 1.49 0 01-.439-1.061c0-.401.157-.777.44-1.061a1.492 1.492 0 011.058-.439h4.759l-8.228-8.23a1.504 1.504 0 010-2.119L5.403 3.69a1.49 1.49 0 011.061-.439c.401 0 .777.156 1.06.438l8.228 8.229V7.161c0-.401.156-.778.44-1.061a1.49 1.49 0 011.06-.438c.401 0 .777.156 1.06.439l2.781 2.78c.425.425.659.991.659 1.592v10.189c0 .827-.673 1.5-1.5 1.5H10.063zm-3.311-4.5l2.781 2.781a.744.744 0 00.53.219h10.19V10.472a.758.758 0 00-.219-.531l-2.781-2.78v6.568a.75.75 0 01-1.281.53L6.464 4.751 4.343 6.872l9.508 9.509a.749.749 0 01-.53 1.28H6.752z"}})])
          )
        }
      }
    