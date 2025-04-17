// 1. Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const editorBody = document.querySelector('.editor-body');
    const portfolioContent = document.getElementById('portfolio-content');
  
    // 2. Code lines with syntax highlighting
    const codeLines = [
      '<span class="keyword">import</span> { Portfolio } <span class="keyword">from</span> <span class="string">"prokrity"</span>',
      '<span class="comment">// Initializing systems...</span>',
      '<span class="keyword">function</span> <span class="function">init</span>() {',
      '  <span class="keyword">return</span> Portfolio.<span class="function">create</span>()<span class="loading-dots"></span>',
      '}'
    ];
  
    // 3. Add code lines to editor with animation
    codeLines.forEach((line, index) => {
      const lineElement = document.createElement('div');
      lineElement.className = 'code-line';
      lineElement.innerHTML = `
        <span class="line-number">${index + 1}</span>
        <span class="code-text" style="animation: typing 0.5s ${index * 0.3}s forwards">${line}</span>
      `;
      editorBody.appendChild(lineElement);
    });
  
    // 4. Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `Loading ${progress}%`;
  
      if (progress >= 100) {
        clearInterval(interval);
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          portfolioContent.style.display = 'block';
        }, 500);
      }
    }, 30); // Adjust speed here (lower = faster)
  });