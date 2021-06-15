
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25c-.413 0-.82-.115-1.175-.334l-.014-.009A2.239 2.239 0 010 18V6a2.244 2.244 0 011.065-1.91 2.23 2.23 0 011.185-.34h19.5c.422 0 .836.12 1.196.347.003.002.021.012.038.024A2.24 2.24 0 0124 6v12a2.237 2.237 0 01-1.093 1.926 2.213 2.213 0 01-1.157.324H2.25zm18.244-1.5L12 12.91l-8.494 5.84h16.988zm1.954-.477A.736.736 0 0022.5 18V6a.746.746 0 00-.052-.274L13.324 12l9.124 6.273zM1.552 5.726A.746.746 0 001.5 6v12a.76.76 0 00.051.273L10.676 12 1.552 5.726zM12 11.09l8.494-5.84H3.506L12 11.09z"}}),_c('path',{attrs:{"d":"M9.75 17.25a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    