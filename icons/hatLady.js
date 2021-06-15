
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
            children.concat([_c('path',{attrs:{"d":"M12.45 21.75c-.154 0-.308-.001-.462-.004a26.789 26.789 0 01-10.589-1.983 2.27 2.27 0 01-.842-.602 2.238 2.238 0 01-.551-1.631 2.234 2.234 0 01.807-1.581l1.468-1.361A2.258 2.258 0 003 12.938v-1.691a8.963 8.963 0 014.914-8.022 8.908 8.908 0 014.079-.986c.943 0 1.881.15 2.789.444a8.95 8.95 0 015.066 4.156 1.393 1.393 0 01.304.142 6.948 6.948 0 013.37 5.268c.035.434-.095.847-.365 1.17a1.55 1.55 0 01-1.071.553l-.796.065c.114.205.26.391.431.55l1.458 1.353.051.046c.261.229.469.518.602.839a2.23 2.23 0 01-.005 1.722 2.236 2.236 0 01-1.22 1.215A26.864 26.864 0 0112.45 21.75zM1.844 17.039a2.165 2.165 0 01-.088.079.748.748 0 00-.07 1.057.754.754 0 00.28.2 25.347 25.347 0 0010.021 1.871c.156.002.3.004.444.004a25.4 25.4 0 009.607-1.876.741.741 0 00.404-.404.742.742 0 00-.199-.853 3.752 3.752 0 01-.094-.084l-1.45-1.346a3.738 3.738 0 01-.99-1.521l-1.07.088a2.385 2.385 0 01-1.633 1.046l-1.688 3.024a1.58 1.58 0 01-1.373.807c-.265 0-.529-.069-.763-.199a6.953 6.953 0 01-1.967-1.706A30.322 30.322 0 013.288 15.7l-1.444 1.339zm9.469-3.639a.075.075 0 00-.066.08 5.436 5.436 0 002.666 4.141.084.084 0 00.037.009c.036-.008.051-.019.06-.036l1.438-2.578a2.387 2.387 0 01-1.197-1.857l-2.938.241zm-7.118 1.015a28.842 28.842 0 006.083 1.234 6.832 6.832 0 01-.524-2.021v-.002a1.455 1.455 0 01-.002-.264 30.4 30.4 0 01-5.251-1.039v.615c0 .506-.105 1.01-.306 1.477zm11.945-.736a.957.957 0 00.121.065.695.695 0 01.038.02.957.957 0 00.344.068.892.892 0 00.863-.682l.01-.041a.834.834 0 00.009-.257l-.003-.049c-.005-.039-.014-.066-.022-.094l-.019-.067c-.011-.036-.019-.05-.027-.065l-.036-.072c-.007-.014-.012-.028-.021-.041a.878.878 0 00-.089-.119l-.02-.02a1.034 1.034 0 00-.118-.106.896.896 0 00-.126-.078l-.026-.012a.894.894 0 00-.126-.047l-.036-.011a.803.803 0 00-.147-.022c-.039-.003-.056-.005-.073-.005a.884.884 0 00-.871.703.886.886 0 00.36.921l.015.011zm1.688-2.819c.05.028.098.059.146.091l.039.027a2.701 2.701 0 01.284.235l.073.071.078.087a2.489 2.489 0 01.204.269l.031.052c.021.035.041.069.059.103.016.03.033.06.048.092.015.03.028.059.041.089l.014.033c.011.026.023.052.033.079.008.019.015.042.022.064a2.286 2.286 0 01.11.459l.013.106 2.94-.241a.071.071 0 00.049-.025.068.068 0 00.017-.051 5.443 5.443 0 00-2.674-4.148.062.062 0 00-.027-.005.072.072 0 00-.062.035l-1.438 2.578zM4.52 10.764a28.916 28.916 0 006.375 1.196c.093-.027.182-.044.271-.053l3.474-.285a2.42 2.42 0 01.703-.697 2.4 2.4 0 01.926-.351l1.686-3.021c.09-.154.201-.29.33-.404a7.473 7.473 0 00-3.967-3.039 7.522 7.522 0 00-2.325-.371 7.422 7.422 0 00-3.398.822 7.489 7.489 0 00-4.075 6.203z"}})])
          )
        }
      }
    