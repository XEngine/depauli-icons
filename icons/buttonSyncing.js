
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
            children.concat([_c('path',{attrs:{"d":"M7.501 23.246A1.5 1.5 0 016 21.746v-3.008a6.755 6.755 0 01-6-6.708 6.758 6.758 0 016.75-6.75.75.75 0 010 1.5 5.256 5.256 0 00-5.25 5.25 5.256 5.256 0 005.25 5.25h6.75a.75.75 0 01.46 1.341L8.422 22.93a1.485 1.485 0 01-.921.316zm-.001-1.5l3.814-2.967H7.5v2.967zM17.25 18.779a.75.75 0 010-1.5 5.256 5.256 0 005.25-5.25 5.256 5.256 0 00-5.25-5.25H10.5a.75.75 0 01-.46-1.342l5.54-4.308c.261-.203.588-.316.919-.316A1.503 1.503 0 0118 2.313v3.008c3.392.376 6 3.257 6 6.709a6.757 6.757 0 01-6.75 6.749zm-.75-13.5V2.314l-3.814 2.965H16.5z"}})])
          )
        }
      }
    