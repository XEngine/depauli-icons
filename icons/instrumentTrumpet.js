
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
            children.concat([_c('path',{attrs:{"d":"M11.25 19.5a.75.75 0 01-.75-.75V16.5H9v2.25a.75.75 0 01-1.5 0V16.5h-.75A3.754 3.754 0 013 12.75c0-.823.267-1.607.752-2.25H1.5v.75a.75.75 0 01-1.5 0v-3a.75.75 0 011.5 0V9h6V6.75a.75.75 0 011.5 0V9h1.5V6.75a.75.75 0 011.5 0V9h7.149l3.525-4.23a.747.747 0 01.83-.226.754.754 0 01.496.706v9a.752.752 0 01-1.326.48l-3.525-4.23h-2.651c.485.643.752 1.427.752 2.25a3.754 3.754 0 01-3.75 3.75H12v2.25a.75.75 0 01-.75.75zM13.5 15a2.252 2.252 0 002.25-2.25 2.252 2.252 0 00-2.25-2.25H12l1.5 4.5zm-3 0v-4.5H9l1.5 4.5zm-3.75-4.5a2.252 2.252 0 00-2.25 2.25A2.252 2.252 0 006.75 15h.75v-4.5h-.75zm15.75 1.679V7.322L20.476 9.75l2.024 2.429z"}})])
          )
        }
      }
    