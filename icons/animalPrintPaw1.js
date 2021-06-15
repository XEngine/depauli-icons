
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
            children.concat([_c('path',{attrs:{"d":"M6.966 22.711a3.8 3.8 0 01-3.409-2.135A6.372 6.372 0 013.01 18c0-4.136 4.037-7.5 9-7.5s9 3.365 9 7.5c0 .883-.178 1.741-.531 2.551a3.813 3.813 0 01-3.421 2.156 3.706 3.706 0 01-1.561-.342 9.236 9.236 0 00-3.329-.615l-.146.001-.168-.001c-1.15 0-2.283.213-3.368.634a3.645 3.645 0 01-1.52.327zM12.01 12c-4.135 0-7.5 2.692-7.5 6 .001.675.139 1.332.41 1.95.366.76 1.169 1.258 2.041 1.258.327 0 .643-.069.94-.206a10.868 10.868 0 013.967-.753l.153.001.158-.001c1.332 0 2.645.247 3.903.735a2.284 2.284 0 003.034-1.059c.26-.598.395-1.25.395-1.925-.001-3.309-3.366-6-7.501-6zM8.705 9.001c-.622 0-1.232-.254-1.719-.714-.529-.5-.871-1.201-.963-1.971-.092-.771.076-1.532.473-2.143.07-.107.148-.21.233-.308l-.64-1.28a.751.751 0 01.67-1.085c.286 0 .543.159.671.414l.58 1.16a2.486 2.486 0 01.544-.065c.621 0 1.231.254 1.718.714.529.5.871 1.201.963 1.971s-.076 1.531-.473 2.142c-.425.654-1.057 1.061-1.779 1.147a2.163 2.163 0 01-.278.018zM8.55 4.51a.822.822 0 00-.099.006c-.272.032-.52.201-.698.475-.206.317-.291.724-.241 1.147.051.423.229.799.504 1.059.21.198.45.303.694.303a.79.79 0 00.097-.006c.272-.032.52-.201.698-.474.206-.317.292-.725.242-1.148-.051-.423-.23-.799-.505-1.059-.21-.198-.449-.303-.692-.303zM2.895 12.678c-1.164 0-2.275-.869-2.701-2.113C-.174 9.488.031 8.318.7 7.557L.089 6.335A.746.746 0 01.76 5.25c.286 0 .543.159.671.415l.567 1.132c.152-.031.307-.046.463-.046 1.164 0 2.275.869 2.7 2.113.536 1.565-.142 3.219-1.511 3.688a2.305 2.305 0 01-.755.126zm-.43-4.428a.842.842 0 00-.274.045c-.586.201-.846 1.001-.578 1.784.222.647.747 1.1 1.276 1.1a.842.842 0 00.274-.045c.587-.201.846-1.001.578-1.784-.221-.648-.746-1.1-1.276-1.1zM15.311 9c-.091 0-.183-.005-.275-.016-1.436-.172-2.446-1.647-2.251-3.29.182-1.531 1.337-2.685 2.686-2.685a2.318 2.318 0 01.538.064l.58-1.159a.748.748 0 011.005-.335.75.75 0 01.336 1.006l-.64 1.282c.555.637.817 1.531.708 2.447C17.816 7.845 16.661 9 15.311 9zm.163-4.491c-.582 0-1.108.598-1.199 1.362-.098.821.324 1.549.94 1.623a.766.766 0 00.097.006c.58 0 1.106-.598 1.197-1.362.098-.821-.324-1.549-.94-1.623a.746.746 0 00-.095-.006zM21.124 12.677a2.32 2.32 0 01-.754-.125c-1.369-.469-2.047-2.124-1.511-3.689.426-1.244 1.537-2.113 2.701-2.113.156 0 .311.016.463.046l.566-1.132a.748.748 0 011.007-.335c.369.185.52.636.335 1.006l-.611 1.222c.669.761.874 1.931.506 3.007-.427 1.244-1.538 2.113-2.702 2.113zm.43-4.428c-.53 0-1.054.452-1.276 1.1-.268.782-.008 1.583.579 1.784.088.03.18.045.274.045.529 0 1.054-.452 1.276-1.1.268-.782.008-1.582-.579-1.784a.846.846 0 00-.274-.045z"}})])
          )
        }
      }
    