
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
            children.concat([_c('path',{attrs:{"d":"M13.527 9.75a.748.748 0 01-.571-.264L9.034 4.879l-.01-.008-3.927 4.616a.75.75 0 01-1.142-.973l3.943-4.631a1.51 1.51 0 011.133-.512 1.494 1.494 0 011.112.497l3.955 4.646a.751.751 0 01-.571 1.236z"}}),_c('path',{attrs:{"d":"M12.019 23.995a11.904 11.904 0 01-7.354-2.53.734.734 0 01-.26-.209C1.858 19.161.265 16.101.031 12.853a1.503 1.503 0 011.496-1.603h17.25v-1.5h-1.5a1.502 1.502 0 01-1.36-.867 1.49 1.49 0 01-.049-1.146l2.964-7.27A.748.748 0 0119.527 0c.306 0 .579.183.694.467l2.955 7.244a1.49 1.49 0 01-.34 1.602 1.5 1.5 0 01-1.058.437h-1.501v1.5h2.197a1.503 1.503 0 011.497 1.606 11.918 11.918 0 01-4.115 8.209 11.973 11.973 0 01-7.837 2.93zm-6.196-3.53a10.417 10.417 0 006.196 2.03c2.512 0 4.946-.91 6.855-2.562a10.585 10.585 0 001.74-1.929h-.592a2.243 2.243 0 01-2.22-1.879l-.562-3.375H9.023l.239.953a2.235 2.235 0 01-.592 2.137c-.425.426-.99.66-1.591.66h-.464l-.792 3.965zm-4.28-7.715a.04.04 0 00-.018.006 10.44 10.44 0 002.994 6.578l.746-3.731A.752.752 0 016 15h1.079a.746.746 0 00.75-.75.802.802 0 00-.022-.182l-.331-1.318H1.543zm17.738 3.127a.748.748 0 00.74.626h1.469a10.457 10.457 0 00.984-3.754l-.002-.003-3.71.004.519 3.127zm2.496-7.627l-2.25-5.514-2.247 5.511 4.497.003z"}})])
          )
        }
      }
    