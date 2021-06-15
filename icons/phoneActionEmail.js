
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
            children.concat([_c('path',{attrs:{"d":"M4.983 24A3.486 3.486 0 011.5 20.52V4.983A3.486 3.486 0 014.983 1.5H6.75a.75.75 0 010 1.5H4.983C3.89 3 3 3.89 3 4.983V18h10.5v-5.25a.75.75 0 011.5 0v7.768A3.486 3.486 0 0111.518 24H4.983zM3 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3v1.018z"}}),_c('path',{attrs:{"d":"M11.25 10.5A2.252 2.252 0 019 8.25v-6A2.252 2.252 0 0111.25 0h9a2.252 2.252 0 012.25 2.25v6a2.252 2.252 0 01-2.25 2.25h-9zm-.75-2.25c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V3.603l-4.058 2.534c-.355.222-.768.34-1.192.34-.425 0-.837-.118-1.192-.34L10.5 3.603V8.25zm4.852-3.386a.748.748 0 00.795 0l4.761-2.973a.746.746 0 00-.658-.391h-9a.75.75 0 00-.659.391l4.761 2.973z"}})])
          )
        }
      }
    