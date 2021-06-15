
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
            children.concat([_c('circle',{attrs:{"cx":"13.908","cy":"2.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.908","cy":"12.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.658","cy":"15.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.158","cy":"19.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.533","cy":"1.125","r":"1.125"}}),_c('path',{attrs:{"d":"M9.663 24a2.264 2.264 0 01-2.247-2.062L6.103 6.124a1.495 1.495 0 01.354-1.096A1.49 1.49 0 017.6 4.5h1.172l-.112-.671a2.262 2.262 0 00-1.94-1.862l-3.78-.473A.749.749 0 113.125.005l3.781.473a3.773 3.773 0 013.234 3.104l.152.918h9.927c.401 0 .778.156 1.061.44a1.49 1.49 0 01.433 1.183l-1.32 15.815A2.261 2.261 0 0118.153 24h-8.49zm-.753-2.187a.755.755 0 00.747.687h8.495a.754.754 0 00.746-.688l.945-11.312h-8.551l1.48 8.876a.745.745 0 01-.616.863.75.75 0 01-.863-.617L9.772 10.5H7.971l.939 11.313zM19.969 9l.25-3h-9.677l.5 3h8.927zM9.522 9l-.5-3H7.607l-.021.001L7.846 9h1.676z"}})])
          )
        }
      }
    