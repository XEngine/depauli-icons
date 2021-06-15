
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
            children.concat([_c('path',{attrs:{"d":"M11.521 23.251c-6.11 0-11.167-4.783-11.513-10.889a11.192 11.192 0 013.053-8.066A11.173 11.173 0 0111.252.75h10.5A2.252 2.252 0 0124.002 3v5.25a2.252 2.252 0 01-2.25 2.25h-6.724a.75.75 0 01-.75-.75l.001-.031a.734.734 0 01.176-.452.426.426 0 01.042-.05l.924-.924a1.128 1.128 0 00-.005-1.568 1.114 1.114 0 00-.804-.338c-.296 0-.576.114-.787.32l-4.49 4.49a1.121 1.121 0 00-.004 1.594l4.525 4.525c.209.205.475.32.745.32l.041-.001a1.12 1.12 0 001.124-1.137 1.115 1.115 0 00-.338-.792l-.928-.927a.34.34 0 01-.034-.04.744.744 0 01-.184-.466l-.001-.026a.75.75 0 01.75-.75h6.722a2.252 2.252 0 012.25 2.25V21a2.252 2.252 0 01-2.25 2.25h-10.06l-.172.001zM11.252 2.25a9.681 9.681 0 00-7.098 3.072 9.684 9.684 0 00-2.648 6.975c.3 5.297 4.702 9.454 10.021 9.454l.155-.001h10.071a.75.75 0 00.75-.75v-5.253a.75.75 0 00-.75-.75h-4.965c.305.43.473.944.479 1.486a2.614 2.614 0 01-.749 1.865 2.609 2.609 0 01-1.848.789h-.029c-.69 0-1.342-.266-1.835-.749l-4.534-4.534a2.629 2.629 0 01-.007-3.706l4.507-4.507a2.615 2.615 0 011.843-.753c.712 0 1.378.28 1.875.788.883.903.978 2.312.284 3.324h4.978a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75h-10.5z"}})])
          )
        }
      }
    