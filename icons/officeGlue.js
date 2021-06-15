
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
            children.concat([_c('path',{attrs:{"d":"M8.25 23.998a3.754 3.754 0 01-3.75-3.75v-6a3.743 3.743 0 013-3.673V9a1.488 1.488 0 01.437-1.06 1.49 1.49 0 011.059-.442h.154l1.4-6.204c.177-.787.746-1.296 1.45-1.296.703 0 1.273.509 1.45 1.296l1.4 6.204H15c.827 0 1.5.673 1.5 1.5v1.577c1.732.351 3 1.874 3 3.673v6a3.754 3.754 0 01-3.75 3.75h-7.5zm-2.118-3a2.262 2.262 0 002.118 1.5h7.5c.96 0 1.805-.621 2.118-1.5H6.132zM18 19.498v-4.5H6v4.5h12zm-.132-6a2.262 2.262 0 00-2.118-1.5h-7.5c-.96 0-1.805.621-2.118 1.5h11.736zm-2.868-3v-1.5H8.999l.001 1.5h6zm-1.688-3L12 1.684l-1.312 5.814h2.624z"}})])
          )
        }
      }
    