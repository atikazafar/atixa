/* ═══════════════════════════════════════════════════
   ATIXA — script.js
═══════════════════════════════════════════════════ */

'use strict';

/* ══════════════════
   DATA
══════════════════ */
const CATEGORIES = [
  {
    id: 'general',
    name: 'General Knowledge',
    emoji: '🌐',
    desc: 'A broad mix of trivia spanning culture, sports, geography, and everyday facts.',
    color: '#5B8CF7',
    count: 30,
  },
  {
    id: 'science',
    name: 'Science',
    emoji: '🧬',
    desc: 'Physics, biology, chemistry, and the natural world — from atoms to galaxies.',
    color: '#2CF5C0',
    count: 30,
  },
  {
    id: 'technology',
    name: 'Technology',
    emoji: '💻',
    desc: 'Computers, the internet, programming, and the innovations shaping tomorrow.',
    color: '#A06CF8',
    count: 30,
  },
  {
    id: 'history',
    name: 'History',
    emoji: '🏛️',
    desc: 'Ancient civilizations, world wars, revolutions, and the events that shaped us.',
    color: '#FFB547',
    count: 30,
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    emoji: '📐',
    desc: 'Numbers, equations, logic, and the elegant patterns hidden in everything.',
    color: '#FF5E7D',
    count: 30,
  },
  {
    id: 'english',
    name: 'English Vocabulary',
    emoji: '📖',
    desc: 'Word definitions, synonyms, antonyms, and the richness of the English language.',
    color: '#F97316',
    count: 30,
  },
];

