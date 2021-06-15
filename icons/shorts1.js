
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
            children.concat([_c('path',{attrs:{"d":"M15.641 22.5a1.492 1.492 0 01-1.482-1.272l-1.172-7.632a.992.992 0 00-.987-.847.992.992 0 00-.987.847l-1.174 7.632A1.492 1.492 0 018.356 22.5H2.25A2.252 2.252 0 010 20.25v-17C0 2.285.785 1.5 1.75 1.5h20.5c.965 0 1.75.785 1.75 1.75v17a2.252 2.252 0 01-2.25 2.25h-6.109zM12 11.25c1.242 0 2.281.891 2.469 2.119L15.641 21H19.5V6h-4.959l1.171 3.513A.746.746 0 0115 10.5a.75.75 0 01-.712-.513L12.959 6H11.04L9.711 9.987a.748.748 0 01-1.382.098.739.739 0 01-.04-.572L9.459 6H4.5v15h3.856l1.175-7.631A2.483 2.483 0 0112 11.25zM21.75 21a.75.75 0 00.75-.75V6H21v15h.75zM1.5 20.25c0 .414.336.75.75.75H3V6H1.5v14.25zm21-15.75V3.25a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25V4.5h21z"}})])
          )
        }
      }
    