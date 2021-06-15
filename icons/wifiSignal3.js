
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
            children.concat([_c('path',{attrs:{"d":"M16.239 10.512a.752.752 0 01-.707-1.002 3.754 3.754 0 00-3.529-5.011c-.426 0-.849.073-1.256.218a3.727 3.727 0 00-2.132 1.921 3.723 3.723 0 00-.149 2.866.751.751 0 01-.707 1.001.752.752 0 01-.707-.5 5.209 5.209 0 01.209-4.012 5.215 5.215 0 012.985-2.69 5.211 5.211 0 014.013.209 5.215 5.215 0 012.69 2.985 5.267 5.267 0 01-.003 3.517.753.753 0 01-.707.498z"}}),_c('path',{attrs:{"d":"M6.712 14.316a.749.749 0 01-.529-.218c-3.225-3.208-3.24-8.442-.032-11.667a8.194 8.194 0 015.827-2.433c2.218 0 4.283.852 5.84 2.4 3.226 3.208 3.24 8.441.032 11.667a.781.781 0 01-.554.229.733.733 0 01-.519-.209.733.733 0 01-.025-1.043l.021-.021c2.632-2.647 2.627-6.936-.012-9.56a6.69 6.69 0 00-4.742-1.964h-.036a6.706 6.706 0 00-4.768 1.99c-2.625 2.64-2.613 6.923.026 9.547a.742.742 0 01.221.53.743.743 0 01-.218.531.744.744 0 01-.532.221z"}}),_c('path',{attrs:{"d":"M4.5 23.997a.75.75 0 010-1.5h2.48l4.27-11.386V8.247a.75.75 0 011.5 0v2.864l4.27 11.386h2.48a.75.75 0 010 1.5h-15zm10.918-1.5L12 13.383l-3.418 9.114h6.836z"}}),_c('circle',{attrs:{"cx":"1.125","cy":"22.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"22.875","cy":"22.875","r":"1.125"}})])
          )
        }
      }
    