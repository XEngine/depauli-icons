
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20A2.252 2.252 0 010 17.75v-12A2.252 2.252 0 012.25 3.5h19.5A2.252 2.252 0 0124 5.75v12A2.252 2.252 0 0121.75 20H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M12 15.5a.75.75 0 01-.75-.75v-2.367C9.949 13.189 8.413 14 7.5 14c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.169 0 3.399 1.37 4.5 2.096C13.101 9.37 15.331 8 16.5 8c1.654 0 3 1.346 3 3s-1.346 3-3 3c-.913 0-2.449-.811-3.75-1.617v2.367a.75.75 0 01-.75.75zm1.368-4.5c1.416.886 2.688 1.5 3.132 1.5.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5c-.445 0-1.717.614-3.132 1.5zM7.5 9.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5c.445 0 1.717-.614 3.132-1.5-1.415-.886-2.688-1.5-3.132-1.5z"}})])
          )
        }
      }
    