
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
            children.concat([_c('path',{attrs:{"d":"M12 24.003c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M7.5 9.003a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM7.5 12.753a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM7.5 16.503a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z"}})])
          )
        }
      }
    