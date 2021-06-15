
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 01-.75-.75v-1.245L.156 12.457a.747.747 0 01-.001-.913L7.5 1.995V.75a.75.75 0 011.5 0v.786c4.685.419 8.608 4.666 8.97 9.714h3.469l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.75.75 0 011.061 0l3.75 3.75a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.755.755 0 01-.168.257L20.03 16.28a.744.744 0 01-1.06 0 .749.749 0 010-1.06l2.47-2.47h-3.47c-.362 5.048-4.285 9.295-8.97 9.714v.786a.75.75 0 01-.75.75zm.36-3.013c3.992-.21 7.491-3.897 7.857-8.237H2.273l6.337 8.237zm7.857-9.737C16.1 6.91 12.602 3.223 8.61 3.013L2.273 11.25h14.194z"}})])
          )
        }
      }
    