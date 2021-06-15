
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
            children.concat([_c('path',{attrs:{"d":"M10.592 23.999c-.627 0-1.25-.087-1.854-.26l-3.636-1.037A5.247 5.247 0 003.66 22.5H.75a.75.75 0 01-.75-.75v-10.5a.75.75 0 01.75-.75h1.5A6.758 6.758 0 009 3.75V3c0-1.654 1.346-3 3-3s3 1.346 3 3v3.75c0 .414.336.75.75.75h3c1.4 0 2.718.547 3.71 1.54a5.211 5.211 0 011.513 4.235l-.465 4.648a6.73 6.73 0 01-6.716 6.075h-6.2zM3.66 21c.627 0 1.25.087 1.854.26l3.635 1.037c.47.134.955.202 1.442.202h6.2a5.235 5.235 0 005.224-4.725l.465-4.648A3.754 3.754 0 0018.75 9h-3a2.253 2.253 0 01-2.25-2.25V3c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v.75C10.5 8.299 6.799 12 2.25 12H1.5v9h2.16z"}})])
          )
        }
      }
    