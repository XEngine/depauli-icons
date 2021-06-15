
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
            children.concat([_c('path',{attrs:{"d":"M3.447 23.998c-.865 0-1.568-.7-1.572-1.562V1.727c.002-.465.184-.9.513-1.226.327-.324.76-.503 1.22-.503h16.78a1.735 1.735 0 011.737 1.726v20.511c0 .989-.988 1.763-2.25 1.763H3.447zm16.428-1.5c.463 0 .725-.199.752-.278l-.001-3.386-3 1.351v2.312h2.249zm-16.266-21a.233.233 0 00-.234.232v20.703c0 .034.032.065.069.065h12.681V7.539c0-.04.003-.08.01-.119a2.794 2.794 0 011.702-2.15l2.789-1.255V1.727a.222.222 0 00-.069-.161.23.23 0 00-.164-.068H3.609zM17.625 18.54l3-1.351v-4.941l-3 1.351v4.941zm0-6.587l3-1.351V5.66l-2.194.987a1.308 1.308 0 00-.806.959v4.347z"}})])
          )
        }
      }
    