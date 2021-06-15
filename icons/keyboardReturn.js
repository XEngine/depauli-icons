
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
            children.concat([_c('path',{attrs:{"d":"M9.75 17.997a.743.743 0 01-.53-.22l-3.733-3.733a.733.733 0 01-.237-.544l.001-.033a.737.737 0 01.048-.231l.016-.04a.761.761 0 01.113-.179.528.528 0 01.042-.05l3.75-3.75a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L7.808 12.75H13.5A3.754 3.754 0 0017.25 9V6.747a.75.75 0 011.5 0V9a5.256 5.256 0 01-5.25 5.25H7.813l2.467 2.467a.752.752 0 010 1.061.746.746 0 01-.53.219z"}}),_c('path',{attrs:{"d":"M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z"}})])
          )
        }
      }
    