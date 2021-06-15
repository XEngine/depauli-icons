
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
            children.concat([_c('path',{attrs:{"d":"M2.25 13.5A2.252 2.252 0 010 11.25v-9A2.252 2.252 0 012.25 0h12a2.252 2.252 0 012.25 2.25V9A.75.75 0 0115 9V2.25a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75H9a.75.75 0 010 1.5H2.25zM22.498 12.286c-.233 0-.458-.053-.668-.158l-2.587-1.292A2.238 2.238 0 0118 8.823V4.677c0-.858.476-1.629 1.244-2.013l2.586-1.292A1.502 1.502 0 0124 2.714v8.072a1.496 1.496 0 01-1.502 1.5zm-2.584-8.28a.747.747 0 00-.414.671v4.146c0 .286.159.543.415.671l2.586 1.292V2.714l-2.587 1.292zM19.498 23.25c-.325 0-.635-.104-.897-.3l-4-3a1.487 1.487 0 01-.585-1.412c.057-.397.265-.747.585-.988l4-3a1.502 1.502 0 012.4 1.2v6c0 .322-.106.641-.299.899a1.494 1.494 0 01-1.204.601zm-3.998-4.5l4 3v-6l-4 3z"}}),_c('path',{attrs:{"d":"M15 24a.744.744 0 01-.449-.15l-5.2-3.9a1.494 1.494 0 01-.585-1.413c.056-.397.264-.747.584-.987l5.2-3.9a.749.749 0 11.9 1.199l-5.2 3.9 5.2 3.9A.75.75 0 0115 24z"}})])
          )
        }
      }
    