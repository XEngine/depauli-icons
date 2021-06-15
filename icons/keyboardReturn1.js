
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
            children.concat([_c('path',{attrs:{"d":"M12.75 16.497a.743.743 0 01-.53-.22l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.737.737 0 01.009-.542.74.74 0 01.166-.249l3.749-3.749a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47H18a.75.75 0 010 1.5h-7.189l2.47 2.47a.752.752 0 01-.531 1.281z"}}),_c('path',{attrs:{"d":"M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z"}}),_c('path',{attrs:{"d":"M6 17.247a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v9a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    