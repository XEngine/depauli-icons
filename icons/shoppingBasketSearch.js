
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
            children.concat([_c('path',{attrs:{"d":"M23.246 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.746.746 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M4.31 18a2.191 2.191 0 01-2.116-1.727L.059 7.287c-.149-.561-.068-1.159.232-1.675A2.22 2.22 0 012.145 4.5h1.289L7.716.22c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53L5.556 4.5h11.379l-3.219-3.218a.744.744 0 010-1.06.748.748 0 011.06-.001l4.28 4.279h1.263a2.24 2.24 0 011.582.709 2.217 2.217 0 01.526 2.097l-.296 1.238a.748.748 0 01-.903.556.751.751 0 01-.556-.904l.3-1.256a.725.725 0 00-.167-.708.726.726 0 00-.511-.232H2.172a.729.729 0 00-.584.365.728.728 0 00-.074.557l2.143 9.019a.697.697 0 00.667.559h3.172a.75.75 0 010 1.5H4.31z"}})])
          )
        }
      }
    