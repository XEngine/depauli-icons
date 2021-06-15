
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75v-.75h-15v.75a.75.75 0 01-1.5 0v-.75h-.75A2.252 2.252 0 010 20.25v-12A2.252 2.252 0 012.25 6H4.5V3.75a.75.75 0 011.5 0V6h15.75A2.252 2.252 0 0124 8.25v12a2.252 2.252 0 01-2.25 2.25H21v.75a.75.75 0 01-.75.75zm-18-16.5a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M18.856 15.004c-.043 0-.087-.001-.13-.004H5.262A2.167 2.167 0 013 12.964v-1.928a2.17 2.17 0 012.285-2.035L18.738 9a2.17 2.17 0 012.26 1.974l.002.062v1.928l-.002.058a2.166 2.166 0 01-2.142 1.982zM18.75 13.5l.101.004a.652.652 0 00.649-.577v-1.854a.662.662 0 00-.651-.577l-.099.004H16.5v3h2.25zM4.5 12.927a.66.66 0 00.651.576l.099-.003H15v-3H5.25l-.096-.003a.664.664 0 00-.654.576v1.854zM8.25 19.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM5.25 2.25a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM1.5 4.5a.75.75 0 010-1.5h.75a.75.75 0 010 1.5H1.5zM8.25 4.5a.75.75 0 010-1.5H9a.75.75 0 010 1.5h-.75z"}}),_c('circle',{attrs:{"cx":"4.125","cy":"18.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.875","cy":"18.375","r":"1.125"}})])
          )
        }
      }
    