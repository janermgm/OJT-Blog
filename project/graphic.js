(function() {
  const canvas = document.getElementById('graphics-canvas');
  if (!canvas) return;
  let ctx = canvas.getContext('2d');
  let width, height;
  let shapes = [];

  // Theme color for the background
  const BASE_BG_COLOR = '#5486b6'; 

  class GraphicShape {
    constructor(type, x, y, size, color, speedX, speedY, rotation = 0, rotSpeed = 0) {
      this.type = type;
      this.x = x; this.y = y; this.size = size; this.color = color;
      this.speedX = speedX; this.speedY = speedY;
      this.rotation = rotation; this.rotSpeed = rotSpeed;
      this.opacity = Math.random() * 0.8 + 1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotSpeed;
      if (this.x + this.size < 0) this.x = width + this.size;
      if (this.x - this.size > width) this.x = -this.size;
      if (this.y + this.size < 0) this.y = height + this.size;
      if (this.y - this.size > height) this.y = -this.size;
    }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      if (this.type === 'circle') {
        ctx.beginPath(); ctx.arc(0, 0, this.size, 0, Math.PI*2); ctx.fill();
      } else if (this.type === 'triangle') {
        ctx.beginPath();
        const side = this.size;
        const h = (Math.sqrt(3)/2)*side;
        ctx.moveTo(0, -h/2); ctx.lineTo(side/2, h/2); ctx.lineTo(-side/2, h/2); ctx.fill();
      } else if (this.type === 'rect') {
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
      } else if (this.type === 'line') {
        ctx.beginPath(); ctx.moveTo(-this.size/2,0); ctx.lineTo(this.size/2,0);
        ctx.lineWidth = 3; ctx.stroke();
      }
      ctx.restore();
    }
  }

  function initShapes() {
    shapes = [];
    const colors = ['#d45409', '#ffffffb4', '#3B9E8E', '#F4A261', '#70A9A1'];
    for (let i = 0; i < 40; i++) {
      let type = ['circle','triangle','rect','line'][Math.floor(Math.random()*4)];
      let size = type === 'line' ? Math.random()*60+20 : Math.random()*45+15;
      let x = Math.random()*width, y = Math.random()*height;
      let color = colors[Math.floor(Math.random()*colors.length)];
      let speedX = (Math.random()-0.5)*0.5;
      let speedY = (Math.random()-0.5)*0.4;
      let rotSpeed = (Math.random()-0.5)*0.01;
      shapes.push(new GraphicShape(type, x, y, size, color, speedX, speedY, Math.random()*Math.PI*2, rotSpeed));
    }
  }

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initShapes();
  }

  function drawBackground() {
    ctx.fillStyle = BASE_BG_COLOR;
    ctx.fillRect(0, 0, width, height);
    for (let shape of shapes) {
      shape.update();
      shape.draw(ctx);
    }
    requestAnimationFrame(drawBackground);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  drawBackground();
})();