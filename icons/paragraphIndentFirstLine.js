
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
            children.concat([_c('path',{attrs:{"d":"M6 11.248a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72H.75a.75.75 0 010-1.5h6.439l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.747.747 0 011.061 0l3 3a.736.736 0 01.22.53.735.735 0 01-.048.261l-.007.021a.75.75 0 01-.166.249L6.53 11.028a.743.743 0 01-.53.22zM12.75 3.748a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5zM12.75 8.248a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5zM12.75 12.748a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5zM3.75 17.248a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H3.75zM3.75 21.748a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H3.75z"}})])
          )
        }
      }
    