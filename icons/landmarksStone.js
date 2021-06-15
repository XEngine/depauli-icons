
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
            children.concat([_c('path',{attrs:{"d":"M7.5 16.5A4.505 4.505 0 013 12c0-2.481 2.019-4.5 4.5-4.5S12 9.518 12 12c0 2.481-2.019 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM8.25 5.25a.75.75 0 01-.624-.334c-.111-.167-.151-.367-.111-.563l.75-3.75A.75.75 0 019.623.334c.112.166.152.367.112.563l-.75 3.75a.751.751 0 01-.735.603zM13.5 7.5a.75.75 0 01-.469-1.336l3.75-3a.75.75 0 11.938 1.171l-3.75 3a.751.751 0 01-.469.165zM9 24a.752.752 0 01-.735-.603l-.75-3.75a.747.747 0 01.735-.897c.356 0 .665.254.735.603l.75 3.75A.747.747 0 019 24zM17.25 21a.751.751 0 01-.468-.164l-3.75-3a.75.75 0 01.937-1.171l3.75 3A.75.75 0 0117.25 21zM15.75 12.75a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    