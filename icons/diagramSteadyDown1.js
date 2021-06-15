
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
            children.concat([_c('path',{attrs:{"d":"M.858 2.665a.75.75 0 01-.744-.66A21.019 21.019 0 01.001.799.747.747 0 01.699.002C.715 0 .733 0 .751 0a.75.75 0 01.746.701c.025.376.06.755.105 1.124a.75.75 0 01-.744.84zM1.799 6.794a.749.749 0 01-.71-.51 21.24 21.24 0 01-.595-2.111.75.75 0 011.463-.333c.15.661.336 1.321.553 1.963a.746.746 0 01-.471.951.728.728 0 01-.24.04zM3.976 11.329a.745.745 0 01-.631-.345 21.586 21.586 0 01-1.427-2.601.75.75 0 011.362-.628c.385.834.832 1.648 1.327 2.419a.749.749 0 01-.631 1.155zM20.249 24a.749.749 0 01-.53-1.28l1.729-1.729a21.645 21.645 0 01-16.784-8.17.747.747 0 01.585-1.218c.229 0 .443.103.586.282a20.157 20.157 0 0015.594 7.606l-1.71-1.71a.744.744 0 010-1.06.749.749 0 011.06 0l2.937 2.937a.744.744 0 01.282.547v.051l-.002.03a.735.735 0 01-.044.22c-.008.023-.021.049-.034.076a.821.821 0 01-.069.11.45.45 0 01-.069.09l-3 3a.753.753 0 01-.531.218z"}})])
          )
        }
      }
    