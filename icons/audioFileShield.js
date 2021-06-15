
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.758.758 0 01-.165-.018 8.366 8.366 0 01-6.585-8.233v-3.54a2.245 2.245 0 011.373-2.073 13.18 13.18 0 015.375-1.135c1.872 0 3.686.383 5.391 1.14A2.24 2.24 0 0124 12.209v3.54a8.367 8.367 0 01-6.587 8.233.727.727 0 01-.163.018zm-.001-13.498c-1.66 0-3.268.34-4.779 1.01a.757.757 0 00-.47.696v3.542a6.887 6.887 0 005.25 6.729 6.886 6.886 0 005.25-6.728v-3.542a.748.748 0 00-.458-.691 11.737 11.737 0 00-4.793-1.016z"}}),_c('path',{attrs:{"d":"M17.25 19.5a.75.75 0 01-.75-.75V16.5h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0V15h2.25a.75.75 0 010 1.5H18v2.25a.75.75 0 01-.75.75zM2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V6.75a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M6 15c-1.682 0-3-.988-3-2.25s1.318-2.25 3-2.25c.495 0 .974.087 1.4.252l-.194-3.894a.75.75 0 01.67-.783l1.062-.113a3.46 3.46 0 013.305 1.64.752.752 0 01-.643 1.138.754.754 0 01-.642-.363 1.947 1.947 0 00-1.861-.923l-.358.038L9 12.75C9 14.012 7.682 15 6 15zm0-3c-.845 0-1.5.403-1.5.75s.655.75 1.5.75c.843 0 1.498-.403 1.5-.749C7.493 12.401 6.837 12 6 12z"}})])
          )
        }
      }
    