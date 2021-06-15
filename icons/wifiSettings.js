
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
            children.concat([_c('path',{attrs:{"d":"M5.96 12.034a.751.751 0 01-.53-1.281 6.055 6.055 0 014.25-1.752c.51 0 1.018.065 1.51.194A.75.75 0 0111 10.67a.76.76 0 01-.189-.024 4.46 4.46 0 00-1.132-.145c-1.19 0-2.352.479-3.189 1.314a.748.748 0 01-.53.219zM3.07 8.572a.75.75 0 01-.507-1.302 10.477 10.477 0 017.111-2.768c2.008 0 3.963.571 5.653 1.652a.745.745 0 01.329.471.745.745 0 01-.101.565.746.746 0 01-1.036.228 8.98 8.98 0 00-4.846-1.416 8.99 8.99 0 00-6.097 2.372.745.745 0 01-.506.198z"}}),_c('path',{attrs:{"d":"M18.6 4.641a.753.753 0 01-.47-.166c-2.409-1.936-5.413-3.003-8.459-3.003-3.042 0-6.044 1.064-8.451 2.996a.744.744 0 01-1.055-.114A.75.75 0 01.281 3.3a15.056 15.056 0 019.39-3.302 15.054 15.054 0 019.399 3.31.746.746 0 01.115 1.054.75.75 0 01-.585.279zM17.25 18.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M17.249 23.998a2.083 2.083 0 01-1.991-1.483l-.441-1.45a.247.247 0 00-.289-.168l-1.469.342a2.113 2.113 0 01-.466.052 2.076 2.076 0 01-2.037-1.628 2.087 2.087 0 01.509-1.885l1.03-1.11a.252.252 0 00.001-.341l-1.032-1.112a2.092 2.092 0 01.108-2.952 2.08 2.08 0 011.882-.508l1.476.342a.246.246 0 00.287-.166l.443-1.454a2.083 2.083 0 012.593-1.388 2.078 2.078 0 011.392 1.396l.441 1.449a.246.246 0 00.288.169l1.472-.341a2.08 2.08 0 01.463-.052c.968 0 1.826.685 2.038 1.629a2.087 2.087 0 01-.508 1.882l-1.031 1.11a.251.251 0 000 .341l1.031 1.112c.38.407.578.939.559 1.497s-.255 1.074-.664 1.455a2.08 2.08 0 01-1.424.561c-.155 0-.31-.017-.462-.052l-1.476-.343a.245.245 0 00-.287.168l-.442 1.449a2.095 2.095 0 01-1.994 1.479zm-2.669-4.607c.764 0 1.451.51 1.671 1.239l.442 1.452a.58.58 0 001.113.003l.443-1.451a1.756 1.756 0 012.059-1.193l1.474.343a.58.58 0 00.526-.144.588.588 0 00.03-.833l-1.032-1.113a1.757 1.757 0 010-2.383l1.031-1.11a.588.588 0 00-.561-.976l-1.467.34c-.128.03-.26.045-.391.045-.763 0-1.45-.51-1.67-1.24l-.443-1.454a.58.58 0 00-1.111-.003l-.443 1.454a1.755 1.755 0 01-2.06 1.194l-1.473-.342a.586.586 0 00-.526.145.59.59 0 00-.03.832l1.032 1.112a1.757 1.757 0 010 2.383l-1.031 1.11a.59.59 0 00.43.992.576.576 0 00.13-.015l1.467-.341c.129-.032.26-.046.39-.046z"}})])
          )
        }
      }
    