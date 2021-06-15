
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
            children.concat([_c('path',{attrs:{"d":"M12.001 18.75a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-4.499-4.5a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3.22 3.22V6a.75.75 0 011.5 0v10.19l3.22-3.22a.744.744 0 011.06 0 .752.752 0 010 1.061l-4.5 4.5a.756.756 0 01-.245.163l-.026.01a.767.767 0 01-.259.046z"}}),_c('path',{attrs:{"d":"M2.251 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.251 0H6a.75.75 0 010 1.5H2.251a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75H6A.75.75 0 016 24H2.251zM18 24a.75.75 0 010-1.5h3.75a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H18A.75.75 0 0118 0h3.75C22.99 0 24 1.009 24 2.25v19.5c0 1.241-1.01 2.25-2.25 2.25H18z"}})])
          )
        }
      }
    