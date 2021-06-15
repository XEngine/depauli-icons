
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
            children.concat([_c('path',{attrs:{"d":"M9 16.497a.743.743 0 01-.53-.22l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.75.75 0 01.009-.541.74.74 0 01.166-.249L8.47 7.717c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47h16.19a.75.75 0 010 1.5H7.061l2.47 2.47A.75.75 0 019 16.497zM.75 23.247a.75.75 0 01-.75-.75v-21a.75.75 0 011.5 0v21a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    