
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
            children.concat([_c('path',{attrs:{"d":"M4.809 19.398a2.249 2.249 0 01-2.203-1.816L.043 4.382a2.259 2.259 0 011.773-2.631L10.619.042a2.248 2.248 0 012.631 1.776.745.745 0 01-.115.562.745.745 0 01-.622.331.752.752 0 01-.736-.608.744.744 0 00-.87-.588L2.105 3.223a.75.75 0 00-.588.875l2.562 13.197a.746.746 0 00.872.589l.825-.16a.75.75 0 01.286 1.472l-.825.16a2.21 2.21 0 01-.428.042z"}}),_c('path',{attrs:{"d":"M7.481 11.627a.753.753 0 01-.503-.193l-.753-.68a.753.753 0 01-.172-.884l1.631-3.361a.755.755 0 011.002-.348c.372.181.528.63.348 1.002l-1.385 2.854.335.303a.75.75 0 01-.503 1.307zM3.56 5.965c-.524 0-.981-.367-1.096-.877l-.007-.028c-.058-.301.003-.6.171-.849.142-.21.346-.361.591-.438a.791.791 0 01.126-.037 1.12 1.12 0 011.319.891 1.118 1.118 0 01-.763 1.281.755.755 0 01-.129.037l-.059.008-.047.004a.932.932 0 01-.106.008zM19.389 23.995c-.115 0-.231-.012-.346-.035l-9.755-1.97a1.737 1.737 0 01-1.111-.748 1.738 1.738 0 01-.257-1.314l2.858-14.146a1.755 1.755 0 012.061-1.369l9.754 1.971c.458.093.853.358 1.112.747.259.39.35.856.257 1.314l-2.858 14.146a1.754 1.754 0 01-1.715 1.404zM12.493 5.878a.251.251 0 00-.245.2L9.39 20.225a.246.246 0 00.037.188.242.242 0 00.158.106l9.754 1.97a.235.235 0 00.051.006c.115 0 .22-.086.243-.201l2.858-14.146a.241.241 0 00-.037-.188.247.247 0 00-.158-.107l-9.754-1.971a.405.405 0 00-.049-.004z"}}),_c('path',{attrs:{"d":"M15.352 17.868a.752.752 0 01-.735-.899l.167-.826a3.007 3.007 0 01-1.624-3.279c.365-1.805 2.947-2.911 3.24-3.031a.753.753 0 01.816.165c.223.224 2.174 2.24 1.809 4.05a2.971 2.971 0 01-1.278 1.9 2.978 2.978 0 01-1.493.496l-.166.822a.754.754 0 01-.736.602zm.446-2.949a1.475 1.475 0 001.119-.219c.332-.22.558-.557.637-.947.119-.59-.419-1.547-1.054-2.31-.882.457-1.75 1.129-1.869 1.719a1.48 1.48 0 00.22 1.12c.219.33.552.555.938.635l.009.002zM13.76 9.157a.71.71 0 01-.091-.007.786.786 0 01-.135-.015 1.118 1.118 0 01-.892-1.218.764.764 0 01.012-.106 1.123 1.123 0 012.217.365.664.664 0 01-.01.081 1.122 1.122 0 01-1.101.9zM18.136 21.472a.715.715 0 01-.103-.008.688.688 0 01-.128-.015 1.121 1.121 0 01-.883-1.288l.006-.038a1.122 1.122 0 011.326-.878.738.738 0 01.127.038 1.107 1.107 0 01.768 1.099.75.75 0 01-.012.191 1.118 1.118 0 01-1.101.899z"}})])
          )
        }
      }
    