
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-2.999-3a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l1.72 1.72V9h-9A2.252 2.252 0 010 6.75v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6A2.252 2.252 0 0121.75 9h-9v12.439l1.72-1.72a.744.744 0 011.06 0 .749.749 0 010 1.06l-3 3a.763.763 0 01-.246.164l-.027.01A.725.725 0 0112 24z"}})])
          )
        }
      }
    