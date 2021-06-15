
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
            children.concat([_c('path',{attrs:{"d":"M11.993 24a11.928 11.928 0 01-8.485-3.512A11.925 11.925 0 01-.013 12C-.017 5.379 5.367-.01 11.988-.013c6.322 0 11.583 4.933 11.986 11.233l.001.031a11.42 11.42 0 01-.096 2.449.753.753 0 01-.85.635.748.748 0 01-.635-.849c.07-.489.106-.989.106-1.485h-5.227l-.024.001-.034-.001h-.717a.75.75 0 01-.037-1.499l-.001-.025A25.853 25.853 0 0015.859 6H8.142a26.644 26.644 0 00-.602 4.5h3.71a.75.75 0 11-.001 1.5h-3.75c0 1.539.118 3.052.352 4.5h2.648a.75.75 0 010 1.5H8.141c.395 1.733.949 3.196 1.616 4.26a10.624 10.624 0 003.728.138.754.754 0 01.845.64.75.75 0 01-.64.846c-.556.077-1.123.116-1.685.116h-.012zm-8.622-6c.356.509.757.986 1.197 1.427.923.922 1.98 1.649 3.15 2.168-.461-1.044-.837-2.248-1.123-3.595H3.371zm2.954-1.5a30.39 30.39 0 01-.326-4.5H1.487A10.396 10.396 0 002.5 16.5h3.825zm16.07-6A10.48 10.48 0 0020.616 6h-3.214a28.12 28.12 0 01.557 4.4l.005.1h4.431zm-16.359 0c.074-1.588.262-3.098.559-4.5H3.372a10.486 10.486 0 00-1.778 4.5h4.442zm13.312-6a10.565 10.565 0 00-3.066-2.095c.28.636.53 1.337.748 2.095h2.318zm-3.893 0c-.342-1.089-.759-2.037-1.218-2.77a10.515 10.515 0 00-2.242-.244l-.006-.375v.375c-.742 0-1.489.082-2.224.241-.468.742-.877 1.673-1.221 2.773h6.911zm-8.487 0c.218-.758.471-1.462.754-2.102A10.551 10.551 0 004.64 4.5h2.328z"}}),_c('path',{attrs:{"d":"M20.69 23.998a1.41 1.41 0 01-1.001-.412l-2.306-2.307-.57.57a1.416 1.416 0 01-1.001.415 1.428 1.428 0 01-1.36-1.013l-2.157-7.189a1.42 1.42 0 01.689-1.661 1.417 1.417 0 011.08-.107l7.19 2.157a1.42 1.42 0 01.596 2.36l-.57.57 2.305 2.306A1.386 1.386 0 0124 20.69c0 .378-.147.735-.416 1.002l-1.891 1.891a1.407 1.407 0 01-1.003.415zm-3.307-4.53c.2 0 .389.078.53.22l2.777 2.778 1.775-1.776-2.778-2.778c-.14-.14-.22-.333-.22-.53s.08-.391.22-.53l1.003-1.003-6.917-2.075 2.076 6.917 1.003-1.003a.759.759 0 01.531-.22z"}})])
          )
        }
      }
    