const QUESTIONS = {
  general: [
    { q: "What is the capital city of Australia?", opts: ["Sydney", "Melbourne", "Canberra", "Brisbane"], ans: 2 },
    { q: "How many sides does a hexagon have?", opts: ["Five", "Six", "Seven", "Eight"], ans: 1 },
    { q: "Which planet is known as the Red Planet?", opts: ["Jupiter", "Venus", "Mars", "Saturn"], ans: 2 },
    { q: "What is the largest ocean on Earth?", opts: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], ans: 3 },
    { q: "Who painted the Mona Lisa?", opts: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], ans: 1 },
    { q: "What is the chemical symbol for gold?", opts: ["Ag", "Fe", "Au", "Pb"], ans: 2 },
    { q: "In which country was the game of chess invented?", opts: ["China", "India", "Persia", "Greece"], ans: 1 },
    { q: "What is the tallest mountain in the world?", opts: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"], ans: 3 },
    { q: "How many bones are in the adult human body?", opts: ["186", "206", "226", "246"], ans: 1 },
    { q: "Which element has the atomic number 1?", opts: ["Helium", "Oxygen", "Carbon", "Hydrogen"], ans: 3 },
  ],
  science: [
    { q: "What is the speed of light in a vacuum (approx.)?", opts: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], ans: 0 },
    { q: "What gas do plants absorb during photosynthesis?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: 2 },
    { q: "What is the powerhouse of the cell?", opts: ["Nucleus", "Ribosome", "Golgi body", "Mitochondria"], ans: 3 },
    { q: "What force keeps planets in orbit around the Sun?", opts: ["Magnetism", "Gravity", "Electrostatic force", "Nuclear force"], ans: 1 },
    { q: "What is the atomic number of Carbon?", opts: ["4", "6", "8", "12"], ans: 1 },
    { q: "Which scientist proposed the theory of general relativity?", opts: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"], ans: 2 },
    { q: "What is the most abundant gas in Earth's atmosphere?", opts: ["Oxygen", "Carbon Dioxide", "Argon", "Nitrogen"], ans: 3 },
    { q: "DNA stands for which of the following?", opts: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Deoxyribose Nuclein Acid", "None of the above"], ans: 0 },
    { q: "What is the unit of electric resistance?", opts: ["Volt", "Ampere", "Watt", "Ohm"], ans: 3 },
    { q: "How many chromosomes does a normal human cell have?", opts: ["23", "44", "46", "48"], ans: 2 },
  ],
  technology: [
    { q: "What does 'CPU' stand for?", opts: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], ans: 0 },
    { q: "Which company created the Android operating system?", opts: ["Apple", "Microsoft", "Samsung", "Google"], ans: 3 },
    { q: "What does 'HTML' stand for?", opts: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], ans: 0 },
    { q: "Who is the co-founder of Apple Inc.?", opts: ["Bill Gates", "Steve Jobs", "Elon Musk", "Jeff Bezos"], ans: 1 },
    { q: "What does 'URL' stand for?", opts: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Locator", "User Routing Language"], ans: 0 },
    { q: "Which programming language is known as the 'mother of all languages'?", opts: ["Python", "Java", "C", "Fortran"], ans: 2 },
    { q: "What does 'RAM' stand for?", opts: ["Read Access Memory", "Random Access Memory", "Rapid Application Memory", "Remote Access Module"], ans: 1 },
    { q: "In what year was the World Wide Web invented?", opts: ["1983", "1989", "1994", "1999"], ans: 1 },
    { q: "Which protocol is used to send email?", opts: ["HTTP", "FTP", "SMTP", "SSH"], ans: 2 },
    { q: "What is the binary equivalent of the decimal number 10?", opts: ["1000", "1010", "1100", "0110"], ans: 1 },
  ],
  history: [
    { q: "In which year did World War II end?", opts: ["1943", "1944", "1945", "1946"], ans: 2 },
    { q: "Who was the first President of the United States?", opts: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"], ans: 3 },
    { q: "The ancient city of Rome was built on how many hills?", opts: ["Five", "Six", "Seven", "Eight"], ans: 2 },
    { q: "Which empire was the largest in history by land area?", opts: ["Roman Empire", "British Empire", "Mongol Empire", "Ottoman Empire"], ans: 2 },
    { q: "In which year did the French Revolution begin?", opts: ["1776", "1789", "1799", "1804"], ans: 1 },
    { q: "Who was the first human to travel to space?", opts: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], ans: 2 },
    { q: "The Great Wall of China was primarily built to defend against which group?", opts: ["Persians", "Mongols", "Japanese", "Romans"], ans: 1 },
    { q: "Which ancient wonder was located in Alexandria, Egypt?", opts: ["The Colossus", "The Lighthouse", "The Hanging Gardens", "The Statue of Zeus"], ans: 1 },
    { q: "In what year did the Berlin Wall fall?", opts: ["1987", "1988", "1989", "1991"], ans: 2 },
    { q: "Who wrote the Declaration of Independence?", opts: ["George Washington", "Benjamin Franklin", "John Adams", "Thomas Jefferson"], ans: 3 },
  ],
  mathematics: [
    { q: "What is the value of π (pi) to two decimal places?", opts: ["3.12", "3.14", "3.16", "3.18"], ans: 1 },
    { q: "What is the square root of 144?", opts: ["10", "11", "12", "13"], ans: 2 },
    { q: "What is 15% of 200?", opts: ["25", "30", "35", "40"], ans: 1 },
    { q: "How many degrees are in a right angle?", opts: ["45°", "60°", "90°", "180°"], ans: 2 },
    { q: "What is the next prime number after 7?", opts: ["8", "9", "10", "11"], ans: 3 },
    { q: "If a triangle has angles of 60° and 80°, what is the third angle?", opts: ["30°", "40°", "50°", "60°"], ans: 1 },
    { q: "What is 2 to the power of 10?", opts: ["512", "1024", "2048", "256"], ans: 1 },
    { q: "What is the formula for the area of a circle?", opts: ["2πr", "πr²", "πd", "2πr²"], ans: 1 },
    { q: "What is the Fibonacci sequence number after 21?", opts: ["29", "31", "34", "38"], ans: 2 },
    { q: "Solve: 3x + 9 = 24. What is x?", opts: ["3", "4", "5", "6"], ans: 2 },
  ],
  english: [
    { q: "What is a synonym for 'Ephemeral'?", opts: ["Eternal", "Transient", "Robust", "Vivid"], ans: 1 },
    { q: "What does 'Ubiquitous' mean?", opts: ["Rare and precious", "Present everywhere", "Extremely old", "Deeply mysterious"], ans: 1 },
    { q: "What is the antonym of 'Benevolent'?", opts: ["Kind", "Generous", "Malevolent", "Neutral"], ans: 2 },
    { q: "Which word means 'a word opposite in meaning to another'?", opts: ["Synonym", "Homonym", "Antonym", "Acronym"], ans: 2 },
    { q: "What does 'Loquacious' mean?", opts: ["Silent", "Intelligent", "Very talkative", "Mysterious"], ans: 2 },
    { q: "What is the plural of 'Criterion'?", opts: ["Criterions", "Criterias", "Criteria", "Criterium"], ans: 2 },
    { q: "What does 'Ameliorate' mean?", opts: ["To make worse", "To improve", "To confuse", "To destroy"], ans: 1 },
    { q: "Which word is a homophone of 'Knight'?", opts: ["Night", "Knit", "Knife", "Knew"], ans: 0 },
    { q: "What does the prefix 'Mis-' mean?", opts: ["Good", "Bad or wrong", "Around", "Before"], ans: 1 },
    { q: "What is the meaning of 'Perspicacious'?", opts: ["Stubborn", "Lazy", "Easily confused", "Having a sharp mind"], ans: 3 },
  ],
};

