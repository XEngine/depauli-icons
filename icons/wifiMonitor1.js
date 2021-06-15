
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h1.615l.5-3H5.25A2.252 2.252 0 013 17.25v-7.5A2.252 2.252 0 015.25 7.5h13.5A2.252 2.252 0 0121 9.75v7.5a2.252 2.252 0 01-2.25 2.25h-3.615l.5 3h1.615a.75.75 0 010 1.5H6.75zm7.365-1.5l-.5-3h-3.229l-.5 3h4.229zM5.25 9a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H5.25zM9.348 5.636a.752.752 0 01-.53-1.281 4.472 4.472 0 013.18-1.312c1.202 0 2.332.466 3.18 1.312a.75.75 0 01-.53 1.281.748.748 0 01-.53-.219c-.565-.564-1.318-.875-2.12-.875s-1.555.311-2.12.875a.748.748 0 01-.53.219z"}}),_c('path',{attrs:{"d":"M7.227 3.477a.743.743 0 01-.53-.22.743.743 0 01-.22-.53c0-.2.078-.389.22-.53C8.113.78 9.997 0 12 0s3.887.78 5.303 2.197c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0A5.963 5.963 0 0012 1.5c-1.603 0-3.11.624-4.243 1.757a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    