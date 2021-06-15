
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
            children.concat([_c('path',{attrs:{"d":"M20.25 23.847a.75.75 0 01-.75-.75v-2.249H12l-.026-.001H4.5v2.25a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75h1.152a3.004 3.004 0 012.598-4.5 3.004 3.004 0 012.598 4.5h1.152v-3.749a.75.75 0 01.75-.75h6.25a2.754 2.754 0 012.75 2.75v5.499a.75.75 0 01-.75.75zm-.75-4.499v-1.75c0-.689-.561-1.25-1.25-1.25h-5.5v3h6.75zm-12-3.001c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM20.25 13.347a.75.75 0 01-.75-.75V6.499l-7.084-4.724a.753.753 0 00-.832 0L4.5 6.499v6.098a.75.75 0 01-1.5 0V7.5L1.166 8.723a.75.75 0 01-.832-1.248L10.752.528a2.242 2.242 0 012.496 0l10.418 6.947a.748.748 0 01-.416 1.374.753.753 0 01-.416-.126L21 7.5v5.098a.75.75 0 01-.75.749z"}})])
          )
        }
      }
    