
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25a3.743 3.743 0 013-3.673V13.5a9.016 9.016 0 016.618-8.678A2.987 2.987 0 019 3c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .667-.22 1.303-.618 1.822A9.016 9.016 0 0121 13.5v3.077c1.732.35 3 1.874 3 3.673A3.754 3.754 0 0120.25 24H3.75zm16.5-1.5c1.241 0 2.25-1.009 2.25-2.25S21.491 18 20.25 18h-3.751v4.5h3.751zm-5.251 0V18h-6v4.5h6zM3.75 18c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25h3.749V18H3.75zm15.75-1.5v-3C19.5 9.365 16.135 6 12 6s-7.5 3.365-7.5 7.5v3h15zM12 1.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    