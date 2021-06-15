
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
            children.concat([_c('path',{attrs:{"d":"M12 24a2.252 2.252 0 01-2.25-2.25V15H5.449a1.7 1.7 0 01-1.699-1.699V1.699A1.7 1.7 0 015.449 0h13.102a1.7 1.7 0 011.699 1.699v11.602A1.7 1.7 0 0118.551 15H14.25v6.75A2.252 2.252 0 0112 24zm-.75-2.25a.75.75 0 001.5 0V19.5h-1.5v2.25zm1.5-3.75v-3h-1.5v3h1.5zm5.801-4.5c.11 0 .199-.089.199-.199V10.5h-3v3h2.801zm-4.301 0v-3h-4.5v3h4.5zm-9-.199c0 .11.089.199.199.199H8.25v-3h-3v2.801zM18.75 9V6h-3v3h3zm-4.5 0V6h-4.5v3h4.5zm-6 0V6h-3v3h3zm10.5-4.5V1.699a.199.199 0 00-.199-.199H15.75v3h3zm-4.5 0v-3h-4.5v3h4.5zm-6 0v-3H5.449a.199.199 0 00-.199.199V4.5h3z"}})])
          )
        }
      }
    