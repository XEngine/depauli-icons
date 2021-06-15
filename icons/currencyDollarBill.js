
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
            children.concat([_c('path',{attrs:{"d":"M12 16.5a.75.75 0 01-.75-.75h-.75a.75.75 0 010-1.5h2.031a.589.589 0 00.543-.824.586.586 0 00-.324-.317l-2.062-.825a2.083 2.083 0 01-1.312-1.94c0-.559.217-1.084.612-1.48a2.074 2.074 0 011.262-.603V8.25a.75.75 0 011.5 0h.75a.75.75 0 010 1.5h-2.033a.587.587 0 00-.418.174.59.59 0 00.198.967l2.063.826c.52.209.926.607 1.145 1.121.219.514.225 1.083.016 1.601a2.08 2.08 0 01-1.721 1.3v.011a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M6 20.25A2.252 2.252 0 013.75 18v-1.256a5.251 5.251 0 010-9.488V6A2.252 2.252 0 016 3.75h12A2.252 2.252 0 0120.25 6v1.256c1.831.867 3 2.702 3 4.744a5.235 5.235 0 01-3 4.744V18A2.252 2.252 0 0118 20.25H6zm0-15a.75.75 0 00-.75.75v1.757a.752.752 0 01-.5.707 3.726 3.726 0 00-2.133 1.92 3.726 3.726 0 00-.154 2.865 3.735 3.735 0 002.286 2.287.75.75 0 01.5.707V18c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-1.757c0-.317.201-.601.5-.707a3.756 3.756 0 002.5-3.536 3.756 3.756 0 00-2.5-3.536.752.752 0 01-.5-.707V6a.75.75 0 00-.75-.75H6z"}})])
          )
        }
      }
    