
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark-mode'); 

  if (body.classList.contains('dark-mode')) {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

sunIcon.addEventListener('click', toggleTheme);
moonIcon.addEventListener('click', toggleTheme);

/// particles js ar code // when  i use it for fontend
const duration = 60 * 60 * 1000,
	animationEnd = Date.now() + duration,
	defaults = { startVelocity: 30, spread: 360, ticks: 20, zIndex: 0 };

function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

const interval = setInterval(function () {
	const timeLeft = animationEnd - Date.now();

	if (timeLeft <= 0) {
		return clearInterval(interval);
	}

	const particleCount = 20 * (timeLeft / duration);

	// since particles fall down, start a bit higher than random
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
		})
	);
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
		})
	);
}, 250);


// particls end the code//

// typing text here code  //


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; color: #fff;}";
  document.body.appendChild(css);
};
// typing text here code  //



///Pop up window er jonno ///////

document.addEventListener("DOMContentLoaded", function() {

    const showAboutButton = document.querySelector("#show-about");
    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".popup .close-btn");
    const skillsDiv = document.querySelector("#skills");
  
    console.log(showAboutButton, popup, closeBtn, skillsDiv); // This will log the elements or 'null' if not found
    
    if (showAboutButton && popup && closeBtn && skillsDiv) { // Ensure all elements exist before adding event listeners
      showAboutButton.addEventListener("click", function() {
          popup.classList.add("active");
          skillsDiv.style.display = 'block';  
      });
  
      closeBtn.addEventListener("click", function() {
          popup.classList.remove("active");
          skillsDiv.style.display = 'none';  
      });
  };
});
  
// display blur and non clickable -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const showAbout = document.getElementById("show-about");
  const popup = document.querySelector(".popup");
  const closeBtn = document.getElementById("close-btn");

  const mainContent = document.querySelector(".flex"); // bhai flex class main con  catch
  const header = document.querySelector("header"); // Header er element catch


  showAbout.addEventListener("click", function() {
    popup.style.display = "block"; // popup show and display block
    mainContent.classList.add("blur"); // Blur and disable click on main content
    header.classList.add("blur"); // Blur and disable block header er.....
  });

  
  closeBtn.addEventListener("click", function() {
    popup.style.display = "none"; // Hide the popup
    mainContent.classList.remove("blur"); // Remove and freee bhai
    header.classList.remove("blur"); // Remove same as main con
  });
});



// Display block kora---------------------------------------------------------------------------------------------------------------------------------

function openPopup() {
  //  popup show active kina
  document.getElementById("popup").classList.add("active");

  // Disable scrolling active property diyeeee
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden'; // puro code stuck kora
}

