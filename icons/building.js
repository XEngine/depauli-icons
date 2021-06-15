
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v21.5a.75.75 0 01-.75.75H.75zm21.75-1.5V21H15v1.5h7.5zm-9 0v-21H1.75a.25.25 0 00-.25.25V22.5h12zm9-3V18H15v1.5h7.5zm0-3V1.75a.25.25 0 00-.25-.25H15v15h1.5v-5.25c0-1.241 1.009-2.25 2.25-2.25S21 10.009 21 11.25v5.25h1.5zm-3 0v-5.25a.75.75 0 00-1.5 0v5.25h1.5z"}}),_c('path',{attrs:{"d":"M18.75 6.375a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011zM8.25 10.5a.75.75 0 01-.75-.75v-4.5C7.5 4.009 8.509 3 9.75 3S12 4.009 12 5.25v4.5a.75.75 0 01-.75.75h-3zM10.5 9V5.25a.75.75 0 00-1.5 0V9h1.5zM8.25 21a.75.75 0 01-.75-.75v-4.5c0-1.241 1.009-2.25 2.25-2.25S12 14.509 12 15.75v4.5a.75.75 0 01-.75.75h-3zm2.25-1.5v-3.75a.75.75 0 00-1.5 0v3.75h1.5zM3.75 10.5a.75.75 0 010-1.5h.75V5.25c0-.414-.336-.75-.75-.75a.75.75 0 010-1.5A2.252 2.252 0 016 5.25v4.5a.75.75 0 01-.75.75h-1.5zM3.75 21a.75.75 0 010-1.5h.75v-3.75c0-.414-.336-.75-.75-.75a.75.75 0 010-1.5A2.252 2.252 0 016 15.75v4.5a.75.75 0 01-.75.75h-1.5z"}})])
          )
        }
      }
    