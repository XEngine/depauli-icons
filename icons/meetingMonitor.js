
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
            children.concat([_c('path',{attrs:{"d":"M12.75 10.511a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h6c1.227 0 2.228.987 2.25 2.21l2.013-.671a.742.742 0 01.676.103.75.75 0 01.311.608v6a.75.75 0 01-.75.75.759.759 0 01-.237-.038L21 8.301a2.253 2.253 0 01-2.25 2.21h-6zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-1a.75.75 0 01.987-.712l2.013.672V3.302l-2.013.671a.742.742 0 01-.676-.103.752.752 0 01-.311-.609v-1a.75.75 0 00-.75-.75h-6z"}}),_c('path',{attrs:{"d":"M6.75 24.011a.75.75 0 010-1.5H9v-1.5H2.25A2.252 2.252 0 010 18.761v-9a2.252 2.252 0 012.25-2.25h6a.75.75 0 010 1.5h-6a.75.75 0 00-.75.75v6.75H18v-3.75a.75.75 0 011.5 0v6a2.252 2.252 0 01-2.25 2.25H10.5v1.5h2.25a.75.75 0 010 1.5h-6zm-5.25-5.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-.75H1.5v.75z"}})])
          )
        }
      }
    