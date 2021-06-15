
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
            children.concat([_c('path',{attrs:{"d":"M9 12.753a.75.75 0 01-.75-.75V7.904l-.334.223a.747.747 0 01-1.04-.208c-.111-.167-.151-.367-.111-.563a.74.74 0 01.319-.477l4.5-3a.75.75 0 01.832 0l4.5 3a.746.746 0 01.208 1.04.749.749 0 01-1.04.208l-.334-.223v4.099a.75.75 0 01-.75.75H9zm5.25-1.5V6.904L12 5.404l-2.25 1.5v4.349h4.5z"}}),_c('path',{attrs:{"d":"M8.25 23.253a.75.75 0 010-1.5h3v-1.5h-9A2.252 2.252 0 010 18.003v-15A2.252 2.252 0 012.25.753h19.5A2.252 2.252 0 0124 3.003v15a2.252 2.252 0 01-2.25 2.25h-9v1.5h3a.75.75 0 010 1.5h-7.5zm-6.75-5.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5h-21v1.5zm21-3v-12a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v12h21z"}})])
          )
        }
      }
    