/* ══════════════════
   STATE
══════════════════ */
let state = {
  currentSection: 'home',
  currentCategory: null,
  questions: [],
  currentQ: 0,
  answers: [],           // {selected, correct, time}
  timer: null,
  timeLeft: 20,
  questionStartTime: null,
  totalTimeUsed: 0,
};

/* ══════════════════
   ROUTER
══════════════════ */
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('section-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  state.currentSection = id;
  if (id === 'categories') renderFullCategories();
}

/* ══════════════════
   THEME (SPA helpers — shared sharedInit handles binding)
══════════════════ */
const root = document.documentElement;
function getTheme() { return root.getAttribute('data-theme'); }
function setTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('atixa-theme', t);
  const icon = document.querySelector('.theme-toggle__icon');
  if (icon) icon.textContent = t === 'dark' ? '☀' : '☾';
}

/* ══════════════════
   NAV / HAMBURGER (SPA)
══════════════════ */
// Bindings handled by sharedInit IIFE. Helper kept for inline onclick calls.
function closeMobileMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.remove('open');
}

/* ══════════════════
   CATEGORY CARDS
══════════════════ */
function buildCatCard(cat, compact = false) {
  const card = document.createElement('div');
  card.className = 'cat-card reveal';
  card.style.setProperty('--cat-color', cat.color);
  card.innerHTML = `
    <div class="cat-card__icon">${cat.emoji}</div>
    <div class="cat-card__name">${cat.name}</div>
    ${!compact ? `<div class="cat-card__desc">${cat.desc}</div>` : ''}
    <div class="cat-card__meta">
      <span class="cat-card__count">${cat.count} questions</span>
      <span class="cat-card__arrow" style="background:linear-gradient(135deg,${cat.color},${cat.color}aa)">→</span>
    </div>
  `;
  card.addEventListener('click', () => startQuiz(cat.id));
  return card;
}

function renderHomeCats() {
  const grid = document.getElementById('homeCatGrid');
  CATEGORIES.forEach(cat => grid.appendChild(buildCatCard(cat, true)));
}

function renderFullCategories() {
  const grid = document.getElementById('fullCatGrid');
  if (grid.children.length) return; // already rendered
  CATEGORIES.forEach(cat => grid.appendChild(buildCatCard(cat, false)));
  requestAnimationFrame(observeReveal);
}

/* ══════════════════
   QUIZ LOGIC
══════════════════ */
function startQuiz(catId) {
  state.currentCategory = CATEGORIES.find(c => c.id === catId);
  const pool = [...QUESTIONS[catId]];
  // Shuffle and take 10
  state.questions = pool.sort(() => Math.random() - 0.5).slice(0, 10);
  state.currentQ = 0;
  state.answers = Array(state.questions.length).fill(null);
  state.totalTimeUsed = 0;

  showSection('quiz');
  renderQuestion();
}

function renderQuestion() {
  const { questions, currentQ, currentCategory } = state;
  const q = questions[currentQ];
  const total = questions.length;

  // Header
  document.getElementById('quizCatBadge').textContent = currentCategory.name;
  document.getElementById('questionCounter').textContent = `Question ${currentQ + 1} of ${total}`;
  document.getElementById('questionNum').textContent = String(currentQ + 1).padStart(2, '0');
  document.getElementById('questionText').textContent = q.q;

  // Progress
  const pct = (currentQ / total) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressGlow').style.width = pct + '%';

  // Options
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `
      <span class="option__letter">${letters[i]}</span>
      <span class="option__text">${opt}</span>
      <span class="option__check"></span>
    `;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);

    // Restore answer state if revisiting
    if (state.answers[currentQ] !== null) {
      restoreOptionState(btn, i, state.answers[currentQ], q.ans);
    }
  });

  // Dots
  renderDots();

  // Navigation
  document.getElementById('prevBtn').disabled = currentQ === 0;
  const nextBtn = document.getElementById('nextBtn');
  if (currentQ === total - 1) {
    nextBtn.textContent = 'Finish ✓';
    nextBtn.style.background = 'linear-gradient(135deg, #2CF5C0, #5B8CF7)';
  } else {
    nextBtn.textContent = 'Next →';
    nextBtn.style.background = '';
  }

  // Timer
  startTimer();

  // Animate card in
  const card = document.getElementById('questionCard');
  card.style.opacity = '0';
  card.style.transform = 'translateY(10px)';
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });

  state.questionStartTime = performance.now();
}

