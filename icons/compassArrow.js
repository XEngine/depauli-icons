
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
            children.concat([_c('path',{attrs:{"d":"M13.374 23.001a1.502 1.502 0 01-1.471-1.205l-1.54-7.699-7.698-1.54a1.502 1.502 0 01-1.176-1.766c.099-.491.433-.899.896-1.09l17.791-7.377a1.496 1.496 0 011.961 1.959L14.76 22.075a1.488 1.488 0 01-.813.812 1.49 1.49 0 01-.573.114zM2.961 11.087l8.188 1.638c.298.059.529.29.588.588l1.638 8.188L20.751 3.71l-17.79 7.377z"}})])
          )
        }
      }
    