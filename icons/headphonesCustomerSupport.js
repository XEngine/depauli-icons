
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-1.241 0-2.25-1.009-2.25-2.25S10.759 19.5 12 19.5h1.5c.96 0 1.808.615 2.121 1.5h1.629a2.252 2.252 0 002.25-2.25c-.827 0-1.5-.673-1.5-1.5v-7.5c0-.814.653-1.479 1.462-1.5A7.487 7.487 0 0012 1.5a7.487 7.487 0 00-7.462 6.75A1.503 1.503 0 016 9.75v7.5c0 .827-.673 1.5-1.5 1.5h-.75A3.754 3.754 0 010 15v-3a3.743 3.743 0 013.027-3.679A8.973 8.973 0 0112 0a8.972 8.972 0 018.973 8.321A3.743 3.743 0 0124 12v3a3.743 3.743 0 01-3 3.673v.077a3.754 3.754 0 01-3.75 3.75h-1.629A2.258 2.258 0 0113.5 24H12zm0-3a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm7.5-3.75h.75A2.252 2.252 0 0022.5 15v-3a2.252 2.252 0 00-2.25-2.25h-.75v7.5zM3.75 9.75A2.252 2.252 0 001.5 12v3a2.252 2.252 0 002.25 2.25h.75v-7.5h-.75z"}})])
          )
        }
      }
    