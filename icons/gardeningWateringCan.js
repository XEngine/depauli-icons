
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
            children.concat([_c('path',{attrs:{"d":"M8.25 21.75A2.253 2.253 0 016 19.5v-3.559L1.862 8.354 1.2 8.85a.753.753 0 01-1.192-.706A.745.745 0 01.3 7.65l3-2.25a.753.753 0 011.05.15.75.75 0 01-.15 1.05l-1.125.844L6 12.809V7.5a5.256 5.256 0 015.25-5.25H18c2.955.004 5.505 2.211 5.931 5.135a5.965 5.965 0 01-1.127 4.453 5.975 5.975 0 01-3.304 2.216V19.5a2.252 2.252 0 01-2.25 2.25h-9zm3-18A3.755 3.755 0 007.5 7.5v12c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V9.75h-1.993a2.996 2.996 0 01-2.91-2.267l-.932-3.733h-.915zm3.302 3.368a1.498 1.498 0 001.454 1.132h2.744a.75.75 0 01.75.75v3.49c1.984-.708 3.257-2.766 2.947-4.888a4.525 4.525 0 00-4.448-3.851H13.71l.842 3.367z"}})])
          )
        }
      }
    