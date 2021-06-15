
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
            children.concat([_c('path',{attrs:{"d":"M12 11.998a.75.75 0 01-.75-.75V2.559l-2.47 2.47a.744.744 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.469.219a.74.74 0 01.245-.163l.025-.009a.737.737 0 01.521.001l.02.007c.097.04.179.095.25.166l3.749 3.749c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47v8.689a.749.749 0 01-.749.749zM2.25 23.998A2.252 2.252 0 010 21.748v-4.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    