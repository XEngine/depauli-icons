
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
            children.concat([_c('path',{attrs:{"d":"M4.501 6.999a.75.75 0 01-.396-.113 7.487 7.487 0 00-2.046-.881.75.75 0 01.382-1.451c.719.189 1.41.467 2.06.826a8.969 8.969 0 012.058-.826.75.75 0 01.382 1.451 7.44 7.44 0 00-2.045.882.751.751 0 01-.395.112zM8.988 2.249a.748.748 0 01-.372-.099 4.065 4.065 0 00-1.066-.421A.751.751 0 017.899.27c.375.09.74.219 1.088.384a5.623 5.623 0 011.09-.384.747.747 0 01.904.555.743.743 0 01-.09.567.743.743 0 01-.465.337 4.026 4.026 0 00-1.067.422.756.756 0 01-.371.098zM6.925 18.897a.748.748 0 01-.729-.575l-.524-2.188-.729.175a.748.748 0 01-.904-.554.751.751 0 01.554-.904l.73-.175-.175-.729a.752.752 0 011.46-.349l.174.729.729-.175a.747.747 0 01.904.555.743.743 0 01-.09.567.743.743 0 01-.464.337l-.73.175.524 2.188a.752.752 0 01-.73.923z"}}),_c('path',{attrs:{"d":"M3.332 23.485a.752.752 0 01-.651-.377 2.242 2.242 0 00-1.933-1.123.75.75 0 01.002-1.5c.486.001.96.097 1.404.281L.947 15.721a5.256 5.256 0 015.115-6.472c.962 0 1.909.269 2.737.777a5.221 5.221 0 012.36 3.252l1.656 6.812.095.045c.646-.617 1.636-1.126 2.841-1.459v-7.177h-1.75a1.255 1.255 0 01-1.25-1.235V8.243a1.258 1.258 0 011.25-1.244h1.75V5.243a1.258 1.258 0 011.25-1.244h2c.681 0 1.242.554 1.25 1.235v1.765h1.75c.681 0 1.242.554 1.25 1.235v2.021a1.258 1.258 0 01-1.25 1.244h-1.75v6.782c1.117.091 2.214.338 3.266.738a.747.747 0 01.435.968.755.755 0 01-.702.484.733.733 0 01-.266-.049 10.396 10.396 0 00-3.702-.682l-.147.001c-2.48 0-4.769.75-5.448 1.782a.752.752 0 01-1.086.182 2.196 2.196 0 00-1.355-.463 2.206 2.206 0 00-2.123 1.56.749.749 0 01-1.064.443 4.415 4.415 0 00-2.048-.504h-.039c-.793 0-1.57.219-2.249.635a.758.758 0 01-.391.109zm2.729-12.736a3.754 3.754 0 00-3.654 4.624l1.496 6.252a5.77 5.77 0 012.05-.385h.053c.69 0 1.377.122 2.019.354a3.691 3.691 0 013.162-1.849L9.701 13.63a3.73 3.73 0 00-1.686-2.326 3.74 3.74 0 00-1.954-.555zm10.44-.75a.75.75 0 01.75.75v7.62c.491-.069.993-.11 1.5-.124v-7.496a.75.75 0 01.75-.75h2.25v-1.5h-2.25a.75.75 0 01-.75-.75v-2.25h-1.5v2.25a.75.75 0 01-.75.75h-2.25v1.5h2.25z"}})])
          )
        }
      }
    