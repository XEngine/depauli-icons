
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
            children.concat([_c('path',{attrs:{"d":"M14.291 23.629c-.26 0-.517-.044-.763-.13a2.4 2.4 0 01-1.109-.804 2.172 2.172 0 01-2.132-1.183 19.537 19.537 0 00-7.801-7.735 2.158 2.158 0 01-.531-.382 2.155 2.155 0 01-.644-1.729 2.41 2.41 0 01-.805-1.1 2.3 2.3 0 01.19-1.965A9.988 9.988 0 012.15 6.739a10.66 10.66 0 011.039-.888 4.34 4.34 0 01-.193-1.189A4.169 4.169 0 017.19.381c1.171 0 2.279.46 3.119 1.294a4.406 4.406 0 011.226 2.272c.626.121 1.237.298 1.825.527a4.17 4.17 0 013.205-1.475c1.171 0 2.279.46 3.119 1.294 1.712 1.7 1.76 4.438.107 6.103a3.506 3.506 0 01-.25.229c.289.731.495 1.497.615 2.283a4.415 4.415 0 012.147 1.183 4.41 4.41 0 011.316 3.059 4.168 4.168 0 01-1.208 3.044 4.173 4.173 0 01-2.984 1.23c-.509 0-1.011-.09-1.496-.267a10.41 10.41 0 01-.58.659 9.964 9.964 0 01-1.862 1.477c-.365.22-.779.336-1.198.336zm-.465-1.644c.061.04.127.073.196.097a.805.805 0 00.686-.071 8.374 8.374 0 001.568-1.243c.111-.116.223-.239.333-.368a4.415 4.415 0 01-1.62-3.324 4.171 4.171 0 011.21-3.051 4.164 4.164 0 012.421-1.19 9.054 9.054 0 00-.4-1.453 4.22 4.22 0 01-1.414.243 4.405 4.405 0 01-3.119-1.294 4.415 4.415 0 01-1.318-3.052 4.205 4.205 0 01.236-1.484 9.198 9.198 0 00-1.036-.306 4.161 4.161 0 01-1.153 2.288 4.163 4.163 0 01-2.983 1.232 4.405 4.405 0 01-3.552-1.797 9.244 9.244 0 00-.676.593 8.483 8.483 0 00-1.223 1.569.802.802 0 00-.064.686.873.873 0 00.097.193 2.136 2.136 0 011.397-.526c.326 0 .639.073.933.219l.048.024a24.071 24.071 0 019.693 9.615 2.109 2.109 0 01-.26 2.4zM3.409 11.227a.612.612 0 00-.553.342.661.661 0 00.144.751.71.71 0 00.179.127 21.087 21.087 0 018.431 8.361.698.698 0 00.621.397c.101 0 .2-.022.294-.067a.615.615 0 00.243-.834 22.552 22.552 0 00-9.077-9.008l-.018-.009a.598.598 0 00-.264-.06zm15.42 8.631c.197.042.398.063.601.063.732 0 1.413-.279 1.916-.785 1.07-1.078 1.025-2.864-.1-3.981a2.982 2.982 0 00-.968-.644 10.45 10.45 0 01-1.449 5.347zm-.052-5.533a2.65 2.65 0 00-1.513.758 2.678 2.678 0 00-.775 1.963 2.914 2.914 0 00.999 2.134 9.1 9.1 0 001.289-4.855zm-4.8-7.896a2.72 2.72 0 00-.107.821c.015.757.326 1.474.875 2.018a2.907 2.907 0 002.058.856c.264 0 .528-.038.78-.111a9.002 9.002 0 00-1.577-2.02 9.09 9.09 0 00-2.029-1.564zm.804-1.27a10.47 10.47 0 012.28 1.771 10.377 10.377 0 011.788 2.278c.942-1.087.858-2.776-.222-3.849a2.915 2.915 0 00-2.063-.859 2.682 2.682 0 00-1.783.659zM5.13 6.379a2.915 2.915 0 002.303 1.13 2.68 2.68 0 001.919-.788c.39-.392.644-.898.734-1.451A9.043 9.043 0 005.13 6.379zm2.06-4.498a2.68 2.68 0 00-1.919.788 2.678 2.678 0 00-.776 1.963c.003.124.013.247.031.369a10.562 10.562 0 015.398-1.239 2.94 2.94 0 00-.672-1.022 2.913 2.913 0 00-2.062-.859z"}})])
          )
        }
      }
    