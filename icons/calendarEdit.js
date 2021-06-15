
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3H6V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zM22.5 9V5.25a.75.75 0 00-.75-.75H18V6a.75.75 0 01-1.5 0V4.5h-9V6A.75.75 0 016 6V4.5H2.25a.75.75 0 00-.75.75V9h21z"}}),_c('path',{attrs:{"d":"M8.25 20.995a.748.748 0 01-.735-.897l.506-2.529a.748.748 0 01.205-.384l4.552-4.552a2.166 2.166 0 011.542-.637c.583 0 1.13.226 1.541.636.412.412.639.959.639 1.541 0 .583-.227 1.13-.638 1.542l-4.553 4.559a.749.749 0 01-.385.206l-2.529.5a.721.721 0 01-.145.015zm.956-1.703l1.204-.238 4.391-4.396a.677.677 0 00.001-.962c-.128-.128-.299-.198-.481-.198s-.354.07-.482.198l-4.391 4.391-.242 1.205z"}})])
          )
        }
      }
    