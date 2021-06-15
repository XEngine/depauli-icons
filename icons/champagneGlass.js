
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
            children.concat([_c('path',{attrs:{"d":"M9.001 24a.75.75 0 010-1.5h2.25v-4.556a4.99 4.99 0 01-2.01-.78 4.952 4.952 0 01-2.185-4.721l1.13-11.095A1.497 1.497 0 019.679 0h4.644c.772 0 1.414.579 1.493 1.347l1.131 11.107a4.946 4.946 0 01-2.187 4.711 4.993 4.993 0 01-2.01.78V22.5H15a.75.75 0 01.001 1.5h-6zm3.041-7.498a3.455 3.455 0 001.887-.586l.006-.004a3.456 3.456 0 001.521-3.295L14.935 7.5H9.068l-.52 5.106a3.465 3.465 0 001.525 3.309 3.461 3.461 0 001.929.584l.04.003zM14.783 6l-.458-4.5H9.679L9.22 6h5.563z"}}),_c('circle',{attrs:{"cx":"10.876","cy":"9.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.876","cy":"13.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.126","cy":"11.625","r":"1.125"}})])
          )
        }
      }
    