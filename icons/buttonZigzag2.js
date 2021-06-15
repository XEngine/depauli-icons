
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
            children.concat([_c('path',{attrs:{"d":"M3.5 23.998a.75.75 0 01-.75-.75V11.255c0-.601.234-1.166.659-1.591s.99-.659 1.591-.659c.615 0 1.21.255 1.633.701l8.346 9.577a.727.727 0 00.502.208h.002a.755.755 0 00.535-.206.754.754 0 00.233-.543V2.559l-2.47 2.47a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.75-3.75a.75.75 0 01.245-.163l.024-.009a.735.735 0 01.553.011.74.74 0 01.238.16l3.75 3.75c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47v16.183a2.255 2.255 0 01-2.243 2.25l-.065-.001a2.232 2.232 0 01-1.573-.699l-8.347-9.577a.741.741 0 00-.522-.21.747.747 0 00-.75.75v11.993a.752.752 0 01-.751.751z"}})])
          )
        }
      }
    