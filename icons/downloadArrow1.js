
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
            children.concat([_c('path',{attrs:{"d":"M12.001 21a.743.743 0 01-.53-.22l-5.25-5.25a.749.749 0 01.53-1.28h2.25v-4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5h2.25a.75.75 0 01.53 1.28l-5.25 5.25a.743.743 0 01-.53.22zm0-1.811l3.439-3.439h-1.189a.75.75 0 01-.75-.75v-4.5h-3V15a.75.75 0 01-.75.75H8.562l3.439 3.439z"}}),_c('path',{attrs:{"d":"M2.251 24a2.252 2.252 0 01-2.25-2.25V8.25c0-.376.096-.749.277-1.079L2.66 1.357A2.263 2.263 0 014.725 0h14.551c.888 0 1.696.525 2.057 1.336l2.331 5.732c.221.357.337.764.337 1.182v13.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V8.25a.75.75 0 00-.75-.75h-19.5zM21.61 6l-1.657-4.077a.752.752 0 00-.677-.423h-6.525V6h8.859zM11.251 6V1.5H4.725a.75.75 0 00-.685.445L2.379 6h8.872z"}})])
          )
        }
      }
    