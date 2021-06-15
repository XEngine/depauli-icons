
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
            children.concat([_c('path',{attrs:{"d":"M8.25 23.998A2.252 2.252 0 016 21.748v-3a.75.75 0 00-.75-.75h-3A2.252 2.252 0 010 15.748v-7.5a2.252 2.252 0 012.25-2.25h3a.75.75 0 00.75-.75v-3a2.252 2.252 0 012.25-2.25h7.5A2.252 2.252 0 0118 2.248v3c0 .414.336.75.75.75h3A2.252 2.252 0 0124 8.248v7.5a2.252 2.252 0 01-2.25 2.25h-3a.75.75 0 00-.75.75v3a2.252 2.252 0 01-2.25 2.25h-7.5zm-6-16.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h3a2.252 2.252 0 012.25 2.25v3c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-3a2.252 2.252 0 012.25-2.25h3a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-3a2.252 2.252 0 01-2.25-2.25v-3a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v3a2.252 2.252 0 01-2.25 2.25h-3z"}}),_c('path',{attrs:{"d":"M14.25 6.748a.743.743 0 01-.53-.22L12 4.809l-1.72 1.72a.744.744 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.25-2.25a.744.744 0 011.06 0l2.25 2.25c.142.141.22.33.22.53s-.078.389-.22.53-.33.22-.53.22zM12 20.998a.743.743 0 01-.53-.22l-2.25-2.25a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.743.743 0 01-.53.22zM6 14.998a.743.743 0 01-.53-.22l-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.25-2.25c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72 1.72 1.72a.752.752 0 010 1.061.746.746 0 01-.53.219zM18 14.998a.752.752 0 01-.53-1.281l1.72-1.72-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l2.25 2.25a.747.747 0 010 1.061l-2.25 2.25a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    