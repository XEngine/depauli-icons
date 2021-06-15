
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h15c.59 0 1.147.227 1.571.639l2.996 2.879c.435.424.683 1.012.683 1.615V21.75A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.133a.754.754 0 00-.227-.537l-2.996-2.879A.747.747 0 0018 1.5H3z"}}),_c('path',{attrs:{"d":"M10.216 16.875a1.502 1.502 0 01-1.339-.827 1.497 1.497 0 01-.158-.67V10.12a1.498 1.498 0 012.217-1.31l4.4 2.621c.328.169.588.473.712.845.126.38.097.785-.082 1.142-.14.28-.371.514-.649.658l-4.384 2.612-.054.029c-.205.105-.43.158-.663.158zm.003-1.506l4.36-2.597a1.13 1.13 0 01.048-.026h-.002a.112.112 0 01-.046-.018l-4.361-2.597v5.238z"}}),_c('path',{attrs:{"d":"M12 20.25c-4.135 0-7.5-3.365-7.5-7.5s3.365-7.5 7.5-7.5 7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5zm0-13.5c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6z"}})])
          )
        }
      }
    