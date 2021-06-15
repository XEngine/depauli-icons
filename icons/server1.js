
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
            children.concat([_c('circle',{attrs:{"cx":"6.751","cy":"6","r":"1.125"}}),_c('path',{attrs:{"d":"M12.001 6.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM16.501 6.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('circle',{attrs:{"cx":"6.751","cy":"12","r":"1.125"}}),_c('path',{attrs:{"d":"M12.001 12.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM16.501 12.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('circle',{attrs:{"cx":"22.876","cy":"20.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"1.126","cy":"20.625","r":"1.125"}}),_c('path',{attrs:{"d":"M4.501 21.75a.75.75 0 010-1.5h6.75v-4.5H6A3.754 3.754 0 012.25 12c0-1.196.564-2.298 1.505-3A3.733 3.733 0 012.25 6 3.754 3.754 0 016 2.25h12A3.754 3.754 0 0121.75 6a3.733 3.733 0 01-1.505 3 3.733 3.733 0 011.505 3A3.754 3.754 0 0118 15.75h-5.249v4.5h6.75a.75.75 0 010 1.5h-15zM6 9.75A2.252 2.252 0 003.75 12 2.252 2.252 0 006 14.25h12A2.252 2.252 0 0020.25 12 2.252 2.252 0 0018 9.75H6zm0-6C4.759 3.75 3.75 4.759 3.75 6S4.759 8.25 6 8.25h12c1.241 0 2.25-1.009 2.25-2.25S19.241 3.75 18 3.75H6z"}})])
          )
        }
      }
    