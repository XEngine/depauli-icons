
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
            children.concat([_c('path',{attrs:{"d":"M17.252 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.974 24 17.252 24zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.147 12 17.252 12z"}}),_c('path',{attrs:{"d":"M17.252 21.75a.75.75 0 01-.75-.75h-.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h.75a.75.75 0 011.5 0 2.252 2.252 0 012.25 2.25c0 .555-.209 1.091-.575 1.5.365.409.575.945.575 1.5a2.252 2.252 0 01-2.25 2.25.75.75 0 01-.75.75zm.75-2.25a.75.75 0 000-1.5h-1.5v1.5h1.5zm0-3a.75.75 0 000-1.5h-1.5v1.5h1.5zM2.627 17.606a2.608 2.608 0 01-1.85-.762l-.006-.006a2.63 2.63 0 01.04-3.75l8.181-7.124a76.474 76.474 0 00-5.325-4.626.746.746 0 01-.211-.913.754.754 0 01.846-.406C4.825.14 5.323.249 5.8.353c3.192.698 5.498 1.203 7.88 3.578a10.641 10.641 0 012.579 4.073.751.751 0 01-1.417.493 9.16 9.16 0 00-2.217-3.5c-1.713-1.708-3.37-2.303-5.594-2.83a78.788 78.788 0 013.464 3.163.777.777 0 01.191.156.587.587 0 01.07.097c.436.426.862.852 1.268 1.268a.74.74 0 01.257.266 77.413 77.413 0 011.516 1.609.752.752 0 01-.048 1.06.753.753 0 01-1.06-.05c-.32-.35-.658-.711-1.048-1.12L4.519 16.8a2.6 2.6 0 01-1.892.806zm-.79-1.823c.211.209.492.324.791.324.293 0 .569-.111.779-.313l7.187-8.258a64.103 64.103 0 00-.522-.521l-8.256 7.189a1.127 1.127 0 00.016 1.574l.005.005z"}})])
          )
        }
      }
    