function restoreOptionState(btn, i, answered, correctAns) {
  btn.classList.add('answered');
  if (i === correctAns) {
    btn.classList.add('correct');
    btn.querySelector('.option__check').textContent = '✓';
  } else if (i === answered.selected) {
    btn.classList.add(answered.selected === correctAns ? 'correct' : 'wrong');
    btn.querySelector('.option__check').textContent = answered.selected === correctAns ? '✓' : '✗';
  }
}

function selectAnswer(optionIndex) {
  if (state.answers[state.currentQ] !== null) return; // already answered

  const q = state.questions[state.currentQ];
  const isCorrect = optionIndex === q.ans;
  const elapsed = (performance.now() - state.questionStartTime) / 1000;

  state.answers[state.currentQ] = {
    selected: optionIndex,
    correct: isCorrect,
    time: Math.round(elapsed),
  };
  state.totalTimeUsed += elapsed;

  stopTimer();

  // Visual feedback
  const options = document.querySelectorAll('.option');
  options.forEach((btn, i) => {
    btn.classList.add('answered');
    if (i === q.ans) {
      btn.classList.add('correct');
      btn.querySelector('.option__check').textContent = '✓';
    } else if (i === optionIndex && !isCorrect) {
      btn.classList.add('wrong');
      btn.querySelector('.option__check').textContent = '✗';
    }
  });

  // Feedback effects
  if (isCorrect) {
    triggerBurst(options[optionIndex]);
  } else {
    document.getElementById('questionCard').classList.add('shake');
    setTimeout(() => document.getElementById('questionCard').classList.remove('shake'), 400);
  }

  renderDots();

  // Auto-advance after delay
  setTimeout(() => {
    if (state.currentQ < state.questions.length - 1) {
      nextQuestion();
    }
  }, 1200);
}

function nextQuestion() {
  if (state.currentQ < state.questions.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (state.currentQ > 0) {
    stopTimer();
    state.currentQ--;
    renderQuestion();
  }
}

function renderDots() {
  const container = document.getElementById('quizDots');
  container.innerHTML = '';
  state.questions.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'quiz-dot';
    if (i === state.currentQ) dot.classList.add('active');
    else if (state.answers[i] !== null) {
      dot.classList.add(state.answers[i].correct ? 'correct' : 'wrong');
    }
    container.appendChild(dot);
  });
}

/* ══════════════════
   TIMER
══════════════════ */
function startTimer() {
  stopTimer();
  state.timeLeft = 20;
  updateTimerDisplay();
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      stopTimer();
      handleTimerExpiry();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timer) { clearInterval(state.timer); state.timer = null; }
}

function updateTimerDisplay() {
  const el = document.getElementById('timerDisplay');
  const wrap = document.getElementById('quizTimer');
  el.textContent = state.timeLeft;
  wrap.classList.toggle('warn', state.timeLeft <= 10 && state.timeLeft > 5);
  wrap.classList.toggle('danger', state.timeLeft <= 5);
}

function handleTimerExpiry() {
  if (state.answers[state.currentQ] !== null) return;
  // Mark as unanswered (wrong)
  state.answers[state.currentQ] = { selected: -1, correct: false, time: 20 };

  const q = state.questions[state.currentQ];
  const options = document.querySelectorAll('.option');
  options.forEach((btn, i) => {
    btn.classList.add('answered');
    if (i === q.ans) {
      btn.classList.add('correct');
      btn.querySelector('.option__check').textContent = '✓';
    }
  });

  renderDots();
  document.getElementById('questionCard').classList.add('shake');
  setTimeout(() => document.getElementById('questionCard').classList.remove('shake'), 400);

  setTimeout(() => {
    if (state.currentQ < state.questions.length - 1) nextQuestion();
    else finishQuiz();
  }, 1400);
}

