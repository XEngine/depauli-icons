
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
            children.concat([_c('path',{attrs:{"d":"M3 19.295a.75.75 0 01-.311-1.433 20.974 20.974 0 015.757-1.67l3.905-7.158-5.838 1.584a1.508 1.508 0 01-1.137-.142 1.491 1.491 0 01-.735-1.567 5.526 5.526 0 014.121-4.691l-.965-1.046a1.482 1.482 0 01-.4-1.068A1.494 1.494 0 018.586.687c.878-.17 1.767-.255 2.651-.255.028 0 .055.001.082.003a5.855 5.855 0 013.731 1.831c.265-.423.599-.8.983-1.107A5.594 5.594 0 0121.919.56a1.499 1.499 0 01.408 2.421l-2.116 2.127a5.517 5.517 0 013.633 4.479 1.5 1.5 0 01-1.952 1.683l-5.477-1.793-.614 6.75c1.914.292 3.766.842 5.51 1.635a.75.75 0 01-.621 1.366 19.47 19.47 0 00-5.594-1.584.593.593 0 01-.176.008.729.729 0 01-.227-.057 19.576 19.576 0 00-2.669-.101 19.757 19.757 0 00-2.831.114.756.756 0 01-.397.05 19.448 19.448 0 00-5.487 1.569.726.726 0 01-.309.068zm9.635-3.31c.55 0 1.111.023 1.674.069l.642-7.055-.739-.242-3.96 7.259a20.284 20.284 0 011.772-.021c.187-.006.399-.01.611-.01zm9.726-6.139c0-.021-.003-.04-.005-.059a3.998 3.998 0 00-3.029-3.379 5.992 5.992 0 00-2.119-.07.754.754 0 01-.849-.635.743.743 0 01.142-.556.74.74 0 01.494-.293 7.336 7.336 0 011.415-.063l2.86-2.874a4.078 4.078 0 00-4.312.424 2.946 2.946 0 00-1.009 1.592.519.519 0 01-.013.044l-.003.009a.738.738 0 01-.221.335l-.021.017a.642.642 0 01-.085.059l-.004.002a.42.42 0 01-.056.029.579.579 0 01-.147.052.833.833 0 01-.078.016.929.929 0 01-.081.006l-.032.001-.031-.001a.572.572 0 01-.088-.011.438.438 0 01-.044-.008l-.027-.008a.752.752 0 01-.094-.034c-.016-.005-.018-.007-.033-.014a.682.682 0 01-.094-.056l-.025-.017a.523.523 0 01-.101-.088.865.865 0 01-.076-.097l-.03-.045a4.338 4.338 0 00-3.351-2.193c-.78.001-1.565.077-2.332.225l1.749 1.875a7.062 7.062 0 011.684.256.752.752 0 01-.202 1.473.737.737 0 01-.203-.028 5.608 5.608 0 00-2.744-.07 4.013 4.013 0 00-3.037 3.443l-.011.066 7.538-2.045a.48.48 0 01.064-.012.354.354 0 01.068-.011l.086-.001a.563.563 0 01.091.008l.04.008.055.012 8.301 2.716zM22.564 24.038c-1.368 0-2.7-.453-3.786-1.281a5.287 5.287 0 01-3.402 1.236 5.272 5.272 0 01-3.377-1.212 5.284 5.284 0 01-3.372 1.212 5.274 5.274 0 01-3.406-1.236 6.246 6.246 0 01-4.563 1.232.748.748 0 01-.652-.836.751.751 0 01.837-.652 4.731 4.731 0 003.887-1.296.74.74 0 01.514-.21l.04.001a.75.75 0 01.523.247 3.805 3.805 0 005.362.273c.096-.087.188-.179.273-.273a.75.75 0 011.114 0 3.806 3.806 0 005.363.273c.096-.087.188-.179.273-.274a.754.754 0 01.531-.247l.034-.001c.187 0 .374.077.512.21a4.73 4.73 0 003.887 1.296.75.75 0 01.183 1.488 6.214 6.214 0 01-.775.05c.001 0 .001 0 0 0z"}})])
          )
        }
      }
    