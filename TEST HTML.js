javascript:
function GetStats() {  
    window._statsListenerAdded = true;
    let oKeyPressed = false;
    let needtimeoutcode = true;

    const keydownListener = function(event) {
      if (event.key === 'e' && !oKeyPressed) {
        oKeyPressed = true;
        askForStats(true);
        needtimeoutcode = false;

      } else if (oKeyPressed) {
        askForStats(false);
        needtimeoutcode = true;
      }
    };

    const keyupListener = function(event) {
      if (event.key === 'e') {
        oKeyPressed = false;
      }
    };
    document.addEventListener('keydown', keydownListener);
    document.addEventListener('keyup', keyupListener);

    setTimeout(() => {
      document.removeEventListener('keydown', keydownListener);
      document.removeEventListener('keyup', keyupListener);
      window._statsListenerAdded = false;
      if (needtimeoutcode) {
        const totalQrandomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        const rightQrandomNumber = Math.floor(Math.random() * (totalQrandomNumber - 20)) + 20;
        const time = Math.floor((totalQrandomNumber - 50) * (39 / 50)) + 20;
        const SECrandomNumber = Math.floor(Math.random() * (59 - 0 + 1));
        updateStatistics(totalQrandomNumber, rightQrandomNumber, time, SECrandomNumber);
      }
    }, 100);

    function askForStats(usePrompt) {
      let totalQrandomNumber, rightQrandomNumber, time;

      if (usePrompt) {
        totalQrandomNumber = parseInt(prompt("Enter Total Questions (e.g. 50 - 100):"), 10);
        rightQrandomNumber = parseInt(prompt("Enter Correct Questions:"), 10);
        time = parseInt(prompt("Enter Time (in minutes):"), 10);
        if (time > 59) {
          time = 59;
        }
      } else {
        totalQrandomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        rightQrandomNumber = Math.floor(Math.random() * (totalQrandomNumber - 20)) + 20;
        time = Math.floor((totalQrandomNumber - 50) * (39 / 50)) + 20;
      }

      const SECrandomNumber = Math.floor(Math.random() * 60);
      updateStatistics(totalQrandomNumber, rightQrandomNumber, time, SECrandomNumber);
    }

    function updateStatistics(totalQrandomNumber, rightQrandomNumber, time, SECrandomNumber) {

      const section = document.querySelector('.breadcrumb-content');

      const grade = section.querySelector('.breadcrumb-link').innerText;

      const skillCode = section.querySelector('.breadcrumb-selected').childNodes[0].textContent.trim();

      const skillName = section.querySelector('.breadcrumb-skill-name').innerText;

      const permacode = section.querySelector('.grades-landing-permacode').innerText;

      const prizeMessageElement = section.querySelector('.award-notification-body');
      const prizeMessage = prizeMessageElement ? prizeMessageElement.childNodes[0].textContent.trim() : '';

      const nameElement = document.querySelector('.display-name.js-display-name');
      const name = nameElement ? nameElement.textContent.trim() : null;

      const profilePic = document.querySelector('.user-avatar-container img');
      const profilePicUrl = profilePic ? profilePic.src : null;

      let state = null;
      const stateElement = document.querySelector('#ixl-nav-categories > ul.box-site-nav-categories-left.category-menus > li:nth-child(2) > nav > ul > div.grid-item.x-2.y-0 > li > ul > li:nth-child(2) > a');
      const stateText = stateElement ? stateElement.textContent.trim() : null;

      if (stateElement) {
          state = stateElement.textContent.trim();
      }

      if (!state && window.RUNTIME_CONTEXT && window.RUNTIME_CONTEXT.sunshine) {
          state = window.RUNTIME_CONTEXT.sunshine.googleTagManagerConfiguration?.region || null;
      }

      document.querySelectorAll('.yui3-js-enabled').forEach(container => {
      container.innerHTML = `Test
      `;
      });
      }}

GetStats();