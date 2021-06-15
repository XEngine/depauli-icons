
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
            children.concat([_c('path',{attrs:{"d":"M16.379 23.996c-.14 0-.28-.021-.415-.062a1.422 1.422 0 01-.848-.694l-5.25-11.465a1.464 1.464 0 011.925-1.908l11.41 5.226c.373.198.619.492.733.86a1.434 1.434 0 01-.946 1.792l-3.845 1.395-1.407 3.879a1.438 1.438 0 01-1.357.977zm-.008-1.613l1.48-4.084a.75.75 0 01.449-.449l4.085-1.481-11.095-5.08 5.081 11.094z"}}),_c('path',{attrs:{"d":"M11.25 22.501C5.047 22.501 0 17.454 0 11.251S5.047.001 11.25.001 22.5 5.048 22.5 11.251c0 .269-.01.54-.029.805a.753.753 0 01-.806.694c-.197-.014-.379-.106-.51-.258s-.195-.345-.18-.545a9.98 9.98 0 00.025-.696c0-5.376-4.374-9.75-9.75-9.75S1.5 5.875 1.5 11.251s4.374 9.75 9.75 9.75a10.468 10.468 0 00.757-.026c.389 0 .715.307.741.7a.746.746 0 01-.697.799c-.273.018-.535.027-.801.027z"}}),_c('path',{attrs:{"d":"M9.75 17.809a.738.738 0 01-.187-.024 6.75 6.75 0 01-4.846-4.846c-.451-1.745-.196-3.562.719-5.116s2.38-2.658 4.126-3.109a6.751 6.751 0 018.225 4.845.751.751 0 01-1.452.376 5.25 5.25 0 10-6.396 6.398.746.746 0 01.538.914.751.751 0 01-.727.562z"}})])
          )
        }
      }
    