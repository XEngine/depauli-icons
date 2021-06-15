
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
            children.concat([_c('path',{attrs:{"d":"M7.172 24a1.502 1.502 0 01-1.362-2.128l.978-2.426a9.123 9.123 0 01-2.535-1.724A2.97 2.97 0 013 18c-1.654 0-3-1.346-3-3 0-1.109.607-2.115 1.569-2.636a9.02 9.02 0 010-2.227A2.998 2.998 0 010 7.5c0-1.654 1.346-3 3-3 .432 0 .86.095 1.254.278a9.037 9.037 0 013.255-2.013C7.629 1.22 8.925 0 10.5 0s2.871 1.22 2.991 2.765a9.049 9.049 0 013.255 2.012A2.992 2.992 0 0118 4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3c0-.638.203-1.252.578-1.764a7.534 7.534 0 00-2.356-1.472A2.991 2.991 0 0110.5 6a2.988 2.988 0 01-2.721-1.736 7.557 7.557 0 00-2.357 1.472C5.797 6.247 6 6.862 6 7.5a3.004 3.004 0 01-2.964 3 7.519 7.519 0 000 1.5A3.004 3.004 0 016 15c0 .638-.203 1.252-.578 1.764.57.524 1.226.963 1.927 1.29l1.689-4.187A2.98 2.98 0 017.5 11.25c0-1.654 1.346-3 3-3s3 1.346 3 3a2.982 2.982 0 01-1.539 2.618l1.554 3.851a.75.75 0 01-.696 1.03.749.749 0 01-.696-.469l-1.622-4.022-3.316 8.208-.011.037 4.076-.003a.75.75 0 010 1.5H7.172zM3 13.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm7.5-3.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM18 6c-.827 0-1.5.673-1.5 1.5S17.173 9 18 9s1.5-.673 1.5-1.5S18.827 6 18 6zM3 6c-.827 0-1.5.673-1.5 1.5S2.173 9 3 9s1.5-.673 1.5-1.5S3.827 6 3 6zm7.5-4.5C9.673 1.5 9 2.173 9 3s.673 1.5 1.5 1.5S12 3.827 12 3s-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M18.75 18.75c-1.861 0-3.375-1.514-3.375-3.375S16.889 12 18.75 12s3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875z"}}),_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75c0-2.068-1.682-3.75-3.75-3.75S15 21.182 15 23.25a.75.75 0 01-1.5 0c0-2.895 2.355-5.25 5.25-5.25S24 20.355 24 23.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    