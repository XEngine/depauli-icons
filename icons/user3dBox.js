
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
            children.concat([_c('path',{attrs:{"d":"M10.527 15.75a.726.726 0 01-.253-.047.564.564 0 01-.081-.032l-4.501-2.25a.746.746 0 01-.415-.671V7.5l.003-.05a.695.695 0 01.016-.11l.013-.05a.805.805 0 01.062-.151.758.758 0 01.103-.144l.035-.035a.644.644 0 01.084-.069.288.288 0 01.039-.028l.029-.016a.18.18 0 01.031-.017l4.5-2.25a.753.753 0 01.67 0l4.5 2.25.061.034.04.028c.028.02.057.044.083.069l.031.03a.788.788 0 01.119.17.754.754 0 01.051.131l.013.052a.666.666 0 01.017.155v5.25a.746.746 0 01-.415.671l-4.5 2.25a.614.614 0 01-.086.034.706.706 0 01-.249.046zm.75-1.963l3-1.5V8.714l-3 1.5v3.573zm-1.5 0v-3.573l-3-1.5v3.573l3 1.5zm.75-4.876L13.35 7.5l-2.823-1.411L7.705 7.5l2.822 1.411z"}}),_c('path',{attrs:{"d":"M15.027 24a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h1.5a2.252 2.252 0 002.25-2.25v-3a.75.75 0 01.75-.75h1.9a183.72 183.72 0 01-.62-1.635l-.018-.047C18.62 6.053 16.907 1.5 10.902 1.5a8.647 8.647 0 00-6.33 2.76c-3.228 3.485-3.02 8.946.465 12.175.153.142.24.342.24.55v6.265a.75.75 0 01-1.5 0v-5.945C-.07 13.5-.219 7.225 3.472 3.241A10.143 10.143 0 0110.892 0c7.053 0 9.022 5.232 11.301 11.29.327.869.665 1.768 1.031 2.681A.75.75 0 0122.527 15h-2.25v2.25a3.754 3.754 0 01-3.75 3.75h-.75v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    