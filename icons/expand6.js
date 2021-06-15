
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
            children.concat([_c('path',{attrs:{"d":"M8.251 16.498a.752.752 0 01-.53-1.281l13.72-13.72h-4.939a.75.75 0 010-1.5h6.75a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026a.73.73 0 01.047.26v6.75a.75.75 0 01-1.5 0V2.559l-13.72 13.72a.75.75 0 01-.531.219z"}}),_c('path',{attrs:{"d":"M2.251 23.998a2.252 2.252 0 01-2.25-2.25v-15a2.252 2.252 0 012.25-2.25h9a.75.75 0 010 1.5h-9a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-9a.75.75 0 011.5 0v9a2.252 2.252 0 01-2.25 2.25h-15z"}})])
          )
        }
      }
    