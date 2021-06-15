
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a.747.747 0 01-.75-.75V19.5H2.25A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v15a2.252 2.252 0 01-2.25 2.25H11.5l-5.8 4.35a.753.753 0 01-.45.15zm-3-22.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3l4.8-3.6a.753.753 0 01.45-.15h10.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H2.25z"}}),_c('circle',{attrs:{"cx":"7.5","cy":"9.75","r":"1.125"}}),_c('path',{attrs:{"d":"M12 10.875c-.62 0-1.125-.505-1.125-1.125 0-.599.468-1.09 1.067-1.121l.03-.003-.026.002a1.127 1.127 0 011.179 1.122c0 .62-.505 1.125-1.125 1.125zM16.5 10.875c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.172-1.122l.024.002c.583.027 1.054.52 1.054 1.12 0 .62-.505 1.125-1.125 1.125z"}})])
          )
        }
      }
    