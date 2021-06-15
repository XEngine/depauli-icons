
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
            children.concat([_c('path',{attrs:{"d":"M9.375 24.001a1.86 1.86 0 01-1.327-.553 1.862 1.862 0 01-.547-1.328v-9.372a.75.75 0 01.75-.75h5.25a.75.75 0 01.75.75v.75h6a.75.75 0 01.75.75v2.25h2.25a.75.75 0 01.733.91l-1.112 5.084a1.925 1.925 0 01-1.87 1.506H9.458a.76.76 0 01-.081.003h-.002zm-.374-1.879a.37.37 0 00.11.268.366.366 0 00.233.109l.074-.001a.378.378 0 00.321-.268l1.542-5.195a.755.755 0 01.719-.537h7.5v-1.5h-6a.75.75 0 01-.75-.75v-.75H9v8.624zm12 .377a.416.416 0 00.405-.326l.913-4.174H12.56l-1.336 4.5h9.777z"}}),_c('path',{attrs:{"d":"M5.25 15.874a.752.752 0 01-.299-.062A8.244 8.244 0 01.147 9.79a8.198 8.198 0 011.286-6.182A8.194 8.194 0 016.714.146a8.19 8.19 0 016.182 1.286 8.237 8.237 0 013.212 4.294 5.623 5.623 0 015.27.389 5.585 5.585 0 012.486 3.515 5.588 5.588 0 01-.728 4.243.746.746 0 01-1.035.234.75.75 0 01-.234-1.034c.587-.932.777-2.037.533-3.112s-.891-1.99-1.823-2.577a4.121 4.121 0 00-4.533.087.745.745 0 01-.709.075.745.745 0 01-.451-.553 6.705 6.705 0 00-2.832-4.321 6.703 6.703 0 00-5.058-1.053 6.703 6.703 0 00-4.321 2.832 6.706 6.706 0 00-1.052 5.058 6.745 6.745 0 003.93 4.927.752.752 0 01-.301 1.438z"}})])
          )
        }
      }
    