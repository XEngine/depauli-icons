
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
            children.concat([_c('path',{attrs:{"d":"M2.125 10.661a.753.753 0 01-.719-.963 11.212 11.212 0 017.577-7.577 11.24 11.24 0 012.456-.442V.911a.75.75 0 011.5 0v.77a11.245 11.245 0 0110.034 8.016.752.752 0 01-.719.964H2.125zm19.068-1.5a9.778 9.778 0 00-8.903-6.007.677.677 0 01-.189.001 9.72 9.72 0 00-2.69.403 9.774 9.774 0 00-6.225 5.603h18.007zM11.871 14.786c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125-.505 1.125-1.125 1.125zM11.871 20.786c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125-.505 1.125-1.125 1.125z"}}),_c('circle',{attrs:{"cx":"5.871","cy":"19.661","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.871","cy":"19.661","r":"1.125"}}),_c('circle',{attrs:{"cx":"8.871","cy":"16.661","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.871","cy":"16.661","r":"1.125"}}),_c('circle',{attrs:{"cx":"8.871","cy":"22.661","r":"1.125"}}),_c('circle',{attrs:{"cx":"2.871","cy":"22.661","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.871","cy":"22.661","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.871","cy":"22.661","r":"1.125"}})])
          )
        }
      }
    