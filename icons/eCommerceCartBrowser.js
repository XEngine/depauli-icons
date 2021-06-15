
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
            children.concat([_c('path',{attrs:{"d":"M18 22.5a.75.75 0 010-1.5h3.75a.75.75 0 00.75-.75V7.5h-21v12.634a.87.87 0 00.867.866H6a.75.75 0 010 1.5H2.365A2.377 2.377 0 010 20.136V3.857A2.369 2.369 0 012.355 1.5h19.279A2.376 2.376 0 0124 3.863V20.25a2.252 2.252 0 01-2.25 2.25H18zM22.5 6V3.865A.871.871 0 0021.632 3H2.357a.863.863 0 00-.857.859V6h21z"}}),_c('path',{attrs:{"d":"M9 18.75a.748.748 0 01-.711-.513l-1.5-4.5a.751.751 0 01.711-.987h8.292l.74-2.466a.754.754 0 01.934-.502.748.748 0 01.503.934l-2.25 7.5a.746.746 0 01-.718.535H9zm5.442-1.5l.9-3H8.541l1 3h4.901z"}}),_c('circle',{attrs:{"cx":"9.375","cy":"20.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.625","cy":"20.625","r":"1.125"}})])
          )
        }
      }
    