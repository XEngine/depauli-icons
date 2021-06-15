
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
            children.concat([_c('path',{attrs:{"d":"M3 6.003a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM3 2.253a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM.75 3.753a.75.75 0 010-1.5h.75a.75.75 0 010 1.5H.75zM4.5 3.753a.75.75 0 010-1.5h.75a.75.75 0 010 1.5H4.5zM7.6 24.006c-.82 0-1.629-.153-2.402-.454a6.58 6.58 0 01-3.557-3.294 2.492 2.492 0 01-.394-.323l-.464-.469A2.683 2.683 0 010 17.562v-3.086a1.72 1.72 0 011.595-1.719 6.408 6.408 0 015.823-3.758 6.38 6.38 0 015.835 3.754h.032a1.723 1.723 0 011.714 1.725v3.085c0 .718-.277 1.394-.782 1.904l-.464.469c-.029.03-.059.058-.09.085a6.586 6.586 0 01-3.402 3.421 6.559 6.559 0 01-2.661.564zm-3.92-3.332a5.047 5.047 0 002.062 1.48 5.093 5.093 0 003.917-.085 5.09 5.09 0 001.835-1.365 2.67 2.67 0 01-.633-.169l-1.253-.506a5.612 5.612 0 00-4.217 0l-1.25.506a2.6 2.6 0 01-.461.139zm-1.964-6.421a.218.218 0 00-.215.22v3.09c0 .321.123.622.348.849l.464.469a1.16 1.16 0 001.267.263l1.25-.505a7.105 7.105 0 015.341 0l1.252.506a1.163 1.163 0 001.266-.262l.465-.469c.225-.227.349-.529.348-.849v-3.088a.22.22 0 00-.218-.223H1.716zm9.835-1.5a4.936 4.936 0 00-4.131-2.254c-.559 0-1.112.096-1.644.286a4.86 4.86 0 00-2.478 1.968h8.253z"}}),_c('path',{attrs:{"d":"M6 16.503a.75.75 0 010-1.5h3a.75.75 0 010 1.5H6zM15 9.003a.748.748 0 01-.711-.513l-1.5-4.5a.751.751 0 01.711-.987h8.292l.74-2.466a.754.754 0 01.935-.502.748.748 0 01.503.934l-2.25 7.5a.749.749 0 01-.72.534h-6zm5.442-1.5l.9-3H14.54l1 3h4.902z"}}),_c('circle',{attrs:{"cx":"15.375","cy":"10.878","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.625","cy":"10.878","r":"1.125"}})])
          )
        }
      }
    