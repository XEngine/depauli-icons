
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
            children.concat([_c('path',{attrs:{"d":"M12 15a5.256 5.256 0 01-5.25-5.25A5.256 5.256 0 0112 4.5a5.256 5.256 0 015.25 5.25A5.256 5.256 0 0112 15zm0-9C9.932 6 8.25 7.682 8.25 9.75S9.932 13.5 12 13.5s3.75-1.682 3.75-3.75S14.068 6 12 6z"}}),_c('path',{attrs:{"d":"M12 24a.754.754 0 01-.7-.481l-1.656-4.306c-4.296-1.072-7.393-5.017-7.394-9.459C2.249 4.378 6.622.003 11.998.002c5.377 0 9.751 4.373 9.752 9.748.001 4.443-3.096 8.391-7.394 9.463L12.7 23.519A.755.755 0 0112 24zm-.002-22.498c-4.549.001-8.249 3.702-8.248 8.251a8.278 8.278 0 006.6 8.082.748.748 0 01.55.466L12 21.16l1.1-2.86a.75.75 0 01.55-.466c3.825-.781 6.601-4.181 6.6-8.085-.001-4.547-3.702-8.247-8.25-8.247l-.002-.375v.375z"}})])
          )
        }
      }
    