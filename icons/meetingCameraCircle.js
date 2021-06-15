
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
            children.concat([_c('path',{attrs:{"d":"M12 23.261c-6.203 0-11.25-5.047-11.25-11.25S5.797.761 12 .761s11.25 5.047 11.25 11.25-5.047 11.25-11.25 11.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75-4.374-9.75-9.75-9.75z"}}),_c('path',{attrs:{"d":"M7.5 17.261a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h6c1.227 0 2.228.987 2.25 2.21l2.013-.671a.742.742 0 01.675.103c.195.14.312.368.312.608v6a.749.749 0 01-.75.75.736.736 0 01-.237-.039l-2.013-.671a2.252 2.252 0 01-2.25 2.209h-6zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-1a.749.749 0 01.988-.711l2.012.671v-3.919l-2.013.671a.736.736 0 01-.675-.103.751.751 0 01-.312-.608v-1a.75.75 0 00-.75-.75h-6z"}})])
          )
        }
      }
    