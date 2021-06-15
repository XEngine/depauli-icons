
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
            children.concat([_c('path',{attrs:{"d":"M2.994 11.25A2.252 2.252 0 01.744 9V3A2.252 2.252 0 012.994.75h18A2.252 2.252 0 0123.244 3v6a2.252 2.252 0 01-2.25 2.25h-18zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75h-18z"}}),_c('path',{attrs:{"d":"M4.494 5.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM4.494 8.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM8.994 5.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM8.994 8.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM13.494 5.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM17.994 5.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM17.994 8.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM8.994 23.25a.75.75 0 01-.6-1.2c1.145-1.526 1.378-2.419 1.392-2.712-.179.009-.735.103-1.906.805a.751.751 0 01-1.128-.749L7.38 15H4.747a2.256 2.256 0 00-1.952 1.134c-1.295 2.262-1.301 6.323-1.301 6.364a.75.75 0 01-1.5.004c-.001-.182.002-4.497 1.499-7.113A3.754 3.754 0 014.746 13.5h2.633c.402 0 .779.157 1.062.441a1.495 1.495 0 01.424 1.27l-.422 2.954c.534-.223.988-.333 1.377-.333.46 0 .83.153 1.101.453.443.491.859 1.75-1.326 4.665a.756.756 0 01-.601.3zM23.243 23.25a.747.747 0 01-.749-.752c0-.041-.003-4.096-1.301-6.363A2.256 2.256 0 0019.243 15h-2.634l.628 4.394a.756.756 0 01-.327.731.754.754 0 01-.801.018c-1.17-.702-1.727-.796-1.906-.805.013.293.247 1.186 1.392 2.712a.75.75 0 01-1.2.9c-2.186-2.916-1.77-4.174-1.327-4.665.271-.301.641-.453 1.101-.453.389 0 .843.109 1.377.333l-.422-2.953a1.494 1.494 0 01.424-1.271c.283-.284.66-.44 1.061-.441h2.635a3.758 3.758 0 013.251 1.89c1.5 2.621 1.5 6.931 1.499 7.113a.75.75 0 01-.75.747h-.001z"}})])
          )
        }
      }
    