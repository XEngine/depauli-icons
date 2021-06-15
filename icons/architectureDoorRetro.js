
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
            children.concat([_c('path',{attrs:{"d":"M4.5 14.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011z"}}),_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25v-12A9.78 9.78 0 017.327.533a9.691 9.691 0 016.346 0A9.78 9.78 0 0120.25 9.75v.75h2.25a.75.75 0 010 1.5h-2.25v6h2.25a.75.75 0 010 1.5h-2.25v2.25A2.252 2.252 0 0118 24H3zm15-1.5a.75.75 0 00.75-.75V19.5H18a.75.75 0 010-1.5h.75v-6H18a.75.75 0 010-1.5h.75v-.75a8.243 8.243 0 00-4.5-7.347V22.5H18zm-5.25 0V1.813a8.214 8.214 0 00-4.5 0V22.5h4.5zm-6-20.097a8.244 8.244 0 00-4.5 7.347v12c0 .414.336.75.75.75h3.75V2.403z"}})])
          )
        }
      }
    