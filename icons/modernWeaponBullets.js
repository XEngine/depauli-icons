
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 010-1.5H3V6.407c0-1.914.745-3.713 2.099-5.066C5.539.9 6.126.658 6.75.658S7.961.9 8.401 1.34A7.118 7.118 0 0110.5 6.407V22.5h.75a.75.75 0 010 1.5h-9zM9 22.5v-15H4.5v15H9zM8.986 6a5.633 5.633 0 00-1.645-3.599c-.158-.157-.367-.244-.591-.244s-.433.087-.591.244A5.633 5.633 0 004.514 6h4.472zM17.25 23.342a2.32 2.32 0 01-1.651-.682 7.122 7.122 0 01-2.099-5.067V1.5h-.75a.75.75 0 010-1.5h9a.75.75 0 010 1.5H21v16.093a7.118 7.118 0 01-2.099 5.066 2.316 2.316 0 01-1.651.683zM15.014 18a5.625 5.625 0 001.645 3.599c.157.157.367.244.591.244s.433-.087.591-.244a5.623 5.623 0 001.645-3.598h-4.472zm4.486-1.5v-15H15v15h4.5z"}})])
          )
        }
      }
    