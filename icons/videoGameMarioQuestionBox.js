
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
            children.concat([_c('path',{attrs:{"d":"M2.5 24c-.965 0-1.75-.785-1.75-1.75V1.75C.75.785 1.535 0 2.5 0h19c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75h-19zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h19a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-19z"}}),_c('path',{attrs:{"d":"M12 15a.75.75 0 01-.75-.75v-1.007c0-.951.603-1.804 1.5-2.121a2.254 2.254 0 001.5-2.121c0-.601-.234-1.166-.659-1.591A2.232 2.232 0 0012 6.751c-.601 0-1.166.234-1.591.659A2.231 2.231 0 009.75 9a.75.75 0 01-1.5 0c0-1.002.391-1.943 1.099-2.651A3.725 3.725 0 0112 5.251a3.755 3.755 0 013.75 3.75 3.756 3.756 0 01-2.5 3.535.752.752 0 00-.5.707v1.007A.75.75 0 0112 15z"}}),_c('circle',{attrs:{"cx":"12","cy":"17.625","r":"1.125"}}),_c('path',{attrs:{"d":"M5.25 5.625a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012zM18.75 5.625a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011zM5.25 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM18.75 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993z"}})])
          )
        }
      }
    