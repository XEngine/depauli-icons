
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75V10.5H1.5v12.75a.75.75 0 01-1.5 0V.75a.75.75 0 011.5 0V6h13.365l-.605-3.627A.751.751 0 0115 1.5h4.5a.75.75 0 01.739.873L19.635 6h2.115A2.252 2.252 0 0124 8.25c0 .96-.615 1.808-1.5 2.121V23.25a.75.75 0 01-.75.75zm0-15a.75.75 0 000-1.5H1.5V9h20.25zm-3.635-3l.5-3h-2.729l.5 3h1.729z"}}),_c('path',{attrs:{"d":"M6.75 24a.75.75 0 01-.75-.75V16.5h-.75C4.009 16.5 3 15.491 3 14.25S4.009 12 5.25 12h3c1.241 0 2.25 1.009 2.25 2.25S9.491 16.5 8.25 16.5H7.5v6.75a.75.75 0 01-.75.75zm-1.5-10.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM15.75 24a.75.75 0 01-.75-.75V16.5h-.75c-1.241 0-2.25-1.009-2.25-2.25S13.009 12 14.25 12h3c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25h-.75v6.75a.75.75 0 01-.75.75zm-1.5-10.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"}})])
          )
        }
      }
    