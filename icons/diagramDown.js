
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
            children.concat([_c('path',{attrs:{"d":"M20.249 24a.749.749 0 01-.53-1.28l1.729-1.729C10.176 20.9.774 12.064.001.801A.742.742 0 01.184.257.742.742 0 01.698.002C.715 0 .732 0 .75 0c.392 0 .72.307.747.699.719 10.473 9.456 18.691 19.932 18.792l-1.711-1.711a.744.744 0 010-1.06.749.749 0 011.06 0l2.937 2.937a.744.744 0 01.282.547v.051l-.002.03a.735.735 0 01-.044.22c-.008.023-.021.049-.034.076a.821.821 0 01-.069.11.45.45 0 01-.069.09l-3 3a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    