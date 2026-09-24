(function(){
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Back to previous tab';
  button.style.cssText = 'position:fixed;top:18px;left:18px;z-index:1000;padding:10px 14px;border:1px solid #00e5ff;border-radius:6px;background:#0d0e18;color:#00e5ff;font:700 13px Arial,sans-serif;cursor:pointer;box-shadow:0 0 14px rgba(0,229,255,.2);';
  button.addEventListener('click', function(){
    if(window.opener && !window.opener.closed){
      window.close();
    }else if(history.length > 1){
      history.back();
    }else{
      window.location.href = '../index.html';
    }
  });
  document.body.appendChild(button);
})();
