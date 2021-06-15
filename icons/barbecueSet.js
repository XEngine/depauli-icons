
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
            children.concat([_c('path',{attrs:{"d":"M5.625 24a.752.752 0 01-.746-.833l.704-6.337a6.72 6.72 0 01-2.958-5.58.75.75 0 01.75-.75h11.25V.75a.75.75 0 011.5 0v.792c2.971.326 5.25 2.556 5.25 5.208 0 2.666-2.298 4.902-5.288 5.212a6.77 6.77 0 01-2.921 4.869l.7 6.288a.753.753 0 01-.746.833.75.75 0 01-.745-.667l-.088-.785H6.463l-.093.833a.749.749 0 01-.745.667zm6.495-3l-.381-3.428A6.685 6.685 0 019.375 18a6.67 6.67 0 01-2.365-.429L6.629 21h5.491zm-7.942-9a5.264 5.264 0 005.197 4.5 5.263 5.263 0 005.197-4.5H4.178zm11.947-1.552c2.133-.301 3.75-1.865 3.75-3.698s-1.617-3.397-3.75-3.698v7.396z"}}),_c('path',{attrs:{"d":"M4.875 9a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    