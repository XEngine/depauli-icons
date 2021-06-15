
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
            children.concat([_c('path',{attrs:{"d":"M6 24.001a.75.75 0 010-1.5h5.25V19.49C4.811 19.328 0 17.103 0 14.251v-9C0 2.258 5.159.001 12 .001s12 2.257 12 5.25v9c0 2.852-4.811 5.077-11.25 5.239v3.011H18a.75.75 0 010 1.5H6zm-4.5-9.75c0 1.533 3.739 3.75 10.5 3.75s10.5-2.217 10.5-3.75v-1.887c-2.053 1.622-6.023 2.637-10.5 2.637s-8.446-1.016-10.5-2.637v1.887zm0-4.5c0 1.533 3.739 3.75 10.5 3.75s10.5-2.217 10.5-3.75V7.864c-2.053 1.621-6.023 2.637-10.5 2.637S3.554 9.485 1.5 7.864v1.887zM12 1.501c-6.761 0-10.5 2.217-10.5 3.75s3.739 3.75 10.5 3.75 10.5-2.217 10.5-3.75-3.739-3.75-10.5-3.75z"}}),_c('circle',{attrs:{"cx":"21.375","cy":"22.875","r":"1.125"}}),_c('path',{attrs:{"d":"M2.625 24c-.62 0-1.125-.505-1.125-1.125a1.121 1.121 0 011.199-1.121 1.12 1.12 0 011.051 1.122A1.128 1.128 0 012.625 24z"}})])
          )
        }
      }
    