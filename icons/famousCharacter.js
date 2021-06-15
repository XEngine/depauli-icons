
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-3.319 0-8.551-3.427-8.973-7.7l-.738-.246A2.247 2.247 0 01.75 13.919v-2.338c0-.97.618-1.828 1.539-2.135L3 9.209l.001-.989C3.017 3.843 7.223 0 12 0c4.778 0 8.983 3.843 8.999 8.224l.001.985.711.237a2.248 2.248 0 011.539 2.135v2.338c0 .97-.618 1.828-1.539 2.135l-.738.246C20.552 20.573 15.32 24 12 24zm-3.715-2.771C9.566 22.027 10.944 22.5 12 22.5s2.434-.473 3.715-1.271l.791-6.323a.754.754 0 01.294-.507l2.7-2.025v-3.93C19.167 7.884 17.89 6 15.75 6a.628.628 0 01-.062-.003 2.99 2.99 0 00-2.999 1.799.75.75 0 01-1.378 0 2.989 2.989 0 00-2.999-1.799A.643.643 0 018.25 6C6.111 6 4.833 7.884 4.5 8.446v3.929L7.2 14.4a.751.751 0 01.294.507l.791 6.322zm9.104-1.294c1.352-1.291 2.111-2.78 2.111-4.185 0-.323.206-.609.513-.711l1.224-.408a.749.749 0 00.513-.712v-2.338a.75.75 0 00-.513-.712L21 10.791v1.959a.753.753 0 01-.3.6l-2.746 2.059-.565 4.526zM2.763 10.869a.749.749 0 00-.513.712v2.338a.75.75 0 00.513.712l1.224.408a.748.748 0 01.513.711c0 1.405.759 2.894 2.111 4.185l-.566-4.525L3.3 13.35a.753.753 0 01-.3-.6v-1.959l-.237.078zm5.802-6.382c1.338 0 2.588.589 3.435 1.599A4.473 4.473 0 0115.781 4.5c1.203.007 2.188.418 2.959.948C17.465 3.148 14.768 1.5 12 1.5c-2.768 0-5.465 1.648-6.74 3.948.771-.529 1.755-.941 2.959-.948.116-.009.231-.013.346-.013z"}}),_c('path',{attrs:{"d":"M13.5 12.75a.749.749 0 01-.416-1.374l2.25-1.5a.75.75 0 01.832 1.248l-2.25 1.5a.748.748 0 01-.416.126zM10.5 12.75a.75.75 0 01-.416-.126l-2.25-1.5a.751.751 0 01.832-1.248l2.25 1.5a.751.751 0 01-.416 1.374zM10.5 18.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    