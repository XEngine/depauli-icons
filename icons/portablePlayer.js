
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
            children.concat([_c('path',{attrs:{"d":"M6.375 24a2.628 2.628 0 01-2.625-2.625V2.625A2.629 2.629 0 016.375 0h11.25a2.628 2.628 0 012.625 2.625v18.75A2.627 2.627 0 0117.625 24H6.375zm0-22.5c-.62 0-1.125.505-1.125 1.125v18.75c0 .62.505 1.125 1.125 1.125h11.25c.62 0 1.125-.505 1.125-1.125V2.625c0-.62-.505-1.125-1.125-1.125H6.375z"}}),_c('path',{attrs:{"d":"M12 21c-2.895 0-5.25-2.355-5.25-5.25S9.105 10.5 12 10.5s5.25 2.355 5.25 5.25S14.895 21 12 21zm0-9c-2.068 0-3.75 1.682-3.75 3.75S9.932 19.5 12 19.5s3.75-1.682 3.75-3.75S14.068 12 12 12z"}}),_c('path',{attrs:{"d":"M12 18c-1.241 0-2.25-1.009-2.25-2.25S10.759 13.5 12 13.5s2.25 1.009 2.25 2.25S13.241 18 12 18zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM7.5 9a.75.75 0 01-.75-.75v-4.5A.75.75 0 017.5 3h9a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-9zm8.25-1.5v-3h-7.5v3h7.5z"}})])
          )
        }
      }
    