
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25v19.5A2.252 2.252 0 0118.75 24H5.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M12 17.25c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7.5c-1.241 0-2.25-1.009-2.25-2.25S10.759 3 12 3s2.25 1.009 2.25 2.25S13.241 7.5 12 7.5zm0-3A.75.75 0 1012 6a.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M12 21c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}})])
          )
        }
      }
    