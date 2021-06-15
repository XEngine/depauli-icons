
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M8.25 17.25a.75.75 0 01-.75-.75v-5.25c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v1.189l.97-.97a.744.744 0 011.06 0 .747.747 0 010 1.061l-2.25 2.25a.74.74 0 01-.245.163l-.026.01a.73.73 0 01-.517.001l-.017-.006a.748.748 0 01-.256-.167l-2.25-2.25a.744.744 0 010-1.06.749.749 0 011.06 0l.97.97V11.25c0-1.654-1.346-3-3-3s-3 1.346-3 3v5.25a.749.749 0 01-.749.75z"}})])
          )
        }
      }
    