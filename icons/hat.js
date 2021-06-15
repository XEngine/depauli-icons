
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
            children.concat([_c('path',{attrs:{"d":"M.75 20.013a.75.75 0 010-1.5h3.821L5.889 5.339a1.503 1.503 0 012.237-1.153L12 6.4l3.875-2.214a1.49 1.49 0 01.743-.197c.775 0 1.417.581 1.493 1.351l1.318 13.175h3.821a.75.75 0 010 1.5H.75zm17.171-1.5l-.3-3H6.379l-.3 3h11.842zm-.45-4.5l-.853-8.525-4.247 2.427a.75.75 0 01-.743-.001L7.381 5.487l-.852 8.526h10.942z"}})])
          )
        }
      }
    