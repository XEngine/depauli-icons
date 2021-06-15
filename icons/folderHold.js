
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a.75.75 0 010-1.5h5.25v-3H2.447a.731.731 0 01-.223-.034A2.464 2.464 0 010 17.06V2.25A2.252 2.252 0 012.25 0h4.5C7.99 0 9 1.009 9 2.25V3h9.75C19.99 3 21 4.009 21 5.25V7.5h.75c.601 0 1.166.234 1.591.658a2.235 2.235 0 01.583 2.171l-2.205 7.517a2.244 2.244 0 01-2.169 1.653H12v3h5.25a.75.75 0 010 1.501h-12zm14.3-6a.75.75 0 00.725-.557l2.205-7.518A.746.746 0 0021.75 9H7.878a.755.755 0 00-.721.542l-2.351 8.154a2.285 2.285 0 01-.108.304H19.55zM2.25 1.5a.75.75 0 00-.75.75v14.8a.95.95 0 001.864.235l2.352-8.158A2.261 2.261 0 017.878 7.5H19.5V5.25a.75.75 0 00-.75-.75H8.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5zM.75 24a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H.75zM20.25 24a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    