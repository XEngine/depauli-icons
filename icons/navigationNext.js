
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
            children.concat([_c('path',{attrs:{"d":"M8.25 14.247a.75.75 0 01-.75-.75c0-2.481 2.019-4.5 4.5-4.5h9.44l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026a.73.73 0 010 .518l-.006.016a.764.764 0 01-.168.257l-2.999 2.999a.744.744 0 01-1.06 0 .749.749 0 010-1.06l1.72-1.72H12c-1.654 0-3 1.346-3 3a.75.75 0 01-.75.749z"}}),_c('path',{attrs:{"d":"M2.251 20.997a2.252 2.252 0 01-2.25-2.25v-13.5a2.252 2.252 0 012.25-2.25h13.5a2.252 2.252 0 012.25 2.25.75.75 0 01-1.5 0 .75.75 0 00-.75-.75h-13.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-4.5a.75.75 0 011.5 0v4.5a2.252 2.252 0 01-2.25 2.25h-13.5z"}})])
          )
        }
      }
    