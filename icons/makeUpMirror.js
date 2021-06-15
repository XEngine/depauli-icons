
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-4.549 0-8.25-2.355-8.25-5.25 0-2.021 1.806-3.835 4.59-4.708C6.008 12.727 4.5 10.215 4.5 7.5 4.5 3.365 7.865 0 12 0s7.5 3.365 7.5 7.5c0 2.715-1.508 5.227-3.84 6.542 2.784.873 4.59 2.687 4.59 4.708 0 2.895-3.701 5.25-8.25 5.25zm0-9c-3.659 0-6.75 1.717-6.75 3.75S8.341 22.5 12 22.5s6.75-1.717 6.75-3.75S15.659 15 12 15zm0-13.5c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6z"}}),_c('path',{attrs:{"d":"M12 21c-2.236 0-4.5-.773-4.5-2.25S9.764 16.5 12 16.5s4.5.773 4.5 2.25S14.236 21 12 21zm-2.986-2.25c.173.24 1.195.75 2.986.75 1.791 0 2.813-.51 2.986-.75-.173-.24-1.195-.75-2.986-.75-1.791 0-2.813.51-2.986.75z"}})])
          )
        }
      }
    