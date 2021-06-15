
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
            children.concat([_c('path',{attrs:{"d":"M23.25 20.998a.75.75 0 01-.75-.75v-9a.75.75 0 00-.75-.75H2.561l3.97 3.97a.744.744 0 010 1.06.747.747 0 01-1.061 0l-5.25-5.25a.74.74 0 01-.163-.245l-.01-.026a.75.75 0 01.001-.52l.007-.021a.75.75 0 01.166-.249L5.47 3.968c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-3.97 3.97h19.19a2.252 2.252 0 012.25 2.25v9a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    