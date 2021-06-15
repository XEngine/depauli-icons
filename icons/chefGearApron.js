
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
            children.concat([_c('path',{attrs:{"d":"M5.238 23.999a2.256 2.256 0 01-2.188-2.324l.17-5.109A2.248 2.248 0 001.5 18.75v1.5a.75.75 0 01-1.5 0v-1.5a3.731 3.731 0 013.271-3.716l.38-11.409A3.734 3.734 0 017.398 0h.852a2.252 2.252 0 012.25 2.25V6c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V2.25A2.252 2.252 0 0115.75 0h.85a3.735 3.735 0 013.75 3.625l.379 11.409A3.731 3.731 0 0124 18.75v1.5a.75.75 0 01-1.5 0v-1.5a2.249 2.249 0 00-1.72-2.184l.17 5.109.001.076c0 .602-.235 1.167-.66 1.591-.425.424-.99.658-1.59.658l-13.463-.001zm-.688-2.274a.751.751 0 00.725.775h13.426a.748.748 0 00.751-.749l-.197-5.943c-.002-.02-.004-.038-.004-.058l.001-.025-.4-12.05a2.243 2.243 0 00-2.25-2.175h-.852a.75.75 0 00-.75.75V6c0 1.654-1.346 3-3 3S9 7.654 9 6V2.25a.75.75 0 00-.75-.75h-.851c-1.22 0-2.208.955-2.249 2.175l-.401 12.05a.369.369 0 01-.003.083l-.196 5.917z"}}),_c('path',{attrs:{"d":"M12.01 19.506a5.29 5.29 0 01-1.055-.107 5.24 5.24 0 01-4.1-4.1 1.496 1.496 0 011.173-1.769c.099-.02.199-.03.297-.03h7.349a1.502 1.502 0 011.469 1.802 5.213 5.213 0 01-2.245 3.329 5.203 5.203 0 01-2.888.875zM8.326 15a3.74 3.74 0 003.682 3.006c.732 0 1.446-.216 2.063-.625a3.725 3.725 0 001.604-2.38L8.326 15z"}})])
          )
        }
      }
    