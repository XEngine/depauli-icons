
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
            children.concat([_c('path',{attrs:{"d":"M6.542 23.5a2.264 2.264 0 01-2.226-1.917L2.354 8.5H1.75C.785 8.5 0 7.715 0 6.75v-4C0 1.785.785 1 1.75 1h20.5c.965 0 1.75.785 1.75 1.75v4c0 .965-.785 1.75-1.75 1.75h-.604l-1.962 13.083a2.264 2.264 0 01-2.225 1.917H6.542zM5.8 21.361c.055.37.367.639.742.639h10.917a.754.754 0 00.742-.639L18.554 19H5.446l.354 2.361zM18.779 17.5l.45-3H4.771l.45 3h13.558zm.675-4.5l.675-4.5H3.871l.675 4.5h14.908zM1.75 2.5a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H1.75z"}})])
          )
        }
      }
    