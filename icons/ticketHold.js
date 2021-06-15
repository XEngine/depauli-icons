
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
            children.concat([_c('path',{attrs:{"d":"M10.5 24c-1.654 0-3-1.346-3-3v-.093l-1.971.789a.746.746 0 01-.975-.417.748.748 0 01.418-.975l2.45-.981a3.735 3.735 0 001.73-1.402l1.645-2.467a.817.817 0 000-.909l-.027-.035a.81.81 0 00-.66-.329.813.813 0 00-.489.164L7.95 15.6a.752.752 0 01-.9-1.2l.45-.337v-3.175L4.95 11.98a3.736 3.736 0 00-1.97 1.97l-1.177 2.745c-.201.47-.303.968-.303 1.479v5.076a.75.75 0 01-1.5 0v-5.076c0-.716.143-1.412.425-2.07l1.177-2.745a5.228 5.228 0 012.758-2.758L7.5 9.255V3c0-1.654 1.346-3 3-3h2.25a.75.75 0 01.75.75C13.5 1.991 14.509 3 15.75 3S18 1.991 18 .75a.75.75 0 01.75-.75H21c1.654 0 3 1.346 3 3v18c0 1.654-1.346 3-3 3H10.5zM9 21c0 .827.673 1.5 1.5 1.5H21c.827 0 1.5-.673 1.5-1.5V3c0-.827-.673-1.5-1.5-1.5h-1.575c-.35 1.732-1.875 3-3.675 3s-3.324-1.268-3.675-3H10.5C9.673 1.5 9 2.173 9 3v9.966a2.29 2.29 0 011.444-.261 2.3 2.3 0 011.597 1.005c.523.785.523 1.795.003 2.576l-1.645 2.467A5.2 5.2 0 019 20.167V21z"}}),_c('path',{attrs:{"d":"M11.25 8.25a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM19.5 21a.75.75 0 01-.75-.75V10.5a.75.75 0 011.5 0v9.75a.75.75 0 01-.75.75zM14.253 21a2.995 2.995 0 01-2.003-.766.75.75 0 011.001-1.116 1.5 1.5 0 002.062-2.178 1.492 1.492 0 00-1.06-.438h-.002a.75.75 0 01-.001-1.5 3.004 3.004 0 013.003 2.997 2.977 2.977 0 01-.876 2.122 2.982 2.982 0 01-2.12.881L14.253 21z"}})])
          )
        }
      }
    