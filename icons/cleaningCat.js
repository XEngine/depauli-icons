
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75h1.775a3.202 3.202 0 01-.237-2.997l1.834-4.277C7.896 8.542 7.5 7.672 7.5 6.75v-6A.755.755 0 018.25 0c.17 0 .336.058.469.165L12 2.79 15.281.165A.751.751 0 0116.5.75v6c0 .921-.396 1.79-1.12 2.475l1.832 4.28c.174.404.262.833.262 1.274 0 .619-.174 1.211-.498 1.721h1.774c2.068 0 3.75 1.682 3.75 3.75S20.818 24 18.75 24H5.25zm0-6C4.009 18 3 19.009 3 20.25s1.009 2.25 2.25 2.25h13.5c1.241 0 2.25-1.009 2.25-2.25S19.991 18 18.75 18H5.25zm2.916-3.905a1.714 1.714 0 00-.018 1.319c.17.427.497.763.92.945.216.093.445.14.68.14h4.502c.461 0 .894-.179 1.219-.504a1.71 1.71 0 00.505-1.219c0-.236-.047-.465-.14-.681l-1.727-4.033A5.186 5.186 0 0112 10.5c-.739 0-1.459-.15-2.105-.436l-1.729 4.031zM9 6.75C9 7.991 10.346 9 12 9c.727 0 1.429-.202 1.981-.568a.75.75 0 01.112-.079c.585-.431.907-.999.907-1.603V2.311l-2.531 2.025a.754.754 0 01-.938 0L9 2.311V6.75z"}}),_c('path',{attrs:{"d":"M12 22.5c-1.241 0-2.25-1.009-2.25-2.25S10.759 18 12 18s2.25 1.009 2.25 2.25S13.241 22.5 12 22.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM18.75 13.5a.75.75 0 01-.75-.75V9c0-1.654 1.346-3 3-3s3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v3.75a.75.75 0 01-.75.75zM.75 4.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM.75 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H.75zM.75 13.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    