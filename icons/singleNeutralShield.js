
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.74.74 0 01-.124-.01A14.212 14.212 0 010 9.937V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v7.687A14.212 14.212 0 0112.125 23.99.761.761 0 0112 24zM2.25 1.5a.75.75 0 00-.75.75v7.687A12.725 12.725 0 0012 22.489 12.724 12.724 0 0022.5 9.937V2.25a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M12 12.75c-2.275 0-4.125-1.85-4.125-4.125S9.725 4.5 12 4.5c2.274 0 4.125 1.85 4.125 4.125S14.274 12.75 12 12.75zM12 6c-1.447 0-2.625 1.178-2.625 2.625S10.553 11.25 12 11.25c1.448 0 2.625-1.178 2.625-2.625S13.448 6 12 6z"}}),_c('path',{attrs:{"d":"M6.613 17.5a.752.752 0 01-.67-1.088 6.83 6.83 0 013.006-3.006 6.694 6.694 0 013.041-.724 6.755 6.755 0 016.067 3.73.75.75 0 01-1.34.674 5.26 5.26 0 00-4.726-2.905c-.828 0-1.624.19-2.367.564a5.32 5.32 0 00-2.341 2.341.745.745 0 01-.67.414z"}})])
          )
        }
      }
    