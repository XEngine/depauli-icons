
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-4.963 0-9-4.037-9-9v-1.941l-1.72 1.72a.744.744 0 01-1.06 0 .747.747 0 010-1.061l3-3a.74.74 0 01.245-.163l.025-.009a.733.733 0 01.521.001l.021.007a.74.74 0 01.249.166l2.999 2.999a.744.744 0 010 1.06.744.744 0 01-1.06 0l-1.72-1.72V15c0 4.135 3.365 7.5 7.5 7.5s7.5-3.365 7.5-7.5V2.559l-1.72 1.72a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3-3a.75.75 0 01.245-.163l.024-.009a.738.738 0 01.555.012.74.74 0 01.238.16l3 3c.14.14.218.329.218.529s-.078.389-.22.53a.749.749 0 01-1.06 0L21 2.559V15c0 4.963-4.037 9-9 9z"}})])
          )
        }
      }
    