
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 17.94c-.34 0-.673-.117-.938-.33l-5.548-4.438a1.49 1.49 0 01-.554-1.007 1.49 1.49 0 01.553-1.336l5.55-4.439a1.503 1.503 0 012.108.233c.212.264.329.597.329.937V9H18c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-4.5v1.44c0 .401-.156.778-.44 1.061a1.49 1.49 0 01-1.06.439zm-5.549-5.941L12 16.439V14.25a.75.75 0 01.75-.75H18v-3h-5.25a.75.75 0 01-.75-.75V7.56l-5.549 4.439z"}})])
          )
        }
      }
    