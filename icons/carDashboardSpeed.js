
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 13.5a2.252 2.252 0 01-2.25-2.25 2.248 2.248 0 013.71-1.709l5.31-3.066a.748.748 0 011.025.274.749.749 0 01-.274 1.025l-5.309 3.065A2.254 2.254 0 0112 13.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9 19.5c-1.241 0-2.25-1.009-2.25-2.25S7.759 15 9 15h6c1.241 0 2.25 1.009 2.25 2.25S16.241 19.5 15 19.5H9zm0-3A.75.75 0 009 18h6a.75.75 0 000-1.5H9zM9.691 5.657a.753.753 0 01-.705-.493l-.513-1.409a.751.751 0 01.704-1.006c.314 0 .597.198.705.493l.513 1.409a.751.751 0 01-.704 1.006zM6.154 8.625a.75.75 0 01-.375-.101l-1.299-.75a.743.743 0 01-.349-.455.74.74 0 01.075-.569.754.754 0 011.024-.275l1.299.75c.173.1.298.262.349.455a.751.751 0 01-.724.945zM3.875 13.433a.751.751 0 01-.13-1.489l1.478-.261a.748.748 0 01.869.609.751.751 0 01-.608.869l-1.478.261a.837.837 0 01-.131.011zM14.309 5.657a.752.752 0 01-.68-.433.752.752 0 01-.025-.574l.513-1.409a.752.752 0 011.385-.06.752.752 0 01.025.574l-.513 1.409a.753.753 0 01-.705.493zM20.125 13.433a.837.837 0 01-.131-.011l-1.478-.261a.751.751 0 01.261-1.478l1.478.261a.751.751 0 01-.13 1.489z"}})])
          )
        }
      }
    