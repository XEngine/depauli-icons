
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
            children.concat([_c('path',{attrs:{"d":"M20.988 24.002a3.004 3.004 0 01-2.974-3.382l-2.111-.844a3.008 3.008 0 01-2.415 1.226c-1.654 0-3-1.346-3-3s1.346-3 3-3c.794 0 1.544.311 2.104.863l2.52-1.512a3.004 3.004 0 012.877-3.852c1.654 0 3 1.346 3 3s-1.346 3-3 3a2.988 2.988 0 01-2.104-.863l-2.52 1.512a2.976 2.976 0 01.097 1.234l2.111.844a3.011 3.011 0 012.415-1.226c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-1.399-3.536a1.482 1.482 0 00-.101.536c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5a1.496 1.496 0 00-1.399.964zm-6.101-3.964c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5a1.497 1.497 0 00-.238-.808 1.489 1.489 0 00-1.262-.692zm6.238-2.193c.269.429.743.694 1.262.694.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5a1.491 1.491 0 00.238.806z"}}),_c('path',{attrs:{"d":"M8.214 17.252a.753.753 0 01-.542-.231l-5.811-6.065A6.407 6.407 0 01.669 3.553 6.396 6.396 0 016.423.003a6.428 6.428 0 014.533 1.882l1.036 1.035 1.036-1.035A6.376 6.376 0 0117.57.006a6.38 6.38 0 014.54 1.877 6.428 6.428 0 011.204 1.67 6.462 6.462 0 01.328 4.966.752.752 0 01-.953.465.746.746 0 01-.465-.953 4.92 4.92 0 00-4.654-6.524 4.886 4.886 0 00-3.481 1.44l-1.566 1.565a.748.748 0 01-1.06 0L9.895 2.946a4.911 4.911 0 00-3.473-1.443 4.901 4.901 0 00-4.411 2.72 4.918 4.918 0 00.922 5.684l5.822 6.076a.751.751 0 01-.541 1.269z"}})])
          )
        }
      }
    