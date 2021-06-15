
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
            children.concat([_c('path',{attrs:{"d":"M11.25 12c-1.861 0-3.375-1.514-3.375-3.375S9.389 5.25 11.25 5.25s3.375 1.514 3.375 3.375S13.111 12 11.25 12zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM.75 8.022a.75.75 0 01-.246-1.459L19.254.041a.752.752 0 01.955.462.752.752 0 01-.462.955L.997 7.98a.737.737 0 01-.247.042z"}}),_c('path',{attrs:{"d":"M20.261 24.041a2.251 2.251 0 01-2.153-1.606l-.683-2.046a.746.746 0 00-.833-.497l-.948.158-1.733 2.888a2.237 2.237 0 01-1.923 1.076 2.254 2.254 0 01-1.914-3.428l1.653-2.757-.536-1.251a6.737 6.737 0 01-1.875.266 6.703 6.703 0 01-6.252-4.251l-.989-2.473a.75.75 0 011.392-.556l.989 2.473a5.21 5.21 0 004.859 3.307c.592 0 1.178-.101 1.743-.299l.298-.105a.748.748 0 01.939.411l.959 2.239a.755.755 0 01-.046.681l-1.854 3.092a.754.754 0 00.243 1.038.743.743 0 00.566.09.745.745 0 00.465-.337l1.905-3.175a.75.75 0 01.52-.354l1.289-.215a2.244 2.244 0 012.504 1.5l.691 2.071a.762.762 0 00.37.468.736.736 0 00.571.058.747.747 0 00.504-.933l-.711-2.135a3.767 3.767 0 00-3.546-2.568c-.208 0-.418.018-.624.053l-.814.135a.747.747 0 01-.812-.444l-.719-1.676a.748.748 0 01.442-1.004l7.799-2.736a.75.75 0 10-.447-1.433l-10.983 3.859c-.402.14-.818.21-1.238.21a3.73 3.73 0 01-3.479-2.361l-.834-2.08a.747.747 0 01.418-.975.745.745 0 01.975.418l.834 2.084a2.238 2.238 0 002.829 1.291l10.931-3.84.085-.03a2.254 2.254 0 012.699 3.163 2.237 2.237 0 01-1.31 1.118l-7.026 2.464.171.398.229-.038c.287-.05.582-.075.875-.075 2.235 0 4.279 1.48 4.97 3.599l.687 2.062a2.234 2.234 0 01-.138 1.826c-.286.529-.76.915-1.336 1.087a2.28 2.28 0 01-.648.095z"}})])
          )
        }
      }
    