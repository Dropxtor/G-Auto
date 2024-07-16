const elementsToClick = document.querySelectorAll('button[data-state="closed"] svg'),
  refreshButtonSvgClass = '.text-size-14.font-bold',
  successIconClass = 'svg[data-state="closed"] ml-4.flex.gap-4.items-center',
  claimButtonSelector = 'button.inline-flex.bg-primary:not([disabled]).font-bold.px-6.w-full',
  closeButtonSelector = 'div[data-state="closed"] cursor-pointer';

function clickElement(element) {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
}

function closePopup() {
  const closeButton = document.querySelector(closeButtonSelector);
  if (closeButton) {
    clickElement(closeButton);
    console.log('Popup closed.');
  }
}

function checkClaimButton() {
  const claimButton = document.querySelector(claimButtonSelector);
  if (claimButton) {
    clickElement(claimButton);
    console.log('Claim button clicked.');
    setTimeout(closePopup, 1200);
    return true;
  }
  return false;
}

function checkConditionsAndRetry() {
  const waitForClass = document.querySelectorAll('.text-size-14.font-bold'),
    successIcon = document.querySelectorAll(successIconClass);
  if (waitForClass.length > 0 || successIcon.length !== elementsToClick.length) {
    setTimeout(processElements, 6000);
  } else {
    checkClaimButton();
  }
}

function processElements() {
  alert('Galxe Auto Complete tasks – dropxtor');
  elementsToClick.forEach(clickElement);
  setTimeout(() => {
    const refreshButton = document.querySelectorAll(refreshButtonSvgClass);
    refreshButton.forEach(clickElement);
    setTimeout(checkConditionsAndRetry, 1200);
  }, 1200);
}
processElements();
