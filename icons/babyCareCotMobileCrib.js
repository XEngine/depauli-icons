
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-10.5a.75.75 0 011.5 0v2.25h21v-2.25a.75.75 0 011.5 0v10.5A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V15h-3v7.5h2.25zm-3.75 0V15h-3v7.5h3zm-4.5 0V15h-3v7.5h3zm-4.5 0V15H6v7.5h3zm-7.5-.75c0 .414.336.75.75.75H4.5V15h-3v6.75zM21 9a2.252 2.252 0 01-2.25-2.25c0-.646.271-1.246.75-1.673V3h-3v1.629A2.258 2.258 0 0118 6.75C18 7.991 16.991 9 15.75 9S13.5 7.991 13.5 6.75c0-.96.615-1.808 1.5-2.121V3h-3v2.077c.479.427.75 1.027.75 1.673C12.75 7.991 11.741 9 10.5 9S8.25 7.991 8.25 6.75 9.259 4.5 10.5 4.5V3h-.75a.75.75 0 010-1.5H15V.75a.75.75 0 011.5 0v.75h5.25a.75.75 0 010 1.5H21v1.5c1.241 0 2.25 1.009 2.25 2.25S22.241 9 21 9zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-5.25 0a.75.75 0 100 1.5.75.75 0 000-1.5zM10.5 6a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    