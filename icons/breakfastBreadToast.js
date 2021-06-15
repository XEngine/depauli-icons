
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75V18h-.75A2.252 2.252 0 010 15.75v-1.5A2.252 2.252 0 012.25 12h.827A3.782 3.782 0 016 9.077V5.905A3.018 3.018 0 013.75 3c0-1.654 1.346-3 3-3h13.5c1.654 0 3 1.346 3 3A3.018 3.018 0 0121 5.905v3.172c1.732.351 3 1.874 3 3.673v9A2.252 2.252 0 0121.75 24H5.25zm1.5-13.5a2.252 2.252 0 00-2.25 2.25v9c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-9a2.252 2.252 0 00-2.25-2.25H6.75zm-4.5 3a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75H3v-3h-.75zM19.5 9V5.25a.75.75 0 01.75-.75c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H6.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5a.75.75 0 01.75.75V9h12z"}}),_c('path',{attrs:{"d":"M17.25 21a3.743 3.743 0 01-3.673-3h-.827a.75.75 0 010-1.5h.827c.35-1.732 1.874-3 3.673-3 2.068 0 3.75 1.682 3.75 3.75S19.318 21 17.25 21zm0-6C16.009 15 15 16.009 15 17.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S18.491 15 17.25 15z"}})])
          )
        }
      }
    