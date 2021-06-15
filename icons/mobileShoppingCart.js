
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
            children.concat([_c('path',{attrs:{"d":"M6.108 23.25a3.487 3.487 0 01-3.482-3.483V4.232A3.486 3.486 0 016.108.75h7.768a.75.75 0 010 1.5H6.108a1.984 1.984 0 00-1.982 1.982V17.25h10.5V15a.75.75 0 011.5 0v4.767a3.488 3.488 0 01-3.483 3.483H6.108zm-1.983-3.483c0 1.093.889 1.982 1.982 1.983h6.535c1.093 0 1.982-.89 1.983-1.983V18.75h-10.5v1.017z"}}),_c('path',{attrs:{"d":"M12.375 9.75a.75.75 0 01-.712-.513l-1.5-4.5a.751.751 0 01.711-.987h8.292l.74-2.466a.754.754 0 01.935-.502.748.748 0 01.503.934l-2.25 7.5a.745.745 0 01-.718.534h-6.001zm5.442-1.5l.9-3h-6.802l1 3h4.902z"}}),_c('circle',{attrs:{"cx":"12.75","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"18","cy":"11.625","r":"1.125"}})])
          )
        }
      }
    