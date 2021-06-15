
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
            children.concat([_c('path',{attrs:{"d":"M8.25 17A2.252 2.252 0 016 14.75v-4.5A2.252 2.252 0 018.25 8h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v2.25h2.25a.75.75 0 010 1.5H7.5v.75c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M8.25 20C3.701 20 0 16.299 0 11.75S3.701 3.5 8.25 3.5c2.246 0 4.343.889 5.913 2.505l9.442 5.084a.75.75 0 010 1.321l-9.442 5.084A8.173 8.173 0 018.25 20zm0-15C4.528 5 1.5 8.028 1.5 11.75s3.028 6.75 6.75 6.75S15 15.472 15 11.75 11.972 5 8.25 5zm7.639 3.638a8.234 8.234 0 010 6.224l5.779-3.112-5.779-3.112z"}})])
          )
        }
      }
    