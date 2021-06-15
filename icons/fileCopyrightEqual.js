
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24C3.701 24 0 20.299 0 15.75S3.701 7.5 8.25 7.5s8.25 3.701 8.25 8.25S12.799 24 8.25 24zm0-15C4.528 9 1.5 12.028 1.5 15.75s3.028 6.75 6.75 6.75S15 19.472 15 15.75 11.972 9 8.25 9z"}}),_c('path',{attrs:{"d":"M5.25 15a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM5.25 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M17.25 24a.75.75 0 010-1.5h4.5a.75.75 0 00.75-.75V9h-5.25A2.252 2.252 0 0115 6.75V1.5H5.25a.75.75 0 00-.75.75v3a.75.75 0 01-1.5 0v-3A2.252 2.252 0 015.25 0h10.629c.601 0 1.165.234 1.59.658l5.872 5.872c.425.425.659.99.659 1.591V21.75A2.252 2.252 0 0121.75 24h-4.5zM16.5 6.75c0 .414.336.75.75.75h4.939L16.5 1.811V6.75z"}})])
          )
        }
      }
    