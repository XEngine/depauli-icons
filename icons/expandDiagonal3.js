
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
            children.concat([_c('path',{attrs:{"d":"M16.503 23.998a.75.75 0 010-1.5h4.939l-6.97-6.97a.744.744 0 010-1.06.749.749 0 01.53-.22c.2 0 .389.078.53.22l6.97 6.97v-4.939a.75.75 0 011.5 0v6.75a.744.744 0 01-.047.258l-.006.017a.763.763 0 01-.412.419l-.026.01a.733.733 0 01-.259.047h-6.749zM9.003 9.748a.743.743 0 01-.53-.22l-6.97-6.97v4.939a.75.75 0 01-1.5 0V.747c0-.089.016-.176.048-.261l.007-.02a.754.754 0 01.41-.411L.493.046a.737.737 0 01.26-.047h6.75a.75.75 0 010 1.5h-4.94l6.97 6.97c.142.141.22.33.22.53s-.078.389-.22.53a.746.746 0 01-.53.219zM8.253 16.498a.752.752 0 01-.53-1.281l7.5-7.5a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-7.5 7.5a.74.74 0 01-.53.221z"}})])
          )
        }
      }
    