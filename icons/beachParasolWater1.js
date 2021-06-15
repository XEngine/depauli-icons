
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
            children.concat([_c('path',{attrs:{"d":"M18 23.5a3.733 3.733 0 01-3-1.505 3.733 3.733 0 01-3 1.505 3.733 3.733 0 01-3-1.505A3.733 3.733 0 016 23.5a3.73 3.73 0 01-2.999-1.504 3.754 3.754 0 01-2.063 1.385.751.751 0 01-.834-1.107.748.748 0 01.459-.345 2.25 2.25 0 001.688-2.179.749.749 0 111.499 0C3.75 20.991 4.759 22 6 22s2.25-1.009 2.25-2.25a.75.75 0 011.5 0A2.252 2.252 0 0012 22a2.252 2.252 0 002.25-2.25.75.75 0 011.5 0c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25a.75.75 0 011.5 0 2.25 2.25 0 001.686 2.179c.194.05.357.173.458.346a.75.75 0 01-.833 1.107 3.753 3.753 0 01-2.062-1.385A3.736 3.736 0 0118 23.5zM11.999 18.25a.75.75 0 01-.66-1.106 7.917 7.917 0 013.8-3.489L13.371 8.35 7.68 10.246a.75.75 0 01-.949-.475l-.237-.711c-.462-1.384-.111-2.925.988-4.338.888-1.141 2.215-2.107 3.764-2.744L11 1.237a.752.752 0 01.711-.988.75.75 0 01.712.513l.247.741a10.117 10.117 0 012.541-.334c.745 0 1.458.091 2.117.271 1.728.471 2.934 1.494 3.396 2.88l.237.711a.746.746 0 01-.475.949l-5.693 1.896 1.772 5.314c.469-.107.939-.17 1.403-.19h5.281a.75.75 0 010 1.5H18c-2.221.092-4.273 1.378-5.34 3.356a.752.752 0 01-.661.394zm.419-15.114c-1.569.524-2.902 1.414-3.752 2.507-.781 1.005-1.048 2.05-.749 2.943l11.384-3.791c-.298-.894-1.139-1.572-2.367-1.907a6.613 6.613 0 00-1.74-.221 8.756 8.756 0 00-2.776.469z"}})])
          )
        }
      }
    