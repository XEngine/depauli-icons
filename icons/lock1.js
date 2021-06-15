
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75v-10.5A2.252 2.252 0 015.25 9H6V6c0-3.308 2.692-6 6-6s6 2.692 6 6v3h.75A2.252 2.252 0 0121 11.25v10.5A2.252 2.252 0 0118.75 24H5.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H5.25zM16.5 9V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 007.5 6v3h9z"}}),_c('path',{attrs:{"d":"M12 18.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    