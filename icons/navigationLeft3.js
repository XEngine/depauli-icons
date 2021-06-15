
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
            children.concat([_c('path',{attrs:{"d":"M5.248 18.747a.753.753 0 01-.6-.3l-4.5-6a.713.713 0 01-.104-.196l-.015-.047a.7.7 0 01-.03-.181l-.001-.026a.726.726 0 01.045-.249.802.802 0 01.082-.166c.006-.009.011-.018.018-.026l4.403-6.001a.748.748 0 111.208.885l-3.526 4.807h15.77v-3a.75.75 0 011.5 0v7.5a.75.75 0 01-1.5 0v-3H2.248l3.6 4.8a.75.75 0 01-.6 1.2zM23.248 16.497a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    