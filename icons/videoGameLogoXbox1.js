
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
            children.concat([_c('path',{attrs:{"d":"M11.999 4.812c-.163 0-.323-.032-.475-.095a16.41 16.41 0 00-4.387-1.175 1.226 1.226 0 01-.823-.46 1.229 1.229 0 01-.26-.912c.049-.424.307-.788.692-.974A11.943 11.943 0 0112-.019c1.825 0 3.594.409 5.255 1.216.298.144.522.396.63.708.109.312.089.649-.055.947-.186.384-.55.643-.975.691-1.502.186-2.975.58-4.375 1.172a1.26 1.26 0 01-.481.097zM8.221 2.188c1.297.228 2.563.597 3.779 1.101a17.88 17.88 0 013.778-1.101A10.412 10.412 0 0012 1.482c-1.3 0-2.568.237-3.779.706zM22.111 16.924a1.23 1.23 0 01-1.231-1.106 12.942 12.942 0 00-5.031-8.551 1.248 1.248 0 01-.474-.841c-.039-.33.054-.654.261-.914.116-.145.265-.264.432-.344a14.053 14.053 0 013.983-1.319 1.24 1.24 0 011.144.425 12.083 12.083 0 012.082 11.839 1.242 1.242 0 01-1.166.811zM17.096 6.336a14.47 14.47 0 015.086 8.235 10.59 10.59 0 00-2.04-9.214c-1.045.192-2.07.521-3.046.979zM11.993 23.991a11.937 11.937 0 01-8.664-3.706 1.24 1.24 0 01-.333-1.014c.321-2.572 2.658-6.838 8.254-11.093a1.243 1.243 0 011.5 0c4.61 3.504 7.85 7.859 8.254 11.094a1.23 1.23 0 01-.332 1.011 11.917 11.917 0 01-8.679 3.708zM4.5 19.338a10.418 10.418 0 007.735 3.15 10.423 10.423 0 007.264-3.15c-.419-2.81-3.338-6.643-7.499-9.845-4.162 3.204-7.081 7.037-7.5 9.845zM1.888 16.924a1.246 1.246 0 01-1.166-.817 12.079 12.079 0 012.08-11.836 1.245 1.245 0 011.119-.433c1.418.245 2.77.695 4.031 1.338.285.136.507.386.617.699a1.242 1.242 0 01-.397 1.378 12.978 12.978 0 00-5.055 8.581 1.235 1.235 0 01-1.229 1.09zM3.856 5.35a10.58 10.58 0 00-2.038 9.221 14.496 14.496 0 015.09-8.236c-.977-.458-2-.788-3.052-.985z"}})])
          )
        }
      }
    