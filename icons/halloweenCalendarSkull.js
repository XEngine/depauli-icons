
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
            children.concat([_c('path',{attrs:{"d":"M18 24a.75.75 0 010-1.5h3a.75.75 0 00.75-.75V10.5H2.25v11.25c0 .414.336.75.75.75h3A.75.75 0 016 24H3a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 013 3h3.75V.75a.75.75 0 011.5 0V3h7.5V.75a.75.75 0 011.5 0V3H21a2.252 2.252 0 012.25 2.25v16.5A2.252 2.252 0 0121 24h-3zm3.75-15V5.25A.75.75 0 0021 4.5h-3.75V6a.75.75 0 01-1.5 0V4.5h-7.5V6a.75.75 0 01-1.5 0V4.5H3a.75.75 0 00-.75.75V9h19.5z"}}),_c('path',{attrs:{"d":"M13.875 18.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0 1.126 1.126 0 01.982 1.244c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011zM10.125 18.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.737.737 0 01-.001-.263c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.68.68 0 01-.129.012zM12 24a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 0112 24z"}}),_c('path',{attrs:{"d":"M15 24a.75.75 0 01-.75-.75v-2.129a.75.75 0 01.376-.65 3.71 3.71 0 001.743-2.263 3.704 3.704 0 00-.364-2.833 3.743 3.743 0 00-3.238-1.875H11.25a3.723 3.723 0 00-2.647 1.083 3.707 3.707 0 00-1.104 2.635 3.74 3.74 0 001.875 3.253.752.752 0 01.376.65v2.129a.75.75 0 01-1.5 0v-1.717a5.279 5.279 0 01-2.251-4.322 5.197 5.197 0 011.548-3.694A5.2 5.2 0 0111.231 12h1.519a5.258 5.258 0 014.557 2.628 5.222 5.222 0 01-1.557 6.906v1.716A.75.75 0 0115 24z"}})])
          )
        }
      }
    