
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
            children.concat([_c('path',{attrs:{"d":"M14.999 6.75c-1.861 0-3.375-1.514-3.375-3.375S13.138 0 14.999 0s3.375 1.514 3.375 3.375-1.513 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875S16.033 1.5 14.999 1.5z"}}),_c('path',{attrs:{"d":"M17.999 24a.75.75 0 01-.75-.75l.006-12c0-.31.187-.584.476-.698a7.47 7.47 0 004.768-6.989.75.75 0 00-1.5 0c0 3.308-2.692 6-6 6s-6-2.692-6-6a.75.75 0 00-1.5 0c.001.469.047.942.136 1.404a.745.745 0 01-.115.562.743.743 0 01-.622.33.75.75 0 01-.735-.608 9.08 9.08 0 01-.164-1.686c0-1.242 1.009-2.252 2.25-2.252s2.25 1.009 2.25 2.25c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25a8.996 8.996 0 01-5.244 8.183l-.006 11.504a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M7.499 14.063a3.379 3.379 0 01-3.375-3.375c0-1.861 1.514-3.375 3.375-3.375s3.375 1.514 3.375 3.375a3.379 3.379 0 01-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM9.749 24a.75.75 0 01-.75-.75v-5.243a.752.752 0 01.86-.743c1.489.219 2.718.529 2.727.531a.75.75 0 00.343-1.461c-1.774-.44-3.602-.7-5.43-.772a26.995 26.995 0 00-5.432.778.75.75 0 10.362 1.456.544.544 0 01.053-.011l.068-.015a35.207 35.207 0 012.587-.499.752.752 0 01.863.741v5.238a.75.75 0 01-1.5 0v-4.353c-.756.138-1.359.276-1.611.333l-.121.027a2.221 2.221 0 01-1.677-.26 2.24 2.24 0 01-1.025-1.384 2.235 2.235 0 01.255-1.703c.31-.515.801-.879 1.384-1.024a28.54 28.54 0 015.765-.822h.062c1.937.074 3.876.349 5.761.816a2.25 2.25 0 01-1.082 4.368 30.096 30.096 0 00-1.711-.358v4.36a.752.752 0 01-.751.75z"}})])
          )
        }
      }
    