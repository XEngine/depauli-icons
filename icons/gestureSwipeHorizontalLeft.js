
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
            children.concat([_c('path',{attrs:{"d":"M12.749 13.498a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M17.249 24a.75.75 0 01-.75-.75V12c0-1.654-1.346-3-3-3s-3 1.346-3 3v11.248a.75.75 0 01-1.5 0V12c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v11.25a.75.75 0 01-.75.75zM.748 7.498a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v3.004A18.907 18.907 0 0111.746.026 18.913 18.913 0 0123.685 3.52a.75.75 0 01-.438 1.359.744.744 0 01-.437-.141 17.408 17.408 0 00-10.984-3.214A17.324 17.324 0 001.498 5.676v.322h5.25a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    