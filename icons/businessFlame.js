
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
            children.concat([_c('path',{attrs:{"d":"M2.531 17.75A2.543 2.543 0 010 15.247c0-.148.012-.292.036-.43l1.281-7.502A1.878 1.878 0 013.188 5.75h1.311a.75.75 0 010 1.5H3.2a.398.398 0 00-.405.325l-1.281 7.498a1.001 1.001 0 00-.014.161 1.037 1.037 0 001.036 1.015h18.908c.58 0 1.046-.459 1.053-1.023a.91.91 0 00-.014-.15L21.2 7.567a.39.39 0 00-.384-.317H19.5a.75.75 0 010-1.5h1.3c.929 0 1.713.655 1.877 1.557l1.283 7.514c.024.136.036.277.036.418a2.554 2.554 0 01-2.547 2.511H2.531zM1.728 20.749a.75.75 0 010-1.5h20.544a.75.75 0 010 1.5H1.728zM3 23.749a.75.75 0 010-1.5h18.587a.75.75 0 010 1.5H3z"}}),_c('path',{attrs:{"d":"M12.106 13.856a5.612 5.612 0 01-3.93-1.596 5.602 5.602 0 01-1.709-4.128A8.747 8.747 0 0111.641.357a1.226 1.226 0 01.946-.027 1.242 1.242 0 01.63 1.784 2.407 2.407 0 00-.075 2.362c.083-.158.152-.323.204-.495a1.242 1.242 0 011.872-.662 5.855 5.855 0 012.532 4.826 5.595 5.595 0 01-1.597 4 5.605 5.605 0 01-3.964 1.71l-.083.001zM11.59 2.063a7.244 7.244 0 00-3.623 6.098v.111a4.114 4.114 0 001.255 2.913 4.13 4.13 0 002.892 1.172h.054c1.104-.016 2.137-.462 2.909-1.256s1.188-1.84 1.173-2.944a4.362 4.362 0 00-1.593-3.383 4.319 4.319 0 01-.974 1.461.746.746 0 01-1.029.023 3.91 3.91 0 01-1.064-4.195z"}})])
          )
        }
      }
    