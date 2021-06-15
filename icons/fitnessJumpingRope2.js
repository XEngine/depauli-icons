
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-1.654 0-3-1.346-3-3v-6.75A2.252 2.252 0 0116.5 12h.001A6.552 6.552 0 0012 6.04 6.552 6.552 0 007.499 12H7.5a2.252 2.252 0 012.25 2.25V21c0 1.654-1.346 3-3 3s-3-1.346-3-3v-6.75A2.252 2.252 0 015.992 12a8.113 8.113 0 014.055-6.724A2.996 2.996 0 019 3c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .887-.39 1.712-1.048 2.276A8.111 8.111 0 0118.008 12a2.252 2.252 0 012.242 2.25V21c0 1.654-1.346 3-3 3zm-.75-10.5a.75.75 0 00-.75.75V21c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-6.75a.75.75 0 00-.75-.75h-1.5zM6 13.5a.75.75 0 00-.75.75V21c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-6.75a.75.75 0 00-.75-.75H6zm6-12c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    