
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
            children.concat([_c('path',{attrs:{"d":"M13.75 14.25c-.965 0-1.75-.785-1.75-1.75V1.75C12 .785 12.785 0 13.75 0h8.5C23.215 0 24 .785 24 1.75V12.5c0 .965-.785 1.75-1.75 1.75h-8.5zm0-12.75a.25.25 0 00-.25.25V12.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5z"}}),_c('path',{attrs:{"d":"M17.25 10.5a.743.743 0 01-.53-.22l-1.5-1.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.806.806 2.513-4.397a.755.755 0 011.024-.279.75.75 0 01.279 1.024l-3 5.25a.756.756 0 01-.652.376zM4.125 18a.796.796 0 01-.13-.011 1.127 1.127 0 01-.983-.982.737.737 0 01-.001-.263c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.922.47.983.983a.717.717 0 01.001.262c-.06.513-.47.922-.983.983a.796.796 0 01-.13.011zM18.375 18a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993z"}}),_c('path',{attrs:{"d":"M19.5 23.999a2.252 2.252 0 01-2.25-2.25V21h-12v.749c0 1.241-1.009 2.25-2.25 2.25S.75 22.99.75 21.749v-1.325A2.23 2.23 0 010 18.75V16.5c0-1.554.958-2.938 2.4-3.496l1.616-3.602C4.438 8.273 5.563 7.5 6.807 7.5H9.75a.75.75 0 010 1.5H6.809a1.51 1.51 0 00-1.407.973L4.158 12.75H9.75a.75.75 0 010 1.5h-6A2.252 2.252 0 001.5 16.5v2.25c0 .414.336.75.75.75h2.221l.029-.001a.29.29 0 01.029.001H17.97l.029-.001.03.001h2.22a.75.75 0 00.75-.75V16.5a.75.75 0 011.5 0v2.25a2.23 2.23 0 01-.75 1.674v1.325a2.251 2.251 0 01-2.249 2.25zm-.75-2.25a.75.75 0 001.5 0V21h-1.5v.749zm-16.5 0a.75.75 0 001.5 0V21h-1.5v.749z"}})])
          )
        }
      }
    