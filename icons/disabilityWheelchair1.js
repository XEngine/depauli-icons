
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75v-4.5c0-.96-.621-1.805-1.5-2.118v.618c0 3.722-3.028 6.75-6.75 6.75S3 20.972 3 17.25a6.756 6.756 0 016-6.708V7.423A3.743 3.743 0 016 3.75C6 1.682 7.682 0 9.75 0s3.75 1.682 3.75 3.75a3.743 3.743 0 01-3 3.673V10.5h5.25a.75.75 0 010 1.5H10.5v2.25c0 .414.336.75.75.75h4.5a3.754 3.754 0 013.75 3.75v3.75h.75a.75.75 0 010 1.5h-1.5zM9 12.055a5.263 5.263 0 00-4.5 5.195 5.256 5.256 0 005.25 5.25A5.256 5.256 0 0015 17.25v-.75h-3.75A2.252 2.252 0 019 14.25v-2.195zM9.75 1.5C8.509 1.5 7.5 2.509 7.5 3.75S8.509 6 9.75 6 12 4.991 12 3.75 10.991 1.5 9.75 1.5z"}})])
          )
        }
      }
    