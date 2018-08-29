var b = baffle(".thing", {
    characters: [
      "█",
      "▓",
      "▒",
      "░",
      "█",
      "▓",
      "▒",
      "░",
      "█",
      "▓",
      "▒",
      "░",
      "<",
      ">",
      "/"
    ],
    speed: 500,
    exclude: " "
  });
  b.start();
  setTimeout(function() {
    b.set({ speed: 250 });
    setTimeout(function() {
      b.set({ speed: 150 });
      setTimeout(function() {
        b.set({ speed: 50 });
        b.reveal(5000, 1000);
      }, 2000);
    }, 2000);
  }, 2000);
  