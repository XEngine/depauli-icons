
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
            children.concat([_c('path',{attrs:{"d":"M9.312 21a2.237 2.237 0 01-1.591-.658l-7.28-7.281a1.5 1.5 0 01-.001-2.119L7.721 3.66c.425-.426.99-.66 1.591-.66h3.932c.401 0 .778.157 1.061.44.283.284.438.661.438 1.061 0 .399-.156.775-.438 1.058L10.865 9h11.636c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H10.865l3.44 3.44c.283.283.439.66.438 1.062 0 .401-.156.778-.44 1.06a1.487 1.487 0 01-1.058.438H9.312zm0-16.5a.75.75 0 00-.531.219L1.501 12l7.28 7.281c.141.141.33.219.53.219h3.933l-4.72-4.72a.749.749 0 01.53-1.28h13.447v-3H9.054a.747.747 0 01-.693-.463.747.747 0 01.163-.817l4.72-4.72H9.312z"}})])
          )
        }
      }
    