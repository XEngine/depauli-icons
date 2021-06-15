
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
              attrs: Object.assign({"version":"1.1","id":"Regular","xmlns":"http://www.w3.org/2000/svg","x":"0","y":"0","viewBox":"0 0 24 24","xml:space":"preserve"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{staticClass:"st0",attrs:{"d":"M11.019 23.25A2.252 2.252 0 018.769 21V9.75c0-.091.016-.179.048-.264L10.124 6H8.019a.75.75 0 010-1.5h2.668l.38-1.013A.753.753 0 0111.769 3h1.499V.75a.75.75 0 011.5 0V3h2.251a6.758 6.758 0 016.75 6.75V12a.75.75 0 01-1.5 0V9.75a5.257 5.257 0 00-4.914-5.239l1.866 4.976a.738.738 0 01.048.263V21a2.252 2.252 0 01-2.25 2.25h-6zm-.75-2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V9.886L15.75 4.5h-3.461l-2.02 5.386v2.864h3.75a.75.75 0 01.75.75V18a.75.75 0 01-.75.75h-3.75V21zm3-3.75v-3h-3v3h3zM5.019 3.75a.74.74 0 01-.279-.054l-3.75-1.5a.746.746 0 01-.41-.401.742.742 0 01-.007-.574.746.746 0 01.975-.417l3.749 1.5a.752.752 0 01.418.975.745.745 0 01-.696.471zM1.269 9.75a.751.751 0 01-.278-1.446l3.75-1.5a.745.745 0 01.974.418.747.747 0 01-.417.974l-3.75 1.5a.74.74 0 01-.279.054zM.75 6a.75.75 0 010-1.5h2.769a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    