function closePopup() {
  // Hide the popup
  document.getElementById("popup").classList.remove("active");

  // Restore scrolling by removing overflow properties
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

// scroll restore abar
document.getElementById("close-btn").addEventListener('click', closePopup);



        // Your existing JavaScript for the timeline
        function Timeline(cvs) {
          var self = this,
              paused = true,
              rafid = 0,
              mouse = { x: 0, y: 0 },
              canvas = cvs,
              ctx = null;

          self.lines = [];
          self.isOK = false;
          self.options = {
              speed: 0.1,
              density: 8,
              radius: 600,
          };
          self.targets = [
              [29, 32, 48, 68],
              [29, 33, 38]
          ];
          self.dotColors = [
              ['#13669b', 'rgba(19, 102, 155, 0.3)', 'rgba(19, 102, 155, 0.08)'],
              ['#7dd317', 'rgba(113, 222, 15, 0.3)', 'rgba(91, 164, 22, 0.12)'],
          ];

          self.isPaused = function () {
              return paused;
          };

          function InitDots() {
              var tl = $('.timeline');
              var top = tl.find('h2').outerHeight();

              self.lines[0].dots = [];
              var y = top;
              tl.find('article:first figure').each(function () {
                  self.lines[0].dots.push([$(this).outerWidth() + 20, y + 20]);
                  y += $(this).outerHeight();
              });

              self.lines[1].dots = [];
              var y = top;
              tl.find('article:last figure').each(function () {
                  self.lines[1].dots.push([canvas.width - $(this).outerWidth() - 20, y + 20]);
                  y += $(this).outerHeight();
              });
          }

          function OnResize() {
              canvas.width = canvas.offsetWidth;
              canvas.height = canvas.offsetHeight;

              var wasPaused = paused;
              self.toggle(false);
              // Init lines
              self.lines[0].reset(canvas.offsetWidth / 2 - 15);
              self.lines[1].reset(canvas.offsetWidth / 2 + 15);

              InitDots();

              self.toggle(!wasPaused);
          }

          function init() {
              var result = false;
              try {
                  result = !!(canvas.getContext && (ctx = canvas.getContext('2d')));

                  self.lines[0] = new Line(0, canvas.offsetHeight - 100, '#4789a3', self.options, mouse);
                  self.lines[1] = new Line(0, canvas.offsetHeight - 100, '#a0d59c', self.options, mouse);

              } catch (e) {
                  return false;
              }

              $(canvas).mousemove(function (e) {
                  if (e.offsetX) {
                      mouse.x = e.offsetX;
                      mouse.y = e.offsetY;
                  } else if (e.layerX) {
                      mouse.x = e.layerX;
                      mouse.y = e.layerY;
                  } else {
                      mouse.x = e.pageX - $(canvas).offset().left;
                      mouse.y = e.pageY - $(canvas).offset().top;
                  }
              });

              $(window).resize(OnResize);

              OnResize();

              return result;
          }

          function Line(y, height, color, options, mouse) {
              var self = this;

              self.color = color;
              self.options = options;
              self.mouse = mouse;
              self.height = height;
              self.dots = [];
              self.y = y;

              self.points = [];

              self.reset = function (x, f) {
          self.points = [];
          for (var y = self.y; y < self.height; y += self.options.density)
              self.points.push(new Point(x, y, self.color));
      }

      self.update = function () {
          for (var i = 0; i < self.points.length; i++)
              self.points[i].update(self.mouse, self.options);
      }

      function Point(x, y) {
          this.y = y;
          this.x = x;
          this.base = { x: x, y: y };

          this.update = function (mouse, options) {
              var dx = this.x - mouse.x,
                  dy = this.y - mouse.y,
                  alpha = Math.atan2(dx, dy),
                  alpha = (alpha > 0 ? alpha : 2 * Math.PI + alpha),
                  d = options.radius / Math.sqrt(dx * dx + dy * dy);

              this.y += Math.cos(alpha) * d + (this.base.y - this.y) * options.speed;
              this.x += Math.sin(alpha) * d + (this.base.x - this.x) * options.speed;
          }
      }
  }

  function drawCircle(p, r, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();
  }

  function drawLine(p1, p2) {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.closePath();
  }

  function redraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < 2; i++) {
          var points = self.lines[i].points;

          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = self.lines[i].color;
          ctx.moveTo(points[15].x, points[15].y);

          for (var j = 15; j < points.length - 2; j++) {
              var point = points[j];

              var xc = (points[j + 1].x + point.x) / 2;
              var yc = (points[j + 1].y + point.y) / 2;


              ctx.quadraticCurveTo(point.x, point.y, xc, yc);
          }
          ctx.stroke();
          ctx.closePath();


          // Dots
          ctx.lineWidth = 1.2;
          ctx.strokeStyle = self.dotColors[i][2];
          for (var j = 0; j < self.lines[i].dots.length; j++) {
              var dot = self.lines[i].dots[j],
                  id = self.targets[i][j];
                  dot2 = [
                      (self.lines[i].points[id].x + self.lines[i].points[id + 1].x) / 2,
                      (self.lines[i].points[id].y + self.lines[i].points[id + 1].y) / 2,
                  ];

              var p1 = { x: dot[0], y: dot[1] };
              var p2 = { x: dot2[0], y: dot2[1] };


              drawLine(p1, p2);
              drawCircle(p1, 3, self.dotColors[i][0]);

              drawCircle(p2, 11, self.dotColors[i][1]);
              drawCircle(p2, 5.5, self.dotColors[i][0]);
          }
      }
  }

  function animate() {
      rafid = requestAnimationFrame(animate);

      self.lines[0].update();
      self.lines[1].update();

      redraw();
  }

  self.toggle = function (run) {
      if (!self.isOK) return false;

      if (run === undefined)
          self.toggle(!paused);

      else if (!!run && paused) {
          paused = false;
          animate();
      }
      else if (!!!run) {
          paused = true;
          cancelAnimationFrame(rafid);
      }
      return true;
  }


  self.isOK = init();
}
new Timeline($('#cvs3').get(0)).toggle(true);

// here code is complete for timeline and work experince code 

//chatbot open function here 👇
function openWindow() {
    window.open("./pages/chatbot.html");
  }
// complete chatbot open function 👆//


// here i start my project card code
(async () => {
    try {
        const link = `https://proxy.techzbots1.workers.dev/?u=https://api.prodyun.me/user-data`;
        const response = await axios.get(link);
        

        console.log(response); // Log the response to see its structure
        const data = await response.data; // Parsing the JSON data

        const projects = Array.isArray(data) ? data : data.projects;

        if (!Array.isArray(projects)) {
            throw new Error('Expected an array but received: ' + typeof projects);
        }

        const cardsContainer = document.getElementById('cards-container');
        if (!cardsContainer) {
            throw new Error('Cards container element not found.');
        }

        projects.forEach(project => {
            const githubLinkHTML = project.github_repo 
                ? `<a href="${project.github_repo}" target="_blank" class="github-link"><i class="fab fa-github github-icon"></i></a>` 
                : '';
            const externalLinkHTML = project.external_link 
                ? `<a href="${project.external_link}" target="_blank" class="external-link"><i class="fas fa-external-link-alt"></i></a>` 
                : '';

            const techHTML = Array.isArray(project.technologies) 
                ? project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('') 
                : '';

            const cardHTML = `
                <div class="card grid-item">
                    <div class="card-header">
                        <i class="fas fa-folder folder-icon"></i>
                        <div class="icon-group">
                            ${githubLinkHTML}
                            ${externalLinkHTML}
                        </div>
                    </div>
                    <div class="card-body">
                        <h3>${project.project_name}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="card-footer">
                        ${techHTML}
                    </div>
                </div>`;

            cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
})();

// Select the button and the target content element
const latestwork = document.getElementById("like-button");
const project = document.getElementById("project-show");

// Add an event listener to the button
latestwork.addEventListener("click", () => {
    // Smoothly scroll to the target content section
    project.scrollIntoView({
        behavior: "smooth"  // Ensures a smooth scrolling animation
    });
});
