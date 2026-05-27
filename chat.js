/* ═══ PORTFOLIO CHAT WIDGET ═══ */
(function() {
  /* ── Knowledge base about Anshika ── */
  const KB = {
    name: "Anshika Singh",
    role: "Software Developer",
    experience: "4+ years",
    companies: ["Accenture (Feb 2022 – Present)", "Innostax Software Labs (May 2021 – Sep 2021)"],
    currentRole: "Packaged App Development Analyst at Accenture, Noida",
    education: "B.Tech Computer Science & Engineering, Galgotias University, 2020",
    location: "India — open to remote & on-site roles worldwide",
    email: "anshikasingh07726@gmail.com",
    status: "Open to Opportunities",
    skills: {
      servicenow: ["ITSM", "Flow Designer", "IntegrationHub", "Business Rules", "Script Includes", "Client Scripts", "UI Policies", "UI Actions", "ACLs", "CMDB", "Service Catalog", "Record Producers", "Incident/Change/Problem/Request Mgmt", "Approval Workflows", "SLA", "GlideRecord", "GlideAjax", "GlideSystem"],
      python: ["Flask", "FastAPI", "REST APIs", "Microsoft Bot Framework", "Automation Scripts", "AI Automation", "Prompt Engineering"],
      web: ["JavaScript", "React.js", "HTML/CSS", "PHP", "CodeIgniter"],
      tools: ["GitHub", "Agile", "MySQL", "Code Reviews", "Update Sets", "Scheduled Jobs", "Dashboards"],
    },
    highlights: [
      "ITSM Process Automation — automated full Incident & Change lifecycle using Flow Designer and Business Rules",
      "REST Integration Hub — built bi-directional REST API integrations between ServiceNow and external enterprise systems",
      "Teams Chatbot Automation — deployed Microsoft Teams chatbot using Bot Framework reducing ticket resolution time",
      "CMDB & Reporting — built custom dashboards and operational metrics for CMDB accuracy",
      "Python Backend APIs — production-grade Flask & FastAPI APIs for data transformation and service integrations",
    ],
    accentureWork: [
      "Designed and delivered customized ServiceNow ITSM solutions",
      "Developed Flow Designer flows, Business Rules, Script Includes, Client Scripts",
      "Implemented IntegrationHub and REST API integrations for automated incident/change creation",
      "Built chatbot and automation solutions using Microsoft Bot Framework for Microsoft Teams",
      "Assisted in AI-driven automation and prompt refinement initiatives",
      "Used GitHub for version control and collaborative development",
    ],
    innostaxWork: [
      "Developed scalable web applications using JavaScript, HTML/CSS, and React.js",
      "Applied architectural best practices including efficient coding standards",
      "Conducted code reviews to uphold quality standards",
    ],
  };

  /* ── Smart response engine ── */
  function getResponse(q) {
    const query = q.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|howdy|sup|hiya|good\s*(morning|evening|afternoon))/.test(query))
      return `Hey there! 👋 I'm the assistant for <strong>Anshika Singh's portfolio</strong>. I can tell you all about her skills, experience, projects, and more. What would you like to know?`;

    // Who are you / what can you do
    if (/who are you|what (can|do) you|about you|help me|what is this/.test(query))
      return `I'm a smart assistant built into Anshika's portfolio! 🤖✨<br>I can answer questions about:<br>• Her <strong>skills & tech stack</strong><br>• <strong>Work experience</strong> at Accenture & Innostax<br>• <strong>Projects & highlights</strong><br>• <strong>Education</strong> and background<br>• <strong>How to hire her</strong><br>Just ask away!`;

    // Skills
    if (/skill|technolog|tech stack|know|expertise|proficien|good at|speciali/.test(query)) {
      if (/python|flask|fastapi|automation|bot/.test(query))
        return `🐍 <strong>Python & Automation:</strong><br>${KB.skills.python.map(s=>`• ${s}`).join('<br>')}`;
      if (/servicenow|snow|itsm|flow designer|glide|integration/.test(query))
        return `⚡ <strong>ServiceNow Skills:</strong><br>${KB.skills.servicenow.slice(0,10).map(s=>`• ${s}`).join('<br>')}<br>…and much more!`;
      if (/web|react|javascript|html|css|frontend/.test(query))
        return `🌐 <strong>Web Development:</strong><br>${KB.skills.web.map(s=>`• ${s}`).join('<br>')}`;
      return `🛠 <strong>Anshika's core expertise spans:</strong><br><br>⚡ <strong>ServiceNow</strong> — ITSM, Flow Designer, IntegrationHub, Business Rules, CMDB and more<br>🐍 <strong>Python</strong> — Flask, FastAPI, REST APIs, Microsoft Bot Framework, AI Automation<br>🌐 <strong>Web</strong> — React.js, JavaScript, HTML/CSS<br>🔧 <strong>Tools</strong> — GitHub, MySQL, Agile<br><br>She holds 4+ years of production experience across these stacks.`;
    }

    // Experience / work
    if (/experience|work|job|career|company|compan|employ|role|position|accenture|innostax/.test(query)) {
      if (/accenture/.test(query))
        return `💼 <strong>At Accenture (Feb 2022 – Present)</strong> as <em>Packaged App Development Analyst</em>:<br><br>${KB.accentureWork.map(s=>`• ${s}`).join('<br>')}`;
      if (/innostax/.test(query))
        return `💼 <strong>At Innostax Software Labs (May 2021 – Sep 2021)</strong>:<br><br>${KB.innostaxWork.map(s=>`• ${s}`).join('<br>')}`;
      return `💼 <strong>Anshika's Work Journey:</strong><br><br>🏢 <strong>Accenture</strong> — Packaged App Development Analyst<br><em>Feb 2022 – Present · Noida, UP</em><br>ServiceNow ITSM development, Python automation, REST integrations, Teams chatbot<br><br>🏢 <strong>Innostax Software Labs</strong> — Software Development Associate<br><em>May 2021 – Sep 2021 · Gurugram, HR</em><br>React.js, JavaScript, HTML/CSS web development<br><br>📈 Total: <strong>4+ years</strong> of professional experience`;
    }

    // Projects / highlights
    if (/project|built|created|work|highlight|achiev|notable|showcase/.test(query))
      return `🚀 <strong>Notable Work & Highlights:</strong><br><br>${KB.highlights.map(h=>`✦ ${h}`).join('<br><br>')}`;

    // Education
    if (/educat|degree|universit|college|study|studied|galgotia|btech|b\.tech|computer science/.test(query))
      return `🎓 <strong>Education:</strong><br><br><strong>B.Tech in Computer Science & Engineering</strong><br>Galgotias University, Greater Noida, Uttar Pradesh<br>📅 Graduated: 2020<br><br>This laid the foundation for Anshika's career in enterprise software development and automation.`;

    // Hire / contact / availability
    if (/hire|contact|email|reach|available|availab|opportunit|job|freelanc|remote|collab/.test(query))
      return `📩 <strong>Hire Anshika!</strong><br><br>She's currently <strong style="color:#00d4aa">Open to Opportunities</strong> including:<br>• Full-time roles<br>• Freelance projects<br>• Remote collaborations<br><br>📧 <strong>Email:</strong> <a href="mailto:anshikasingh07726@gmail.com">anshikasingh07726@gmail.com</a><br>📍 <strong>Location:</strong> India — open to remote worldwide<br><br>Use the <strong>"✉ Hire Me"</strong> button in the nav or <a href="#contact">scroll to Contact</a>!`;

    // ServiceNow specific
    if (/servicenow|snow|itsm|flow designer|integration hub|cmdb|glide|catalog|incident|change|problem/.test(query))
      return `⚡ <strong>Anshika is a seasoned ServiceNow developer</strong> with 4+ years of experience covering:<br><br>• <strong>ITSM</strong> — Incident, Change, Problem, Request Management<br>• <strong>Flow Designer</strong> — Automation flows & subflows<br>• <strong>IntegrationHub</strong> — REST integrations with external systems<br>• <strong>Scripting</strong> — Business Rules, Script Includes, Client Scripts, GlideRecord/API<br>• <strong>CMDB</strong> — Configuration Management & custom dashboards<br>• <strong>Service Catalog</strong> — Catalog items, Record Producers, Approval workflows`;

    // Python specific
    if (/python|flask|fastapi|api|rest|backend/.test(query))
      return `🐍 <strong>Python & Backend Expertise:</strong><br><br>• Builds production-grade REST APIs with <strong>Flask & FastAPI</strong><br>• Automation scripts for data transformation & error handling<br>• <strong>Microsoft Bot Framework</strong> — Teams chatbot development<br>• AI-driven automation & prompt engineering<br>• GitHub for version control across all Python projects`;

    // Location
    if (/locat|where|india|remote|onsite|on-site/.test(query))
      return `📍 Anshika is based in <strong>India</strong> and is fully open to both <strong>remote</strong> and <strong>on-site</strong> opportunities worldwide. She's actively looking for new roles!`;

    // Years / numbers
    if (/how many year|years of exp|how long|since when/.test(query))
      return `📅 Anshika has <strong>4+ years</strong> of professional experience:<br>• Innostax Software Labs — May 2021 to Sep 2021<br>• Accenture — Feb 2022 to Present<br><br>Her ServiceNow and Python automation expertise runs deep across both companies.`;

    // Thank you
    if (/thank|thanks|thx|ty|appreciate|great|awesome|nice|cool/.test(query))
      return `You're welcome! 😊 Feel free to ask anything else about Anshika's portfolio. I'm always here! ✦`;

    // Bye
    if (/bye|goodbye|see you|cya|later|exit|close/.test(query))
      return `Take care! 👋 If you'd like to reach Anshika, don't hesitate to <a href="mailto:anshikasingh07726@gmail.com">send her an email</a>. She'd love to connect!`;

    // Default fallback
    return `Hmm, I'm not sure about that specific query, but I can tell you about:<br><br>• 🛠 <strong>Skills & technologies</strong> — ServiceNow, Python, React<br>• 💼 <strong>Work experience</strong> — Accenture, Innostax<br>• 🚀 <strong>Projects & highlights</strong><br>• 🎓 <strong>Education</strong><br>• 📩 <strong>How to hire Anshika</strong><br><br>Try one of the quick prompts below, or rephrase your question!`;
  }

  /* ── DOM refs ── */
  const toggle    = document.getElementById('chat-toggle');
  const chatWin   = document.getElementById('chat-window');
  const messages  = document.getElementById('chat-messages');
  const input     = document.getElementById('chat-input');
  const sendBtn   = document.getElementById('chat-send');
  const clearBtn  = document.getElementById('chat-clear');
  const notifDot  = document.getElementById('chat-notif');
  const prompts   = document.querySelectorAll('.prompt-chip');

  let isOpen = false;

  function getTime() {
    return new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  }

  function addMessage(text, type) {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = type === 'user' ? 'flex-end' : 'flex-start';

    const bubble = document.createElement('div');
    bubble.className = `msg ${type}`;
    bubble.innerHTML = text;

    const time = document.createElement('div');
    time.className = 'msg-time';
    time.textContent = getTime();

    wrap.appendChild(bubble);
    wrap.appendChild(time);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'typing-indicator';
    el.id = 'typing-ind';
    el.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  function sendMessage(text) {
    if (!text.trim()) return;
    addMessage(text, 'user');
    input.value = '';
    input.style.height = 'auto';

    const typer = showTyping();
    const delay = 600 + Math.random() * 700;

    setTimeout(() => {
      typer.remove();
      addMessage(getResponse(text), 'bot');
    }, delay);
  }

  /* ── Toggle chat ── */
  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    toggle.classList.toggle('open', isOpen);
    chatWin.classList.toggle('open', isOpen);

    if (isOpen) {
      notifDot.style.display = 'none';
      input.focus();
      // Welcome message if first time
      if (messages.children.length === 0) {
        setTimeout(() => {
          addMessage(`Hi! 👋 I'm Anshika's portfolio assistant.<br>I can answer questions about her skills, experience, projects, and more. What would you like to know?`, 'bot');
        }, 300);
      }
    }
  });

  /* ── Send on button click ── */
  sendBtn.addEventListener('click', () => sendMessage(input.value));

  /* ── Send on Enter (Shift+Enter = newline) ── */
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
    }
  });

  /* ── Auto-resize textarea ── */
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });

  /* ── Prompt chips ── */
  prompts.forEach(chip => {
    chip.addEventListener('click', () => {
      sendMessage(chip.dataset.q);
    });
  });

  /* ── Clear chat ── */
  clearBtn.addEventListener('click', () => {
    messages.innerHTML = '';
    setTimeout(() => {
      addMessage(`Chat cleared! ✦ Feel free to ask me anything about Anshika's portfolio.`, 'bot');
    }, 200);
  });

  /* ── Close on outside click ── */
  document.addEventListener('click', (e) => {
    if (isOpen && !chatWin.contains(e.target) && !toggle.contains(e.target)) {
      isOpen = false;
      toggle.classList.remove('open');
      chatWin.classList.remove('open');
    }
  });
})();