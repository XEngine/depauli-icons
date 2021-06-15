
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
            children.concat([_c('path',{attrs:{"d":"M12.003 23.999l-.129-.002a3.105 3.105 0 01-2.518-1.498H6.213a1.71 1.71 0 01-1.485-.894 1.83 1.83 0 01-.039-1.698c.823-1.655 2.6-2.308 4.064-2.558l-.103-2.473-6.072-1.156a2.255 2.255 0 01-1.829-2.21V9.75A2.254 2.254 0 013 7.5h5.432a3.635 3.635 0 012.818-2.906V3H7.5a.75.75 0 010-1.5h3.75V.75a.75.75 0 011.5 0v.75h3.75a.75.75 0 010 1.5h-3.75v1.597A3.64 3.64 0 0115.566 7.5H21a2.252 2.252 0 012.25 2.25v1.759a2.253 2.253 0 01-1.828 2.21l-6.072 1.156-.103 2.473c1.464.25 3.24.903 4.062 2.555a1.84 1.84 0 01-.042 1.71 1.698 1.698 0 01-1.47.885h-3.146a3.066 3.066 0 01-.555.682 3.074 3.074 0 01-2.093.819zm-.082-17.985a2.13 2.13 0 00-2.047 2.205l.531 12.75a1.606 1.606 0 001.529 1.529l.072.002c.397 0 .779-.15 1.074-.422.183-.168.321-.372.41-.606l.004-.01c.06-.161.093-.326.1-.491l.531-12.753a2.12 2.12 0 00-2.124-2.203.712.712 0 00-.08-.001zM8.816 18.865c-.946.192-2.254.645-2.783 1.708a.335.335 0 00.01.312.206.206 0 00.18.115h2.683l-.09-2.135zm8.971 2.134a.2.2 0 00.165-.106.34.34 0 00.013-.323c-.528-1.061-1.836-1.513-2.781-1.705L15.095 21h2.692zm-2.373-7.663l5.727-1.091a.75.75 0 00.609-.737V9.75A.75.75 0 0021 9h-5.406l-.18 4.336zM3 9a.75.75 0 00-.75.75v1.759a.75.75 0 00.61.736l5.727 1.091L8.406 9H3z"}}),_c('path',{attrs:{"d":"M12 10.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    