
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
            children.concat([_c('path',{attrs:{"d":"M15.524 24.014a3.296 3.296 0 01-2.335-.96c-.309.18-.624.271-.939.271-.317 0-.633-.092-.942-.273a3.35 3.35 0 01-2.336.962c-.491 0-.963-.106-1.404-.317a1.496 1.496 0 01-.932-1.183 1.491 1.491 0 01.284-1.115l1.967-2.617a14.563 14.563 0 01-.131-.582l-2.346.586a.75.75 0 01-.909-.546.747.747 0 01.545-.91l2.473-.618a20.4 20.4 0 01-.089-.915H6.228a.75.75 0 010-1.5h2.137l-.001-.101-.545-1.059a.755.755 0 01-.083-.343c0-3.273 1.311-5.239 2.062-6.097l-.781-1.17a14.49 14.49 0 00-6.556 12.511.746.746 0 01-.729.77h-.001a.751.751 0 01-.77-.729 15.943 15.943 0 017.9-14.218.747.747 0 011.002.232l1.076 1.614c.46-.286.916-.441 1.311-.441.395 0 .851.155 1.311.441l1.076-1.613a.75.75 0 011.003-.231 15.945 15.945 0 017.899 14.219.745.745 0 01-.749.729l-.036-.001a.732.732 0 01-.509-.234.743.743 0 01-.205-.536 14.494 14.494 0 00-6.556-12.511L14.703 6.7c.751.857 2.061 2.822 2.061 6.092a.754.754 0 01-.083.342l-.546 1.065-.001.101h2.137a.75.75 0 010 1.5H16.07a20.59 20.59 0 01-.089.916l2.472.618c.195.049.358.17.461.342a.749.749 0 01-.824 1.114l-2.347-.59c-.041.197-.084.392-.131.583l1.962 2.615c.241.323.342.719.285 1.116a1.493 1.493 0 01-.932 1.183c-.44.21-.912.317-1.403.317zm-1.26-2.005c.333.321.786.506 1.257.506.272 0 .534-.061.778-.18a.559.559 0 01.074-.031l-1.322-1.767a7.369 7.369 0 01-.787 1.472zm-6.144.29l.074.035c.245.12.507.18.779.18.473 0 .927-.186 1.26-.508a7.401 7.401 0 01-.786-1.473L8.12 22.299zm2.487-2.995c.527 1.656 1.214 2.521 1.643 2.521.146 0 .333-.112.526-.315a.912.912 0 01.034-.036c.394-.436.774-1.199 1.083-2.169a3.303 3.303 0 00-1.651-.496 3.266 3.266 0 00-1.635.495zm1.643-1.995a4.793 4.793 0 012.026.497c.037-.184.071-.372.103-.56a.773.773 0 01.028-.178c.02-.127.039-.255.056-.385a3.881 3.881 0 00-2.216-.883 3.813 3.813 0 00-2.21.879c.018.131.036.259.056.386l.007.026c.012.049.019.1.021.154.031.188.065.375.103.56a4.758 4.758 0 012.01-.496h.016zm.033-3.011a5.359 5.359 0 012.331.677c.013-.272.02-.542.022-.81a2.39 2.39 0 00-2.335-1.38l-.051.002-.047-.001a2.39 2.39 0 00-2.34 1.38c.002.251.009.508.02.764a.52.52 0 01.005.039 5.265 5.265 0 012.324-.669l.036-.001.035-.001zm-.033-7.534c-.745 0-2.887 1.958-3.009 5.697a3.875 3.875 0 013.009-1.176 3.884 3.884 0 013.008 1.175c-.119-3.738-2.262-5.696-3.008-5.696zM22.389 8.27a.752.752 0 01-.703-1.013 5.538 5.538 0 00.353-1.99c0-1.613-.624-3.024-1.511-3.55v2.039a.75.75 0 01-1.5 0V1.749a2.283 2.283 0 00-1.133 1.445.751.751 0 01-.726.559.751.751 0 01-.724-.942 3.784 3.784 0 013.248-2.812.824.824 0 01.085-.005c2.074 0 3.761 2.363 3.761 5.267a7.033 7.033 0 01-.448 2.521.753.753 0 01-.702.488zM2.111 8.27a.753.753 0 01-.702-.487 7.018 7.018 0 01-.448-2.527c0-2.9 1.687-5.261 3.761-5.261.028 0 .056.002.084.005a3.785 3.785 0 013.249 2.812.75.75 0 01-1.451.382 2.281 2.281 0 00-1.132-1.445v2.006a.75.75 0 01-1.5 0V1.717c-.887.526-1.511 1.936-1.511 3.544a5.554 5.554 0 00.352 1.996.747.747 0 01-.44.966.778.778 0 01-.262.047z"}})])
          )
        }
      }
    