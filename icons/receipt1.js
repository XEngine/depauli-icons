
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
            children.concat([_c('path',{attrs:{"d":"M7.5 5.25a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H7.5zM8.25 9a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM8.25 12.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM8.25 16.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM8.25 20.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M1.5 24a.75.75 0 01-.287-1.442c1.388-.578 2.537-1.264 2.537-3.808v-15A3.754 3.754 0 017.5 0H21a2.252 2.252 0 012.25 2.25V6.5c0 .965-.785 1.75-1.75 1.75h-2.75v10.5A5.256 5.256 0 0113.5 24h-12zm12-1.5a3.754 3.754 0 003.75-3.75V2.25c0-.259.044-.511.129-.75H7.5a2.252 2.252 0 00-2.25 2.25v15c0 1.604-.402 2.841-1.224 3.75H13.5zm8-15.75a.25.25 0 00.25-.25V2.25A.75.75 0 0021 1.5h-1.5a.75.75 0 00-.75.75v4.5h2.75z"}})])
          )
        }
      }
    