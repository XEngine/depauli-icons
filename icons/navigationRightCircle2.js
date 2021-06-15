
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M6 17.25a.75.75 0 01-.75-.75v-3a5.256 5.256 0 015.25-5.25h2.25V6.748a.75.75 0 011.239-.569l5.25 4.5a.75.75 0 010 1.138l-5.25 4.5a.751.751 0 01-.488.181.752.752 0 01-.75-.75V14.25H9a2.252 2.252 0 00-2.25 2.25.75.75 0 01-.75.75zm7.5-4.5a.75.75 0 01.75.75v.617l3.348-2.869-3.348-2.869V9a.75.75 0 01-.75.75h-3a3.754 3.754 0 00-3.75 3.75A3.728 3.728 0 019 12.75h4.5z"}})])
          )
        }
      }
    