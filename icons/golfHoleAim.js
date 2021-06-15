
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
            children.concat([_c('path',{attrs:{"d":"M5.25 11.769a.75.75 0 01-.75-.75V.75A.745.745 0 015.25 0c.115 0 .231.027.335.079l4.217 2.108c.302.151.527.411.633.732.107.321.082.663-.069.965a1.271 1.271 0 01-.564.564l-1.966.983a.753.753 0 01-1.006-.336.75.75 0 01.335-1.005l1.543-.772L6 1.964v9.055a.75.75 0 01-.75.75zM17.625 24.003c-1.448 0-2.625-1.177-2.625-2.625s1.177-2.625 2.625-2.625c.914 0 1.788.341 2.461.96l.553.507 1.867-14.317a.752.752 0 011.338-.361.745.745 0 01.149.554L21.95 21.769a.706.706 0 01-.021.158l-.101.771a1.504 1.504 0 01-1.486 1.306c.001-.001-2.717-.001-2.717-.001zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125h2.717l.06-.466-1.331-1.219a2.131 2.131 0 00-1.446-.565zM11.25 23.25C10.01 23.25 9 22.241 9 21s1.009-2.25 2.25-2.25S13.5 19.759 13.5 21s-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M7.5 16.5C3.295 16.5 0 14.524 0 12l.002-.057A3.716 3.716 0 011.881 8.99a.751.751 0 01.738 1.306A2.22 2.22 0 001.5 12.028C1.533 13.613 4.328 15 7.5 15c3.196 0 6-1.402 6-3 0-1.463-2.376-2.799-5.296-2.979a.745.745 0 01-.702-.794.75.75 0 01.797-.702C12.118 7.759 15 9.683 15 12c0 2.524-3.294 4.5-7.5 4.5z"}})])
          )
        }
      }
    