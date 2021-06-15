
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
            children.concat([_c('path',{attrs:{"d":"M6.249 17.999c-.965 0-1.75-.785-1.75-1.75v-2.5c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75h-2.5zm0-4.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-2.5zM9.249 10.499c-.965 0-1.75-.785-1.75-1.75v-2.5c0-.965.785-1.75 1.75-1.75h4c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75h-4zm0-4.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h4a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-4zM14.249 17.999a2.252 2.252 0 01-2.25-2.25v-1.5a2.252 2.252 0 012.25-2.25h1.5a2.252 2.252 0 012.25 2.25.75.75 0 01-1.5 0 .75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75a.75.75 0 010 1.5zM15.749 23.999a.743.743 0 01-.53-.22.746.746 0 01-.205-.677l.506-2.529a.742.742 0 01.206-.384l4.552-4.551c.41-.412.958-.638 1.541-.638s1.13.226 1.541.637c.851.85.851 2.234.002 3.084l-4.553 4.552a.744.744 0 01-.384.205l-2.528.506a.75.75 0 01-.148.015zm.956-1.706l1.203-.241 4.391-4.391a.681.681 0 00-.962-.962l-4.391 4.391-.241 1.203z"}}),_c('path',{attrs:{"d":"M2.249 23.999a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h15a2.24 2.24 0 011.572.639l2.996 2.879c.435.425.683 1.012.683 1.615v7.617a.75.75 0 01-1.5 0V5.132a.753.753 0 00-.226-.537l-2.996-2.879a.75.75 0 00-.527-.217H2.249a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h10.5a.75.75 0 010 1.5h-10.5z"}})])
          )
        }
      }
    