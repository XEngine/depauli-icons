
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9.049 18a1.268 1.268 0 01-1.242-1.513l.518-3.211-2.16.945a.749.749 0 11-.601-1.374l3.045-1.332L9.76 4.381a.746.746 0 01.861-.621.747.747 0 01.62.86l-.997 6.18 3.501-1.531a.75.75 0 11.601 1.374L9.96 12.562 9.324 16.5h8.306a.75.75 0 010 1.5H9.049z"}})])
          )
        }
      }
    