
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M19.5 20.25a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.72-1.72-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72 1.72 1.72a.752.752 0 01-.53 1.281zM2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V8.25a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('circle',{attrs:{"cx":"5.25","cy":"6","r":"1.125"}}),_c('path',{attrs:{"d":"M3.75 15a.747.747 0 01-.674-1.078l1.937-3.981a1.06 1.06 0 01.127-.193 1.49 1.49 0 011.172-.562c.339 0 .672.117.937.329l.608.487 1.541-2.197a1.492 1.492 0 011.227-.639c.504 0 .972.25 1.25.669l.491.785a.75.75 0 01-1.272.794l-.479-.767-1.988 2.87a.752.752 0 01-1.084.154l-1.226-.981-1.368 2.81H8.25c.414 0 .75.336.75.75S3.75 15 3.75 15z"}})])
          )
        }
      }
    