
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
            children.concat([_c('path',{attrs:{"d":"M20.248 24a.752.752 0 01-.549-.241L16.72 20.78a.744.744 0 010-1.06.749.749 0 011.06 0l1.718 1.718v-6.862c.035-1.771-1.368-3.26-3.126-3.326H4.663l-.137.002a4.5 4.5 0 01-3.179-1.305A4.495 4.495 0 010 6.755V.75a.75.75 0 011.5 0v6c.005.804.325 1.562.901 2.13.57.563 1.324.873 2.123.873l.112-.002H16.4c2.592.097 4.649 2.269 4.598 4.841v6.851l1.722-1.722a.744.744 0 011.06 0 .746.746 0 010 1.059l-3 3a.34.34 0 01-.04.034.744.744 0 01-.463.184c-.008.002-.018.002-.027.002h-.002z"}})])
          )
        }
      }
    