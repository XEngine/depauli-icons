
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
            children.concat([_c('path',{attrs:{"d":"M17.25 18.25A2.252 2.252 0 0115 16v-3.75H9V16c0 1.241-1.009 2.25-2.25 2.25S4.5 17.241 4.5 16v-.879A2.252 2.252 0 011.5 13v-.75H.75a.75.75 0 010-1.5h.75V10a2.252 2.252 0 013-2.121V7c0-1.241 1.009-2.25 2.25-2.25S9 5.759 9 7v3.75h6V7c0-1.241 1.009-2.25 2.25-2.25S19.5 5.759 19.5 7v.879a2.252 2.252 0 013 2.121v.75h.75a.75.75 0 010 1.5h-.75V13a2.252 2.252 0 01-3 2.121V16a2.252 2.252 0 01-2.25 2.25zm0-12a.75.75 0 00-.75.75v9a.75.75 0 001.5 0V7a.75.75 0 00-.75-.75zm-10.5 0A.75.75 0 006 7v9a.75.75 0 001.5 0V7a.75.75 0 00-.75-.75zm13.5 3a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75zm-16.5 0A.75.75 0 003 10v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75z"}})])
          )
        }
      }
    