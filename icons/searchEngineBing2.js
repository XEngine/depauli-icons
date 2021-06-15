
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9.08 2.09l-4.4-2A.75.75 0 003.63.8v19.63a.75.75 0 00.37.67l5.38 2.77a.75.75 0 00.69 0L20 18.63a.75.75 0 00.4-.66v-5.43a.75.75 0 00-.48-.7l-8.51-3.25a.75.75 0 00-1 .86l1 4.44a.75.75 0 00.46.53l1.67.66-4 2V2.77a.75.75 0 00-.46-.68zm6.63 13.59a.75.75 0 00-.06-1.37l-2.88-1.13-.6-2.69 6.69 2.57v4.46l-9.11 4.83L5.13 20V2L8 3.26v15a.75.75 0 001.08.67z"}})])
          )
        }
      }
    