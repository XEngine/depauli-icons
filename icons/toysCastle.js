
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
            children.concat([_c('path',{attrs:{"d":"M3 22.125c-.827 0-1.5-.673-1.5-1.5V8.496A2.258 2.258 0 010 6.375v-2.25a2.252 2.252 0 012.25-2.25h6a2.252 2.252 0 012.25 2.25v2.25c0 .96-.615 1.808-1.5 2.121v2.379h6V8.496a2.26 2.26 0 01-1.5-2.121v-2.25a2.252 2.252 0 012.25-2.25h6A2.252 2.252 0 0124 4.125v2.25c0 .96-.615 1.808-1.5 2.121v12.129c0 .827-.673 1.5-1.5 1.5H3zm18-1.5v-12h-4.5v6a.75.75 0 01-1.5 0v-2.25H9v2.25a.75.75 0 01-1.5 0v-6H3v12h6v-2.25c0-1.654 1.346-3 3-3s3 1.346 3 3v2.25h6zm-7.5 0v-2.25c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v2.25h3zm2.25-17.25a.75.75 0 00-.75.75v2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75H19.5v1.5a.75.75 0 01-1.5 0v-1.5h-2.25zm-13.5 0a.75.75 0 00-.75.75v2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75H6v1.5a.75.75 0 01-1.5 0v-1.5H2.25z"}})])
          )
        }
      }
    