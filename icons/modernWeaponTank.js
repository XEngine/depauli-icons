
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
            children.concat([_c('path',{attrs:{"d":"M6 23.25a3.745 3.745 0 01-3.73-3.406L.488 18.175a.764.764 0 01-.113-.134A2.231 2.231 0 010 16.801V13.5a2.252 2.252 0 012.25-2.25h4.146L3.485 9.422a.75.75 0 01-.329-.453A5.274 5.274 0 013 7.7V5.25H1.5a.75.75 0 010-1.5h12.75A2.252 2.252 0 0116.5 6v.75h6V6A.75.75 0 0124 6v3a.75.75 0 01-1.5 0v-.75h-6v3h2.95c.754 0 1.454.375 1.872 1.002l2.072 3.108c.445.669.5 1.531.141 2.25l-1.044 2.084a3.729 3.729 0 01-3.741 3.556H6zm0-6c-1.241 0-2.25 1.009-2.25 2.25S4.759 21.75 6 21.75h12.75c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25H6zm-3.455.797A3.734 3.734 0 016 15.75h12.75c1.293 0 2.486.678 3.165 1.747l.279-.557a.75.75 0 00-.048-.749l-2.072-3.107a.749.749 0 00-.624-.334H2.25a.75.75 0 00-.75.75v3.3c0 .123.03.243.088.351l.957.896zM15 11.25V6a.75.75 0 00-.75-.75H4.5V7.7c0 .208.018.416.052.621l4.664 2.929H15zM8.25 2.25a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M12.375 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.261 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.114.993zM6.75 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM18 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993z"}})])
          )
        }
      }
    