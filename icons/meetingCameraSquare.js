
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
            children.concat([_c('path',{attrs:{"d":"M7.5 17.261a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h6c1.227 0 2.228.987 2.25 2.21l2.013-.671a.742.742 0 01.675.103c.195.14.312.368.312.608v6a.749.749 0 01-.75.75.736.736 0 01-.237-.039l-2.013-.671a2.252 2.252 0 01-2.25 2.209h-6zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-1a.749.749 0 01.988-.711l2.012.671v-3.919l-2.013.671a.736.736 0 01-.675-.103.751.751 0 01-.312-.608v-1a.75.75 0 00-.75-.75h-6z"}}),_c('path',{attrs:{"d":"M6 23.261a5.256 5.256 0 01-5.25-5.25v-12A5.256 5.256 0 016 .761h12a5.256 5.256 0 015.25 5.25v12a5.256 5.256 0 01-5.25 5.25H6zm0-21a3.754 3.754 0 00-3.75 3.75v12A3.754 3.754 0 006 21.761h12a3.754 3.754 0 003.75-3.75v-12A3.754 3.754 0 0018 2.261H6z"}})])
          )
        }
      }
    