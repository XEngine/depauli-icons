
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
            children.concat([_c('path',{attrs:{"d":"M12.001 20.25a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-2.999-3a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72V10.5a.75.75 0 011.5 0v7.189l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.763.763 0 01-.246.164l-.026.01a.747.747 0 01-.258.046z"}}),_c('path',{attrs:{"d":"M2.251 24a2.252 2.252 0 01-2.25-2.25V8.25c0-.376.096-.749.277-1.079L2.66 1.357A2.263 2.263 0 014.725 0h14.551c.888 0 1.696.525 2.057 1.336l2.331 5.732c.221.357.337.764.337 1.182v13.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V8.25a.75.75 0 00-.75-.75h-19.5zM21.61 6l-1.657-4.077a.752.752 0 00-.677-.423h-6.525V6h8.859zM11.251 6V1.5H4.725a.75.75 0 00-.685.445L2.379 6h8.872z"}})])
          )
        }
      }
    