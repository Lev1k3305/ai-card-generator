const neuralCanvas = document.getElementById('neuralCanvas');
    const neuralCtx = neuralCanvas.getContext('2d');
    neuralCanvas.width = window.innerWidth;
    neuralCanvas.height = window.innerHeight;

    const cardCanvas = document.getElementById('cardCanvas');
    const cardCtx = cardCanvas.getContext('2d');

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 5 + 5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.pulse = 0;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > neuralCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > neuralCanvas.height) this.vy *= -1;
        this.pulse = Math.sin(Date.now() / 500) * 5;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + this.pulse, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    const nodes = [];
    for (let i = 0; i < 30; i++) {
      nodes.push(new Node(Math.random() * neuralCanvas.width, Math.random() * neuralCanvas.height));
    }

    function connectNodes(ctx, canvas) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 150})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            if (Math.random() < 0.01) {
              ctx.beginPath();
              ctx.arc((nodes[i].x + nodes[j].x) / 2, (nodes[i].y + nodes[j].y) / 2, 10, 0, Math.PI * 2);
              ctx.fillStyle = 'white';
              ctx.fill();
            }
          }
        }
      }
    }

    function drawPixelArt(ctx, hobby, x, y, time) {
      const pixelSize = 8; // Размер пикселя для 8-битного стиля
      const offset = Math.sin(time / 1000) * 5; // Лёгкое покачивание
      ctx.save();
      ctx.translate(x, y + offset);

      if (hobby.toLowerCase() === 'программирование') {
        // Пиксель-арт: компьютер
        ctx.fillStyle = '#555'; // Корпус
        for (let i = 0; i < 8; i++) for (let j = 0; j < 6; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#00f'; // Экран
        for (let i = 1; i < 7; i++) for (let j = 1; j < 5; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#fff'; // "Курсор" на экране (мерцает)
        if (Math.sin(time / 500) > 0) ctx.fillRect(2 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
      } else if (hobby.toLowerCase() === 'игры') {
        // Пиксель-арт: геймпад
        ctx.fillStyle = '#333'; // Корпус
        for (let i = 0; i < 10; i++) for (let j = 2; j < 5; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#f00'; // Кнопки
        ctx.fillRect(7 * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(8 * pixelSize, 2 * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#0f0'; // D-pad
        for (let i = 2; i < 4; i++) for (let j = 1; j < 4; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
      } else if (hobby.toLowerCase() === 'музыка') {
        // Пиксель-арт: гитара
        ctx.fillStyle = '#8B4513'; // Корпус
        for (let i = 3; i < 7; i++) for (let j = 2; j < 6; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#000'; // Гриф
        for (let i = 0; i < 3; i++) for (let j = 3; j < 5; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#fff'; // Струны (мерцают)
        if (Math.sin(time / 300) > 0) for (let i = 0; i < 7; i++) ctx.fillRect(i * pixelSize, 4 * pixelSize, pixelSize, pixelSize / 2);
      } else if (hobby.toLowerCase() === 'спорт') {
        // Пиксель-арт: мяч
        ctx.fillStyle = '#fff';
        for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) {
          if (Math.hypot(i - 3, j - 3) < 3) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        }
        ctx.fillStyle = '#000'; // Узор
        for (let i = 2; i < 4; i++) ctx.fillRect(i * pixelSize, 3 * pixelSize, pixelSize, pixelSize);
      } else if (hobby.toLowerCase() === 'рисование') {
        // Пиксель-арт: кисть
        ctx.fillStyle = '#964B00'; // Ручка
        for (let i = 0; i < 2; i++) for (let j = 0; j < 6; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#000'; // Ворс
        for (let i = 2; i < 4; i++) for (let j = 2; j < 4; j++) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        ctx.fillStyle = '#f00'; // Краска (мерцает)
        if (Math.sin(time / 400) > 0) ctx.fillRect(3 * pixelSize, 1 * pixelSize, pixelSize, pixelSize);
      } else {
        // Пиксель-арт: звезда (по умолчанию)
        ctx.fillStyle = '#ffd700';
        for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) {
          if (Math.abs(i - 3) + Math.abs(j - 3) < 4) ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        }
      }
      ctx.restore();
    }

    function drawHobbyPixelArt(ctx, hobby, time) {
      // Рисуем 3 пиксельных арта в случайных местах
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * (600 - 80); // Учитываем размер спрайта
        const y = Math.random() * (400 - 80);
        drawPixelArt(ctx, hobby, x, y, time);
      }
    }

    function animate() {
      neuralCtx.clearRect(0, 0, neuralCanvas.width, neuralCanvas.height);
      nodes.forEach(node => {
        node.update();
        node.draw(neuralCtx);
      });
      connectNodes(neuralCtx, neuralCanvas);
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      neuralCanvas.width = window.innerWidth;
      neuralCanvas.height = window.innerHeight;
    });

    function generateCard() {
      const name = document.getElementById('recipientName').value || 'ИИ-Гений';
      const wish = document.getElementById('customWish').value || 'Пусть твой код меняет мир!';
      const hobbies = document.getElementById('hobbies').value || 'программирование';
      const theme = document.getElementById('themeSelect').value;
      const textAnim = document.getElementById('textAnimation').value;

      // Generate personalized message based on hobbies
      const hobbyMessages = {
        'программирование': `Коди как ${name}, покоряй цифровые миры!`,
        'игры': `Играй как ${name}, достигай всех ачивок!`,
        'музыка': `Создавай мелодии, как ${name}, с идеальным ритмом!`,
        'спорт': `Будь чемпионом, как ${name}, на всех аренах!`,
        'рисование': `Рисуй шедевры, как ${name}, с пиксельной точностью!`
      };
      const hobbyMessage = hobbyMessages[hobbies.toLowerCase()] || `Продолжай сиять в ${hobbies}, ${name}!`;

      // Set background based on theme
      let gradient;
      switch (theme) {
        case 'red-orange':
          gradient = cardCtx.createLinearGradient(0, 0, 600, 400);
          gradient.addColorStop(0, '#ff4d4d');
          gradient.addColorStop(1, '#ff8c00');
          break;
        case 'green-blue':
          gradient = cardCtx.createLinearGradient(0, 0, 600, 400);
          gradient.addColorStop(0, '#00cc99');
          gradient.addColorStop(1, '#3399ff');
          break;
        case 'pink-cyan':
          gradient = cardCtx.createLinearGradient(0, 0, 600, 400);
          gradient.addColorStop(0, '#ff69b4');
          gradient.addColorStop(1, '#00ffff');
          break;
        case 'purple-gold':
          gradient = cardCtx.createLinearGradient(0, 0, 600, 400);
          gradient.addColorStop(0, '#800080');
          gradient.addColorStop(1, '#ffd700');
          break;
        case 'teal-magenta':
          gradient = cardCtx.createLinearGradient(0, 0, 600, 400);
          gradient.addColorStop(0, '#00CED1');
          gradient.addColorStop(1, '#C71585');
          break;
        case 'sunset':
          gradient = cardCtx.createLinearGradient(0, 0, 600, 400);
          gradient.addColorStop(0, '#FF4500');
          gradient.addColorStop(1, '#9400D3');
          break;
        default:
          gradient = cardCtx.createLinearGradient(0, 0, 600, 400);
          gradient.addColorStop(0, '#4a90e2');
          gradient.addColorStop(1, '#9013fe');
      }

      // Draw card
      cardCtx.fillStyle = gradient;
      cardCtx.fillRect(0, 0, 600, 400);

      // Draw pixel art based on hobby
      drawHobbyPixelArt(cardCtx, hobbies, Date.now());

      // Draw text
      cardCtx.font = '24px "Press Start 2P"';
      cardCtx.fillStyle = 'white';
      cardCtx.textAlign = 'center';
      cardCtx.fillText(`С Днём Рождения, ${name}!`, 300, 80);
      cardCtx.font = '16px "Press Start 2P"';
      cardCtx.fillText(wish, 300, 180);
      cardCtx.fillText(hobbyMessage, 300, 240);
      cardCtx.font = '14px "Courier New"';
      cardCtx.fillText(`neural_net.train(on='${name}_birthday', hobbies='${hobbies}')`, 300, 320);

      // Apply text animation class to canvas
      document.getElementById('cardCanvas').className = textAnim;
      
      // Draw mini neural network on card
      nodes.forEach(node => node.draw(cardCtx));
      connectNodes(cardCtx, cardCanvas);
      
      document.getElementById('cardCanvas').style.display = 'block';
      document.getElementById('statusAnnouncer').textContent = 'Открытка создана!';
    }

    function downloadCard() {
      const link = document.createElement('a');
      link.download = 'ai-birthday-card.png';
      link.href = cardCanvas.toDataURL('image/png');
      link.click();
    }