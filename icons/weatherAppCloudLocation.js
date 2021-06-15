
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
            children.concat([_c('path',{attrs:{"d":"M5.248 13.502a4.53 4.53 0 01-1.949-.442 4.464 4.464 0 01-2.297-2.561 4.463 4.463 0 01.187-3.435A4.461 4.461 0 013.75 4.767a4.485 4.485 0 012.583-.122A6.77 6.77 0 0112.77-.066a6.758 6.758 0 016.506 8.539.752.752 0 01-1.375.173.742.742 0 01-.071-.57 5.256 5.256 0 00-5.061-6.641 5.265 5.265 0 00-5.163 4.292.436.436 0 01-.006.049 5.033 5.033 0 00-.058 1.632.752.752 0 01-.745.844.751.751 0 01-.743-.653 6.836 6.836 0 01-.056-.844.68.68 0 01.004-.078c.003-.174.015-.358.037-.556a2.962 2.962 0 00-1.79.061 2.973 2.973 0 00-1.708 1.53 2.977 2.977 0 00-.125 2.289 2.976 2.976 0 001.531 1.707 3.02 3.02 0 001.294.294h5.225a.75.75 0 010 1.5H5.248zM17.998 16.952c-.62 0-1.125-.505-1.125-1.125 0-.573.427-1.048.995-1.115a.796.796 0 01.26 0c.531.062.942.487.987 1.019a.787.787 0 01.005.136 1.119 1.119 0 01-1.119 1.085h-.003z"}}),_c('path',{attrs:{"d":"M17.995 24.001a1.49 1.49 0 01-1.179-.575c-1.856-2.375-4.069-5.621-4.069-7.601 0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25c0 1.98-2.212 5.226-4.068 7.6a1.492 1.492 0 01-1.184.576zm.003-11.925a3.754 3.754 0 00-3.75 3.75c0 1.159 1.437 3.717 3.75 6.676 2.313-2.959 3.75-5.517 3.75-6.676a3.754 3.754 0 00-3.75-3.75z"}})])
          )
        }
      }
    