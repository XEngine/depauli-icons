
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
            children.concat([_c('circle',{attrs:{"cx":"4.5","cy":"19.5","r":"1.125"}}),_c('path',{attrs:{"d":"M20.25 24A2.252 2.252 0 0118 21.75V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .814.593 1.407 1.28 2.094.806.807 1.72 1.72 1.72 3.156 0 1.047-.516 2.429-1.534 4.113a8.314 8.314 0 012.344 3.088 8.173 8.173 0 01.69 3.299v1.5A2.252 2.252 0 0114.25 24H4.5A4.505 4.505 0 010 19.5v-2.25A5.256 5.256 0 015.25 12h3c1.392 0 2.756.352 3.969 1.02 1.053-1.754 1.281-2.743 1.281-3.27 0-.814-.593-1.407-1.28-2.094-.806-.807-1.72-1.72-1.72-3.156C10.5 2.019 12.519 0 15 0s4.5 2.019 4.5 4.5v15h.75A3.754 3.754 0 0124 23.25a.75.75 0 01-.75.75h-3zm-.75-2.25c0 .414.336.75.75.75h2.121A2.264 2.264 0 0020.25 21h-.75v.75zm-5.25.75a.75.75 0 00.75-.75v-1.5c0-.771-.13-1.526-.388-2.25H11.25a.75.75 0 010-1.5h2.609a6.819 6.819 0 00-1.798-1.818l-.025-.017A6.709 6.709 0 008.25 13.5h-3c-1.59 0-2.976 1.027-3.51 2.452A4.493 4.493 0 014.5 15C6.981 15 9 17.019 9 19.5a4.502 4.502 0 01-1.152 3h6.402zm-9.75-6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}})])
          )
        }
      }
    