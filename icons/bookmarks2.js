
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
            children.concat([_c('path',{attrs:{"d":"M14.25 23.7c-.281 0-.556-.079-.794-.228L9 20.685l-4.455 2.784a1.498 1.498 0 01-2.068-.479 1.503 1.503 0 01-.227-.787V5.55A5.256 5.256 0 017.5.3h9a5.256 5.256 0 015.25 5.25V9.3c0 .827-.673 1.5-1.5 1.5h-4.5v11.4c0 .401-.156.777-.44 1.061a1.49 1.49 0 01-1.06.439zM9 19.05c.141 0 .279.04.398.114l4.853 3.036-.001-16.65A2.252 2.252 0 0116.5 3.3a.75.75 0 010 1.5.75.75 0 00-.75.75V9.3h4.5V5.55A3.754 3.754 0 0016.5 1.8h-9a3.754 3.754 0 00-3.75 3.75V22.2l4.853-3.036A.745.745 0 019 19.05z"}})])
          )
        }
      }
    