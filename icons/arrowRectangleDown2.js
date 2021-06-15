
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
            children.concat([_c('path',{attrs:{"d":"M2.75 24A2.754 2.754 0 010 21.25V2.75A2.754 2.754 0 012.75 0h18.5A2.754 2.754 0 0124 2.75v18.5A2.754 2.754 0 0121.25 24H2.75zm0-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25H2.75z"}}),_c('path',{attrs:{"d":"M12 18.351c-.362 0-.719-.119-1.006-.335l-5.628-4.377a2.19 2.19 0 01-.866-1.71V7.5a1.608 1.608 0 012.621-1.146L12 10.15l4.891-3.804a1.58 1.58 0 011.158-.348 1.607 1.607 0 011.453 1.504v4.417a2.21 2.21 0 01-.877 1.73l-5.607 4.361a1.705 1.705 0 01-1.018.341zm-6-6.433a.696.696 0 00.275.529l5.63 4.379a.166.166 0 00.094.028.173.173 0 00.106-.035l5.609-4.362a.702.702 0 00.286-.548V7.565a.103.103 0 00-.02-.035.104.104 0 00-.073-.039h-.003a.11.11 0 00-.076.024l-5.37 4.177a.742.742 0 01-.918 0L6.189 7.529c-.034-.027-.053-.035-.074-.038L6.1 7.49a.108.108 0 00-.1.074v4.354z"}})])
          )
        }
      }
    