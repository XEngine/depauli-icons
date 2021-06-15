
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.5A3.754 3.754 0 010 18.75V5.25A3.754 3.754 0 013.75 1.5h16.5A3.754 3.754 0 0124 5.25v13.5a3.754 3.754 0 01-3.75 3.75H3.75zm0-19.5A2.252 2.252 0 001.5 5.25v13.5A2.252 2.252 0 003.75 21h16.5a2.252 2.252 0 002.25-2.25V5.25A2.252 2.252 0 0020.25 3H3.75z"}}),_c('path',{attrs:{"d":"M5.25 12a.75.75 0 01-.75-.75v-3A2.252 2.252 0 016.75 6h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v3a.75.75 0 01-.75.75zM14.25 18a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.252 2.252 0 0117.25 18h-3z"}})])
          )
        }
      }
    