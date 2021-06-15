
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
            children.concat([_c('path',{attrs:{"d":"M8.25 17.998A2.252 2.252 0 016 15.748V2.559l-1.72 1.72a.744.744 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L6.219.219a.74.74 0 01.245-.163l.026-.01a.737.737 0 01.521.001l.02.007c.097.04.18.095.25.166l2.999 2.999c.142.141.22.33.22.53s-.078.389-.22.53a.744.744 0 01-1.06-.001L7.5 2.559v13.189c0 .414.336.75.75.75h15a.75.75 0 010 1.5h-15z"}}),_c('path',{attrs:{"d":"M17.25 14.998a.75.75 0 01-.75-.75v-6a.75.75 0 00-.75-.75h-6a.75.75 0 010-1.5h6A2.252 2.252 0 0118 8.248v6a.75.75 0 01-.75.75zM17.25 23.998a.743.743 0 01-.53-.22l-3-3a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47 2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.743.743 0 01-.53.22zM.75 7.498a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    