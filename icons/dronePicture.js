
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24a.75.75 0 010-1.5h1.336a.757.757 0 00.639-.361.755.755 0 00.095-.577 7.99 7.99 0 00-2.781-4.379c-.21.149-.398.314-.562.494a5.218 5.218 0 01-1.746 1.324c.49.546.77 1.259.77 2 0 1.654-1.346 3-3 3s-3-1.346-3-3c0-.742.28-1.455.77-2.001a5.238 5.238 0 01-1.763-1.341 3.438 3.438 0 00-.545-.476 7.993 7.993 0 00-2.783 4.383.764.764 0 00.739.935H5.25a.749.749 0 110 1.499H3.914a2.267 2.267 0 01-2.194-2.779 9.548 9.548 0 012.693-4.675 3.637 3.637 0 00-.579-.047l-.078.001H2.25C1.009 16.5 0 15.491 0 14.25S1.009 12 2.25 12h1.488l.116.002a3.62 3.62 0 002.67-1.178.75.75 0 111.108 1.011 5.112 5.112 0 01-3.767 1.667l-.148-.002H2.25a.75.75 0 000 1.5h1.488l.141-.002c.799 0 1.602.198 2.323.572a.75.75 0 01.148.078c.48.269.912.612 1.282 1.018a3.751 3.751 0 005.719.018 5.135 5.135 0 011.282-1.024.727.727 0 01.208-.105 5.114 5.114 0 012.441-.554h1.468c.414 0 .75-.336.75-.75a.75.75 0 011.5-.001 2.252 2.252 0 01-2.25 2.25h-1.488l-.096-.001c-.193 0-.386.016-.578.047a9.54 9.54 0 012.692 4.671c.138.592.038 1.2-.281 1.714A2.254 2.254 0 0117.092 24H15.75zm-5.25-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S12 21.827 12 21s-.673-1.5-1.5-1.5zM.75 10.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M11.25 12A2.252 2.252 0 019 9.75v-6a2.252 2.252 0 012.25-2.25h1.189l1.28-1.28c.14-.14.333-.22.531-.22h4.5c.198 0 .391.08.53.22l1.28 1.28h1.189A2.252 2.252 0 0124 3.75v6A2.252 2.252 0 0121.75 12h-10.5zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-1.5a.751.751 0 01-.53-.22L18.44 1.5h-3.879l-1.28 1.28a.755.755 0 01-.531.22h-1.5z"}}),_c('path',{attrs:{"d":"M16.5 9.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    