
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
            children.concat([_c('path',{attrs:{"d":"M7.5 6a.75.75 0 01-.75-.75V2.561l-.97.969c-.141.142-.33.22-.53.22s-.389-.078-.53-.22C4.578 3.389 4.5 3.2 4.5 3s.078-.389.22-.53L6.969.22A.74.74 0 017.5 0c.089 0 .177.016.261.048l.021.007a.74.74 0 01.249.166L10.28 2.47c.142.141.22.33.22.53s-.078.389-.22.53c-.141.142-.33.22-.53.22s-.389-.078-.53-.22l-.97-.97v2.69A.75.75 0 017.5 6zM16.5 6a.735.735 0 01-.261-.048l-.032-.012a.75.75 0 01-.238-.16l-2.25-2.25a.746.746 0 01.001-1.06.749.749 0 011.06 0l.97.97V.75a.75.75 0 011.5 0v2.689l.97-.97a.744.744 0 011.06 0 .747.747 0 010 1.061l-2.25 2.25a.75.75 0 01-.245.163l-.024.009A.733.733 0 0116.5 6zM5.5 24c-.965 0-1.75-.785-1.75-1.75v-13c0-.965.785-1.75 1.75-1.75h13c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75h-13zm0-15a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h13a.25.25 0 00.25-.25v-13A.25.25 0 0018.5 9h-13z"}}),_c('path',{attrs:{"d":"M9.742 21.743a2.98 2.98 0 01-2.119-.886 2.976 2.976 0 01-.873-2.124 2.98 2.98 0 01.885-2.118 2.983 2.983 0 012.115-.872v-.872a2.258 2.258 0 01-1.5-2.121c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25c0 .96-.615 1.808-1.5 2.121V15h2.25a.75.75 0 010 1.5h-2.25v.75c0 .414.336.75.75.75h1.5c.827 0 1.5.673 1.5 1.5h.75a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75v-.75h-.849a2.962 2.962 0 01-.786 1.371 2.98 2.98 0 01-2.115.873h-.008zm.008-4.5c-.399 0-.775.155-1.057.436a1.494 1.494 0 00-.006 2.121 1.495 1.495 0 002.446-.476A2.267 2.267 0 019.75 17.25v-.007zM10.5 12a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    