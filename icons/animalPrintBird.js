
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
            children.concat([_c('path',{attrs:{"d":"M13.667 22.382c-.141 0-.285-.016-.429-.049-1.457-.329-2.986-1.648-1.994-6.065.497-2.215 2.466-3.782 4.031-4.706a1.511 1.511 0 01.856-.205c.402.025.768.205 1.033.505.265.301.397.686.372 1.086a23.281 23.281 0 01-.5 3.547c-.499 2.231-1.063 4.76-2.374 5.591-.31.197-.644.296-.995.296zm2.371-9.528c-1.073.634-2.931 1.961-3.331 3.742-.587 2.613-.305 4.01.86 4.273a.346.346 0 00.291-.051c.785-.498 1.321-2.896 1.712-4.647.24-1.087.398-2.203.468-3.317zM19.684 23.701a3.12 3.12 0 01-.68-.078c-.772-.173-1.677-.823-1.604-2.936.042-1.204.37-2.668.66-3.959a23.275 23.275 0 011.062-3.421 1.49 1.49 0 01.8-.824 1.483 1.483 0 011.148-.016c.281.112.519.303.688.553 1.02 1.502 2.132 3.76 1.635 5.975-.375 1.674-.883 2.866-1.552 3.645-.608.704-1.333 1.061-2.157 1.061zm.831-9.839a21.597 21.597 0 00-.992 3.195c-.275 1.226-.587 2.616-.624 3.681-.021.599.038 1.332.432 1.42.119.027.233.04.34.04.388 0 .715-.171 1.03-.537.498-.579.91-1.587 1.226-2.995.4-1.78-.713-3.774-1.412-4.804zM3.838 12C1.731 12 .614 10.188.517 6.613.457 4.342 1.983 2.34 3.274 1.06A1.487 1.487 0 014.333.622c.724 0 1.345.517 1.475 1.229.22 1.169.349 2.365.384 3.553.082 3.06.174 6.526-2.258 6.594L3.838 12zm.496-9.877c-.888.88-2.365 2.625-2.316 4.45.026.977.106 3.927 1.83 3.927l.046-.001c.934-.026.846-3.296.799-5.052a21.675 21.675 0 00-.358-3.321l-.001-.003zM9.789 11.834c-.769 0-1.778-.426-2.216-2.454-.255-1.179-.295-2.68-.33-4.004a23.05 23.05 0 01.191-3.572A1.503 1.503 0 019.118.513c.298.039.575.166.8.366 1.357 1.208 2.988 3.123 3.051 5.392.067 2.497-.421 5.489-3.122 5.562l-.058.001zm-.867-9.833a21.66 21.66 0 00-.18 3.337c.034 1.258.072 2.684.297 3.726.083.382.32 1.271.734 1.271l.033-.001c1.191-.032 1.735-1.348 1.664-4.021-.051-1.824-1.618-3.484-2.548-4.312z"}})])
          )
        }
      }
    