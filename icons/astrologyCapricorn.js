
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
            children.concat([_c('path',{attrs:{"d":"M20.827 23.5a3.2 3.2 0 01-3.196-3.196v-1.695H.773a.75.75 0 010-1.5h16.858V2.762a20.29 20.29 0 00-6.875 9.826 1.25 1.25 0 01-1.179.855 1.239 1.239 0 01-1.177-.849A21.032 21.032 0 00.349 1.846.75.75 0 011.197.609a22.554 22.554 0 018.378 10.794 21.744 21.744 0 017.121-9.814 1.5 1.5 0 012.436 1.172v14.347h1.678a3.202 3.202 0 013.214 3.195 3.202 3.202 0 01-3.197 3.197zm-.016-4.891a1.7 1.7 0 00-1.68 1.695c0 .935.761 1.696 1.696 1.696s1.696-.761 1.696-1.696a1.7 1.7 0 00-1.675-1.696l-.021.001-.019-.375.003.375z"}})])
          )
        }
      }
    