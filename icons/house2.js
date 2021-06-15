
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
            children.concat([_c('path',{attrs:{"d":"M4.458 21.923a.75.75 0 01-.75-.75V10.982l-1.719 1.721a.748.748 0 01-1.281-.53c0-.201.078-.389.22-.53L10.362 2.2a2.236 2.236 0 011.588-.655c.603 0 1.168.234 1.593.66l9.445 9.438a.751.751 0 01-1.061 1.062l-1.72-1.719v10.188a.75.75 0 01-.75.75H4.458zm14.25-1.5V9.486l-6.231-6.227a.745.745 0 00-.526-.215c-.2 0-.388.077-.529.217l-6.214 6.22v10.942h3v-3.75a3.754 3.754 0 013.75-3.75 3.754 3.754 0 013.75 3.75v3.75h3zm-4.5 0v-3.75a2.252 2.252 0 00-2.25-2.25 2.252 2.252 0 00-2.25 2.25v3.75h4.5z"}})])
          )
        }
      }
    