
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V2.561l-9.22 9.22a.746.746 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.469.22a.74.74 0 01.245-.163l.025-.009a.743.743 0 01.522 0l.021.007c.097.04.179.095.25.166L23.03 10.72c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-9.22-9.22v20.69A.75.75 0 0112 24z"}})])
          )
        }
      }
    