
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
            children.concat([_c('circle',{attrs:{"cx":"13.875","cy":"4.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.125","cy":"1.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.625","cy":"1.125","r":"1.125"}}),_c('path',{attrs:{"d":"M8.3 24a2.242 2.242 0 01-1.873-1.008l-.799-1.198a2.244 2.244 0 01-.378-1.248v-9.52c0-.509.175-1.009.494-1.406L7.44 7.5h-.69a.75.75 0 010-1.5H9L7.65 4.2a.75.75 0 011.2-.9L10.875 6h6.375a.75.75 0 010 1.5h-.69l1.696 2.12c.318.397.494.896.494 1.406v9.52c.001.447-.13.88-.378 1.252l-.8 1.2A2.246 2.246 0 0115.7 24H8.3zM6.915 10.557a.749.749 0 00-.165.469v9.52c0 .148.044.292.126.416l.8 1.2c.14.212.374.338.626.338H15.7a.749.749 0 00.624-.334l.8-1.2a.75.75 0 00.126-.418v-9.522a.746.746 0 00-.165-.468L14.64 7.5H9.361l-2.446 3.057z"}})])
          )
        }
      }
    