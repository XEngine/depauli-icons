
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
            children.concat([_c('path',{attrs:{"d":"M17.25 23.998a6.708 6.708 0 01-4.749-1.957l-.024-.022a6.684 6.684 0 01-1.978-4.771 6.758 6.758 0 016.75-6.75c1.783 0 3.464.691 4.736 1.945l.036.031c.01.01.021.023.031.036A6.695 6.695 0 0124 17.248a6.758 6.758 0 01-6.75 6.75zm-3.142-2.549a5.239 5.239 0 003.142 1.049 5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.049-3.142l-7.343 7.343zm3.142-9.451a5.256 5.256 0 00-5.25 5.25c0 1.135.37 2.235 1.048 3.141l7.343-7.343a5.232 5.232 0 00-3.141-1.048z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.678-1.072l2.911-6.113a11.316 11.316 0 01-1.458-4.806C1.096 5.82 5.78.435 11.968.005a11.228 11.228 0 018.164 2.735 11.18 11.18 0 013.839 7.707.75.75 0 01-.696.8l-.052.002a.753.753 0 01-.748-.698c-.354-5.089-4.623-9.074-9.718-9.074-.227 0-.457.008-.685.024-5.363.373-9.423 5.039-9.05 10.403a9.787 9.787 0 001.448 4.475.745.745 0 01.04.719l-2.174 4.566 4.566-2.175a.747.747 0 01.718.04c.522.323 1.077.6 1.651.822A.75.75 0 019 21.8a.735.735 0 01-.27-.051 11.49 11.49 0 01-1.545-.734l-6.112 2.912A.77.77 0 01.75 24z"}})])
          )
        }
      }
    