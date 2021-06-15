
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
            children.concat([_c('path',{attrs:{"d":"M5.1 23.999A2.131 2.131 0 013 21.845V10.06a4.179 4.179 0 01-1.807-6.934A4.155 4.155 0 014.136 1.87l.072-.001c.73 0 1.436.192 2.066.56A4.78 4.78 0 018.553.389a4.777 4.777 0 013.671-.048 4.729 4.729 0 012.25 1.847 4.228 4.228 0 011.593-.317 4.202 4.202 0 014.018 3.02c.126.438.181.891.164 1.346a2.993 2.993 0 01-2.25 2.676v.086h1.35c.045-.002.106-.003.166-.003 2.373 0 4.384 1.939 4.483 4.322v1.831c-.101 2.448-2.08 4.353-4.504 4.353l-.174-.003h-1.322v2.356a2.12 2.12 0 01-2.087 2.144H5.1zm-.6-2.143a.629.629 0 00.613.643H15.9a.62.62 0 00.6-.632V9.003l-.961.001L11.978 9a.741.741 0 00-.74.672 3.951 3.951 0 01-.506 1.609 4.198 4.198 0 01-3.259 2.202c-.1.008-.176.012-.251.014l-.094.001a4.129 4.129 0 01-2.626-.952v9.31zm14.85-3.857l.137.003a3.005 3.005 0 003.013-2.884v-1.769c-.066-1.566-1.415-2.853-3.008-2.853l-.114.002h-1.379v7.5h1.351zM3.896 8.721a.74.74 0 01.469.306.734.734 0 01.142.41 2.636 2.636 0 002.619 2.561l.06-.001c.048-.001.096-.003.145-.007a2.704 2.704 0 002.086-1.432c.186-.326.294-.665.326-1.018a2.247 2.247 0 012.226-2.04l3.585.003c.595 0 1.169-.001 1.698-.003h.034c.763 0 1.407-.593 1.466-1.35a2.694 2.694 0 00-2.684-2.779 2.684 2.684 0 00-1.486.451.74.74 0 01-.63.095.747.747 0 01-.476-.423 3.28 3.28 0 00-1.808-1.761 3.279 3.279 0 00-2.523.033A3.298 3.298 0 007.297 3.82a.757.757 0 01-.716.529.746.746 0 01-.525-.214 2.648 2.648 0 00-1.862-.766h-.04a2.665 2.665 0 00-1.889.806A2.666 2.666 0 001.5 6.079c.008.716.294 1.386.806 1.887.414.406.96.67 1.536.743a.782.782 0 01.054.012z"}}),_c('path',{attrs:{"d":"M8.25 19.826a.75.75 0 01-.75-.75v-4.178a.75.75 0 011.5 0v4.178a.75.75 0 01-.75.75zM12.75 19.826a.75.75 0 01-.75-.75v-6.267a.75.75 0 011.5 0v6.267a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    