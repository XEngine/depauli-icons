
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
            children.concat([_c('path',{attrs:{"d":"M23.25 21.25a.743.743 0 01-.53-.22l-3.293-3.294A5.984 5.984 0 0115.75 19c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.989 5.989 0 01-1.263 3.676l3.293 3.294a.752.752 0 010 1.061.746.746 0 01-.53.219zM15.75 8.5a4.505 4.505 0 00-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M6 14.5c-3.308 0-6-2.692-6-6s2.692-6 6-6h12c3.309.001 6 2.692 6 6a.75.75 0 01-1.5 0A4.504 4.504 0 0018.002 4H6C3.519 4 1.5 6.019 1.5 8.5S3.519 13 6 13h1.5a.75.75 0 010 1.5H6z"}})])
          )
        }
      }
    