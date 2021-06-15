
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
            children.concat([_c('path',{attrs:{"d":"M2.25 16.5A2.252 2.252 0 010 14.25v-12A2.252 2.252 0 012.25 0h18a2.252 2.252 0 012.25 2.25v9a.75.75 0 01-1.5 0V2.503l-7.25 5.543c-.692.62-1.579.96-2.5.96a3.746 3.746 0 01-2.5-.96L1.5 2.505V14.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm7.435-9.627l.049.041c.419.381.957.591 1.516.591s1.097-.21 1.516-.591a.677.677 0 01.048-.04l7.03-5.374H2.655l7.03 5.373z"}}),_c('path',{attrs:{"d":"M17.25 21.75a.747.747 0 01-.75-.75v-1.5h-3.75a2.252 2.252 0 01-2.25-2.25v-1.5a2.252 2.252 0 012.25-2.25h3.75V12a.746.746 0 01.75-.75c.161 0 .321.053.45.15l6.001 4.5a.753.753 0 010 1.2l-6 4.5a.759.759 0 01-.451.15zM12.75 15a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h4.5a.75.75 0 01.75.75v.75l4-3-4-3v.75a.75.75 0 01-.75.75h-4.5z"}})])
          )
        }
      }
    