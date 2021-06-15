
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
            children.concat([_c('path',{attrs:{"d":"M13.5 24c-6.617 0-12-5.383-12-12s5.383-12 12-12a.75.75 0 01.75.75v22.5a.75.75 0 01-.75.75zm-.75-22.474A10.455 10.455 0 003 12a10.455 10.455 0 009.75 10.474V1.526z"}}),_c('circle',{attrs:{"cx":"5.625","cy":"12","r":"1.125"}}),_c('path',{attrs:{"d":"M7.931 7.557c-.3 0-.583-.117-.795-.328a1.129 1.129 0 01-.001-1.592 1.13 1.13 0 011.592-.001c.212.212.329.494.329.795 0 .301-.117.583-.329.796-.212.213-.495.33-.796.33zM7.933 18.694c-.301 0-.585-.117-.797-.33a1.114 1.114 0 01-.329-.797c0-.301.118-.583.331-.795.181-.18.419-.294.671-.322a.76.76 0 01.127-.011 1.13 1.13 0 011.125 1.127c0 .302-.117.585-.33.798-.213.213-.497.33-.798.33z"}}),_c('circle',{attrs:{"cx":"21.375","cy":"12","r":"1.125"}}),_c('path',{attrs:{"d":"M19.068 7.556c-.3 0-.582-.116-.794-.328a1.127 1.127 0 01.793-1.921c.299 0 .588.12.797.329.212.211.329.494.329.794 0 .301-.116.583-.329.796-.212.213-.495.33-.796.33zM19.068 18.694c-.301 0-.583-.117-.795-.329a1.115 1.115 0 01-.33-.795c0-.3.117-.583.329-.795.199-.201.486-.322.786-.33h.001c.306 0 .596.12.805.329.212.211.329.494.33.794s-.116.583-.329.796a1.126 1.126 0 01-.797.33c.001 0 .001 0 0 0z"}})])
          )
        }
      }
    