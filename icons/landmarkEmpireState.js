
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 01-.75-.75V18h-4.5v5.25a.75.75 0 01-1.5 0V7.5a.75.75 0 01.477-.698L12.209 3.75h-.419l-1.017 3.052a.75.75 0 01.477.698v15.75a.75.75 0 01-1.5 0V18h-4.5v5.25a.75.75 0 01-1.5 0V18c0-.827.673-1.5 1.5-1.5v-3.75c0-.827.673-1.5 1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h.959l1.329-3.987a.748.748 0 01.711-.513V.75a.75.75 0 011.501 0v1.5c.323 0 .609.206.711.513L14.79 6.75h.959c.827 0 1.5.673 1.5 1.5v3c.827 0 1.5.673 1.5 1.5v3.75c.827 0 1.5.673 1.5 1.5v5.25a.749.749 0 01-.749.75zm-2.25-7.5v-3.75h-3v3.75h3zm-7.5 0v-3.75h-3v3.75h3zm6-5.25v-3h-1.5v3h1.5zm-6 0v-3h-1.5v3h1.5z"}})])
          )
        }
      }
    