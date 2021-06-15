
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
            children.concat([_c('path',{attrs:{"d":"M6.75 7.5A.75.75 0 016 6.75V2.561L4.28 4.28c-.141.142-.33.22-.53.22s-.389-.078-.53-.22C3.078 4.139 3 3.95 3 3.75s.078-.389.22-.53l2.999-3A.74.74 0 016.75 0c.089 0 .177.016.261.048l.021.007a.74.74 0 01.249.166L10.28 3.22c.142.141.22.33.22.53s-.078.389-.22.53c-.141.142-.33.22-.53.22s-.389-.078-.53-.22L7.5 2.561V6.75a.75.75 0 01-.75.75zM17.25 7.5a.735.735 0 01-.261-.048l-.032-.012a.75.75 0 01-.238-.16l-3-3c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.75.75 0 011.061 0l1.72 1.72V.75a.75.75 0 011.5 0v4.189l1.72-1.72a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-3 3a.75.75 0 01-.245.163l-.024.009a.733.733 0 01-.261.048zM2.25 24A2.252 2.252 0 010 21.75v-10.5A2.252 2.252 0 012.25 9h19.5A2.252 2.252 0 0124 11.25v10.5A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75H3C3 20.019 5.019 18 7.5 18s4.5 2.019 4.5 4.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5h.75zm-2.25 0c0-1.654-1.346-3-3-3s-3 1.346-3 3h6zm-9 0c0-1.654-1.346-3-3-3s-3 1.346-3 3h6z"}}),_c('path',{attrs:{"d":"M7.5 18c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S9 15.827 9 15s-.673-1.5-1.5-1.5zM16.5 18c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S18 15.827 18 15s-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    