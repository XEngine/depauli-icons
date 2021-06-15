
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
            children.concat([_c('path',{attrs:{"d":"M5.253 23.998a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165L.223 19.279a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3.22 3.22V6.748a2.252 2.252 0 012.25-2.25h14.689l-3.22-3.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l4.5 4.5a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257l-4.499 4.499a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.22-3.22H6.753a.75.75 0 00-.75.75v14.689l3.22-3.22a.744.744 0 011.06 0 .752.752 0 010 1.061l-4.5 4.5a.763.763 0 01-.246.164l-.027.01a.746.746 0 01-.257.046z"}})])
          )
        }
      }
    