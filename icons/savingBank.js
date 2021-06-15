
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 9a.752.752 0 01-.723-.551.752.752 0 01.34-.843l9.689-5.762a2.254 2.254 0 012.41.013l9.667 5.748A.751.751 0 0122.5 9h-21zm18.271-1.5l-7.344-4.367a.792.792 0 00-.431-.131.74.74 0 00-.402.118L4.228 7.5h15.543zM18 21a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v8.25h1.5v-8.25a.75.75 0 011.5 0v9A.75.75 0 0121 21h-3zM10.5 21a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v8.25h1.5v-8.25a.75.75 0 011.5 0v9a.75.75 0 01-.75.75h-3zM3 21a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v8.25h1.5v-8.25a.75.75 0 011.5 0v9A.75.75 0 016 21H3z"}})])
          )
        }
      }
    