
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
            children.concat([_c('path',{attrs:{"d":"M21.751 24.001a.75.75 0 01-.75-.75 8.947 8.947 0 00-2.926-6.648l-.852 3.097a.749.749 0 01-1.139.424L12 17.402l-4.084 2.723a.745.745 0 01-.678.079.752.752 0 01-.461-.504l-.851-3.096A8.95 8.95 0 003 23.251a.75.75 0 01-1.5 0 10.46 10.46 0 016.507-9.713l.027-.01c.256-.104.495-.192.735-.269a.753.753 0 01.715.139L12 15.52l2.516-2.122a.744.744 0 01.621-.161.57.57 0 01.109.026c.233.076.474.164.717.263l.037.014a10.455 10.455 0 016.501 9.711.75.75 0 01-.75.75zm-5.699-5.7l.735-2.673a8.91 8.91 0 00-1.263-.66l-.054-.022a12.152 12.152 0 00-.314-.126l-1.91 1.61 2.806 1.871zm-8.104 0l2.805-1.87-1.91-1.61c-.1.038-.2.078-.299.119l-.069.029a9.07 9.07 0 00-1.263.66l.736 2.672zM16.267 12.586c-1.624 0-3.099-.511-3.851-1.335A2.339 2.339 0 0112 10.62a2.339 2.339 0 01-.416.631c-.751.823-2.227 1.335-3.851 1.335h-.001c-.767 0-1.506-.121-2.137-.35a.744.744 0 01-.424-.387.745.745 0 01-.026-.573c.305-.842.866-1.685 1.595-2.401a5.98 5.98 0 01-.646-3.932 5.96 5.96 0 012.478-3.866 5.997 5.997 0 014.486-.982 5.963 5.963 0 013.866 2.478 5.972 5.972 0 011.067 3.317.692.692 0 01.001.221 6.025 6.025 0 01-.729 2.766c.728.716 1.289 1.558 1.593 2.399a.747.747 0 01-.45.96c-.632.229-1.371.35-2.139.35zm-2.12-3.783c-.235 0-.504.061-.717.516-.177.378-.149.653.095.92.465.509 1.556.851 2.715.851.286 0 .57-.021.839-.062-.715-1.188-1.973-2.183-2.881-2.225h-.051zm-7.225 2.226c.269.041.553.062.839.062 1.16 0 2.251-.342 2.716-.851.244-.267.272-.542.095-.92-.214-.456-.48-.517-.713-.517l-.054.001c-.91.041-2.169 1.037-2.883 2.225zm2.933-3.726c.921 0 1.658.49 2.075 1.38.025.054.048.109.07.163.022-.054.045-.109.071-.164.411-.877 1.168-1.38 2.078-1.38l.117.003c.557.025 1.173.24 1.799.625.176-.372.3-.771.369-1.179H14.25a4.505 4.505 0 01-4.5-4.5v-.146a4.471 4.471 0 00-2.179 3.103 4.487 4.487 0 00.366 2.721c.625-.384 1.24-.598 1.797-.624l.121-.002zm1.395-5.052c0 1.654 1.346 3 3 3h2.183a4.49 4.49 0 00-5.183-3.686v.686z"}})])
          )
        }
      }
    