
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
            children.concat([_c('path',{attrs:{"d":"M5.25 18.002a3.754 3.754 0 01-3.75-3.75c0-2.068 1.682-3.75 3.75-3.75S9 12.184 9 14.252a3.754 3.754 0 01-3.75 3.75zm0-6A2.252 2.252 0 003 14.252c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25a2.252 2.252 0 00-2.25-2.25z"}}),_c('path',{attrs:{"d":"M9.75 24.002a.75.75 0 01-.75-.75c0-2.068-1.682-3.75-3.75-3.75s-3.75 1.682-3.75 3.75a.75.75 0 01-1.5 0c0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25a.75.75 0 01-.75.75zM18.75 18.002a3.754 3.754 0 01-3.75-3.75c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75a3.754 3.754 0 01-3.75 3.75zm0-6a2.252 2.252 0 00-2.25 2.25c0 1.241 1.009 2.25 2.25 2.25s2.25-1.01 2.25-2.25a2.252 2.252 0 00-2.25-2.25zM23.25 24.002a.75.75 0 01-.75-.75c0-2.068-1.682-3.75-3.75-3.75S15 21.184 15 23.252a.75.75 0 01-1.5 0c0-2.895 2.355-5.25 5.25-5.25S24 20.357 24 23.252a.75.75 0 01-.75.75zM11.214 10.754a1.477 1.477 0 01-1.041-.46L5.689 5.658a3.378 3.378 0 01.103-4.78A3.163 3.163 0 017.985 0c.879 0 1.696.349 2.301.984l.963.998.967-1.001.105-.105A3.163 3.163 0 0114.513 0a3.15 3.15 0 012.302.984 3.378 3.378 0 010 4.671l-4.525 4.677a1.492 1.492 0 01-1.039.423l-.037-.001zM7.985 1.5c-.433 0-.845.164-1.157.463-.019.017-.038.037-.057.056a1.88 1.88 0 000 2.6L11.25 9.25l4.483-4.635a1.877 1.877 0 00-.003-2.595 1.666 1.666 0 00-1.216-.52c-.434 0-.845.164-1.158.463l-.055.055-1.511 1.565a.752.752 0 01-.539.224.752.752 0 01-.539-.224l-1.506-1.56A1.675 1.675 0 007.985 1.5z"}})])
          )
        }
      }
    