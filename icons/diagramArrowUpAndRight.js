
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
            children.concat([_c('path',{attrs:{"d":"M9 24.009a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v2.08l4.871-4.33-4.871-4.33v2.08a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v-5.25a.75.75 0 01.75-.75h2.08L6.75 1.888 2.42 6.759H4.5a.75.75 0 01.75.75v15.75a.75.75 0 01-1.5 0v-15h-3A.75.75 0 01.19 7.01l6-6.75c.139-.156.343-.246.56-.246s.422.09.561.246l6 6.75a.751.751 0 01-.56 1.249h-3v3.75h6v-3A.75.75 0 0117 8.449l6.749 6a.749.749 0 01-.001 1.121l-6.75 6a.745.745 0 01-.806.124.75.75 0 01-.442-.684v-3h-6v5.25a.75.75 0 01-.75.749z"}})])
          )
        }
      }
    