
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
            children.concat([_c('path',{attrs:{"d":"M2.26 21.003a2.252 2.252 0 01-2.25-2.25v-16.5A2.252 2.252 0 012.26.003h18a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-2.25H1.51v12.75c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M11.259 24a.743.743 0 01-.53-.22.745.745 0 01-.205-.677l.75-3.75a.748.748 0 01.205-.384l7.631-7.63c.541-.541 1.26-.839 2.026-.839s1.485.298 2.026.839a2.862 2.862 0 01.013 4.06l-7.634 7.63a.748.748 0 01-.384.205l-3.75.75a.684.684 0 01-.148.016zm.956-1.706l2.424-.485 7.473-7.469c.257-.258.399-.6.398-.965 0-.365-.143-.707-.401-.965a1.374 1.374 0 00-1.94-.009l-7.47 7.469-.484 2.424z"}})])
          )
        }
      }
    