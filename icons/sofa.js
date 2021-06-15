
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21a.75.75 0 010-1.5h3.121C2.056 17.85 0 15.045 0 12c0-4.963 5.383-9 12-9s12 4.037 12 9c0 3.045-2.056 5.85-5.371 7.5h3.121a.75.75 0 010 1.5H2.25zM12 4.5C6.21 4.5 1.5 7.865 1.5 12s4.71 7.5 10.5 7.5 10.5-3.365 10.5-7.5S17.79 4.5 12 4.5z"}}),_c('path',{attrs:{"d":"M12 16.5c-4.135 0-7.5-2.355-7.5-5.25a.75.75 0 011.5 0C6 13.318 8.692 15 12 15s6-1.682 6-3.75a.75.75 0 011.5 0c0 2.895-3.365 5.25-7.5 5.25z"}})])
          )
        }
      }
    