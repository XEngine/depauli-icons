
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
            children.concat([_c('path',{attrs:{"d":"M6.644 22.616a5.137 5.137 0 01-2.279-.532A5.163 5.163 0 011.94 19.59 2.236 2.236 0 010 17.363v-1.5c0-.96.615-1.808 1.5-2.121v-2.379l.001-.029a.548.548 0 01.006-.061.617.617 0 01.009-.062c.003-.017.013-.048.018-.065a.726.726 0 01.022-.066l3.276-7.372a3.906 3.906 0 013.567-2.317h1.024a.75.75 0 010 1.5H8.4c-.95 0-1.812.56-2.198 1.427l-2.798 6.295h18.692l-2.798-6.295a2.404 2.404 0 00-2.196-1.427h-1.024a.75.75 0 010-1.5H17.1c1.542 0 2.942.91 3.568 2.317l3.268 7.35a.324.324 0 01.011.028c.007.017.012.035.017.052a.655.655 0 01.035.202L24 17.578c-.034 2.778-2.316 5.035-5.088 5.035h-.062a5.15 5.15 0 01-4.345-2.356l-.781-1.22a1.162 1.162 0 00-.972-.523c-.398 0-.765.198-.982.53l-.774 1.21a5.198 5.198 0 01-4.352 2.362zm-2.962-3.003c.348.477.804.86 1.344 1.124a3.65 3.65 0 002.815.179 3.705 3.705 0 001.896-1.476l.775-1.211a2.672 2.672 0 014.474-.006l.782 1.222a3.65 3.65 0 003.074 1.668h.042c1.98 0 3.592-1.59 3.616-3.544v-5.456H3v1.5h3.75A2.252 2.252 0 019 15.863v1.5a2.252 2.252 0 01-2.25 2.25H3.682zm-1.432-4.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5z"}})])
          )
        }
      }
    