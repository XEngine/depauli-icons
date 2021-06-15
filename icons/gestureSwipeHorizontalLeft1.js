
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
            children.concat([_c('path',{attrs:{"d":"M15.748 14.998a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M12.748 24a.75.75 0 01-.75-.75V13.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v9.748a.75.75 0 01-1.5 0V13.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v9.75a.75.75 0 01-.75.75zM.747 10.498a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v5.25h5.25a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M3.747 7.498a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v3.148a21.031 21.031 0 019.745-2.411c3.206 0 6.435.76 9.337 2.196a.751.751 0 01-.332 1.423.754.754 0 01-.333-.078 19.648 19.648 0 00-8.668-2.039c-3.406 0-6.772.907-9.749 2.625V6h5.25a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    