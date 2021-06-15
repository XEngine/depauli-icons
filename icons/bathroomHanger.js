
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24a.75.75 0 01-.75-.75V16.5H3a2.252 2.252 0 01-2.25-2.25c0-5.262 6.02-7.931 10.5-8.224v-.121A3.018 3.018 0 019.001 3c0-1.654 1.346-3 3-3s3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.499 1.5c.413 0 .75.337.75.75v.776c4.48.293 10.5 2.962 10.5 8.224A2.252 2.252 0 0121 16.5h-.75v6.75a.75.75 0 01-.75.75h-15zm14.25-1.5v-8.25a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v8.25h13.5zM21 15a.75.75 0 00.75-.75c0-2.569-1.883-4.173-3.463-5.066C16.087 7.941 13.526 7.5 12 7.5c-1.5 0-4.026.426-6.205 1.628-1.618.891-3.545 2.503-3.545 5.122 0 .414.336.75.75.75h.75v-.75A2.252 2.252 0 016 12h12a2.252 2.252 0 012.25 2.25L21 15z"}})])
          )
        }
      }
    