
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
            children.concat([_c('path',{attrs:{"d":"M6 18.59a2.252 2.252 0 01-2.25-2.25c0-.96.615-1.808 1.5-2.121V11.09c0-3.952 1.393-7.801 3.924-10.837A.747.747 0 0110.23.157a.75.75 0 01.096 1.056A15.457 15.457 0 006.75 11.09v3.129a2.258 2.258 0 011.5 2.121A2.252 2.252 0 016 18.59zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM18 18.59a2.252 2.252 0 01-2.25-2.25c0-.96.615-1.808 1.5-2.121V11.09c0-3.953 1.394-7.801 3.924-10.837A.747.747 0 0122.23.157a.741.741 0 01.266.508.743.743 0 01-.171.548 15.46 15.46 0 00-3.575 9.877v3.129a2.26 2.26 0 011.5 2.121A2.252 2.252 0 0118 18.59zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM.75 9.733a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M9.75 9.733a.75.75 0 010-1.5H15a.75.75 0 010 1.5H9.75zM21 9.733a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H21zM1.125 20.84a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.737.737 0 01-.001-.263c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.68.68 0 01-.129.012zM4.875 23.84a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.699.699 0 01.001.261c-.06.513-.47.922-.983.982a.717.717 0 01-.131.012zM22.875 20.84a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.808.808 0 010-.262c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.817.817 0 010 .262c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011zM19.125 23.84a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.817.817 0 010-.262c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011zM10.125 20.84a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.737.737 0 01-.001-.263c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.68.68 0 01-.129.012zM13.875 23.84a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.796.796 0 010 .261c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011z"}})])
          )
        }
      }
    