
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
            children.concat([_c('path',{attrs:{"d":"M4.5 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM7.5 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM13.5 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM16.5 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM19.5 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM10.5 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM7.5 16.5a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z"}}),_c('path',{attrs:{"d":"M3.037 19.5A2.29 2.29 0 01.75 17.213V6.787A2.29 2.29 0 013.037 4.5h17.926a2.29 2.29 0 012.287 2.287v10.426a2.29 2.29 0 01-2.287 2.287H3.037zm0-13.5a.788.788 0 00-.787.787v10.426c0 .434.353.787.787.787h17.926a.788.788 0 00.787-.787V6.787A.788.788 0 0020.963 6H3.037z"}})])
          )
        }
      }
    