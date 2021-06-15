
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
            children.concat([_c('path',{attrs:{"d":"M10.442 23.893a.737.737 0 01-.104-.007 11.886 11.886 0 01-6.858-3.438 12.573 12.573 0 01-.299-.311l-.04-.043C.563 17.29-.508 13.525.203 9.766L.234 9.6a.406.406 0 01.017-.058 11.95 11.95 0 014.511-7.118A11.876 11.876 0 0111.97-.002a12.013 12.013 0 0111.796 9.666.743.743 0 01-.113.563.743.743 0 01-.624.334.75.75 0 01-.734-.604 10.41 10.41 0 00-1.684-3.956h-3.696a.75.75 0 00-.728.568l-.494 1.974a.75.75 0 11-1.455-.365l.494-1.974A2.248 2.248 0 0116.915 4.5h2.424a10.495 10.495 0 00-7.367-3.002c-2.286 0-4.466.734-6.305 2.123a10.353 10.353 0 00-3.736 5.378h4.392c1.034 0 1.932.701 2.183 1.704l.75 3a2.235 2.235 0 01-.592 2.137c-.425.425-.99.659-1.591.659h-.464l-.797 3.983a10.48 10.48 0 004.732 1.918.748.748 0 01.639.847.751.751 0 01-.741.646zM1.581 10.675a9.59 9.59 0 00-.038.336l-.016.202-.003.047c-.031.441-.035.882-.012 1.311l.006.128c.01.146.023.291.039.436l.012.108a10.491 10.491 0 002.276 5.363l.043.054.077.094c.056.067.113.131.169.194l.019.021c.093.104.187.207.285.308l.071.074.75-3.751a.752.752 0 01.735-.603h1.079a.749.749 0 00.727-.933l-.75-2.999a.75.75 0 00-.728-.568H1.605l-.024.178z"}}),_c('path',{attrs:{"d":"M17.244 23.999c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M16.411 20.428a1.49 1.49 0 01-1.062-.442l-1.497-1.497a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5 2.906-3.874a.756.756 0 011.05-.151c.331.249.399.72.151 1.051l-2.905 3.874a1.491 1.491 0 01-1.203.6z"}})])
          )
        }
      }
    