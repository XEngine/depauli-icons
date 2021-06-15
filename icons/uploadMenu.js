
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75v-7.939l-2.47 2.47a.746.746 0 01-1.06-.001.752.752 0 010-1.061l3.75-3.75a.763.763 0 01.246-.164l.027-.01a.755.755 0 01.518 0l.022.008a.732.732 0 01.249.165l3.749 3.749a.752.752 0 01-1.061 1.063l-2.47-2.47v7.939A.75.75 0 0112 24zM.75 1.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 6a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 10.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    