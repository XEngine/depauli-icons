
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h3v-2.25h-7.5A2.252 2.252 0 011.5 18V8.25A2.252 2.252 0 013.75 6h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v7.5h18v-7.5a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3a2.252 2.252 0 012.25 2.25V18a2.252 2.252 0 01-2.25 2.25h-7.5v2.25h3a.75.75 0 010 1.5h-7.5zM3 18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-.75H3V18z"}}),_c('path',{attrs:{"d":"M12 13.5a.75.75 0 01-.75-.75V2.561L9.53 4.28c-.141.142-.33.22-.53.22s-.389-.078-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.469.221a.74.74 0 01.245-.163l.025-.009a.723.723 0 01.522-.001l.02.007c.097.04.179.095.25.166L15.53 3.22c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-1.72-1.72v10.19a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    