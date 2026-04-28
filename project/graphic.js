(function() {
  const canvas = document.getElementById('graphics-canvas');
  if (!canvas) return;
  let ctx = canvas.getContext('2d');
  let width, height;
  let shapes = [];

  const BASE_BG_COLOR = '#5486b6'; 

  class GraphicShape {
  constructor(type, x, y, size, color, speedX, speedY, rotation = 0, rotSpeed = 0) {
    this.type = type;
    this.x = x; this.y = y; this.size = size; this.color = color;
    this.speedX = speedX; this.speedY = speedY;
    this.rotation = rotation; this.rotSpeed = rotSpeed;
    this.opacity = Math.random() * 1 + 0.4;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotSpeed;
    if (this.x + this.size < -50) this.x = width + 50;
    if (this.x - this.size > width + 50) this.x = -50;
    if (this.y + this.size < -50) this.y = height + 50;
    if (this.y - this.size > height + 50) this.y = -50;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    const s = this.size;

    if (this.type === 'sparkle') {
      // 8-point sparkle/star doodle
      for (let i = 0; i < 8; i++) {
        ctx.rotate(Math.PI / 4);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, s / 2);
        ctx.stroke();
      }
    } 
    else if (this.type === 'spiral') {
      // Hand-drawn spiral doodle
      ctx.beginPath();
      let angle = 0;
      for (let i = 0; i < 20; i++) {
        angle += 0.4;
        let r = (s / 40) * i;
        ctx.lineTo(r * Math.cos(angle), r * Math.sin(angle));
      }
      ctx.stroke();
    }
    else if (this.type === 'squiggle') {
      // Pink/Orange wavy "noodle" line
      ctx.beginPath();
      for (let i = -s/2; i < s/2; i++) {
        ctx.lineTo(Math.sin(i * 0.2) * 10, i);
      }
      ctx.stroke();
    }
    else if (this.type === 'star-four') {
      // Diamond/Sparkle shape
      ctx.beginPath();
      ctx.moveTo(0, -s/2);
      ctx.quadraticCurveTo(0, 0, s/2, 0);
      ctx.quadraticCurveTo(0, 0, 0, s/2);
      ctx.quadraticCurveTo(0, 0, -s/2, 0);
      ctx.quadraticCurveTo(0, 0, 0, -s/2);
      ctx.fill();
    }
    else if (this.type === 'circle') {
      ctx.beginPath(); ctx.arc(0, 0, s / 3, 0, Math.PI * 2); ctx.fill();
    }
    else if (this.type === 'line') {
      ctx.beginPath(); ctx.arc(0, 0, s / 3, 0, Math.PI * 2); ctx.fill();
    }

    ctx.restore();
  }
}

function initShapes() {
  shapes = [];
  const colors = ['#dbffda', '#ffd885', '#97bbe9', '#ffd6f8', '#ffffff'];
  
  for (let i = 0; i < 45; i++) {
    let type = ['sparkle', 'spiral', 'squiggle', 'star-four', 'circle', 'line'][Math.floor(Math.random() * 6)];
    let size = Math.random() * 40 + 30;
    let x = Math.random() * width;
    let y = Math.random() * height;
    let color = colors[Math.floor(Math.random() * colors.length)];
    let speedX = (Math.random() - 0.5) * 0.4;
    let speedY = (Math.random() - 0.5) * 0.3;
    let rotSpeed = (Math.random() - 0.5) * 0.01;
    
    shapes.push(new GraphicShape(type, x, y, size, color, speedX, speedY, Math.random() * Math.PI * 2, rotSpeed));
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