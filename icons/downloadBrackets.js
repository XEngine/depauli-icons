
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
            children.concat([_c('path',{attrs:{"d":"M12.001 18.75a.75.75 0 01-.75-.75V7.811l-3.22 3.22a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.47 5.47a.74.74 0 01.245-.163l.026-.01a.735.735 0 01.521.001l.021.007c.091.038.17.089.238.154l4.511 4.511c.142.141.22.33.22.53s-.078.389-.22.53a.744.744 0 01-1.06 0l-3.22-3.22V18a.752.752 0 01-.751.75z"}}),_c('path',{attrs:{"d":"M18 24a.75.75 0 010-1.5h3.75a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H18A.75.75 0 0118 0h3.75C22.99 0 24 1.009 24 2.25v19.5c0 1.241-1.01 2.25-2.25 2.25H18zM2.251 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.251 0H6a.75.75 0 010 1.5H2.251a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75H6A.75.75 0 016 24H2.251z"}})])
          )
        }
      }
    