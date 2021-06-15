
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
            children.concat([_c('path',{attrs:{"d":"M12 10.5c-2.068 0-3.75-1.682-3.75-3.75S9.932 3 12 3s3.75 1.682 3.75 3.75S14.068 10.5 12 10.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 9 12 9s2.25-1.009 2.25-2.25S13.241 4.5 12 4.5z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75v-21H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5h-.75v21h.75a.75.75 0 010 1.5H.75zM21 22.5v-21H3v21h6.65L9.088 18H8.25a.75.75 0 01-.75-.75V15c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v2.25a.75.75 0 01-.75.75h-.838l-.562 4.5H21zm-8.162 0l.668-5.343a.752.752 0 01.744-.657H15V15c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.5h.75c.377 0 .697.282.744.657l.668 5.343h1.676z"}}),_c('circle',{attrs:{"cx":"5.25","cy":"3.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"5.625","cy":"10.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"5.625","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"20.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.125","cy":"13.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"18.375","cy":"6.375","r":"1.125"}})])
          )
        }
      }
    