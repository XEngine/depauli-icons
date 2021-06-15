
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
            children.concat([_c('path',{attrs:{"d":"M10.5 12.75a.75.75 0 01-.75-.75V8.25A3.754 3.754 0 0113.5 4.5h6.439l-3.22-3.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.75.75 0 011.061 0l4.5 4.5a.74.74 0 01.163.245l.01.026a.748.748 0 010 .517l-.006.016a.764.764 0 01-.168.257L17.78 10.28a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L19.939 6H13.5a2.252 2.252 0 00-2.25 2.25V12a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 013.75 7.5H6A.75.75 0 016 9H3.75a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-7.5a.75.75 0 011.5 0v7.5A2.252 2.252 0 0117.25 24H3.75z"}})])
          )
        }
      }
    