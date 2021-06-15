
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
            children.concat([_c('path',{attrs:{"d":"M19.247 12.608a1.49 1.49 0 01-.801-.233L11.75 8.113l-6.697 4.261a1.5 1.5 0 01-2.302-1.263V6.547A2.238 2.238 0 013.8 4.648L10.542.355c.36-.229.778-.35 1.208-.35.43 0 .847.121 1.207.35l6.75 4.3a2.238 2.238 0 011.042 1.89v4.564a1.49 1.49 0 01-.442 1.062 1.491 1.491 0 01-1.059.438h-.001zM11.75 6.474c.143 0 .282.041.403.117l7.097 4.517V6.547a.747.747 0 00-.347-.627l-6.75-4.3a.75.75 0 00-.805 0L4.603 5.915a.749.749 0 00-.353.634v4.559l7.097-4.517a.757.757 0 01.403-.117z"}}),_c('path',{attrs:{"d":"M19.247 24.002c-.284 0-.561-.081-.801-.233l-6.696-4.261-6.697 4.26a1.506 1.506 0 01-1.137.194 1.498 1.498 0 01-1.165-1.457v-4.563a2.237 2.237 0 011.05-1.9l6.748-4.293c.36-.229.778-.35 1.208-.35.43 0 .847.121 1.208.35l6.75 4.301a2.242 2.242 0 011.037 1.893v4.561a1.504 1.504 0 01-1.501 1.5h-.004zm-7.497-6.134c.143 0 .282.041.403.117l7.097 4.517v-4.56a.746.746 0 00-.345-.63l-6.748-4.299a.747.747 0 00-.804 0l-6.75 4.295a.75.75 0 00-.353.635v4.558l7.097-4.517a.765.765 0 01.403-.116z"}})])
          )
        }
      }
    