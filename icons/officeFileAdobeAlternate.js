
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
            children.concat([_c('path',{attrs:{"d":"M5.488 20.258c-.469 0-.919-.223-1.203-.596a.734.734 0 01-.075-.121 1.629 1.629 0 01-.167-.716c-.089-1.6.52-3.885 3.887-5.648l.02-.26c.063-.62.101-1.242.115-1.859a43.318 43.318 0 01-2.753-2.89.758.758 0 01-.046-.059 3.499 3.499 0 01-.619-2.407 2.257 2.257 0 011.99-1.947.556.556 0 01.082-.005 2.322 2.322 0 011.93 1.121c.319.542.523 1.128.609 1.745.201 1.247.307 2.527.314 3.8.245.227.492.451.741.671.322.26.667.519 1.02.762a11.502 11.502 0 013.371-.502c.556 0 1.116.041 1.665.12.581.094 1.127.33 1.586.683.575.456.868 1.184.77 1.902a.856.856 0 01-.025.114 2.13 2.13 0 01-1.952 1.514h-.063a4.647 4.647 0 01-1.914-.408 18.359 18.359 0 01-3.652-1.771c-.648.203-1.234.42-1.761.65-.149 1.591-.438 3.23-1.386 4.576a3.33 3.33 0 01-2.184 1.5 1.434 1.434 0 01-.3.031zm2.258-5.245c-1.548 1.022-2.271 2.248-2.205 3.729a1.828 1.828 0 001.169-.828l.026-.039c.599-.847.865-1.878 1.01-2.862zm5.445-2.051c.68.35 1.387.654 2.11.909a.713.713 0 01.067.028c.399.186.846.284 1.292.284h.043a.623.623 0 00.538-.391.565.565 0 00-.212-.459 2.003 2.003 0 00-.891-.383 10.009 10.009 0 00-2.947.012zm-3.695-.485l.104-.04-.096-.075a2.3 2.3 0 01-.008.115zM6.472 7.216c.494.568 1.01 1.129 1.54 1.676a23.334 23.334 0 00-.237-2.05 3.224 3.224 0 00-.415-1.203.81.81 0 00-.615-.385.75.75 0 00-.61.634c-.051.458.068.933.337 1.328z"}}),_c('path',{attrs:{"d":"M2.998 23.999A3.003 3.003 0 01-.001 21V3c0-.801.311-1.554.878-2.121a2.983 2.983 0 012.121-.88h14.38c.602 0 1.166.234 1.591.658L23.34 5.03c.425.425.659.99.659 1.59V21A3.003 3.003 0 0121 23.999H2.998zM3 1.499c-.402 0-.779.156-1.062.44A1.49 1.49 0 001.499 3v18c0 .826.673 1.499 1.5 1.499H21c.826 0 1.499-.673 1.499-1.5v-13.5h-3.75a2.252 2.252 0 01-2.25-2.25v-3.75H3zm14.999 3.75c0 .414.336.75.75.75h3.439l-4.189-4.19v3.44z"}})])
          )
        }
      }
    