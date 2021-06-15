
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
            children.concat([_c('path',{attrs:{"d":"M17.254 23.999c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M17.254 20.999a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"17.254","cy":"14.685","r":"1.125"}}),_c('path',{attrs:{"d":"M10.505 23.9a.737.737 0 01-.104-.007 12.17 12.17 0 01-1.317-.254 11.839 11.839 0 01-6.621-4.36 11.973 11.973 0 01-2.43-8.081 11.922 11.922 0 014.692-8.74 11.875 11.875 0 017.256-2.462 11.994 11.994 0 012.848.342 12.067 12.067 0 016.707 4.384.718.718 0 01.122.162 11.999 11.999 0 012.24 5.516.75.75 0 01-1.487.2A10.508 10.508 0 0020.614 6h-3.182c.162.741.276 1.475.339 2.189a.744.744 0 01-.172.548.742.742 0 01-.575.268.747.747 0 01-.747-.684A16.215 16.215 0 0015.898 6H8.147a26.658 26.658 0 00-.602 4.5h2.96a.75.75 0 010 1.5h-3c0 4.124.862 8.032 2.256 10.259.282.061.566.111.843.149a.75.75 0 01.644.843.752.752 0 01-.743.649zm-7.119-5.901a10.451 10.451 0 004.336 3.594c-.46-1.043-.836-2.247-1.122-3.594H3.386zm2.944-1.5a30.39 30.39 0 01-.326-4.5H1.501a10.452 10.452 0 001.013 4.5H6.33zm-.288-6c.074-1.588.261-3.098.559-4.5H3.38a10.511 10.511 0 00-1.77 4.5h4.432zm13.3-6a10.528 10.528 0 00-3.098-2.102c.304.675.57 1.378.793 2.102h2.305zm-3.88 0a16.27 16.27 0 00-1.236-2.761 10.591 10.591 0 00-2.233-.241c-.749 0-1.499.081-2.231.24-.464.742-.871 1.668-1.213 2.762h6.913zm-8.489 0a16.68 16.68 0 01.748-2.089 10.518 10.518 0 00-3.067 2.089h2.319z"}})])
          )
        }
      }
    