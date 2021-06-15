
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
            children.concat([_c('path',{attrs:{"d":"M19.5 16.498a.749.749 0 01-.53-1.28l2.47-2.47H2.561l2.47 2.47a.744.744 0 010 1.06.744.744 0 01-1.06 0l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.728.728 0 01.008-.541.74.74 0 01.166-.249L3.97 7.718a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47h18.879l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3.75 3.75a.74.74 0 01.163.245l.01.026a.709.709 0 01.001.517l-.006.016a.755.755 0 01-.168.257l-3.749 3.749a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    