
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24.001c-1.654 0-3-1.346-3-3V2.708A2.71 2.71 0 014.957 0H19.5a2.252 2.252 0 012.25 2.25v15c0 .96-.615 1.808-1.5 2.121v3.13H21a.75.75 0 010 1.5H5.25zm0-4.501c-.827 0-1.5.673-1.5 1.5 0 .828.673 1.501 1.5 1.501h13.5V19.5H5.25zm-.293-18A1.21 1.21 0 003.75 2.707v15.694A2.973 2.973 0 015.25 18H19.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H4.957z"}}),_c('path',{attrs:{"d":"M9 15.001a.75.75 0 01-.75-.75v-4.099l-.334.223a.747.747 0 01-1.04-.208.751.751 0 01.208-1.04l4.5-3a.75.75 0 01.832 0l4.5 3a.746.746 0 01.208 1.04.749.749 0 01-1.04.208l-.334-.223v4.099a.75.75 0 01-.75.75H9zm5.25-1.5V9.153L12 7.653l-2.25 1.5v4.349h4.5z"}})])
          )
        }
      }
    