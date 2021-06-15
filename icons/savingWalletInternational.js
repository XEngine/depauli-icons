
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
            children.concat([_c('path',{attrs:{"d":"M12.836 24.008c-1.348-.072-2.396-1.218-2.336-2.556l-.001-6.167c-.06-1.253.875-2.349 2.141-2.508l5.708-2.855a1.537 1.537 0 011.183-.085c.393.131.712.407.897.777l1.133 2.267a2.461 2.461 0 011.688 2.434v.418c.463.277.75.773.75 1.325v2.4c0 .552-.287 1.048-.75 1.325v.702c.059 1.311-.98 2.45-2.317 2.522l-8.076.001h-.02zm.02-9.75c-.479.027-.882.481-.858.992l.001 6.235c-.024.544.379.996.897 1.024l7.996-.001c.478-.027.88-.48.858-.99v-.51h-1.301c-1.516 0-2.75-1.234-2.75-2.75s1.234-2.75 2.75-2.75h1.3v-.227c.023-.541-.374-.991-.888-1.023h-8.005zm7.593 2.75c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h2a.05.05 0 00.05-.05v-2.4a.05.05 0 00-.05-.05h-2zm-1.408-5.75a.054.054 0 00-.021.005l-2.989 1.495h3.791l-.736-1.473a.048.048 0 00-.029-.025l-.016-.002z"}}),_c('path',{attrs:{"d":"M5.736 22.105a.747.747 0 01-.417-.127 11.946 11.946 0 01-4.335-5.209 12.063 12.063 0 01-.757-2.437A11.948 11.948 0 011.8 5.695a.772.772 0 01.103-.163l.035-.055c.031-.05.062-.1.096-.149A11.97 11.97 0 018.987.402a.767.767 0 01.245-.061 12.113 12.113 0 012.792-.327 11.959 11.959 0 012.922.364 11.951 11.951 0 017.175 5.188 11.896 11.896 0 011.496 3.426.75.75 0 11-1.45.385 10.404 10.404 0 00-1.076-2.618h-3.549c.078.429.144.858.198 1.281a.751.751 0 01-1.488.188c-.061-.486-.14-.979-.235-1.469h-8.06c-.06.328-.104.62-.137.902a25.218 25.218 0 00-.273 2.848h3.702a.75.75 0 010 1.5H7.531a25.342 25.342 0 001.165 7.174.749.749 0 01-.716.976.747.747 0 01-.715-.524 26.456 26.456 0 01-.627-2.376H2.904a10.51 10.51 0 003.25 3.474.752.752 0 01.205 1.041.752.752 0 01-.623.331zm.621-6.347a27.218 27.218 0 01-.327-3.75H1.5a10.634 10.634 0 00.69 3.75h4.167zm-.312-5.25c.039-1.034.136-2.058.289-3.049.025-.216.058-.446.1-.701H2.909a10.358 10.358 0 00-1.305 3.75h4.441zm13.995-5.25a10.437 10.437 0 00-3.778-2.845c.419.917.747 1.87.98 2.845h2.798zm-4.347 0a14.148 14.148 0 00-1.462-3.508 10.527 10.527 0 00-4.462.006A15.445 15.445 0 008.3 5.257h7.393zm-8.949 0a16.99 16.99 0 01.999-2.842 10.411 10.411 0 00-3.781 2.842h2.782z"}})])
          )
        }
      }
    