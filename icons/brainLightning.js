
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
            children.concat([_c('path',{attrs:{"d":"M16.501 23.991a3.764 3.764 0 01-2.814-1.265 2.97 2.97 0 01-1.685.519 2.999 2.999 0 01-1.693-.52 3.776 3.776 0 01-2.818 1.264 3.71 3.71 0 01-1.414-.279 3.75 3.75 0 01-2.236-4.287 3.017 3.017 0 01-1.495-.837 2.978 2.978 0 01-.847-2.133c.006-.44.108-.868.295-1.257A3.753 3.753 0 01.14 13.019a3.737 3.737 0 011.654-4.224A3.002 3.002 0 013.842 4.57c-.366-1.655.45-3.407 1.986-4.173a3.703 3.703 0 011.67-.396c.404 0 .805.066 1.193.196a3.727 3.727 0 011.62 1.07 2.975 2.975 0 011.684-.518c.609 0 1.198.182 1.693.52A3.777 3.777 0 0116.507.006c.487 0 .962.094 1.413.279a3.723 3.723 0 012.036 2.023c.3.718.369 1.511.2 2.263a3.02 3.02 0 011.497.838 3.02 3.02 0 01.549 3.389 3.772 3.772 0 011.797 3.199 3.77 3.77 0 01-1.797 3.2c.16.332.258.692.287 1.061a2.979 2.979 0 01-.705 2.183 2.99 2.99 0 01-1.63.983c.366 1.655-.45 3.407-1.986 4.173a3.69 3.69 0 01-1.667.394zm-2.69-3.161l.066.003c.256.022.489.18.605.412.268.538.73.939 1.3 1.13a2.22 2.22 0 001.718-.12 2.258 2.258 0 001.077-2.868.754.754 0 01.271-.905c.1-.068.191-.149.272-.24a.742.742 0 01.501-.25 1.492 1.492 0 001.021-.522 1.496 1.496 0 00-.099-2.047.75.75 0 01.318-1.26 2.258 2.258 0 001.637-2.165 2.258 2.258 0 00-1.637-2.165.752.752 0 01-.318-1.26 1.49 1.49 0 00.454-1.053 1.495 1.495 0 00-1.376-1.517.747.747 0 01-.499-.249 1.501 1.501 0 00-.275-.242.754.754 0 01-.27-.904 2.235 2.235 0 00-.005-1.722 2.24 2.24 0 00-2.069-1.382c-.851 0-1.645.489-2.021 1.245a.757.757 0 01-.607.413c-.023.002-.042.002-.062.002a.755.755 0 01-.607-.305 1.509 1.509 0 00-1.211-.611 1.488 1.488 0 00-1.206.611.756.756 0 01-.666.304.759.759 0 01-.608-.414 2.236 2.236 0 00-1.3-1.13 2.22 2.22 0 00-1.717.12A2.258 2.258 0 005.42 4.607a.752.752 0 01-.271.904c-.1.068-.191.149-.272.24a.749.749 0 01-.501.252 1.5 1.5 0 00-.923 2.57.75.75 0 01-.318 1.26 2.233 2.233 0 00-1.35 1.068 2.24 2.24 0 00-.202 1.71 2.264 2.264 0 001.552 1.552.752.752 0 01.318 1.26 1.49 1.49 0 00-.454 1.053c-.006.4.145.779.423 1.066.253.26.592.42.953.45.193.016.37.104.499.249.082.092.175.174.276.244a.753.753 0 01.268.903 2.24 2.24 0 00.005 1.722 2.24 2.24 0 002.067 1.381c.851 0 1.645-.488 2.022-1.244a.757.757 0 01.673-.416.75.75 0 01.603.306c.281.382.734.611 1.211.611a1.49 1.49 0 001.206-.61.755.755 0 01.606-.308z"}}),_c('path',{attrs:{"d":"M10.498 19.497a.753.753 0 01-.75-.75v-5.25H7.874a1.125 1.125 0 01-.857-1.854l5.913-6.885a.748.748 0 01.829-.214c.293.109.49.391.49.703v5.25h1.875a1.127 1.127 0 01.856 1.854l-5.912 6.885a.755.755 0 01-.57.261zm0-7.5a.75.75 0 01.75.75v3.976l4.059-4.726-1.809.001a.75.75 0 01-.75-.75V7.272l-4.059 4.726 1.809-.001z"}})])
          )
        }
      }
    