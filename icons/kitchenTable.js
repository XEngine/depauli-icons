
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h3V11.25h-9a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5h-9V22.5h3a.75.75 0 010 1.5h-7.5zM7.593 9a4.703 4.703 0 01-4.571-3.568.743.743 0 01.136-.643.746.746 0 01.592-.289h13.593c.233 0 .448.105.591.288a.745.745 0 01.136.644A4.701 4.701 0 0113.501 9H7.593zm-2.72-3a3.193 3.193 0 002.719 1.5H13.5A3.193 3.193 0 0016.22 6H4.873z"}}),_c('path',{attrs:{"d":"M8.25 4.5C5.355 4.5 3 2.818 3 .75A.75.75 0 013.75 0h9a.75.75 0 01.75.75c0 2.068-2.355 3.75-5.25 3.75zm-3.531-3C5.244 2.381 6.648 3 8.25 3s3.006-.619 3.531-1.5H4.719z"}})])
          )
        }
      }
    