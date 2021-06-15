
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
            children.concat([_c('path',{attrs:{"d":"M6.75 18a.752.752 0 01-.53-1.281l10.5-10.5a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-10.5 10.5a.743.743 0 01-.53.22zM8.25 10.5C7.009 10.5 6 9.491 6 8.25S7.009 6 8.25 6s2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM15.75 18c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25S18 14.509 18 15.75 16.991 18 15.75 18zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM.75 4.5A.75.75 0 010 3.75v-1.5A2.252 2.252 0 012.25 0h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v1.5a.75.75 0 01-.75.75zM2.25 24A2.252 2.252 0 010 21.75v-1.5a.75.75 0 011.5 0v1.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM.75 11.25A.75.75 0 010 10.5v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM.75 17.25A.75.75 0 010 16.5v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM23.25 11.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM7.5 1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM20.25 24a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75v-1.5a.75.75 0 011.5 0v1.5A2.252 2.252 0 0121.75 24h-1.5zM23.25 17.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM13.5 24a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM13.5 1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM23.25 4.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 010-1.5h1.5A2.252 2.252 0 0124 2.25v1.5a.75.75 0 01-.75.75zM7.5 24a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    