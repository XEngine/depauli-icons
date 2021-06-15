
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
            children.concat([_c('path',{attrs:{"d":"M6.75 6.469a.742.742 0 01-.44-.143l-1.4-1.015A2.971 2.971 0 013 6C1.346 6 0 4.654 0 3s1.346-3 3-3 3 1.346 3 3c0 .374-.072.748-.209 1.097l1.4 1.015a.744.744 0 01.3.489.744.744 0 01-.133.558.755.755 0 01-.608.31zM3 1.5c-.827 0-1.5.673-1.5 1.5S2.173 4.5 3 4.5 4.5 3.827 4.5 3 3.827 1.5 3 1.5zM3 24c-1.654 0-3-1.346-3-3s1.346-3 3-3c.706 0 1.373.242 1.909.689l1.4-1.016a.75.75 0 01.881 1.214l-1.4 1.016c.138.349.21.722.21 1.097 0 1.654-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM17.25 6.469a.75.75 0 01-.44-1.357l1.4-1.015A2.991 2.991 0 0118 3c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3a2.967 2.967 0 01-1.909-.689l-1.4 1.015a.747.747 0 01-.441.143zM21 1.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM21 24c-1.654 0-3-1.346-3-3 0-.375.072-.748.209-1.097l-1.4-1.016a.741.741 0 01-.3-.489.753.753 0 011.182-.725l1.4 1.016A2.961 2.961 0 0121 18c1.654 0 3 1.346 3 3s-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM12 11.25c-1.861 0-3.375-1.514-3.375-3.375S10.139 4.5 12 4.5s3.375 1.514 3.375 3.375S13.861 11.25 12 11.25zM12 6c-1.034 0-1.875.841-1.875 1.875S10.966 9.75 12 9.75s1.875-.841 1.875-1.875S13.034 6 12 6z"}}),_c('path',{attrs:{"d":"M7.5 16.5a.75.75 0 01-.75-.75A5.256 5.256 0 0112 10.5a5.256 5.256 0 015.25 5.25.75.75 0 01-.75.75h-9zm8.174-1.5c-.352-1.712-1.892-3-3.674-3s-3.322 1.288-3.674 3h7.348z"}})])
          )
        }
      }
    