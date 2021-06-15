
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
            children.concat([_c('path',{attrs:{"d":"M21.611 15.005c-.053 0-.106-.002-.159-.005H17.25a.75.75 0 010-1.5h4.239l.057.002a.908.908 0 00.959-.791V6H4.572v2.25a.75.75 0 01-1.5 0v-6l.003-.066A2.417 2.417 0 015.615.001h15.849a2.415 2.415 0 012.541 2.249v10.5a2.417 2.417 0 01-2.394 2.255zM22.505 4.5V2.289a.909.909 0 00-.96-.79l-.056.001h-15.9c-.019 0-.038 0-.057-.002-.022-.002-.045-.002-.067-.002a.909.909 0 00-.893.793V4.5h17.933z"}}),_c('path',{attrs:{"d":"M12.938 24.004c-.042 0-.084-.001-.126-.004H2.176A2.085 2.085 0 010 22.05v-9.6l.003-.066A2.084 2.084 0 012.188 10.5h10.636A2.086 2.086 0 0115 12.45v9.6a2.082 2.082 0 01-2.062 1.954zm-.101-1.504l.097.003a.576.576 0 00.566-.493v-9.52a.577.577 0 00-.565-.494l-.098.004H2.163c-.019 0-.038 0-.057-.002l-.037-.001a.579.579 0 00-.569.494v9.52a.577.577 0 00.567.493l.096-.003h10.674z"}}),_c('path',{attrs:{"d":"M6.049 20.4a.746.746 0 01-.735-.901.744.744 0 01.322-.475l2.581-1.698-2.581-1.698a.744.744 0 01-.322-.475.748.748 0 011.146-.778L9.994 16.7a.748.748 0 010 1.252l-3.533 2.325a.748.748 0 01-.412.123zM18.8 24a.75.75 0 010-1.5c.641 0 1.05-.888 1.05-1.5v-2.146l-1.538 1.358a.749.749 0 11-.993-1.124l2.718-2.4a.745.745 0 01.493-.185h.011a.754.754 0 01.714.384l2.491 2.201c.15.132.24.316.252.516a.746.746 0 01-.187.543.749.749 0 01-1.057.065l-1.404-1.24V21c0 1.449-1.024 3-2.55 3z"}})])
          )
        }
      }
    