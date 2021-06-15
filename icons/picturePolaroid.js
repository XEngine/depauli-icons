
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
            children.concat([_c('path',{attrs:{"d":"M2.25 18.75A2.253 2.253 0 010 16.5V2.25A2.252 2.252 0 012.25 0H16.5a2.252 2.252 0 012.25 2.25V16.5a2.252 2.252 0 01-2.25 2.25H2.25zM1.5 16.5c0 .414.336.75.75.75H16.5a.75.75 0 00.75-.75v-2.25H1.5v2.25zm15.75-3.75V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v10.5h15.75z"}}),_c('path',{attrs:{"d":"M18.52 23.999c-.175 0-.352-.017-.524-.05L7.471 21.941a.75.75 0 01.28-1.474l10.526 2.009a1.298 1.298 0 001.515-1.029l2.684-14.063a1.298 1.298 0 00-1.029-1.516l-.382-.073a.75.75 0 01.282-1.473l.383.073a2.8 2.8 0 012.221 3.271L21.267 21.73a2.802 2.802 0 01-2.747 2.269z"}})])
          )
        }
      }
    