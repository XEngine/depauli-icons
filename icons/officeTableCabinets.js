
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
            children.concat([_c('path',{attrs:{"d":"M6 24a.75.75 0 010-1.5h.75v-3.75h-1.5a.75.75 0 010-1.5h3.294a1.214 1.214 0 001.206-1.209v-4.53a.75.75 0 011.5 0v4.532a2.72 2.72 0 01-2.704 2.707H8.25v3.75H9A.75.75 0 019 24H6z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-8.772a1.736 1.736 0 011.726-1.728h5.383a.75.75 0 010 1.5H1.728a.23.23 0 00-.228.23v8.77a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M17.464 24a1.73 1.73 0 01-1.714-1.727V14.25H13.5a.75.75 0 010-1.5h2.25V9h-15A.75.75 0 010 8.25V.75A.75.75 0 01.75 0h21.536A1.73 1.73 0 0124 1.731v20.544A1.727 1.727 0 0122.293 24h-4.829zm-.214-1.725c0 .124.099.224.221.225h4.815a.224.224 0 00.214-.223V14.25h-5.25v8.025zm5.25-9.525V1.728a.226.226 0 00-.222-.228H17.25v11.25h5.25zM15.75 7.5v-6h-6v6h6zm-7.5 0v-6H1.5v6h6.75z"}}),_c('circle',{attrs:{"cx":"4.125","cy":"4.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.375","cy":"4.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.875","cy":"10.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.875","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    