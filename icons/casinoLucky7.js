
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
            children.concat([_c('path',{attrs:{"d":"M9.65 24a2.252 2.252 0 01-2.244-2.454c.415-4.627 2.265-8.548 6.142-12.949l-.072.001c-1.024 0-2.146-.388-3.43-1.185a4.006 4.006 0 00-1.657-.357c-.414 0-.825.064-1.222.189-.363.096-.595.39-.595.735v.27a2.252 2.252 0 01-2.25 2.25h-.75a2.252 2.252 0 01-2.25-2.25v-6A2.252 2.252 0 013.572 0h.75c.756 0 1.453.376 1.868.995l.022-.007c.084-.03.174-.067.272-.109a6.713 6.713 0 015.727.256 6.333 6.333 0 002.932.723c1.237 0 2.437-.36 3.47-1.04A2.241 2.241 0 0119.879.43c.6 0 1.165.23 1.591.649l.628.629c.685.696.85 1.746.412 2.615-4.978 9.94-5.263 12.687-5.397 17.483a2.245 2.245 0 01-2.247 2.192H9.65zm6.669-18a.75.75 0 01.53 1.28c-5.195 5.195-7.498 9.367-7.949 14.401a.749.749 0 00.75.819h5.212a.75.75 0 00.75-.734c.14-5.021.435-7.888 5.556-18.115a.767.767 0 00-.137-.885l-.619-.62a.754.754 0 00-.532-.214.76.76 0 00-.432.133 7.801 7.801 0 01-7.936.398 5.212 5.212 0 00-4.445-.202 6.5 6.5 0 01-.348.14 1.74 1.74 0 01-1.341-.066.75.75 0 01-.367-.382.75.75 0 00-.689-.453h-.75a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75v-.27A2.251 2.251 0 016.75 5.805a5.42 5.42 0 011.635-.25c.798 0 1.604.178 2.331.514a.859.859 0 01.084.045c1.038.651 1.938.98 2.674.98.361 0 .683-.076.984-.231l1.519-.781A.76.76 0 0116.319 6z"}})])
          )
        }
      }
    