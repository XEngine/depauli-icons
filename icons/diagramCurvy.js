
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24A6.758 6.758 0 010 17.25a.75.75 0 011.5 0c0 2.895 2.355 5.25 5.25 5.25S12 20.145 12 17.25v-7.5a5.256 5.256 0 015.25-5.25h4.189l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026a.709.709 0 01.001.517l-.006.016a.764.764 0 01-.168.257L20.78 8.78c-.141.142-.33.22-.53.22s-.389-.078-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L21.439 6H17.25a3.754 3.754 0 00-3.75 3.75v7.5A6.758 6.758 0 016.75 24zM.75 15a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM.75 9A.75.75 0 010 8.25v-3a.75.75 0 011.5 0v3A.75.75 0 01.75 9zM.75 3A.75.75 0 010 2.25V.75a.75.75 0 011.5 0v1.5A.75.75 0 01.75 3z"}})])
          )
        }
      }
    