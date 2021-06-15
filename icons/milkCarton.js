
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24a2.252 2.252 0 01-2.25-2.25V10.1c.001-.347.083-.693.237-1.002a.736.736 0 01.051-.087L5.25 5.019V2.25A2.252 2.252 0 017.5 0h9a2.252 2.252 0 012.25 2.25v2.769l2.712 3.988a.726.726 0 01.052.09c.154.308.236.656.235 1.004V21.75a2.252 2.252 0 01-2.25 2.25H4.5zM3.812 9.806a.734.734 0 00-.062.296V21.75c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V10.1a.764.764 0 00-.061-.298L17.603 6H6.397L3.812 9.806zM17.25 4.5V2.25a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75V4.5h10.5z"}}),_c('path',{attrs:{"d":"M6.75 10.5a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM12 21c-2.068 0-3.75-1.682-3.75-3.75S9.932 13.5 12 13.5s3.75 1.682 3.75 3.75S14.068 21 12 21zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 19.5 12 19.5s2.25-1.009 2.25-2.25S13.241 15 12 15z"}})])
          )
        }
      }
    