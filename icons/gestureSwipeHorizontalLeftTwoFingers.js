
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
            children.concat([_c('path',{attrs:{"d":"M.749 7.498a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v3.004A18.904 18.904 0 0111.747.026 18.915 18.915 0 0123.686 3.52a.75.75 0 01-.438 1.359.744.744 0 01-.437-.141 17.404 17.404 0 00-10.984-3.214A17.324 17.324 0 001.499 5.676v.322h5.25a.75.75 0 010 1.5h-6zM8.249 17.998a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.749 16.498a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M20.249 24a.75.75 0 01-.75-.75V15c0-1.654-1.346-3-3-3s-3 1.346-3 3v8.248a.75.75 0 11-1.5.002V16.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v6.748a.75.75 0 01-1.5 0V16.5c0-2.481 2.019-4.5 4.5-4.5 1.259 0 2.44.523 3.285 1.429a4.5 4.5 0 014.215-2.929c2.481 0 4.5 2.019 4.5 4.5v8.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    