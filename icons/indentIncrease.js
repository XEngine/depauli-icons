
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
            children.concat([_c('path',{attrs:{"d":"M.75 3.748a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 8.248a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM.75 12.748a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM.75 17.248a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM.75 21.748a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM16.499 18.746c-.401 0-.777-.156-1.06-.44a1.49 1.49 0 01-.439-1.06V7.367c0-.396.161-.784.441-1.063a1.49 1.49 0 011.059-.437c.402 0 .779.157 1.062.441l4.956 4.956c.559.598.554 1.52-.012 2.098l-4.945 4.945c-.279.28-.666.44-1.061.44h-.001zm.001-1.5l4.94-4.939-.003.002c-.004 0-.006-.011-.014-.02L16.5 7.367v9.879z"}})])
          )
        }
      }
    