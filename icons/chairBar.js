
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.752.752 0 01-.735-.603l-.78-3.897H12.75v3.75a.75.75 0 01-1.5 0V19.5H6.765l-.779 3.897a.753.753 0 01-.886.588.747.747 0 01-.475-.319c-.111-.167-.151-.367-.111-.563L7.371 8.82A2.244 2.244 0 016 6.75V6C4.346 6 3 4.654 3 3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3v.75c0 .916-.549 1.722-1.371 2.07l2.856 14.283a.747.747 0 01-.735.897zm-1.815-6l-1.8-9H12.75v9h4.185zm-5.685 0V9H8.865l-1.8 9h4.185zm4.5-10.5a.75.75 0 00.75-.75V6h-9v.75c0 .412.336.749.748.75h7.502zM6 1.5c-.827 0-1.5.673-1.5 1.5S5.173 4.5 6 4.5h12c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H6z"}})])
          )
        }
      }
    