/* ══════════════════
   RESULTS
══════════════════ */
function finishQuiz() {
  stopTimer();

  const correct = state.answers.filter(a => a && a.correct).length;
  const total = state.questions.length;
  const pct = Math.round((correct / total) * 100);
  const avgTime = state.answers.length
    ? Math.round(state.totalTimeUsed / state.answers.length)
    : 0;

  // Update progress bar to 100%
  document.getElementById('progressBar').style.width = '100%';
  document.getElementById('progressGlow').style.width = '100%';

  showSection('results');

  // Score ring animation
  setTimeout(() => {
    const circumference = 2 * Math.PI * 52; // ~327
    const offset = circumference - (pct / 100) * circumference;
    const fill = document.getElementById('scoreFill');

    // Inject gradient def
    const svg = fill.closest('svg');
    if (!svg.querySelector('#scoreGrad')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.innerHTML = `<linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#5B8CF7"/>
        <stop offset="100%" stop-color="#A06CF8"/>
      </linearGradient>`;
      svg.insertBefore(defs, svg.firstChild);
    }

    fill.style.stroke = 'url(#scoreGrad)';
    fill.style.strokeDashoffset = offset;
  }, 100);

  // Animate percentage
  animateNumber(document.getElementById('resultsPct'), 0, pct, '%', 1200);
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('wrongCount').textContent = total - correct;
  document.getElementById('avgTime').textContent = avgTime + 's';

  // Message
  const messages = [
    { min: 90, msg: `🏆 Outstanding! You really know your ${state.currentCategory.name}.` },
    { min: 70, msg: `🎯 Great work! Solid knowledge across the board.` },
    { min: 50, msg: `📚 Good effort. A bit more study and you'll ace it.` },
    { min: 30, msg: `💪 Not bad for a first go. Keep pushing!` },
    { min: 0,  msg: `🌱 Every expert was once a beginner. Try again!` },
  ];
  const msg = messages.find(m => pct >= m.min);
  document.getElementById('resultsMessage').textContent = msg.msg;

  // Review list
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  state.questions.forEach((q, i) => {
    const a = state.answers[i];
    const isCorrect = a && a.correct;
    const item = document.createElement('div');
    item.className = `review-item ${isCorrect ? 'correct-item' : 'wrong-item'}`;

    const yourAnswer = a && a.selected >= 0 ? q.opts[a.selected] : 'Time expired';
    const correctAnswer = q.opts[q.ans];

    item.innerHTML = `
      <div class="review-item__q">${i + 1}. ${q.q}</div>
      <div class="review-item__answers">
        <span class="review-item__yours">
          ${isCorrect ? '✓' : '✗'} Your answer: ${yourAnswer}
        </span>
        ${!isCorrect ? `<span class="review-item__correct">✓ Correct: ${correctAnswer}</span>` : ''}
      </div>
    `;
    list.appendChild(item);
  });
}

