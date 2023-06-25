lines.forEach(line => {
    line.addEventListener('click', function() {
      lines.forEach(line => {
        line.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

