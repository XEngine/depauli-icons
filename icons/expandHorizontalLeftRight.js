
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
            children.concat([_c('path',{attrs:{"d":"M9.751 23.998a.75.75 0 01-.75-.75v-10.5H2.562l2.47 2.47a.744.744 0 010 1.06.744.744 0 01-1.06 0l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.737.737 0 01.001-.521l.007-.021a.754.754 0 01.166-.25l3.749-3.749a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47h6.439V.746a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.752zM14.251 23.998a.75.75 0 01-.75-.75V.748a.75.75 0 011.5 0v10.5h6.439l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3.75 3.75a.74.74 0 01.163.245l.01.026a.73.73 0 010 .518l-.006.016a.755.755 0 01-.168.257l-3.749 3.749a.744.744 0 01-1.06 0 .749.749 0 010-1.06l2.47-2.47h-6.439v10.5a.75.75 0 01-.75.749z"}})])
          )
        }
      }
    