function animateNumber(el, from, to, suffix, duration) {
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(from + (to - from) * eased);
    el.textContent = val + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function restartQuiz() {
  startQuiz(state.currentCategory.id);
}

function shareResults() {
  const correct = state.answers.filter(a => a && a.correct).length;
  const total = state.questions.length;
  const pct = Math.round((correct / total) * 100);
  const text = `I scored ${pct}% on the ${state.currentCategory.name} quiz on Atixa! ${correct}/${total} correct. Can you beat me?`;
  if (navigator.share) {
    navigator.share({ title: 'Atixa Result', text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    showToast('Result copied to clipboard!');
  }
}

/* ══════════════════
   EXIT / OVERLAY
══════════════════ */
function confirmExit() {
  document.getElementById('exitOverlay').classList.add('open');
}
function closeOverlay() {
  document.getElementById('exitOverlay').classList.remove('open');
}
function exitQuiz() {
  stopTimer();
  closeOverlay();
  showSection('categories');
}

/* ══════════════════
   BURST PARTICLES
══════════════════ */
function triggerBurst(targetEl) {
  const rect = targetEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#2CF5C0', '#5B8CF7', '#A06CF8', '#FFB547'];
  const container = document.getElementById('burstContainer');

  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'burst-particle';
    const angle = (i / 18) * 360;
    const dist = 50 + Math.random() * 80;
    const tx = Math.cos((angle * Math.PI) / 180) * dist;
    const ty = Math.sin((angle * Math.PI) / 180) * dist;
    const dur = 0.5 + Math.random() * 0.4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      left:${cx}px; top:${cy}px;
      background:${color};
      --tx:${tx}px; --ty:${ty}px;
      --dur:${dur}s;
      width:${4 + Math.random() * 6}px;
      height:${4 + Math.random() * 6}px;
    `;
    container.appendChild(p);
    setTimeout(() => p.remove(), dur * 1000 + 100);
  }
}

/* ══════════════════
   TOAST
══════════════════ */
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%);
    background:var(--card); border:1px solid var(--border-hi);
    border-radius:var(--radius-md); padding:0.75rem 1.5rem;
    font-size:0.88rem; font-weight:500; color:var(--text-1);
    box-shadow:var(--shadow-md); z-index:999;
    animation:slideUp 0.25s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

/* ══════════════════
   STATS COUNTER
══════════════════ */
function animateStats() {
  document.querySelectorAll('.stats__num').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    animateNumber(el, 0, target, target > 100 ? '+' : '', 1500);
  });
}

/* ══════════════════
   SCROLL REVEAL
══════════════════ */
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, delay) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), delay * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateStats();
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

/* ══════════════════
   INIT
══════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Only run SPA init when the quiz sections exist on the page
  if (!document.getElementById('section-home')) return;

  renderHomeCats();
  observeReveal();

  const statsEl = document.querySelector('.stats');
  if (statsEl) statsObserver.observe(statsEl);

  // Close overlay on backdrop click
  const exitOverlay = document.getElementById('exitOverlay');
  if (exitOverlay) {
    exitOverlay.addEventListener('click', function(e) {
      if (e.target === this) closeOverlay();
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (state.currentSection !== 'quiz') return;
    const keys = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    if (keys[e.key] !== undefined) selectAnswer(keys[e.key]);
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (state.answers[state.currentQ] !== null) nextQuestion();
    }
    if (e.key === 'ArrowLeft') prevQuestion();
    if (e.key === 'Escape') confirmExit();
  });
});

/* ═══════════════════════════════════════════════════
   SHARED STATIC PAGE LOGIC
   Runs on every page (index.html + all static pages)
═══════════════════════════════════════════════════ */

(function sharedInit() {

  /* ── Theme (works on all pages) ── */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('atixa-theme', t);
    const icon = document.querySelector('.theme-toggle__icon');
    if (icon) icon.textContent = t === 'dark' ? '☀' : '☾';
  }

  // init theme immediately to avoid flash
  const savedTheme = localStorage.getItem('atixa-theme') || 'dark';
  applyTheme(savedTheme);

  document.addEventListener('DOMContentLoaded', () => {

    /* ── Theme toggle (all pages) ── */
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      // Sync icon after DOM ready
      toggle.querySelector('.theme-toggle__icon').textContent =
        document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    /* ── Hamburger (all pages) ── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    }

    /* ── Navbar scroll tint (all pages) ── */
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        navbar.style.background = window.scrollY > 20
          ? (isDark ? 'rgba(11,14,26,0.97)' : 'rgba(240,244,255,0.97)')
          : '';
      }, { passive: true });
    }

    /* ── Newsletter forms (all pages) ── */
    document.querySelectorAll('.newsletter__form').forEach(form => {
      const btn = form.querySelector('.newsletter__btn');
      const input = form.querySelector('.newsletter__input');
      if (!btn || !input) return;
      btn.addEventListener('click', () => {
        const email = input.value.trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          input.style.borderColor = 'var(--wrong)';
          input.focus();
          setTimeout(() => { input.style.borderColor = ''; }, 2000);
          return;
        }
        btn.textContent = '✓ Subscribed!';
        btn.style.background = 'var(--correct)';
        btn.style.color = '#0B0E1A';
        input.value = '';
        input.disabled = true;
        btn.disabled = true;
      });
    });

    /* ── Scroll-reveal (static pages) ── */
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      document.querySelectorAll('.reveal, .mission-card, .team-card, .sitemap-card, .contact-info-card').forEach(el => {
        el.classList.add('reveal');
        io.observe(el);
      });
    }

    /* ── Active nav link highlight (static pages) ── */
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentFile || (currentFile === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });

    /* ── Smooth anchor scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

  }); // end DOMContentLoaded

})();