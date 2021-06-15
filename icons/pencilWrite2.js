
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
            children.concat([_c('path',{attrs:{"d":"M8.953 15.419a.754.754 0 01-.742-.856l.53-3.713a.754.754 0 01.212-.424L18.499.88c.566-.566 1.319-.878 2.121-.878s1.556.312 2.121.878a3.003 3.003 0 010 4.243l-9.546 9.546a.754.754 0 01-.423.212l-3.713.531a.959.959 0 01-.106.007zm.884-1.634l2.475-.354 9.369-9.369a1.501 1.501 0 000-2.121 1.488 1.488 0 00-1.061-.438 1.49 1.49 0 00-1.061.439l-9.369 9.369-.353 2.474z"}}),_c('path',{attrs:{"d":"M2.62 24.002a2.252 2.252 0 01-2.25-2.25v-15a2.252 2.252 0 012.25-2.25h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-7.5a.75.75 0 011.5 0v7.5a2.252 2.252 0 01-2.25 2.25h-15z"}})])
          )
        }
      }
    