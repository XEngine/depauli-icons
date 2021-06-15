
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
            children.concat([_c('path',{attrs:{"d":"M18.75 22.5c-2.607 0-4.824-1.95-5.192-4.5h-3.117c-.368 2.55-2.584 4.5-5.192 4.5A5.256 5.256 0 010 17.25v-12A3.754 3.754 0 013.75 1.5h.75a.75.75 0 010 1.5h-.75A2.252 2.252 0 001.5 5.25v8.333A5.21 5.21 0 015.25 12c2.607 0 4.824 1.95 5.192 4.5h3.117c.368-2.55 2.584-4.5 5.192-4.5a5.21 5.21 0 013.75 1.583V5.25A2.254 2.254 0 0020.25 3h-.75a.75.75 0 010-1.5h.75A3.754 3.754 0 0124 5.25v12a5.256 5.256 0 01-5.25 5.25zm0-9c-2.068 0-3.75 1.682-3.75 3.75S16.682 21 18.75 21s3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75zm-13.5 0c-2.068 0-3.75 1.682-3.75 3.75S3.182 21 5.25 21 9 19.318 9 17.25 7.318 13.5 5.25 13.5z"}})])
          )
        }
      }
    