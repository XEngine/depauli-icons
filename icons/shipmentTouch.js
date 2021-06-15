
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
            children.concat([_c('path',{attrs:{"d":"M19.646 24a.752.752 0 01-.747-.818l.306-3.372a2.255 2.255 0 00-1.752-2.4l-3.83-.851a.745.745 0 01-.587-.732v-4.952c0-.62-.505-1.125-1.125-1.125s-1.125.505-1.125 1.125v9.375a.746.746 0 01-.751.75.753.753 0 01-.45-.15l-1.841-1.381a.912.912 0 00-.556-.188.913.913 0 00-.735.365.916.916 0 00.111 1.232L8.528 22.7a.751.751 0 01-.51 1.3.747.747 0 01-.51-.2l-1.962-1.82a2.41 2.41 0 01-.289-3.239 2.402 2.402 0 011.933-.959c.53 0 1.034.169 1.457.489l.639.479v-7.875a2.629 2.629 0 012.625-2.625 2.628 2.628 0 012.625 2.625v4.35l3.243.721a3.758 3.758 0 012.921 4l-.306 3.372a.749.749 0 01-.748.682z"}}),_c('path',{attrs:{"d":"M16.785 15a.75.75 0 010-1.5h.75a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-3V6a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V1.5h-3a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 015.535 0h12a2.252 2.252 0 012.25 2.25v10.5a2.252 2.252 0 01-2.25 2.25h-.75zm-3.75-9.75V1.5h-3v3.75h3z"}})])
          )
        }
      }
    