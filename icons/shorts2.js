
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
            children.concat([_c('path',{attrs:{"d":"M15.9 21a2.24 2.24 0 01-2.219-1.905l-.736-4.741a.96.96 0 00-.946-.848.946.946 0 00-.941.829l-.734 4.76A2.238 2.238 0 018.1 21H3a2.252 2.252 0 01-2.25-2.25v-14C.75 3.785 1.535 3 2.5 3h19c.965 0 1.75.785 1.75 1.75v14A2.252 2.252 0 0121 21h-5.1zm-3.904-8.995a2.452 2.452 0 012.434 2.137l.734 4.723a.746.746 0 00.739.635H21a.75.75 0 00.75-.75v-6.808A5.29 5.29 0 0117.309 7.5H6.692a5.291 5.291 0 01-4.442 4.442v6.808c0 .414.336.75.75.75h5.1a.746.746 0 00.742-.635l.73-4.737a2.428 2.428 0 01.932-1.612 2.422 2.422 0 011.492-.511zM2.25 10.423A3.745 3.745 0 005.173 7.5H2.25v2.923zM18.827 7.5a3.745 3.745 0 002.923 2.923V7.5h-2.923zM21.75 6V4.75a.25.25 0 00-.25-.25h-19a.25.25 0 00-.25.25V6h19.5z"}})])
          )
        }
      }
    