
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
            children.concat([_c('circle',{attrs:{"cx":"5.251","cy":"5.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"5.251","cy":"14.25","r":"1.125"}}),_c('path',{attrs:{"d":"M5.251 19.5a5.256 5.256 0 01-5.25-5.25c0-1.865.979-3.56 2.548-4.5a5.236 5.236 0 01-2.548-4.5A5.256 5.256 0 015.251 0h12a5.257 5.257 0 015.251 5.249 5.236 5.236 0 01-2.383 4.4.748.748 0 11-.819-1.257 3.738 3.738 0 001.703-3.143 3.754 3.754 0 00-3.75-3.749H5.251c-2.068 0-3.75 1.682-3.75 3.75S3.183 9 5.251 9h7.5a.75.75 0 010 1.5h-7.5a3.754 3.754 0 00-3.75 3.75A3.754 3.754 0 005.251 18h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M10.501 6a.75.75 0 010-1.5h6.75a.75.75 0 010 1.5h-6.75zM17.251 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.973 24 17.251 24zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.146 12 17.251 12z"}}),_c('path',{attrs:{"d":"M19.501 20.249a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.72-1.72-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72 1.72 1.72a.752.752 0 01-.53 1.281z"}})])
          )
        }
      }
    