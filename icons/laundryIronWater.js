
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
            children.concat([_c('path',{attrs:{"d":"M3 15.378a.75.75 0 01-.648-1.127l2.211-3.791a11.288 11.288 0 019.718-5.581h1.469v-.75a.75.75 0 011.5 0v.75h3v-.75A2.252 2.252 0 0018 1.879h-5.25a.75.75 0 010-1.5H18a3.754 3.754 0 013.75 3.75v10.5a.75.75 0 01-.75.75H3zm17.25-1.5v-1.5H5.181l-.875 1.5H20.25zm0-3v-4.5h-5.969a9.788 9.788 0 00-8.216 4.5H20.25z"}}),_c('circle',{attrs:{"cx":"10.125","cy":"18.753","r":"1.125"}}),_c('path',{attrs:{"d":"M7.875 23.628a1.127 1.127 0 010-2.253A1.132 1.132 0 019 22.503c0 .62-.504 1.125-1.125 1.125zM12.375 23.628a1.127 1.127 0 010-2.253 1.132 1.132 0 011.125 1.128c0 .62-.504 1.125-1.125 1.125z"}}),_c('circle',{attrs:{"cx":"14.625","cy":"18.753","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.875","cy":"22.503","r":"1.125"}})])
          )
        }
      }
    