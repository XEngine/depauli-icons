
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
            children.concat([_c('path',{attrs:{"d":"M9 12.75a.75.75 0 01-.75-.75V9h-1.5a.753.753 0 01-.727-.935l.774-3.04A1.706 1.706 0 018.444 3.75h2.124a.75.75 0 01.75.75.683.683 0 001.364 0 .75.75 0 01.75-.75h2.118c.779 0 1.455.522 1.651 1.269l.776 3.046A.753.753 0 0117.25 9h-1.5v3a.75.75 0 01-.75.75H9zm5.25-1.5v-3A.75.75 0 0115 7.5h1.285l-.536-2.105a.2.2 0 00-.194-.145h-1.506c-.311.845-1.129 1.432-2.049 1.432s-1.738-.587-2.049-1.432H8.459c-.087.006-.184.054-.21.151L7.715 7.5H9a.75.75 0 01.75.75v3h4.5z"}}),_c('path',{attrs:{"d":"M7.5 24a.75.75 0 010-1.5h3.75v-3h-9A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v15a2.252 2.252 0 01-2.25 2.25h-9v3h3.75a.75.75 0 010 1.5h-9zm-6-6.75c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5h-21v1.5zm21-3v-12a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v12h21z"}})])
          )
        }
      }
    