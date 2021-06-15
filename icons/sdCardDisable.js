
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-10.5a.75.75 0 01.75-.75h.75V9H.75A.75.75 0 010 8.25v-6A2.252 2.252 0 012.25 0h10.56c.644 0 1.257.276 1.683.757L18.91 5.04a2.245 2.245 0 01.589 1.514V7.5A.75.75 0 0118 7.5v-.945a.756.756 0 00-.162-.466l-4.411-4.277a1.11 1.11 0 01-.047-.05.75.75 0 00-.57-.262H2.25a.75.75 0 00-.75.75V7.5h.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H1.5v9.75c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M6.75 7.5A.75.75 0 016 6.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM11.25 7.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM17.25 24a6.709 6.709 0 01-4.733-1.942.354.354 0 01-.078-.078 6.691 6.691 0 01-1.938-4.729 6.758 6.758 0 016.75-6.75c1.781 0 3.461.69 4.733 1.942a.354.354 0 01.078.078A6.696 6.696 0 0124 17.25 6.758 6.758 0 0117.25 24zm-3.141-2.548A5.241 5.241 0 0017.25 22.5a5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.343 7.343zM17.25 12A5.256 5.256 0 0012 17.25c0 1.135.37 2.236 1.048 3.141l7.343-7.343A5.239 5.239 0 0017.25 12z"}})])
          )
        }
      }
    