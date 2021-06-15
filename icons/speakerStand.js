
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
            children.concat([_c('path',{attrs:{"d":"M14.25 24a.753.753 0 01-.6-.3L12 21.5l-1.65 2.2a.753.753 0 01-1.05.15.75.75 0 01-.15-1.05l2.1-2.8v-2H4.5a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 0119.5 18h-6.75v2l2.1 2.8a.75.75 0 01-.6 1.2zM4.5 1.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-15z"}}),_c('path',{attrs:{"d":"M12 15a5.256 5.256 0 01-5.25-5.25A5.256 5.256 0 0112 4.5a5.256 5.256 0 015.25 5.25A5.256 5.256 0 0112 15zm0-9C9.932 6 8.25 7.682 8.25 9.75S9.932 13.5 12 13.5s3.75-1.682 3.75-3.75S14.068 6 12 6z"}}),_c('path',{attrs:{"d":"M12 12c-1.241 0-2.25-1.009-2.25-2.25S10.759 7.5 12 7.5s2.25 1.009 2.25 2.25S13.241 12 12 12zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM6 4.5A.75.75 0 016 3h.75a.75.75 0 010 1.5H6zM17.25 4.5a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-.75z"}})])
          )
        }
      }
    