
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24.001a1.502 1.502 0 01-1.465-1.173 1.493 1.493 0 01.198-1.13L11.25 5.487 8.504 1.151a.746.746 0 01-.098-.566A.745.745 0 019.137 0c.259 0 .496.13.634.349l2.367 3.737L14.504.349a.745.745 0 011.035-.232.751.751 0 01.232 1.035l-2.746 4.336 10.267 16.211a1.501 1.501 0 01-1.266 2.303H2.25zm.001-1.5h4.961l3.644-6.065c.205-.343.532-.586.921-.683a1.494 1.494 0 011.652.684l3.638 6.064h4.958L12.137 6.889 2.251 22.501zm13.067 0l-3.175-5.292-3.181 5.292h6.356z"}}),_c('path',{attrs:{"d":"M10.637 13.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    