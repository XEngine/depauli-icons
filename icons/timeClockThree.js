
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
            children.concat([_c('path',{attrs:{"d":"M10.523 14.25a.75.75 0 01-.75-.75V2.25a.75.75 0 01.75-.75c6.617 0 12 5.383 12 12a.75.75 0 01-.75.75h-11.25zm10.474-1.5c-.368-5.186-4.538-9.355-9.724-9.724v9.724h9.724z"}}),_c('circle',{attrs:{"cx":"10.523","cy":"21.375","r":"1.125"}}),_c('path',{attrs:{"d":"M16.092 20.194c-.301 0-.583-.117-.796-.33a1.121 1.121 0 010-1.591 1.17 1.17 0 01.775-.329h.002c.316 0 .605.12.813.329.212.212.329.494.329.795 0 .301-.117.583-.33.796a1.11 1.11 0 01-.793.33zM4.954 20.194c-.3 0-.583-.117-.796-.33a1.119 1.119 0 01-.329-.797c.001-.3.118-.582.331-.794.212-.212.494-.328.794-.328.298 0 .589.121.798.331.212.211.328.494.328.794 0 .301-.118.583-.331.795a1.116 1.116 0 01-.795.329z"}}),_c('circle',{attrs:{"cx":"2.648","cy":"13.5","r":"1.125"}}),_c('path',{attrs:{"d":"M4.954 9.057A1.121 1.121 0 013.83 7.929a1.126 1.126 0 012.25.004c0 .3-.118.583-.33.795a1.12 1.12 0 01-.796.329zM16.092 9.057a1.12 1.12 0 01-1.125-1.123c0-.301.117-.584.329-.796a1.1 1.1 0 01.774-.33l.038.001c.286 0 .568.117.78.329.212.212.33.495.33.795a1.118 1.118 0 01-1.126 1.124z"}})])
          )
        }
      }
    