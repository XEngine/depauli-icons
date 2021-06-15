
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M20.25 7.5a.743.743 0 01-.53-.22l-.97-.97-.97.97a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.97-.97-.97-.97c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.97.97.97-.97c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-.97.97.97.97c.142.141.22.33.22.53s-.078.389-.22.53-.33.22-.53.22zM17.25 18.75a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85a2.252 2.252 0 012.25-2.25h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0018 12c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85a2.252 2.252 0 01-2.25 2.25h-1.5zM8.25 18.75A.75.75 0 017.5 18v-2.25H6V18a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25S9 10.759 9 12v6a.75.75 0 01-.75.75zm-.75-4.5V12A.75.75 0 006 12v2.25h1.5zM11.25 18.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75A3.754 3.754 0 0115 13.5V15a3.754 3.754 0 01-3.75 3.75zm.75-1.629A2.264 2.264 0 0013.5 15v-1.5c0-.962-.621-1.808-1.5-2.121v5.742z"}})])
          )
        }
      }
    