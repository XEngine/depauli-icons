
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9 17.25a.75.75 0 01-.75-.75v-3A3.754 3.754 0 0112 9.75h2.689l-.97-.97c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l2.25 2.25a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257L14.78 13.28a.744.744 0 01-1.06 0 .752.752 0 010-1.061l.97-.97H12a2.252 2.252 0 00-2.25 2.25v3a.75.75 0 01-.75.751z"}})])
          )
        }
      }
    