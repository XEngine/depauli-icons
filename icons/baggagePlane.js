
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
            children.concat([_c('path',{attrs:{"d":"M15.431 23.998a1.5 1.5 0 01-1.483-1.71l.362-2.578-1.467.493a2.243 2.243 0 01-2.398-.633l-2.389-2.674a1.502 1.502 0 01.641-2.421l1.766-.593a.742.742 0 01.767.179l.862.857 1.254-.422-.657-.654a1.501 1.501 0 01.582-2.485l1.336-.45a1.495 1.495 0 011.329.186l2.472 1.702 2.103-.707h-.002a2.618 2.618 0 01.865-.148 2.626 2.626 0 01.842 5.114l-2.156.725-1.867 4.805a1.496 1.496 0 01-.92.878l-1.363.458a1.489 1.489 0 01-.479.078zm-.211-6.134c.175 0 .345.062.479.173.201.167.3.422.263.681l-.53 3.78 1.361-.457 1.994-5.133a.749.749 0 01.46-.439l2.488-.836c.284-.096.514-.297.647-.567a1.127 1.127 0 00-1.349-1.573l-8.903 2.994a.748.748 0 01-.768-.179l-.862-.857-1.327.446 2.39 2.675a.751.751 0 00.8.211l2.619-.879a.712.712 0 01.238-.04zm-1.473-5.085l1.188 1.183 1.694-.569-1.545-1.063-1.337.449z"}}),_c('path',{attrs:{"d":"M3.75 20.999A3.754 3.754 0 010 17.249v-9a3.754 3.754 0 013.75-3.75h3v-2.25A2.252 2.252 0 019-.001h3a2.252 2.252 0 012.25 2.25v2.25h3A3.754 3.754 0 0121 8.249v1.5a.75.75 0 01-1.5 0v-1.5a2.252 2.252 0 00-2.25-2.25h-1.5v3a.75.75 0 01-1.5 0v-3h-7.5v13.5h1.5a.75.75 0 010 1.5h-4.5zm0-15a2.252 2.252 0 00-2.25 2.25v9a2.252 2.252 0 002.25 2.25h1.5v-13.5h-1.5zm9-1.5v-2.25a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v2.25h4.5z"}})])
          )
        }
      }
    