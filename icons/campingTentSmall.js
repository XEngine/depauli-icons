
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
            children.concat([_c('path',{attrs:{"d":"M3.75 1.5a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75zM3.75 4.5a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM.75 24a.75.75 0 010-1.5h2.579l7.391-12.091a1.489 1.489 0 011.282-.718 1.498 1.498 0 011.278.718L20.671 22.5h2.579a.75.75 0 010 1.5H.75zm18.162-1.5L12 11.191 5.087 22.5h3.477l2.133-3.732a1.491 1.491 0 011.302-.754 1.492 1.492 0 011.298.753l2.136 3.734h3.479zm-5.205 0L12 19.515 10.293 22.5h3.414z"}})])
          )
        }
      }
    