
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
            children.concat([_c('path',{attrs:{"d":"M7.746 23.962c-1.216 0-2.426-.187-3.596-.554-.314-.099-.525-.386-.525-.715s.211-.617.525-.715A10.462 10.462 0 0011.5 11.96 10.463 10.463 0 004.15 1.942a.748.748 0 01-.526-.716c0-.329.211-.617.525-.715a12.028 12.028 0 013.61-.557c1.909 0 3.825.473 5.539 1.368a11.921 11.921 0 015.896 7.042c.959 3.053.67 6.302-.815 9.146a11.918 11.918 0 01-7.037 5.898 12.014 12.014 0 01-3.596.554zm-.868-1.537a10.472 10.472 0 004.014-.449c5.523-1.735 8.606-7.64 6.871-13.164a10.435 10.435 0 00-5.159-6.162 10.52 10.52 0 00-4.846-1.197c-.294 0-.589.013-.883.038a11.985 11.985 0 016.124 10.468 11.98 11.98 0 01-6.121 10.466z"}})])
          )
        }
      }
    