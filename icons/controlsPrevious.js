
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
            children.concat([_c('path',{attrs:{"d":"M22.5 21.871c-.304 0-.598-.091-.85-.264L9.475 13.236a1.485 1.485 0 01-.625-.96c-.074-.393.01-.792.237-1.123.105-.154.236-.285.39-.39l12.174-8.37a1.487 1.487 0 011.124-.239A1.502 1.502 0 0124 3.629v16.742c0 .827-.673 1.5-1.5 1.5zM10.325 12L22.5 20.371V3.629L10.325 12zM2.25 22.5A2.252 2.252 0 010 20.25V3.75A2.252 2.252 0 012.25 1.5h1.5A2.252 2.252 0 016 3.75v16.5a2.252 2.252 0 01-2.25 2.25h-1.5zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 003.75 3h-1.5z"}})])
          )
        }
      }
    