
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
            children.concat([_c('path',{attrs:{"d":"M7 24a.75.75 0 01-.75-.75V.75A.75.75 0 017 0c6.617 0 12 5.383 12 12S13.617 24 7 24zm.75-1.526A10.455 10.455 0 0017.5 12 10.455 10.455 0 007.75 1.526v20.948z"}}),_c('circle',{attrs:{"cx":"14.875","cy":"12","r":"1.125"}}),_c('path',{attrs:{"d":"M12.568 7.557a1.12 1.12 0 01-1.125-1.123 1.126 1.126 0 012.249-.003c0 .301-.116.583-.329.796-.211.212-.494.33-.795.33zM12.568 18.694c-.301 0-.583-.117-.795-.329a1.12 1.12 0 01-.33-.795c0-.3.116-.583.329-.796a1.1 1.1 0 01.81-.329 1.125 1.125 0 01-.014 2.249z"}})])
          )
        }
      }
    