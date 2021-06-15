
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
            children.concat([_c('path',{attrs:{"d":"M4.983 24A3.486 3.486 0 011.5 20.52V4.983A3.486 3.486 0 014.983 1.5H6.75a.75.75 0 010 1.5H4.983C3.89 3 3 3.89 3 4.983V18h10.5v-5.25a.75.75 0 011.5 0v7.768A3.486 3.486 0 0111.518 24H4.983zM3 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3v1.018z"}}),_c('path',{attrs:{"d":"M11.25 10.5A2.252 2.252 0 019 8.25v-6A2.252 2.252 0 0111.25 0h6c1.227 0 2.228.987 2.25 2.21l2.013-.671a.747.747 0 01.987.711v6a.75.75 0 01-.75.75.763.763 0 01-.237-.038L19.5 8.29a2.253 2.253 0 01-2.25 2.21h-6zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-1a.75.75 0 01.987-.711l2.013.67V3.291l-2.013.671a.759.759 0 01-.675-.103A.75.75 0 0118 3.25v-1a.75.75 0 00-.75-.75h-6z"}})])
          )
        }
      }
    