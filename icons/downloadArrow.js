
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
            children.concat([_c('path',{attrs:{"d":"M.751 22.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.751zM12.001 17.189c-.401 0-.778-.156-1.06-.439a.76.76 0 01-.131-.177L3.09 2.103a.747.747 0 01.308-1.015.745.745 0 011.014.308L12 15.619l7.588-14.223a.751.751 0 011.324.708l-7.72 14.47a.725.725 0 01-.131.177c-.283.282-.66.438-1.06.438z"}})])
          )
        }
      }
    