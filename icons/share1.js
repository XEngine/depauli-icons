
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75v-12A2.252 2.252 0 015.25 7.5h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-1.5a.75.75 0 010-1.5h1.5A2.252 2.252 0 0121 9.75v12A2.252 2.252 0 0118.75 24H5.25z"}}),_c('path',{attrs:{"d":"M12 12a.75.75 0 01-.75-.75V2.561L8.78 5.03c-.141.142-.33.22-.53.22s-.389-.078-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.469.221a.74.74 0 01.245-.163l.025-.009a.723.723 0 01.522-.001l.02.007c.097.04.179.095.25.166L16.28 3.97c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47v8.689A.75.75 0 0112 12z"}})])
          )
        }
      }
    