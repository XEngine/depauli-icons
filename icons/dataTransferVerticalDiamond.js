
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
            children.concat([_c('path',{attrs:{"d":"M12 18.748a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165L8.47 15.529A.752.752 0 019 14.248c.2 0 .389.078.53.22l1.72 1.72V7.809l-1.72 1.72a.748.748 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.999-2.999a.74.74 0 01.245-.163l.025-.009a.737.737 0 01.521.001l.02.007c.097.04.179.095.25.165l2.999 2.999c.142.141.22.33.22.53s-.078.389-.22.53a.745.745 0 01-1.059-.001l-1.72-1.72v8.379l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.763.763 0 01-.246.164l-.026.01a.751.751 0 01-.258.046z"}}),_c('path',{attrs:{"d":"M12 23.997a2.546 2.546 0 01-1.81-.748L.75 13.81a2.564 2.564 0 010-3.621L10.19.75a2.542 2.542 0 011.807-.751c.685 0 1.327.265 1.81.747l9.444 9.443a2.566 2.566 0 010 3.621l-9.44 9.439a2.55 2.55 0 01-1.811.748zm-.75-1.809c.2.199.466.309.75.309s.55-.11.75-.31l9.44-9.439a1.064 1.064 0 000-1.501L12.749 1.81c-.01-.009-.024-.025-.033-.035a1.034 1.034 0 00-.713-.276c-.288 0-.553.111-.753.311l-9.441 9.44a1.063 1.063 0 000 1.5l9.441 9.438z"}})])
          )
        }
      }
    