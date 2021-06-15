
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
            children.concat([_c('path',{attrs:{"d":"M9 17.666a.754.754 0 01-.742-.856l.53-3.716A.748.748 0 019 12.67l9.546-9.546a2.983 2.983 0 012.121-.878 2.988 2.988 0 012.124.88 3.007 3.007 0 01-.002 4.245l-9.546 9.546a.757.757 0 01-.424.212l-3.712.53a.8.8 0 01-.107.007zm.884-1.634l2.475-.353 9.369-9.369a1.503 1.503 0 00-1.06-2.565l-.001-.375v.375a1.49 1.49 0 00-1.061.439l-9.368 9.369-.354 2.479z"}}),_c('path',{attrs:{"d":"M2.25 21.75A2.252 2.252 0 010 19.5v-3a2.252 2.252 0 012.25-2.25h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3A2.252 2.252 0 0124 16.5v3a2.252 2.252 0 01-2.25 2.25H2.25z"}})])
          )
        }
      }
    