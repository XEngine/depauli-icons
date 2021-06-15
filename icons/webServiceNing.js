
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('circle',{attrs:{"cx":"13.95","cy":"6.44","r":"1.5"}}),_c('circle',{attrs:{"cx":"9.55","cy":"6.44","r":"1.5"}}),_c('circle',{attrs:{"cx":"16.4","cy":"1.73","r":"1.5"}}),_c('circle',{attrs:{"cx":"7.59","cy":"1.73","r":"1.5"}}),_c('circle',{attrs:{"cx":"16.4","cy":"22.27","r":"1.5"}}),_c('circle',{attrs:{"cx":"7.59","cy":"22.27","r":"1.5"}}),_c('circle',{attrs:{"cx":"22.27","cy":"16.4","r":"1.5"}}),_c('circle',{attrs:{"cx":"22.27","cy":"7.6","r":"1.5"}}),_c('circle',{attrs:{"cx":"1.72","cy":"16.4","r":"1.5"}}),_c('circle',{attrs:{"cx":"1.72","cy":"7.6","r":"1.5"}}),_c('circle',{attrs:{"cx":"13.95","cy":"17.2","r":"1.5"}}),_c('circle',{attrs:{"cx":"9.55","cy":"17.2","r":"1.5"}}),_c('circle',{attrs:{"cx":"17.13","cy":"14.02","r":"1.5"}}),_c('circle',{attrs:{"cx":"17.13","cy":"9.62","r":"1.5"}}),_c('circle',{attrs:{"cx":"6.37","cy":"14.02","r":"1.5"}}),_c('circle',{attrs:{"cx":"6.37","cy":"9.62","r":"1.5"}})])
          )
        }
      }
    