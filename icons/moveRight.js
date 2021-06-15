
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
            children.concat([_c('path',{attrs:{"d":"M19.5 16.498a.752.752 0 01-.53-1.281l2.47-2.47h-8.69a.75.75 0 010-1.5h8.689l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3.75 3.75a.74.74 0 01.163.245l.01.026a.736.736 0 01.001.518l-.006.016a.764.764 0 01-.168.257l-3.749 3.749a.743.743 0 01-.53.22zM2.25 23.998A2.252 2.252 0 010 21.748v-19.5a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 019 2.248v19.5a2.252 2.252 0 01-2.25 2.25h-4.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-4.5z"}})])
          )
        }
      }
    