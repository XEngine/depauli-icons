
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
            children.concat([_c('path',{attrs:{"d":"M6.726 13.526a2.247 2.247 0 01-2.245-2.13 2.233 2.233 0 01.573-1.624l6.36-7.99a.753.753 0 011.332.382.744.744 0 01-.159.552L6.198 10.74c-.303.339-.285.812.027 1.093a.748.748 0 001.059-.056l.029-.034 5.377-6.026.039-.041a2.704 2.704 0 011.889-.761c.418 0 .837.099 1.211.285a2.718 2.718 0 011.214 3.642.655.655 0 01-.052.088l-.341.5a.835.835 0 00.69 1.308.83.83 0 00.73-.439L22.592 1.9a.75.75 0 111.321.71l-4.522 8.4a2.326 2.326 0 01-3.377.816 2.334 2.334 0 01-.603-3.242l.308-.452a1.22 1.22 0 00-.562-1.589 1.222 1.222 0 00-1.37.197l-5.335 5.979-.053.062a2.25 2.25 0 01-1.673.745zM3.751 22.5a3.754 3.754 0 01-3.75-3.75 2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25 3.754 3.754 0 01-3.75 3.75h-16.5zm16.5-1.5a2.252 2.252 0 002.25-2.25.75.75 0 00-.75-.75h-5.25v3h3.75zm-18-3a.75.75 0 00-.75.75A2.252 2.252 0 003.751 21h11.25v-3H2.251zM.751 15a.75.75 0 010-1.5h2.25c.414 0 .75.336.75.75s-3 .75-3 .75zM3.001 11.25a.743.743 0 01-.53-.22l-1.5-1.5C.829 9.389.751 9.2.751 9s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.5 1.5c.142.141.22.33.22.53s-.078.389-.22.53a.744.744 0 01-.53.22zM10.501 15a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    