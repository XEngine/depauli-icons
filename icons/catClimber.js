
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0V4.5H15V.75a.75.75 0 011.5 0v10.5a.75.75 0 01-1.5 0V6H1.5v17.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V15H9v8.25a.75.75 0 01-1.5 0V10.5a.75.75 0 011.5 0v3h13.5v-3a.75.75 0 011.5 0v12.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    