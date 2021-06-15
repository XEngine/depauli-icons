
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
            children.concat([_c('path',{attrs:{"d":"M15.745 24a.75.75 0 01-.75-.75V18c0-1.654-1.346-3-3-3s-3 1.346-3 3v5.247a.75.75 0 01-.75.75H1.723a1.736 1.736 0 01-1.728-1.726V9.747a1.95 1.95 0 01.618-1.351.78.78 0 01.058-.048l10.878-8.2a.755.755 0 01.903 0l10.868 8.2a1.926 1.926 0 01.674 1.357l.001 12.568a1.738 1.738 0 01-1.727 1.728H15.745zm6.521-1.5a.231.231 0 00.229-.231V9.747a.414.414 0 00-.116-.229L12 1.687 1.611 9.518a.427.427 0 00-.117.271l.001 12.481a.23.23 0 00.23.228h5.77V18c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v4.5h5.771z"}})])
          )
        }
      }
    