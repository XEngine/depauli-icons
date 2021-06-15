
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
            children.concat([_c('path',{attrs:{"d":"M18 24a.748.748 0 01-.727-.568L15.915 18H8.086l-1.358 5.432a.749.749 0 11-1.454-.364L6.54 18h-.165c-.47 0-.919-.224-1.2-.6L4.05 15.9a1.502 1.502 0 011.2-2.4h1.565l.614-6.75H6.75C5.51 6.75 4.5 5.741 4.5 4.5s1.01-2.25 2.25-2.25h2.345A3.018 3.018 0 0112 0c1.372 0 2.567.947 2.905 2.25h2.345c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25h-.679l.614 6.75h1.565c.322 0 .641.106.899.299.321.241.529.592.586.988.057.397-.044.792-.285 1.112l-1.125 1.5c-.282.376-.731.6-1.2.6h-.165l1.267 5.068A.747.747 0 0118 24zM5.25 15l1.125 1.5h11.25L18.75 15H5.25zm10.429-1.5l-.614-6.75H12.75v6.75h2.929zm-4.429 0V6.75H8.935l-.613 6.75h2.928zm-4.5-9.75a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5h-3A.75.75 0 0113.5 3c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5a.75.75 0 01-.75.75h-3z"}})])
          )
        }
      }
    