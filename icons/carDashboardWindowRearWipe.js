
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
            children.concat([_c('path',{attrs:{"d":"M11.754 22.5a2.252 2.252 0 01-2.25-2.25c0-.563.21-1.098.584-1.51l-1.701-3.156c-.705.23-1.383.51-2.02.834l-.033.016a2.243 2.243 0 01-1.724.101 2.24 2.24 0 01-1.286-1.145L.892 10.366C-.013 8.497.755 6.207 2.604 5.26a20.834 20.834 0 016.025-2 .748.748 0 01.736 1.174.75.75 0 01-.486.306c-1.95.33-3.831.955-5.591 1.857a2.362 2.362 0 00-1.045 3.116l2.432 5.024a.744.744 0 00.676.424.737.737 0 00.325-.075 15.599 15.599 0 011.988-.842L4.869 9.057a.75.75 0 011.32-.712l3.217 5.969c.005.008.017.03.028.053l1.973 3.66a2.252 2.252 0 012.597 2.223 2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M11.754 15a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM11.754 10.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM11.754 6a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM18.155 16.661a2.23 2.23 0 01-1.006-.24v.001a14.235 14.235 0 00-2.598-1.015.751.751 0 01.405-1.445c.988.278 1.952.654 2.867 1.12a.77.77 0 00.336.076.743.743 0 00.675-.421l2.431-5.024a2.364 2.364 0 00-1.044-3.117 19.308 19.308 0 00-5.591-1.857.743.743 0 01-.486-.305.743.743 0 01-.128-.56.747.747 0 01.864-.614 20.796 20.796 0 016.025 2.001c1.848.946 2.616 3.236 1.71 5.105l-2.43 5.024a2.268 2.268 0 01-2.03 1.271z"}})])
          )
        }
      }
    