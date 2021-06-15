
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24C3.365 24 0 20.635 0 16.5 0 11.491 4.366 4.197 6.243 1.293A1.486 1.486 0 017.501.607a1.487 1.487 0 011.258.69.751.751 0 01-.632 1.153.746.746 0 01-.632-.346C6.096 4.284 1.5 11.761 1.5 16.5c0 3.308 2.692 6 6 6s6-2.692 6-6a.75.75 0 011.5 0c0 4.135-3.365 7.5-7.5 7.5z"}}),_c('path',{attrs:{"d":"M7.5 21A4.505 4.505 0 013 16.5a.75.75 0 011.5 0c0 1.654 1.346 3 3 3a.75.75 0 010 1.5zM17.25 13.5c-3.722 0-6.75-3.028-6.75-6.75S13.528 0 17.25 0 24 3.028 24 6.75s-3.028 6.75-6.75 6.75zm0-12C14.355 1.5 12 3.855 12 6.75S14.355 12 17.25 12s5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M14.25 7.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    