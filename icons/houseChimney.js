
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
            children.concat([_c('path',{attrs:{"d":"M1.726 23.998a1.736 1.736 0 01-1.728-1.727V9.747a1.96 1.96 0 01.676-1.4L11.548.149a.758.758 0 01.904 0l3.298 2.487V1.5a.75.75 0 01.75-.75h3.748a.75.75 0 01.75.75v5.095l2.325 1.753c.02.015.04.032.06.05.367.341.586.806.615 1.307l.001 12.563a1.735 1.735 0 01-1.726 1.729H1.726zM1.614 9.517a.433.433 0 00-.118.273l.001 12.479c0 .125.104.229.23.229H22.27a.23.23 0 00.228-.23V9.748a.419.419 0 00-.116-.231l-2.585-1.949a.754.754 0 01-.298-.599V2.25H17.25v1.891a.743.743 0 01-.416.671.755.755 0 01-.785-.072L12 1.687 1.614 9.517z"}})])
          )
        }
      }
    