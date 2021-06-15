
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24a4.505 4.505 0 01-4.5-4.5v-15c0-1.654-1.346-3-3-3s-3 1.346-3 3v15.438l2.47-2.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.75 3.75a.763.763 0 01-.246.164l-.027.01a.755.755 0 01-.518 0l-.022-.008a.732.732 0 01-.249-.165L.22 18.528c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.744.744 0 011.06 0l2.47 2.47V4.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v15c0 1.654 1.346 3 3 3s3-1.346 3-3V4.059l-2.47 2.47a.744.744 0 01-1.06 0 .747.747 0 010-1.061l3.75-3.75a.75.75 0 01.245-.163l.024-.009a.738.738 0 01.555.012.74.74 0 01.238.16l3.75 3.75a.75.75 0 01-.002 1.06.749.749 0 01-1.06 0l-2.47-2.47V19.5c0 2.481-2.019 4.5-4.5 4.5z"}})])
          )
        }
      }
    