
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
            children.concat([_c('path',{attrs:{"d":"M15.75 13.125a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011z"}}),_c('path',{attrs:{"d":"M1.5 24a.75.75 0 010-1.5h2.25V1.75C3.75.785 4.535 0 5.5 0h13c.965 0 1.75.785 1.75 1.75V22.5h2.25a.75.75 0 010 1.5h-21zm17.25-1.5V1.75a.25.25 0 00-.25-.25h-13a.25.25 0 00-.25.25V22.5h13.5z"}})])
          )
        }
      }
    