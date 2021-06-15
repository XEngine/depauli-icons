
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
            children.concat([_c('path',{attrs:{"d":"M20.999 24a3.016 3.016 0 01-2.902-2.25H9.749a.75.75 0 010-1.5h8.349a3.018 3.018 0 012.151-2.151V9.565a9.525 9.525 0 01-3.016-1.738l-8.984 8.984V19.5c0 .198-.08.391-.22.53l-3.75 3.75a.741.741 0 01-.817.163.747.747 0 01-.463-.693V21H.749a.747.747 0 01-.693-.463.745.745 0 01.163-.817l3.75-3.75a.744.744 0 01.53-.22h2.689l8.983-8.983a9.466 9.466 0 01-1.731-2.994l-.01-.025-8.529.002a3.02 3.02 0 01-2.152 2.151v8.349a.75.75 0 01-1.5 0V5.902A3.016 3.016 0 01-.001 3c0-1.654 1.346-3 3-3 1.37 0 2.564.947 2.902 2.25h8.533c.656 0 1.229.42 1.428 1.044a7.962 7.962 0 001.373 2.409L21.439 1.5H19.5a.75.75 0 01-.001-1.5h3.75c.089 0 .176.016.261.048l.031.012a.754.754 0 01.401.405l.01.026a.73.73 0 01.047.26V4.5a.75.75 0 01-1.5 0V2.561l-4.203 4.203a8.019 8.019 0 002.434 1.382 1.48 1.48 0 011.019 1.42v8.533a3.016 3.016 0 012.25 2.902 3.003 3.003 0 01-3 2.999zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-17.25 0a.75.75 0 01.75.75v1.189l2.25-2.25V17.25H4.81L2.56 19.5h1.189zm-.75-18c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    