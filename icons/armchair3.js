
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
            children.concat([_c('path',{attrs:{"d":"M17.25 23.999a.75.75 0 01-.75-.75v-5.25H6.416l-3.53 5.647a.746.746 0 01-1.033.239.751.751 0 01-.239-1.034L5.2 17.113 2.025 3.142A2.576 2.576 0 014.539.008c.486 0 .962.139 1.376.403.579.369.981.941 1.13 1.611L8.236 7.5h7.515a2.252 2.252 0 012.25 2.25V12h.75a3.754 3.754 0 013.75 3.75v1.5a.75.75 0 01-.75.75H18v5.25a.75.75 0 01-.75.749zm3.75-7.5v-.75a2.252 2.252 0 00-2.25-2.25H18v3h3zm-4.5 0v-3H9.818a2.263 2.263 0 01-2.199-1.772l-2.04-9.384a1.076 1.076 0 00-1.277-.809c-.279.062-.517.229-.671.471s-.204.529-.142.807l3.11 13.687H16.5zm-7.415-5.09c.074.342.383.59.733.59H16.5v-2.25a.75.75 0 00-.75-.75H8.562l.523 2.41z"}})])
          )
        }
      }
    