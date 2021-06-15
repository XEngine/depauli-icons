
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
            children.concat([_c('path',{attrs:{"d":"M12 7.5c-1.654 0-3-1.682-3-3.75S10.346 0 12 0s3 1.682 3 3.75-1.346 3.75-3 3.75zm0-6c-.813 0-1.5 1.03-1.5 2.25S11.187 6 12 6s1.5-1.03 1.5-2.25S12.813 1.5 12 1.5zM14.25 24a.75.75 0 01-.75-.75v-6h-3v6a.75.75 0 01-1.5 0v-6.712L8.321 9.75H8.25A2.252 2.252 0 006 12v3.75a.75.75 0 01-1.5 0V12a3.754 3.754 0 013.75-3.75h7.5A3.754 3.754 0 0119.5 12v3.75a.75.75 0 01-1.5 0V12a2.252 2.252 0 00-2.25-2.25h-.071L15 16.537v6.713a.75.75 0 01-.75.75zm-.679-8.25l.6-6H9.829l.6 6h3.142z"}})])
          )
        }
      }
    