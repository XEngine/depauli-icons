
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503H2.26v12.75zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M7.51 19.503a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v6a2.252 2.252 0 01-2.25 2.25h-9zm-.75-2.25c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.647l-4.057 2.536a2.24 2.24 0 01-1.193.34 2.25 2.25 0 01-1.193-.34L6.76 12.606v4.647zm4.852-3.382a.758.758 0 00.795 0l4.761-2.977a.75.75 0 00-.659-.391h-9a.75.75 0 00-.659.391l4.762 2.977z"}})])
          )
        }
      }
    