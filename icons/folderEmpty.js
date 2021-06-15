
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
            children.concat([_c('path',{attrs:{"d":"M2.447 22.5a.731.731 0 01-.223-.034A2.464 2.464 0 010 20.06V3.75A2.252 2.252 0 012.25 1.5h4.5C7.99 1.5 9 2.509 9 3.75v.75h9.75C19.99 4.5 21 5.509 21 6.75V9h.75c.601 0 1.166.234 1.591.658a2.235 2.235 0 01.583 2.171l-2.196 8.985A2.258 2.258 0 0119.55 22.5H2.447zM19.55 21a.75.75 0 00.725-.557l2.196-8.985a.746.746 0 00-.721-.958H7.878a.754.754 0 00-.721.541l-2.342 9.625a2.81 2.81 0 01-.119.334H19.55zM2.25 3a.75.75 0 00-.75.75v16.3a.95.95 0 001.864.235l2.344-9.631A2.276 2.276 0 017.877 9H19.5V6.75a.75.75 0 00-.75-.75H8.25a.75.75 0 01-.75-.75v-1.5A.75.75 0 006.75 3h-4.5z"}})])
          )
        }
      }
    