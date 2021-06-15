
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
            children.concat([_c('path',{attrs:{"d":"M11.962 18.817a5.186 5.186 0 01-3.629-1.472 5.18 5.18 0 01-1.582-3.818c0-3.907 3.817-9.027 5.212-9.027 1.394 0 5.211 5.122 5.213 9.034.042 2.867-2.262 5.239-5.135 5.282l-.079.001zm.001-12.722c-.925.764-3.712 4.36-3.712 7.442a3.69 3.69 0 001.127 2.732 3.707 3.707 0 002.597 1.048h.046a3.717 3.717 0 003.656-3.768c-.001-3.094-2.789-6.69-3.714-7.454z"}}),_c('path',{attrs:{"d":"M23.153 14.25a.753.753 0 01-.745-.848c.062-.463.093-.935.094-1.402 0-5.789-4.71-10.5-10.5-10.5C6.21 1.5 1.5 6.21 1.5 12c0 .467.032.938.093 1.401a.75.75 0 01-.743.849.752.752 0 01-.743-.651A12.064 12.064 0 010 12C0 5.383 5.383 0 12 0c6.618 0 12.002 5.383 12.002 12 0 .532-.036 1.07-.106 1.599a.753.753 0 01-.743.651zM20.907 19.622a.75.75 0 01-.59-1.213 9.94 9.94 0 001.311-2.213.75.75 0 111.379.59 11.435 11.435 0 01-1.509 2.547.746.746 0 01-.591.289zM16.338 23.128a.747.747 0 01-.694-.466.746.746 0 01.41-.978 9.863 9.863 0 002.23-1.274.748.748 0 011.198.698.745.745 0 01-.289.496 11.349 11.349 0 01-2.57 1.469.773.773 0 01-.285.055zM7.687 23.128a.749.749 0 01-.284-.056 11.264 11.264 0 01-2.571-1.469.751.751 0 01.455-1.347c.166 0 .323.053.454.154a9.754 9.754 0 002.229 1.274c.185.075.33.219.408.404a.746.746 0 01-.691 1.04zM3.115 19.623a.746.746 0 01-.591-.288 11.471 11.471 0 01-1.509-2.548.752.752 0 01.688-1.046c.301 0 .572.178.69.455.339.79.78 1.535 1.311 2.214a.744.744 0 01.154.553.746.746 0 01-.743.66zM12 24c-.532 0-1.07-.035-1.599-.105a.751.751 0 01-.645-.842.752.752 0 01.841-.645 10.814 10.814 0 002.804-.001.753.753 0 01.843.644.752.752 0 01-.645.843C13.07 23.965 12.532 24 12 24z"}})])
          )
        }
      }
    