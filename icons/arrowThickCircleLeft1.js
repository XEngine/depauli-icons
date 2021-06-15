
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M11.25 19.189c-.401 0-.778-.156-1.06-.439L4.5 13.06a1.502 1.502 0 010-2.121l5.69-5.69c.284-.283.66-.439 1.06-.439.401 0 .777.156 1.061.44l1.19 1.19a1.502 1.502 0 010 2.121l-.44.439H18c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-4.939l.44.44c.284.284.44.661.439 1.061s-.156.777-.44 1.06l-1.19 1.189a1.49 1.49 0 01-1.06.439zM5.56 12l5.69 5.689 1.189-1.19-1.72-1.719a.749.749 0 01.53-1.28H18v-3h-6.75a.747.747 0 01-.693-.463.745.745 0 01.163-.817l1.72-1.72-1.19-1.19L5.56 12z"}})])
          )
        }
      }
    