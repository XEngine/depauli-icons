
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zM1.53 12.75A10.452 10.452 0 0012 22.5a10.452 10.452 0 0010.47-9.75h-6.035c-.362 2.129-2.247 3.75-4.435 3.75-2.188 0-4.073-1.621-4.435-3.75H1.53zM12 9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm10.47 2.25A10.452 10.452 0 0012 1.5a10.452 10.452 0 00-10.47 9.75h6.035C7.927 9.121 9.812 7.5 12 7.5c2.188 0 4.073 1.621 4.435 3.75h6.035z"}}),_c('path',{attrs:{"d":"M12 13.125a.796.796 0 01-.13-.011 1.127 1.127 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011z"}})])
          )
        }
      }
    