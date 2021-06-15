
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
            children.concat([_c('path',{attrs:{"d":"M8.01 15.5a.75.75 0 01-.75-.75V9.811l-5.78-5.78a.747.747 0 010-1.061c.141-.142.33-.22.53-.22s.389.078.53.22l4.72 4.72V1.25a.75.75 0 011.5 0v6.439l4.72-4.72a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-5.78 5.78v4.939a.751.751 0 01-.75.752zM10.26 23a.752.752 0 01-.53-1.281l3.53-3.53V10.25a.75.75 0 011.5 0v6.439l5.47-5.47a.744.744 0 011.06 0 .747.747 0 010 1.061l-5.47 5.469h6.439a.75.75 0 010 1.5H14.32l-3.53 3.53a.741.741 0 01-.53.221z"}})])
          )
        }
      }
    