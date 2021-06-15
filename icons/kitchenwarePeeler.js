
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
            children.concat([_c('path',{attrs:{"d":"M12 24a4.505 4.505 0 01-4.5-4.5v-6.75c0-.116.027-.232.079-.335l1.008-2.016C5.414 9.84 3 7.018 3 3.75v-3a.75.75 0 011.5 0V3h15V.75a.75.75 0 011.5 0v3c0 3.268-2.414 6.09-5.587 6.648l1.008 2.016c.052.104.079.22.079.335v6.75A4.506 4.506 0 0112 24zm-3-4.5c0 1.654 1.346 3 3 3s3-1.346 3-3v-6.573L13.787 10.5h-3.573L9 12.927V19.5zm-4.445-15A5.262 5.262 0 009.75 9h4.5a5.263 5.263 0 005.195-4.5H4.555z"}}),_c('circle',{attrs:{"cx":"12","cy":"19.5","r":"1.125"}})])
          )
        }
      }
    