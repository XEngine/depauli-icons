
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V15c0-1.914.467-3.823 1.35-5.52a.717.717 0 01.077-.148 11.994 11.994 0 0121.147.001.731.731 0 01.076.147A12.009 12.009 0 0124 15v3.75A2.252 2.252 0 0121.75 21H2.25zm19.5-1.5a.75.75 0 00.75-.75V16.5h-6.75v3h6zm-7.5 0v-3.75A2.252 2.252 0 0012 13.5a2.252 2.252 0 00-2.25 2.25v3.75h4.5zM1.5 18.75c0 .414.336.75.75.75h6v-3H1.5v2.25zm21-3.75c0-1.573-.342-3.086-1.017-4.5H19.5l3 4.5zM18 15v-4.5H6V15h2.327c.351-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3H18zM4.5 15v-4.5H2.517A10.361 10.361 0 001.5 15h3zm16.113-6a10.466 10.466 0 00-7.863-4.47V9h7.863zM11.25 9V4.53A10.47 10.47 0 003.387 9h7.863z"}})])
          )
        }
      }
    