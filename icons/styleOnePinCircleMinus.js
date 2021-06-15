
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
            children.concat([_c('path',{attrs:{"d":"M9.25 10.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M12.25 24a.754.754 0 01-.7-.481l-1.656-4.306C5.598 18.141 2.501 14.195 2.5 9.754 2.499 4.378 6.872.003 12.248.002c5.377 0 9.751 4.373 9.752 9.748.001 4.443-3.096 8.391-7.394 9.463l-1.656 4.306a.755.755 0 01-.7.481zm-.002-22.498C7.699 1.503 3.999 5.204 4 9.753a8.278 8.278 0 006.6 8.082.748.748 0 01.55.466l1.1 2.859 1.1-2.86a.75.75 0 01.55-.466c3.825-.781 6.601-4.181 6.6-8.085-.001-4.548-3.702-8.248-8.25-8.248l-.002-.375v.376z"}})])
          )
        }
      }
    